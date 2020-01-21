<template>
  <v-container fluid>
    <v-data-iterator
      :items="dishes"
      hide-default-footer
    >
      <!-- <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="GhostWhite "
          dark
          flat
        >
          <v-toolbar-title>Table A</v-toolbar-title>
        </v-toolbar>
      </template> -->
      <template >
        <v-row>
          <v-col
            v-for="item in this.$store.getters.userlist[this.$store.getters.table].data"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
			      class="card"
          >
            <v-card>
              	<v-card-title class="subheading font-weight-bold" >
                  <v-list-item-avatar  size="40">
                    <v-img :src="item.image"></v-img>
                  </v-list-item-avatar>
                  {{ item.name }}
                </v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                                <v-container
                                  id="scroll-target"
                                  style="max-height: 200px"
                                  class="overflow-y-auto"
                                >
                                    <template v-for="(dish, index) in item.dish">
                                      <v-list-item :key="index">
                                        <v-list-item-avatar tile>
                                          <v-img :src="require('../assets/' + dish.image)"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                          <v-list-item-title class="dish1" v-text="dish.name + ' * ' + dish.quantity"></v-list-item-title>
                                          <v-list-item-subtitle>special food</v-list-item-subtitle>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </template>
                                  <v-row
                                    align="center"
                                    justify="center"
                                    style="height: 1000px"
                                  >
                                  </v-row>
                                </v-container>
                <v-divider></v-divider> 
                <v-row class="footer">
                  <v-col>
                    <v-checkbox v-if="!item.pay"
                      @change="check(item.id)"
                      label="red"
                      color="red"
                      value=""
                      hide-details
                      class="check"
                      :disabled="item.disabled"
                    ></v-checkbox>
                    <v-card-text v-else class="total">                  
                      Payed
                    </v-card-text>
                  </v-col>
                  <v-col>
                      <v-card-text class="total">                  
                      TOTAL PRICE:{{item.total}} &euro;
                      </v-card-text>
                  </v-col>	
                </v-row>	
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
	  <v-divider></v-divider>
            <v-subheader  class="pay1" color = "#ce1f28"><v-spacer></v-spacer><h4>TOTAL TO PAY : {{getTotalWeight()}} &euro;</h4>
             	<div class="my-2">
              		<v-btn  to="/checkout" color="#ce1f28" dark> PAY</v-btn>
            	</div>			
            </v-subheader>
    </v-data-iterator>



  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import store from '@/store';
import { mapState, mapGetters } from 'vuex'
import { StoreActions, StoreMutations } from '../store';
@Component
export default class User extends Vue {
  constructor(props){
    super(props);
    
  }
  val = this.$store.getters.table ;
  role = this.$store.state.role;
	dishes = this.$store.getters.userlist[this.$store.getters.table].data;
  //total price
  check(val){
    console.log(val);
    this.$store.dispatch(StoreActions.SetCheck,val);

  }
	public getTotalWeight(): number {
    console.log("dfdf");
    var total = 0,i;
    for(i = 0;i<this.dishes.length;i++){
      if(!(this.dishes[i].pay) && (this.dishes[i].check)){
            console.log("dfdf");
        total = total +  this.dishes[i].total;
      }
    }
    // if (this.dishes != null && this.dishes.length > 0) { 
    //   if(this.dishes)     
	  // this.dishes.forEach(x => total += x.total);
	  
    // }
    console.log(total);
    return total;
  }  
}
</script>

<style>
.footer{
  height: 60px;
  padding-top: 0px;
}
.pay1{
	color: blue;
}
.subheading {
	background-color:#808080;
}
.dish {
	
	padding-left: 25px;
	padding-bottom: 5px;
}
.dish1{
	font-size: 20px;
}
.total {
	color:crimson;
  margin-top: 0px;
	/* text-align: right; */
}
.my-2 {
	margin:20px;
}
.card {
	margin: 0px;
}
.v-application .font-weight-bold{
	height: 70px;
	color :white;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-top: 0px;
}
.check{
  margin-top: 6px;
  margin-left: 15px;
}
</style>