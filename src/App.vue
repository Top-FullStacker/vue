<template>
  <v-app>
    <router-view></router-view>
    <v-snackbar app
      v-model="messageText.visible"
      :multi-line="true"
      :timeout="6000"
      :top="true"
      :color="messageText.color"
    >
      {{ messageText.text}}
      <v-tooltip app bottom>
        <template v-slot:activator="{ on }">
          <v-icon small v-on="on" @click="messageText.visible = false">mdi-close</v-icon>
        </template>
        <span>{{$t("lang.common.close")}}</span>
      </v-tooltip>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { StoreActions } from "@/store/store-actions";
import store from "@/store";
@Component
export default class App extends Vue {
  snackbar = true;
  interval: number | null = null;

  get messageText() {
    return this.$store.state.topMessage;
  }
}
</script>
