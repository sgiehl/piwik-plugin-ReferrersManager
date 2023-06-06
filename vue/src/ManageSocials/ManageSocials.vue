<!--
  Matomo - free/libre analytics platform
  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<template>
  <div v-show="!showSocialForm">
    <h3>{{ translate('ReferrersManager_SocialsList') }}</h3>

    <p class="notification system notification-warning" v-show="usesOwnSocialDefinitions">
      <span>{{ translate('ReferrersManager_SocialListDisabled') }}</span> <a
        href="javascript:;" id="enablesocials" @click="setDefaultSocialsDisabled(false)">
        {{ translate('ReferrersManager_EnableSocialList') }}
      </a>
    </p>

    <p class="notification system notification-success" v-show="!usesOwnSocialDefinitions">
      <span>{{ translate('ReferrersManager_UsingDefaultSocials') }}</span> <a
        href="javascript:;" id="disablesocials" @click="setDefaultSocialsDisabled(true)">
        {{ translate('ReferrersManager_DisableSocialList') }}
      </a>
    </p>

    <span class="add-element" @click="showAddSocialForm(true)">
        <span class="icon-add"></span>{{ translate('ReferrersManager_AddSocial') }}
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
        <th v-if="userDefinedSocials"></th>
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
        <template v-for="name in socialNames.filter(name =>
          name.toLowerCase().includes(searchText.toLowerCase()))" :key="name">
          <tr v-for="(host, index) in socials[name]" :key="index">
          <td :rowspan="socials[name].length" v-if="index===0">
            <img v-if="socialLogos[name]" :src="socialLogos[name]" width="16" height="16">
            {{ name }}
          </td>
          <td>{{ host }}</td>
          <td v-if="userDefinedSocials">
              <span class="delete-element" v-if="userDefinedSocials[host]"
                    @click="removeSocial(host)">
                  <span class="icon-delete"></span>{{ translate('General_Delete') }}
              </span>
          </td>
        </tr>
        </template>
      </template>
      </tbody>
    </table>
  </div>

  <div v-if="showSocialForm">

    <h2>{{ translate('ReferrersManager_AddSocial') }}</h2>
    {{ translate('ReferrersManager_ProvideSocialData') }}

    <p>{{ translate('ReferrersManager_DuplicateHostnameInfo') }}</p>

    <table>
      <tr>
        <td><label for="socialName">{{ translate('General_Name') }}*:</label></td>
        <td><input type="text" v-model="newSocialData['name']" id="socialName"/></td>
      </tr>
      <tr>
        <td><label for="socialHost">{{ translate('ReferrersManager_Hostname') }}*:</label></td>
        <td><input type="text" v-model="newSocialData['host']" id="socialHost"/></td>
      </tr>
    </table>

    <SaveButton @confirm="addSocial()" />

    <SaveButton @confirm="showAddSocialForm(false)" :value="translate('General_Cancel')" />
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

  socials: Record<string, unknown>,
  socialNames: string[],
  userDefinedSocials: Record<string, unknown>,
  socialLogos: Record<string, unknown>,
  newSocialData: Record<string, string>,
  busy: boolean,
  showSocialForm: boolean,
  searchText: string,
  usesOwnSocialDefinitions: boolean,
}

export default defineComponent({
  props: {
    ownSocialDefinitions: Boolean,
  },
  data(): ManageSearchEnginesDataState {
    return {
      socials: {},
      socialNames: [],
      userDefinedSocials: {},
      socialLogos: {},
      newSocialData: {},
      busy: false,
      showSocialForm: false,
      searchText: '',
      usesOwnSocialDefinitions: this.ownSocialDefinitions,
    };
  },
  created() {
    this.fetchSocials();
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
          type: 'socials',
        },
        {},
        { withTokenInUrl: true },
      ).then(() => {
        this.fetchSocials();
      });
    },

    fetchSocials() {
      if (this.busy) {
        return;
      }

      this.busy = true;

      const promises = [];

      promises.push(AjaxHelper.fetch<Record<string, unknown>>(
        {
          module: 'API',
          method: 'ReferrersManager.getSocialDefinitions',
        },
      ));

      promises.push(AjaxHelper.fetch<Record<string, unknown>>(
        {
          module: 'API',
          method: 'ReferrersManager.getSocialLogos',
        },
      ));

      promises.push(AjaxHelper.fetch<Record<string, unknown>>(
        {
          module: 'API',
          method: 'ReferrersManager.getUserDefinedSocials',
        },
      ));

      Promise.all(promises).then(([searchEngines, logos, userDefinedData]) => {
        this.socials = searchEngines;
        this.socialNames = Object.keys(searchEngines);
        this.socialLogos = logos;
        this.userDefinedSocials = userDefinedData;
        this.busy = false;
      });
    },

    showAddSocialForm(show: boolean) {
      this.showSocialForm = show;
    },

    removeSocial(host: string) {
      $('#removeDataConfirm').find('h2 .name').text(host);
      Matomo.helper.modalConfirm('#removeDataConfirm', {
        yes: () => {
          AjaxHelper.fetch(
            {
              module: 'API',
              method: 'ReferrersManager.removeSocial',
              host,
            },
          ).then(() => {
            this.refreshList();
          });
        },
      });
    },

    addSocial() {
      AjaxHelper.post(
        {
          module: 'API',
          method: 'ReferrersManager.addSocial',
        },
        this.newSocialData,
      ).then((response) => {
        if (!response) {
          this.showAddEngineError();
          return;
        }

        // hide/reset form and refresh list
        this.showAddSocialForm(false);
        this.newSocialData = {
          name: '',
          host: '',
        };
        this.refreshList();
      });
    },

    setDefaultSocialsDisabled(state: boolean) {
      AjaxHelper.fetch(
        {
          module: 'API',
          method: 'ReferrersManager.setDefaultSocialsDisabled',
          state,
        },
        this.newSocialData,
      ).then(() => {
        this.fetchSocials();
        this.usesOwnSocialDefinitions = state;
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
        message: translate('ReferrersManager_AddSocialError'),
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
