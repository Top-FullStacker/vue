<template>
  <v-container fluid>
    <v-data-iterator
      :items="dishes"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="#808080"
          dark
          flat
        >
          <v-toolbar-title>Table {{currentTable + 1}} - CheckOut</v-toolbar-title>
        </v-toolbar>
      </template>
        <template>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">Dish Name</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Total Price</th>
                </tr>
            </thead>
            <tbody v-for="dish in dishes" :key="dish.id">
              <template v-if="dish.check">
                <tr v-for="item in dish.dish" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.price * item.quantity}} &euro;</td>
                </tr>
                <tr>
                  <td style="color:red">{{'Customer Name : ' + dish.name}}</td>
                  <td></td>
                  <td style="color:red">{{'Total Price : ' + dish.total}} &euro;</td>
                 
                </tr>
              </template>
            </tbody>
            </template>
        </v-simple-table>
        </template>

	  <v-divider></v-divider>
            <v-subheader  class="pay1" color = "#ce1f28"><v-spacer></v-spacer>

                <span v-if="role == 'PAY_ALL'" style="color:red">TOTAL TO PAY : {{getTotalWeight()}}  &euro;</span>

                <span v-else id = 'price' :style="price">Price Per Customer : {{(getTotalWeight())/dishes.length}}  &euro;</span>

                                          
                                          
             	<div class="my-2">
              		<v-btn  @click.stop="dialog = true" color="success" dark> PAY</v-btn>
                   <v-dialog
                      v-model="dialog"
                      max-width="290"
                    >
                      <v-card>
                        <v-card-title class="headline">Payment Confirm </v-card-title>

                        <v-card-text>
                          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            Disagree
                          </v-btn>

                          <v-btn
                            color="green darken-1"
                            text
                            @click="onClick()"
                          >
                            Agree
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
            	</div>			
            </v-subheader>
    </v-data-iterator>



  </v-container>
</template>


<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { StoreActions, StoreMutations } from '../store';
import store from '@/store';
import router from '@/router';
@Component
export default class checkout extends Vue {
    role = this.$store.state.role;
    price = '';
    dialog = false;
    currentTable = this.$store.state.currentTable;
    dishes = this.$store.state.current[this.currentTable].data; 
    onClick(){
      this.dialog = false;
      this.$store.dispatch(StoreActions.SetComplete,this.currentTable);
      this.$router.push({path:'/'});
    }

	//total price
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
.pay1{
	color: blue;
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
	text-align: right;
}
.my-2 {
	margin:20px;
}
.price{
  display: none;

}
</style>