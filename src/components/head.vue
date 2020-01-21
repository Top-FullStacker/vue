<template>
  <v-toolbar fixed app clipped-right color="white">
      <v-img
        src="../assets/logo.png"
        aspect-ratio="1"
        max-width="50"
        max-height="50"
      ></v-img>
    <v-toolbar-title >  Addubby   </v-toolbar-title>
    <!-- <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon> -->
    <v-spacer></v-spacer>
    <!-- <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>-->
    <LanguageProvider></LanguageProvider>
    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" @click="click(item)">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
    
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { logout } from '@/apis/login';
import LanguageProvider from '@/components/language-provider.vue';
import { StoreMutations } from '../store';
@Component({
  components: {
    LanguageProvider,
  },
})
export default class Head extends Vue {
  public drawer = null;

  public toggleMenu() {
    this.$store.commit(StoreMutations.SetMenu);
  }

  get items() {
    return [
      {
        action: 0,
        title: this.$root.$i18n.t('lang.head.logout'),
      },
      {
        action: 1,
        title: this.$root.$i18n.t('lang.head.changePassword'),
      },
    ];
  }

  public click(item: any) {
    if (item.action === 0) {
      logout();
      this.$store.commit(StoreMutations.SetLogin, false);
      this.$router.push('/login');
    }
    if (item.action === 1) {
      this.$router.push('/admin');
    }
  }
}
</script>
<style scoped>
.v-toolbar__title {
  color:rgb(2, 2, 2);
  text-align: center;
  margin-left: 30px;
  font-weight: bolder;
  font-size: 30px;
}
</style>