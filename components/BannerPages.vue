<template>
  <div>
     <!--=============================== Secondary Header ================================-->

    <section class="secondary-header">
      <div class="container">
        <div class="row">
        <div class="col-lg-6 col-md-4 col-sm-4">
          <h1 class="mb-3" v-for="(item,index) in filteredLLP" :key='index' style="text-align: center;">{{item.tag}} starting from <span style="color:white;"> ₹ {{item.fees}}</span>*</h1>
          <p v-for="(item,index) in filteredLLP" :key='index' style="text-align:justify;">{{item.servicesummary}}</p>
          <div class="row mb-2" style="padding: 0% 5% 0% 5%;">

            <div class="col-lg-4" style="align-items: center; display: flex; flex-direction: column;text-align: center;">
              <img src="../assets/img/1x/calculator.svg" class="img-fluid" style="width:60%;height:auto;" alt="">
              <h2 style="text-align:center">  </h2>
              <p>Assured Quality</p>
            
            </div>  
           
            <div class="col-lg-4" style="align-items: center;display: flex;flex-direction: column;text-align: center;">
              <img src="../assets/img/1x/calculator.svg" class="img-fluid" style="width:60%;height:auto;" alt="">
              <h2 style="text-align:center">  </h2>
              <p>Result Driven</p>
            
            </div>  
           
            <div class="col-lg-4" style="align-items: center;display: flex;flex-direction: column;text-align: center;">
              <img src="../assets/img/1x/calculator.svg" class="img-fluid" style="width:60%;height:auto;" alt="">
              <h2 style="text-align:center">  </h2>
              <p>Dedicated Support</p>
            
            </div>  
            
                       
          </div>
        <div class="row">
          <p style="font-size:17px;text-align:center;">Register with us for a free video consultation session.</p>
        </div>
          
        </div>


        <div class="col-lg-2 col-md-4 col-sm-4 centerspace">
          <img src="../assets/img/rocket.svg" style="margin:50% auto 50% auto; width:80%; height:auto;" alt="">
        </div>  

        <div class="col-lg-4 col-md-4 col-sm-4 form-lead">



     <!--=============================== Registration Card ================================-->
          <Registrationcard></Registrationcard>
     <!--=============================== End Registration Card ================================-->


        </div>

      </div>
      
    </div>

    </section>


   <!--=============================== End Secondary Header ================================-->
  
  </div>
</template>
<script>
// import json from '../assets/services.json'
import json from '../assets/tk_data.json'
  export default {
    name: 'BannerPages',
    props:['name'],
    data(){
      return{
        myJson: json,
      }
    },
     computed:{
        filteredLLP(){
          let self = this;            
          return this.myJson.services.filter(f => f.servicetype == this.name)
        }
     
}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.centerspace {
    justify-content: center;
    display: flex;
}
</style>
