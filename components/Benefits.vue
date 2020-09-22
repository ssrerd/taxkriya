<template>
  <div class="container">

            <div class="row headrow"> 
                <h1>Benefits</h1>
                <div class="mb-3 horiline" style="background-color:var(--contrast-color); margin:auto;width: 75px; height: 5px; border-radius:5px;"></div>
            </div>
  
            <!-- <h1 style="text-align:center;">Benefits</h1>
            <div style="background-color:#02C6C6; width: 75px; height: 5px; border-radius:5px;" class="line mb-1 mx-auto"></div> -->
            <p style="margin-bottom:5%;text-align:center;">Benefits that are yielded by choosing this service are numerous as mentioned below</p>   
                <div  class="row"> 
                    <div v-for="(item,id) in filteredLLP" :key="id"  class="col-lg-4">       
                        <div class="card example">
                            <img :src="require('../assets/img/1x/'+item.img)" class="img-fluid" alt="">
                            <h5>{{item.header}}</h5>
                            <p>{{item.body}}</p>
                        </div>  
                    </div>
                </div>
       </div>           
</template>

<script>
import json from '../assets/tk_data.json'

export default {
    name: 'Benefits',
    props:['name'],
    data() {
         return{
             icon: ["fas fa-plus-circle", "fas fa-plus-circle"],
             myJson: json,                

         }

    },   
    computed:{
        filteredLLP(){
          let self = this;              
          return this.myJson.benefits.filter(f => f.servicetype == this.name)
        }
     
}
}



</script>

<style scoped> 

.container{
    padding-top:5%;
    padding-bottom: 5%;
   
}

.headrow{
    padding:3% 2% 3% 2%;
    color: var(--primary-color);
    text-align: center;

} 
.example{
    height: 200px;
    margin: auto;
    transition: all 0.5s;
    border-bottom: 5px solid var(--contrast-color);
    overflow: hidden; 
    z-index: 0;  
}

.row .col-lg-4{
    margin-bottom: 10px !important;
}

.example:hover{
    background-color:white !important;
    cursor: pointer;
    height: auto;
    color: var(--primary-color);
    box-shadow: 5px 5px 8px rgba(0,0,0,0.2);
    overflow: visible;
    z-index: 100;

}
.example img{
    width: 25%;
    height: auto;
    margin: 7% auto 7% auto;
    position: relative;
    transition: all 0.5s;

}

.example:hover img{
    margin-top: 10px;
    position: relative;
    width: 17%;
    
    
}


.example h5{
    position: relative;
    text-align: center;
    transition: all 0.5s;
    padding: 0% 5% 0% 5%;
    font-weight: 400;
}

.example:hover h5{
    font-size:20px;
    position: relative;
    display: block;
    margin-top: 0.4em;
   
}
.example p{
    text-align: center;
    display:none;
    transition: all 0.5s;
    padding: 0% 5% 0% 5%;


}

.example:hover p{
    font-size:17px !important;
    position: relative;
    display: block;
    margin-top: 0.2em;
    line-height: 1.5;
   
}

</style>