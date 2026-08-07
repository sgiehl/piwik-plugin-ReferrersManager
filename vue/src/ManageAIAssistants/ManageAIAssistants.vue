<!--
  Matomo - free/libre analytics platform
  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<template>
  <div v-show="!showAIAssistantForm">
    <h3>{{ translate('ReferrersManager_AIAssistantsList') }}</h3>

    <p class="notification system notification-warning" v-show="usesOwnAIAssistantDefinitions">
      <span>{{ translate('ReferrersManager_AIAssistantListDisabled') }}</span> <a
        href="javascript:;" id="enableaiassistants" @click="setDefaultAIAssistantsDisabled(false)">
        {{ translate('ReferrersManager_EnableAIAssistantList') }}
      </a>
    </p>

    <p class="notification system notification-success" v-show="!usesOwnAIAssistantDefinitions">
      <span>{{ translate('ReferrersManager_UsingDefaultAIAssistants') }}</span> <a
        href="javascript:;" id="disableaiassistants" @click="setDefaultAIAssistantsDisabled(true)">
        {{ translate('ReferrersManager_DisableAIAssistantList') }}
      </a>
    </p>

    <span class="add-element" @click="showAddAIAssistantForm(true)">
        <span class="icon-add"></span>{{ translate('ReferrersManager_AddAIAssistant') }}
    </span>
    <span class="refresh-list" @click="refreshList()">
        <span class="icon-reload"></span>{{ translate('General_Refresh') }}
    </span>
    <div class="search-detections">
      <input type="text" v-model="searchText"
             :placeholder="translate('General_Search')"/>
    </div>

    <table v-content-table>

      <thead>
      <tr>
        <th>{{ translate('General_Name') }}</th>
        <th>{{ translate('ReferrersManager_Hostname') }}</th>
        <th v-if="userDefinedAIAssistants"></th>
      </tr>
      </thead>

      <tbody>
      <tr v-if="busy">
        <th rowspan="6">
          <div class="loadingPiwik">
            <img src="plugins/Morpheus/images/loading-blue.gif"
                 :alt="translate('General_LoadingData')"/>
            {{ translate('General_LoadingData') }}
          </div>
        </th>
      </tr>

      <template v-if="!busy">
        <template v-for="name in assistantNames.filter(name =>
          name.toLowerCase().includes(searchText.toLowerCase()))" :key="name">
          <tr v-for="(host, index) in assistants[name]" :key="index">
          <td :rowspan="assistants[name].length" v-if="index===0">
            <img v-if="assistantLogos[name]" :src="assistantLogos[name]" width="16" height="16">
            {{ name }}
          </td>
          <td>{{ host }}</td>
          <td v-if="userDefinedAIAssistants">
              <span class="delete-element" v-if="userDefinedAIAssistants[host]"
                    @click="removeAIAssistant(host)">
                  <span class="icon-delete"></span>{{ translate('General_Delete') }}
              </span>
          </td>
        </tr>
        </template>
      </template>
      </tbody>
    </table>
  </div>

  <div v-if="showAIAssistantForm">

    <h2>{{ translate('ReferrersManager_AddAIAssistant') }}</h2>
    {{ translate('ReferrersManager_ProvideAIAssistantData') }}

    <p>{{ translate('ReferrersManager_DuplicateHostnameInfo') }}</p>

    <table>
      <tr>
        <td><label for="assistantName">{{ translate('General_Name') }}*:</label></td>
        <td><input type="text" v-model="newAIAssistantData['name']" id="assistantName"/></td>
      </tr>
      <tr>
        <td><label for="assistantHost">{{ translate('ReferrersManager_Hostname') }}*:</label></td>
        <td><input type="text" v-model="newAIAssistantData['host']" id="assistantHost"/></td>
      </tr>
    </table>

    <SaveButton @confirm="addAIAssistant()" />

    <SaveButton @confirm="showAddAIAssistantForm(false)" :value="translate('General_Cancel')" />
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

export interface ManageAIAssistantsDataState {
  assistants: Record<string, string[]>,
  assistantNames: string[],
  userDefinedAIAssistants: Record<string, unknown>,
  assistantLogos: Record<string, string>,
  newAIAssistantData: Record<string, string>,
  busy: boolean,
  showAIAssistantForm: boolean,
  searchText: string,
  usesOwnAIAssistantDefinitions: boolean,
}

export default defineComponent({
  props: {
    ownAiAssistantDefinitions: Boolean,
  },
  data(): ManageAIAssistantsDataState {
    return {
      assistants: {},
      assistantNames: [],
      userDefinedAIAssistants: {},
      assistantLogos: {},
      newAIAssistantData: {},
      busy: false,
      showAIAssistantForm: false,
      searchText: '',
      usesOwnAIAssistantDefinitions: this.ownAiAssistantDefinitions,
    };
  },
  created() {
    this.fetchAIAssistants();
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
          type: 'aiassistants',
        },
        {},
        { withTokenInUrl: true },
      ).then(() => {
        this.fetchAIAssistants();
      });
    },

    fetchAIAssistants() {
      if (this.busy) {
        return;
      }

      this.busy = true;

      const promises = [
        AjaxHelper.fetch<Record<string, string[]>>(
          {
            module: 'API',
            method: 'ReferrersManager.getAIAssistantDefinitions',
          },
        ),
        AjaxHelper.fetch<Record<string, string>>(
          {
            module: 'API',
            method: 'ReferrersManager.getAIAssistantLogos',
          },
        ),
        AjaxHelper.fetch<Record<string, unknown>>(
          {
            module: 'API',
            method: 'ReferrersManager.getUserDefinedAIAssistants',
          },
        ),
      ] as const;

      Promise.all(promises).then(([assistants, logos, userDefinedData]) => {
        this.assistants = assistants;
        this.assistantNames = Object.keys(assistants);
        this.assistantLogos = logos;
        this.userDefinedAIAssistants = userDefinedData;
        this.busy = false;
      });
    },

    showAddAIAssistantForm(show: boolean) {
      this.showAIAssistantForm = show;
    },

    removeAIAssistant(host: string) {
      $('#removeDataConfirm').find('h2 .name').text(host);
      Matomo.helper.modalConfirm('#removeDataConfirm', {
        yes: () => {
          AjaxHelper.fetch(
            {
              module: 'API',
              method: 'ReferrersManager.removeAIAssistant',
              host,
            },
          ).then(() => {
            this.refreshList();
          });
        },
      });
    },

    addAIAssistant() {
      AjaxHelper.post(
        {
          module: 'API',
          method: 'ReferrersManager.addAIAssistant',
        },
        this.newAIAssistantData,
      ).then((response) => {
        if (!response) {
          this.showAddAIAssistantError();
          return;
        }

        // hide/reset form and refresh list
        this.showAddAIAssistantForm(false);
        this.newAIAssistantData = {
          name: '',
          host: '',
        };
        this.refreshList();
      });
    },

    setDefaultAIAssistantsDisabled(state: boolean) {
      AjaxHelper.fetch(
        {
          module: 'API',
          method: 'ReferrersManager.setDefaultAIAssistantsDisabled',
          state,
        },
        this.newAIAssistantData,
      ).then(() => {
        this.fetchAIAssistants();
        this.usesOwnAIAssistantDefinitions = state;
      });
    },

    showAddAIAssistantError() {
      NotificationsStore.show({
        message: translate('ReferrersManager_AddAIAssistantError'),
        context: 'error',
        noclear: true,
        type: 'toast',
        style: {
          display: 'inline-block',
        },
        id: 'addAIAssistantError',
      });
    },
  },
});
</script>
