<!--
  Matomo - free/libre analytics platform
  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<template>
  <div v-show="!showEngineForm">

    <h3>{{ translate('ReferrersManager_SearchEnginesList') }}</h3>

    <p>
      {{ translate('ReferrersManager_HostnameWildcardDesc') }}
    </p>

    <span class="add-element" @click="showAddSearchEngineForm(true)">
        <span class="icon-add"></span>{{ translate('ReferrersManager_AddSearchEngine') }}
    </span>
    <span class="refresh-list" @click="refreshList()">
        <span class="icon-reload"></span>{{ translate('General_Refresh') }}
    </span>
    <div class="search-detections">
      <input type="text" v-model="searchText" value=""
             :placeholder="translate('General_Search')"/>
    </div>

    <table v-content-table>
      <thead>
      <tr>
        <th>{{ translate('General_Name') }}</th>
        <th>{{ translate('ReferrersManager_Hostname') }}</th>
        <th>{{ translate('ReferrersManager_Parameters') }}</th>
        <th>{{ translate('ReferrersManager_BacklinkPattern') }}</th>
        <th>{{ translate('ReferrersManager_Charset') }}</th>
        <th v-if="userDefinedSearchEngines"></th>
      </tr>
      </thead>
      <tbody>

      <tr v-if="busy">
        <th rowspan="6">
          <div class="loadingPiwik">
            <img src="plugins/Morpheus/images/loading-blue.gif"
                 alt="{{ translate('General_LoadingData') }}"/>
            {{ translate('General_LoadingData') }}
          </div>
        </th>
      </tr>

      <template v-if="!busy">
        <template v-for="name in searchEngineNames.filter(name =>
          name.toLowerCase().includes(searchText.toLowerCase()))" :key="name">
          <tr v-for="(url, index) in searchEngines[name]" :key="index">
            <td :rowspan="searchEngines[name].length" v-if="index===0">
              <img v-show="searchEngineLogos[name]"
                   :src="searchEngineLogos[name]"
                   width="16" height="16" />
              {{ name }}
            </td>
            <td :title="url.url">{{ truncateText(url.url, 40) }}</td>
            <td :title="url.parameters">{{ truncateText(url.parameters, 30) }}</td>
            <td :title="url.backlink">{{ truncateText(url.backlink, 30) }}</td>
            <td>{{ url.charset }}</td>
            <td v-if="userDefinedSearchEngines">
                  <span class="delete-element"
                        v-if="userDefinedSearchEngines[url.url]"
                        @click="removeEngine(url.url)">
                      <span class="icon-delete"></span>{{ translate('General_Delete') }}
                  </span>
            </td>
          </tr>
        </template>
      </template>
      </tbody>
    </table>
  </div>

  <div v-show="showEngineForm">

    <h3>{{ translate('ReferrersManager_AddSearchEngine') }}</h3>
    {{ translate('ReferrersManager_ProvideEngineData') }}

    <p>{{ translate('ReferrersManager_DuplicateHostnameInfo') }}</p>

    <table>
      <tr>
        <td><label for="engineName">{{ translate('General_Name') }}*:</label></td>
        <td><input type="text" v-model="newEngineData['name']" id="engineName"/></td>
      </tr>
      <tr>
        <td><label for="engineHost">{{ translate('ReferrersManager_Hostname') }}*:</label></td>
        <td><input type="text" v-model="newEngineData['host']" id="engineHost"/></td>
      </tr>
      <tr>
        <td><label for="engineParameter">{{ translate('ReferrersManager_Parameters') }} {{
            translate('ReferrersManager_CommaSeparated')
          }}:</label></td>
        <td><input type="text" v-model="newEngineData['parameters']" id="engineParameter"/></td>
      </tr>
      <tr>
        <td>
          <label for="engineBacklink">{{ translate('ReferrersManager_BacklinkPattern') }}:</label>
        </td>
        <td><input type="text" v-model="newEngineData['backlink']" id="engineBacklink"/></td>
      </tr>
      <tr>
        <td><label for="engineCharset">{{ translate('ReferrersManager_Charset') }}:</label></td>
        <td><input type="text" v-model="newEngineData['charset']" id="engineCharset"/></td>
      </tr>
    </table>

    <SaveButton @confirm="addSearchEngine()"/>

    <SaveButton @confirm="showAddSearchEngineForm(false)" :value="translate('General_Cancel')"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  AjaxHelper,
  Matomo,
  ContentTable,
  NotificationsStore,
  translate,
} from 'CoreHome';
import { SaveButton } from 'CorePluginsAdmin';

const { $ } = window;

interface ManageSearchEnginesDataState {

  searchEngines: Record<string, unknown>,
  searchEngineNames: string[],
  userDefinedSearchEngines: Record<string, unknown>,
  searchEngineLogos: Record<string, unknown>,
  newEngineData: Record<string, string>,
  busy: boolean,
  showEngineForm: boolean,
  searchText: string,
}

export default defineComponent({
  data(): ManageSearchEnginesDataState {
    return {
      searchEngines: {},
      searchEngineNames: [],
      userDefinedSearchEngines: {},
      searchEngineLogos: {},
      newEngineData: {},
      busy: false,
      showEngineForm: false,
      searchText: '',
    };
  },
  created() {
    this.fetchSearchEngines();
  },
  directives: {
    ContentTable,
  },
  components: {
    SaveButton,
  },
  methods: {
    refreshList() {
      AjaxHelper.post(
        {
          module: 'ReferrersManager',
          action: 'refresh',
          type: 'searchengines',
        },
        {},
        { withTokenInUrl: true },
      ).then(() => {
        this.fetchSearchEngines();
      });
    },

    fetchSearchEngines() {
      if (this.busy) {
        return;
      }

      this.busy = true;

      const promises = [];

      promises.push(AjaxHelper.fetch<Record<string, unknown>>(
        {
          module: 'API',
          method: 'ReferrersManager.getSearchEngineDefinitions',
        },
      ));

      promises.push(AjaxHelper.fetch<Record<string, unknown>>(
        {
          module: 'API',
          method: 'ReferrersManager.getSearchEngineLogos',
        },
      ));

      promises.push(AjaxHelper.fetch<Record<string, unknown>>(
        {
          module: 'API',
          method: 'ReferrersManager.getUserDefinedSearchEngines',
        },
      ));

      Promise.all(promises).then(([searchEngines, logos, userDefinedData]) => {
        this.searchEngines = searchEngines;
        this.searchEngineNames = Object.keys(searchEngines);
        this.searchEngineLogos = logos;
        this.userDefinedSearchEngines = userDefinedData;
        this.busy = false;
      });
    },

    showAddSearchEngineForm(show: boolean) {
      this.showEngineForm = show;
    },

    removeEngine(host: string) {
      $('#removeDataConfirm').find('h2 .name').text(host);
      Matomo.helper.modalConfirm('#removeDataConfirm', {
        yes: () => {
          AjaxHelper.fetch(
            {
              module: 'API',
              method: 'ReferrersManager.removeSearchEngine',
              host,
            },
          ).then(() => {
            this.refreshList();
          });
        },
      });
    },

    addSearchEngine() {
      AjaxHelper.post(
        {
          module: 'API',
          method: 'ReferrersManager.addSearchEngine',
        },
        this.newEngineData,
      ).then((response) => {
        if (!response) {
          this.showAddEngineError();
          return;
        }

        // hide/reset form and refresh list
        this.showAddSearchEngineForm(false);
        this.newEngineData = {
          name: '',
          host: '',
          parameters: '',
          backlink: '',
          charset: '',
        };
        this.refreshList();
      });
    },

    truncateText(text: string, length: number) {
      if (text && text.length > length) {
        return `${text.substr(0, length - 3)}...`;
      }

      return text;
    },

    showAddEngineError() {
      NotificationsStore.show({
        message: translate('ReferrersManager_AddEngineError'),
        context: 'error',
        noclear: true,
        type: 'toast',
        style: {
          display: 'inline-block',
        },
        id: 'addEngineError',
      });
    },
  },
});
</script>
