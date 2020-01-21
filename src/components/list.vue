<template>
  <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-toolbar
      color="#808080"
      dark
    >
     <v-toolbar-title>Tables</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list three-line>
      <template v-for="(item, index) in items">

        <v-divider

          :key="index"
          :inset="true"
        ></v-divider>

        <v-list-item
          :key="item.name"
            @click="onItemClick(index)"
        >
          <v-list-item-avatar>
                <v-avatar color="#808080" size="40">
                <span class="white--text headline">{{item.name.charAt(6)+item.name.charAt(7)}}</span>
              </v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.users + ' - peoples'"></v-list-item-subtitle>
            <v-list-item-subtitle v-html="item.status"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon  :disabled="item.disabled" @click="remove(item.id)">
              <v-icon >mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { StoreActions, StoreMutations } from '../store';
import store from '@/store';
@Component
export default class List extends Vue {
  items = this.$store.getters.tablelist;
  remove(val){
    var i,key;
    for(i=0;i<this.items.length;i++){
      if(this.items[i].id == val){
        key = i;
        console.log(key);break;
      }
    }
    this.items.splice(i,i+1);
  }
  onItemClick(val){
    this.$store.dispatch(StoreActions.SetCurrentTable, val);
  }
}
</script>

<style>

.tables {
  border:5px;
  color:blue;
}
.table {
  padding: 8px;
  color:blue;
}
.list{
color:blue;
  margin: 25px;
}
</style>