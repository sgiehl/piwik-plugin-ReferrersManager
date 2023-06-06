<!--
  Matomo - free/libre analytics platform
  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<template>
  <ContentBlock :content-title="title">
    <URLChecker />
  </ContentBlock>
  <ContentBlock id="referrersmanage">
    <div class="row" ref="tabs">
      <ul class="tabs">
        <li class="tab col s6">
          <a href="#searchengineTab"
             class="active">{{ translate('ReferrersManager_ManageSearchEngines') }}</a>
        </li>
        <li class="tab col s6">
          <a href="#socialTab">{{ translate('ReferrersManager_ManageSocials') }}</a>
        </li>
      </ul>
      <div id="searchengineTab" class="col s12">
        <ManageSearchEngines />
      </div>
      <div id="socialTab" class="col s12">
        <ManageSocials :own-social-definitions="ownSocialDefinitions"></ManageSocials>
      </div>
    </div>

    <div class="ui-confirm" id="removeDataConfirm">
      <h2 v-html="translate('ReferrersManager_ConfirmRemove', `<span class='name'></span>`)"></h2>

      <input role="yes" type="button" :value="translate('General_Yes')"/>
      <input role="no" type="button" :value="translate('General_Cancel')"/>
    </div>

  </ContentBlock>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  ContentBlock,
} from 'CoreHome';
import URLChecker from '../URLChecker/URLChecker';
import ManageSearchEngines from '../ManageSearchEngines/ManageSearchEngines';
import ManageSocials from '../ManageSocials/ManageSocials';

const { $ } = window;

export default defineComponent({
  props: {
    title: String,
    ownSocialDefinitions: Boolean,
  },
  mounted() {
    const tabs = this.$refs.tabs as HTMLElement;
    $('.tabs', tabs).tabs();
  },
  components: {
    ContentBlock,
    URLChecker,
    ManageSearchEngines,
    ManageSocials,
  },
});
</script>
