<template>
  <div class="container">
    <div class="row">
       
         <h1 style="text-align:center;">What you will get</h1> 
            <div style="background-color:#02C6C6; width: 75px; height: 5px; border-radius:5px;" class="line mb-2 mx-auto"></div> 
          <p style="text-align:center;margin-bottom:5%;">	Deliverables that you will receive by choosing this service are</p> 
        

            <div class="row deliverables"> 
              <div v-for="(item,id) in filteredLLP" :key="id" class="col-lg-2 col-md-2 col-sm-4 criteria">
                    <div class="card criteria-card">
                      <img src="../assets/img/iconwobg/deliverables.svg" alt="...">
                    <div class="card-body">
                        <p class="card-text" style="text-align:center;padding: 0% 10% 0% 10%">{{item.deliverables}}</p>
                      </div>
                    </div>
                </div>  
            </div>   

    </div>   
  </div>    
</template>

<script>
import json from '../assets/tk_data.json'

export default {
    name: 'Deliverables',
    props:['name'],
    data() {
         return{

             myJson: json
         }

    },   
    methods:{

    
    },
    computed:{
        filteredLLP(){
          let self = this;              
          return this.myJson.deliverables.filter(f => f.servicetype == this.name)
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
    margin: auto;
    min-height: 180px;
    border: none;
    
}
  

.criteria img{
    padding: 2% !important;
    margin: auto;
    height: auto;
    width: 50%;
}

.deliverables{
    margin:auto;
}

</style>