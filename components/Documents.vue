<template>
  <div class="container">
    <div class="row"> 
      <!-- <div class="col-lg-6">
          <img src="~/assets/img/startup.svg" alt="">
      </div>       -->

      <div class="col">  
            <h1 style="text-align:center;">Documents Required</h1>  
            <div style="background-color:#02C6C6; width: 75px; height: 5px; border-radius:5px;" class="line mb-5 mx-auto"></div> 
            
            <div class="row"> 
              <div v-for="(item,id) in filteredLLP" :key="id" class="col-lg-4 col-md-6 col-sm-6 criteria">
                    <div class="card document-card">
                      <img src="../assets/img/iconwobg/document.svg" style="width:20%;height:auto;margin:auto;" alt="...">
                    <div class="card-body">
                        <p class="card-text" style="text-align:center;padding: 0% 10% 0% 10%">{{item.documents}}</p>
                      </div>
                    </div>
                </div>  
            </div>   

            <!-- <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 card-body" v-for="(item,id) in filteredLLP" :key="id" style="display:flex;text-align:left;">
                   
                            <img src="../assets/img/tasks.svg" style="width:15%;height:auto;" class="img-fluid pr-3">
                            <p style="margin:auto 0 auto 0;">{{item.documents}}</p>

                        <div class="col-lg-2 col-md-4 col-sm-6" style="display:flex;justify-content:center;">
                        </div>    
                        <div class="col-lg-10 col-md-8 col-sm-6" style="margin:auto;">
                        </div>

                </div>    
            </div>      -->
            
      </div>


         <!-- <div class="row" v-for="(item,id) in filteredLLP" :key="id" style="text-align:left;color:var(--font-color);"> 
     
            <div class="col-lg-2 col-md-4 col-sm-4 card-body" style="display:flex;justify-content:center;" >
                <img src="../assets/img/follow.svg" class="img-fluid" style="width:30%;height:auto;">
            </div> 
            <div class="col-lg-10 col-md-8 col-sm-6 card-body" style="margin:auto;text-align:center;">   
                <div class="card"  style="border:none;margin-bottom:1%;height:auto;">
                    {{item.documents}}
                </div> 
            </div>                
   

        </div>  -->

    </div>   
  </div>    

</template>

<script>
import json from '../assets/tk_data.json'

export default {
    name: 'Documents',
    props:['name'],
    data() {
         return{
             icon: ["fas fa-plus-circle", "fas fa-plus-circle"],
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
          return this.myJson.documents.filter(f => f.servicetype == this.name)
        }
     
}
}



</script>

<style scoped> 

.card:hover{
    border-color: var(--primary-color) !important;
    border-width: 1px !important;
}
.container{
    padding-top:5%;
    padding-bottom: 5%;
}

.container .card-header{
    background-color: white !important;
}

.container .card img{
    position: relative;
}

.document-card{
    border: none;
}

</style>