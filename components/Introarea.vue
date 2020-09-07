<template>
  <div>
    <!--========================================== Intro area =============================================-->
 <section class="intro-area">
  <div class="intro-text">
  
    
  </div> 
  
  <div class="row whyus-icons">

    
    <div class="col-lg-6 col-md-6 col-sm-6">
      <img src="../assets/img/1x/progress.svg" class="img-fluid mx-auto" alt="">
    </div>


      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="whyus-text">
          <h2>Why Choose us?</h2>
          <div style="background-color:#02C6C6; width: 75px; height: 5px; border-radius:5px;" class="mb-3 mx-auto"></div>
    
        </div>
        <p style="text-align: left;">With over 100 man years of experience, we put quality and timely result over anyother factor in our business. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <div class="row">
          
          <div v-for="(qual,id) in quality" :key="id" class="col-lg-4 col-md-6 col-sm-6 whyus">
            <div class="card whyus-card" >
              <img src="../assets/img/Briefcase.svg" class="card-img-top mx-auto" alt="...">
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
          'img':'Briefcase'
        },
        {
          'id': '2',
          'data': 'Result Driven',
          'img':'Briefcase'
        },
        {
          'id': '3',
          'data': 'Dedicated Support',
          'img':'Briefcase'
        },
        {
          'id': '4',
          'data': 'Complete Transparency',
          'img':'Briefcase'
        },
        {
          'id': '5',
          'data': 'Data Driven',
          'img':'Briefcase'
        }
        
        ]
      }
    }
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->