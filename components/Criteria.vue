<template>
  <div class="container">
    <h1 style="text-align:center;">Minimum Criteria to be met</h1>   
     <div style="background-color:#02C6C6; width: 75px; height: 5px; border-radius:5px;" class="line mb-1 mx-auto"></div>
     <p class="mb-5" style="text-align:center">Criteria that should be satisfied in order to use this particular service has been mentioned</p>
      <div  class="row"> 
        <div v-for="(item,id) in filteredLLP" :key="id" class="col-lg-3 col-md-6 col-sm-6 criteria">
              <div class="card criteria-card">
                <img src="../assets/img/iconwobg/criteria.svg" class="card-img-top mx-auto" alt="...">
                <div class="card-body">
                  <p class="card-text" style="text-align:center;padding: 0% 10% 0% 10%">{{item.requirements}}</p>
                </div>
              </div>
          </div>  
      </div>  
       
  </div>    
</template>

<script>
import json from '../assets/tk_data.json'

export default {
    name: 'Criteria',
    props:['name'],
    data() {
         return{

             myJson: json,                

         }

    },   
    methods:{

        collapse(){
            

        }
    
    },
    computed:{
        filteredLLP(){
          let self = this;              
          return this.myJson.criteria.filter(f => f.servicetype == this.name)
        }
     
}
}



</script>

<style scoped> 

.container{
    padding-top:5%;
    padding-bottom: 5%;
}

.criteria-card{
    min-height: 220px;
    transition: all 1s;
    background-color: transparent;
    border: none;
}


.criteria img{
    width:30%;
    margin: auto;
    height: auto;
}

</style>