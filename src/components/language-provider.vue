<template>
  <v-menu
    offset-y
    origin="right top"
    left
    content-class="language-dropdown"
    transition="slide-y-transition"
    nudge-top="-10"
    class="v-step-3"
  >
    <v-btn icon large slot="activator">
      <img class="img-responsive" :src="`/flag-icons/${selectedLocale.icon}.png`">
    </v-btn>
    <div class="dropdown-content">
      <div class="dropdown-top d-custom-flex justify-space-between primary">
        <span class="white--text fw-bold">{{$t("lang.head.languages")}}</span>
      </div>
      <v-list class="dropdown-list">
        <v-list-tile
          v-for="language in languages"
          :key="language.name"
          @click="changeLanguage(language)"
        >
          <img class="img-responsive mr-3" :src="`/flag-icons/${language.icon}.png`">
          <span>{{ language.name }}</span>
        </v-list-tile>
      </v-list>
    </div>
  </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RouteConfig, RouteRecord } from 'vue-router';
import { StoreActions } from '../store';

@Component
export default class LanguageProvider extends Vue {
  get selectedLocale() {
    return this.$store.state.lang;
  }

  get languages() {
    return [
      {
        name: 'English',
        icon: 'en',
        locale: 'en',
      },
      {
        name: 'French',
        icon: 'fr',
        locale: 'fr',
      },
      {
        name: 'Hebrew',
        icon: 'he',
        locale: 'he',
      },
      {
        name: 'Russian',
        icon: 'ru',
        locale: 'ru',
      },
      {
        name: 'Arabic',
        icon: 'ar',
        locale: 'ar',
      },
      {
        name: 'Chinese',
        icon: 'cn',
        locale: 'zh',
      },
      {
        name: 'German',
        icon: 'ge',
        locale: 'de',
      },
      {
        name: 'Spanish',
        icon: 'es',
        locale: 'es',
      },
      {
        name: 'Japanese',
        icon: 'ja',
        locale: 'ja',
      },
      {
        name: 'Korean',
        icon: 'ko',
        locale: 'ko',
      },
      {
        name: 'Italian',
        icon: 'it',
        locale: 'it',
      },
      {
        name: 'Hungarian',
        icon: 'hu',
        locale: 'hu',
      },
    ];
  }

  public changeLanguage(language) {
    this.$i18n.locale = language.locale;
    this.$store.dispatch(StoreActions.StoreLanguage, language);
  }
}
</script>

<style lang="scss">
.quciklink-dropdown,
.notification-dropdown,
.language-dropdown {
  background-color: #fafafa;
  .dropdown-content {
    width: 321px;
    .dropdown-top {
      padding: 1rem 1.25rem;
    }
    .dropdown-list {
      background: transparent !important;
      > div {
        display: inline-block;
        width: 46.5%;
        box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.02);
        margin: 0.3125rem;
        .v-list__tile {
          background-color: #ffffff;
          span {
            font-size: 0.875rem;
            transition: color 0.3s ease;
          }
          &:hover {
            span {
              color: #5d92f4 !important;
            }
            background-color: #ffffff !important;
          }
        }
      }
    }
  }
}
</style>