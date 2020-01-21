<template>
  <v-container fill-height style="height: calc(100vh - 58px);">
    <v-layout align-center>
      <v-flex text-xs-center>
        <h1 class="display-2 text">{{ $t("lang.notFound.title")}}</h1>
        <p>{{ $t("lang.notFound.title")}}</p>
        <v-btn :to="`/`" outline color="#d01b20">{{ $t("lang.notFound.home")}}</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.text {
  color: #d01b20;
}
</style>
