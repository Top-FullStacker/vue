<template>  
  <div class="list">
    <v-container fluid class="list">
      <v-layout>
        <v-flex xs2>
          <v-container
            id="scroll-target"
            style="max-height: 850px"
            class="overflow-y-auto"
          >
            <List class="list"></List>
            <v-row
              align="center"
              justify="center"
              style="height: 1000px"
            >
            </v-row>
          </v-container>
         
        </v-flex>
        <v-flex xs10 class="list">
          <v-container fluid grid-list-xl >
            <v-layout row wrap>
              <v-flex class="list">
                  <v-toolbar
                    class="mb-2"
                    color="success"
                    dark
                    flat
                  >
                    <v-radio-group  row v-model="options" v-on:change="foo(options)">
                        <v-radio  col-md-6 label="PAY USER" value="PAY_USER"></v-radio>
                        <v-radio  col-md-6 label="PAY SPLIT" value="PAY_SPLIT"></v-radio>
                        <v-radio  label="PAY ALL" value="PAY_ALL" checked></v-radio>
                    </v-radio-group> 
                  </v-toolbar>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
                        <v-container
            id="scroll-target"
            style="max-height: 850px"
            class="overflow-y-auto"
          >
              <User class="user"></User>
            <v-row
              align="center"
              justify="center"
              style="height: 1000px"
            >
            </v-row>
          </v-container>
            </v-layout>     
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import User from '@/components/user.vue';
import List from '@/components/list.vue';
import store from '@/store';
import { StoreActions, StoreMutations } from '../store';

@Component({
  components: {
    User,
    List,
  },
})

export default class Dashboard extends Vue {
  options = '';
  foo(val){
    this.$store.dispatch(StoreActions.SetRole, val);
    if(val == 'PAY_USER'){
      console.log(val);
      this.$store.dispatch(StoreActions.SetSelect,false);
    }else{
      this.$store.dispatch(StoreActions.SetDisable);
    }

  }
  
}
</script>
<style>
.user {
  margin: 0px;
}
.payment {
 margin-left: 5px;
 color:brown;
  
}
.paymentcard {
  margin: 0px;
  padding:0px;
  padding-top:5px;
  background-color: rgb(145, 148, 150);
  color: brown;
}

.pay {
  text-align: left;
}
.list{
  margin: 0px;
  padding:0px;

}
#scroll-target{
    margin: 0px;
  padding:0px;
}
.container{
  margin: 2px;
  padding: 0px;
}
.row {
  margin: 0px;
}
.v-input--selection-controls.v-input .v-label {
  color:rgb(255, 255, 255);
  margin: 0px;
  padding:0px;
}
.container.grid-list-xl .layout .flex {
  padding-left: 2px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
}

.v-input--radio-group--row .v-input--radio-group__input {
  margin-top: 20px;
}
.container.grid-list-xl .layout:not(:only-child){
  margin:0px;
}
*{
  font-family: PT sans-self;
}

</style>