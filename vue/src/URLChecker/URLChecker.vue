<!--
  Matomo - free/libre analytics platform
  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<template>
  <h3>{{ translate('ReferrersManager_CheckUrl') }}</h3>

  <p>{{ translate('ReferrersManager_CheckUrlDesc') }}</p>

  <div class="url-checker">
    <input type="text" size="50" v-model="urlToCheck"
           @change="clearResult()"/>

    <SaveButton @confirm="checkResult()" class="checkurlbutton"
         :value="translate('ReferrersManager_CheckUrlSend')"></SaveButton>

    <p class="detectionresult">{{ translate('ReferrersManager_DetectedEngine') }}: <img
        :src="detectedEngineImg" height="16"/><span
        class="engine" v-text="detectedEngine"></span>
      {{ translate('ReferrersManager_DetectedKeywords') }}: <span
        class="keywords" v-html="$sanitize(detectedKeyword)"></span></p>
    <p class="socialresult">{{ translate('ReferrersManager_DetectedSocial') }}: <img
        :src="detectedSocialImg" height="16"/><span class="social"
                                                    v-text="detectedSocial"></span></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  AjaxHelper,
} from 'CoreHome';
import {
  SaveButton,
} from 'CorePluginsAdmin';

interface URLCheckerDataState {
  urlToCheck: string,
  detectedEngineImg: string,
  detectedEngine: string,
  detectedKeyword: string,
  detectedSocialImg: string,
  detectedSocial: string,
}

export default defineComponent({
  data(): URLCheckerDataState {
    return {
      urlToCheck: '',
      detectedEngineImg: '',
      detectedEngine: '',
      detectedKeyword: '',
      detectedSocialImg: '',
      detectedSocial: '',
    };
  },
  components: {
    SaveButton,
  },
  created() {
    this.clearResult();
  },
  methods: {
    clearResult() {
      this.detectedEngine = '';
      this.detectedKeyword = '';
      this.detectedEngineImg = 'plugins/Morpheus/icons/dist/searchEngines/xx.png';
      this.detectedSocial = '';
      this.detectedSocialImg = 'plugins/Morpheus/icons/dist/socials/xx.png';
    },
    checkResult() {
      if (!/^https?:\/\//.test(this.urlToCheck)) {
        this.urlToCheck = `https://${this.urlToCheck}`;
      }

      AjaxHelper.fetch(
        {
          module: 'ReferrersManager',
          action: 'checkUrl',
          url: this.urlToCheck,
        },
        { withTokenInUrl: true },
      ).then((response) => {
        if (response.searchengine && response.searchengine.name) {
          this.detectedEngine = response.searchengine.name;
          this.detectedKeyword = response.searchengine.keywords;
          this.detectedEngineImg = response.searchengine.image;
        } else {
          this.detectedEngine = '';
          this.detectedKeyword = '';
          this.detectedEngineImg = 'plugins/Morpheus/icons/dist/searchEngines/xx.png';
        }

        if (response.social && response.social.name) {
          this.detectedSocial = response.social.name;
          this.detectedSocialImg = response.social.image;
        } else {
          this.detectedSocial = '';
          this.detectedSocialImg = 'plugins/Morpheus/icons/dist/socials/xx.png';
        }
      });
    },
  },
});
</script>
