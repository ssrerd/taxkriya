<template>
  <div>
    <!--========================================== Intro area =============================================-->
 <section class="intro-area">
  <div class="intro-text">
  
    
  </div> 
  
  <div class="row whyus-icons">

    
    <div class="col-lg-6 col-md-6 col-sm-6" style="margin:auto;">
      <img src="../assets/img/1x/progress.svg" class="img-fluid mx-auto" alt="">
    </div>


      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="whyus-text">
          <h2>Why Choose us?</h2>
          <div style="background-color:#02C6C6; width: 75px; height: 5px; border-radius:5px;" class="mb-3 mx-auto"></div>
    
        </div>
        <p style="text-align: justify;"> We, at Taxkriya, put quality and client satisfaction over anyother factor. We are passionate about supporting businesses in reaching greater heights, starting from its incorporation. You focus on building your dream business, while we focus on making it a smooth process. </p>
        <div class="row">
          
          <div v-for="(qual,id) in quality" :key="id" class="col-lg-4 col-md-6 col-sm-6 whyus">
            <div class="card whyus-card" >
              <img :src="require('../assets/img/1x/'+ qual.img)" class="card-img-top mx-auto" alt="...">
              <div class="card-body">
                <p class="card-text">{{qual.data}}</p>
              </div>
            </div>
          </div> 
           
        </div>
      </div>

   
  </div>  

</section>

<!--========================================== End Intro area =============================================--> 
  
  </div>
</template>
<script>
  export default {
    data(){
      return{
        quality:[{
          'id': '1',
          'data': 'Assured Quality',
          'img':'secure.svg'
        },
        {
          'id': '2',
          'data': 'Result Driven',
          'img':'legal.svg'
        },
        {
          'id': '3',
          'data': 'Dedicated Support',
          'img':'stock.svg'
        }
        
        ]
      }
    }
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->