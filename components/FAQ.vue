<template>
  <div class="faq">
      
    <div class="accordion" id="accordionExample">
     <h1 style="text-align:center;">Frequently Asked Questions</h1>   
     <div class="mb-3 horiline" style="background-color:var(--contrast-color); margin:auto;width: 75px; height: 5px; border-radius:5px;"></div>    
     <p style="text-align:center;">List of typical questions that you might ask regarding this particular service are</p>   
        <div v-for="(item,id) in filteredLLP" :key="id" class="card">
            <div class="card-header"  id="headingTwo">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left collapsed" @click="changeIcon" type="button" data-toggle="collapse" :data-target="'#section'+item.id" aria-expanded="false" aria-controls="collapseTwo">
                    {{item.question}}<i class="fas fa-chevron-down " :class="{'fa-flip-both': isActive}" style="float:right;"></i>
                    </button>   
                </h2>
            </div>
            <div :id="'section'+item.id" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                    {{item.answer}}
                </div>
            </div>
        </div>
    


       
    </div>
<!-- 
    <h1 style="text-align:center;">Frequently Asked Questions</h1>
      <div style="background-color:#02C6C6; width: 75px; height: 5px; border-radius:5px;" class="line mb-5 mx-auto"></div>
        <v-row justify="center">
            <v-expansion-panels accordion>
            <v-expansion-panel
                v-for="(item,id) in filteredLLP"
                :key="id"
            >
                <v-expansion-panel-header>{{item.question}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    {{item.answer}}
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
        </v-row> -->

  </div>    
</template>

<script>
import json from '../assets/tk_data.json'

export default {
    name: 'FAQ',
    props:['name'],
    data() {
         return{
             isActive: false,
             myJson: json,

         }

    },   
    methods:{
        changeIcon(){
            const btncls = Array.from(this.$el.querySelectorAll('button'));
            const icncls = Array.from(this.$el.querySelectorAll('i'));
            btncls.forEach((btn) => {
                if(btn.ariaExpanded == 'false'){
                    "this is false"

                }

            })

        }
    
    },
    computed:{
        filteredLLP(){
          let self = this;              
          return this.myJson.faqQA.filter((f) => {
             return f.servicetype == this.name
          }
              ) 
              
        }
}
}



</script>

<style>

.faq{
    padding:5%;
}

.v-expansion-panel{
    padding:10px;
  
}

.v-expansion-panel-header{
    font-size: 17px;
}

.v-expansion-panel-header__icon{
    margin-left: auto;
}

.accordion{
    padding: 5% 3% 5% 3%;
}

.accordion .text-left{
    color: var(--primary-color);
    text-decoration: none;
}

.accordion .btn{
   box-shadow: none !important;
   font-size: 18px;
}

.accordion .card .card-header{
    border-color: var(--primary-color);
    background-color: white ;

}

.accordion .card .card-body{
    margin-left: 0.9em;
    font-family: 'Nunito', sans-serif;
}


</style>