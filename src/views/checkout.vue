<template>  
  <div>
    <v-container fluid>
      <v-layout>
        <v-flex xs2>
          <v-container
            id="scroll-target"
            style="max-height: 850px"
            class="overflow-y-auto"
          >
            <CheckoutList class="list"></CheckoutList>
            <v-row
              align="center"
              justify="center"
              style="height: 1000px"
            >
            </v-row>
          </v-container>
        </v-flex>
        <v-flex xs10>


            <v-layout row wrap>
              <Checkout></Checkout>

            </v-layout>            

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import Checkout from '@/components/checkout.vue';
import CheckoutList from '@/components/checklist.vue';
import store from '@/store';

@Component({
  components: {
    Checkout,
    CheckoutList,
  },
})

export default class Dashboard extends Vue {}
</script>
  dishes = this.$store.state.current;
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