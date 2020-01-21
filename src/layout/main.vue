<template>
  <div>
    <Head></Head>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Head from '@/components/head.vue';

@Component({
  components: {
    Head,
  },
})
export default class MainLayout extends Vue {}
</script>
