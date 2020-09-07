<template>
  <div>
    <!--========================================== Services area =============================================-->
    <section class="services-area" id="servicessection">
      <div class="services-text">
        <h2>Services Offered by us</h2>
        <div style="background-color:#02C6C6; width: 75px; height: 5px; border-radius:5px;" class="mb-3 mx-auto"></div>
        <p>We offer a wide range services covered in all areas of business from incorporation to compliance to finance management.  </p>  
      </div>

      


      <div class="container services-container">
      <div class="row">

        <div class="services-navs">
          <ul class="nav nav-tabs services-tabs mx-auto">
              <li class="nav-item mx-auto service-tab-items">
                  <a href="#incorporation" class="nav-link active" data-toggle="tab">Establish</a>
              </li>
              <li class="nav-item mx-auto service-tab-items">
                  <a href="#compliance" class="nav-link" data-toggle="tab">Comply</a>
              </li>
              <li class="nav-item mx-auto service-tab-items">
                  <a href="#tax-accounting" class="nav-link" data-toggle="tab">Progress</a>
              </li>

              <!-- <li class="nav-item mx-auto service-tab-items"> 
                <a href="#trademark-ip" class="nav-link" data-toggle="tab">Trademark & IP</a>
              </li> -->
          </ul>
          <div class="tab-content services-slide">
            
            
            <div class="tab-pane fade show active" id="incorporation">
              <div class="container">
                <div class="row">

                    <div v-for="(item, index) in establish" :key="index" class="col-lg-4 col-md-12 col-12 services-list">
                      <div class="card services-card" >
                        <div class="circle">
                        <img  :src="require('../assets/img/1x/'+item.img)" class="card-img-top mx-auto" alt="...">
                        <h3 class="prof-fees mt-3" style="font-weight: bold;"><span style="color: var(--contrast-color);">₹ </span>{{item.fees}}</h3>
                        </div>
            
                        <div class="card-body services-card-body">
                          <p class="card-title" >{{item.tag}}</p>
                          <p class="card-text"> 
                           {{item.servicesummary.slice(0,200)}}...
                          </p>
                        <a href="#" style="float:right;" class="btn btn-primary mb-3" >Get Started</a>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>    
              </div>


              
             <div class="tab-pane fade" id="compliance">
                 <div class="container">
                  <div class="row">

                    <div v-for="(item, index) in comply" :key="index" class="col-lg-4 col-md-12 col-12 services-list">
                      <div class="card services-card" >
                        <div class="circle">
                        <img  :src="require('../assets/img/1x/'+item.img)" class="card-img-top mx-auto" alt="...">
                        <h3 class="prof-fees mt-3" style="font-weight: bold;"><span style="color: var(--contrast-color);">₹ </span>{{item.fees}}</h3>
                        </div>
            
                        <div class="card-body services-card-body">
                          <h5 class="card-title" >{{item.tag}}</h5>
                          <p class="card-text"> 
                           {{item.servicesummary.slice(0,200)}}...
                          </p>
                        <a href="#" style="float:right;" class="btn btn-primary mb-3" >Get Started</a>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>    
              </div>


              <div class="tab-pane fade" id="tax-accounting">
                 <div class="container">
                  <div class="row">

                    <div v-for="(item,index) in progress" :key="index" class="col-lg-4 col-md-12 col-12 services-list">
                      <div class="card services-card" >
                        <div class="circle">
                        <img :src="require('../assets/img/1x/'+item.img)" class="card-img-top mx-auto" alt="...">
                        <h3 class="prof-fees mt-3" style="font-weight: bold;"><span style="color: var(--contrast-color);">₹ </span>{{item.fees}}</h3>
                        </div>
            
                        <div class="card-body services-card-body">
                          <h5 class="card-title" >{{item.tag}}</h5>
                          <p class="card-text"> 
                           {{item.servicesummary.slice(0,200)}}...
                          </p>
                        <a href="#" style="float:right;" class="btn btn-primary mb-3" >Get Started</a>
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>    
              </div>


          </div>
        </div>



         

     
      
      
      </div>
      </div>   



    </section>




    <!--========================================== End Services area =============================================-->
  </div>
</template>
<script>

import json from '../assets/tk_data.json'


  

  export default {
   
   data(){
     return{
       myJson: json,  
       
     }
   },

   computed:{

     establish(){
          let self = this;              
          return this.myJson.services.filter(f => f.area == "establish")
        },

     progress(){
          let self = this;              
          return this.myJson.services.filter(f => f.area == "progress")
        },

     comply(){
          let self = this;              
          return this.myJson.services.filter(f => f.area == "comply")
        }

   }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
