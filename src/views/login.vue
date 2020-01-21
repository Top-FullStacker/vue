<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>{{ $t('lang.login.loginform') }}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field
                prepend-icon="mdi-account"
                name="login"
                :label="$t('lang.login.username')"
                type="text"
                v-model="loginForm.username"
                :rules="loginRules.username"
                required
                v-on:keyup.enter="submit"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="mdi-lock-question"
                name="password"
                :label="$t('lang.login.password')"
                :append-icon="e1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                v-model="loginForm.password"
                :rules="loginRules.password"
                v-on:keyup.enter="submit"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="submit" color="primary">{{ $t('lang.login.login') }}</v-btn>
            <v-btn @click="clear">{{ $t('lang.login.clear') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-snackbar v-model="snackbar" :multi-line="true" :timeout="5" :top="true">
        {{ message }}
        <v-btn color="pink" flat @click="snackbar = false">{{ $t('lang.common.close') }}</v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import { isValidUsername } from '@/plugins/validate';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import { login } from '@/apis/login';
import { setToken } from '@/plugins/local-storage';
import { StoreActions, StoreMutations } from '../store';

@Component
export default class Login extends Vue {
  public valid = false;
  public message = '';
  public snackbar = false;
  public e1 = true;
  public loading = false;
  public pwdType = 'password';
  public redirect: string | undefined = undefined;

  public loginForm = {
    username: 'admin',
    password: '',
  };

  get loginRules() {
    return {
      username: [(v: any) => !!v || this.$root.$i18n.t('lang.login.nameReq')],
      password: [(v: any) => !!v || this.$root.$i18n.t('lang.login.passReq')],
    };
  }

  public clear() {
    this.loginForm.username = '';
    this.loginForm.password = '';
    console.log(this);
  }

  public submit() {
    if ((<any>this.$refs.form).validate()) {
      login(this.loginForm.username, this.loginForm.password)
        .then((o: any) => {
          setToken(o.data);
          this.loading = false;
          this.$store.dispatch(StoreActions.LoadSettings);
          this.$store.commit(StoreMutations.SetLogin, true);
          this.$router.push({ path: this.redirect || '/' });
        })
        .catch((e: any) => {
          console.log("dfdf");
          this.$store.dispatch(StoreActions.StoreTopMessage, {
            visible: true,
            text: e.message,
            color: 'error',
          });
        });
    }
  }
}
</script>