<template>
  <div> 
   
     <section class="site-section">

  <!--========================================== Search Banner-Area ==============================================-->
      

        <div class="banner-area">
          <div class="container">
             <div class="row">
                  
                <div class="col-lg-8">
                  <h1 style="text-align: center;">Business Solutions <span style="color:white">Simplified</span></h1>
                  <p style="text-align: center;">We, at Taxkriya, focus on quality over quanity with special attention to Startups and Small Businesses.</p>
                 
              
                    <div class="row mostcommon">
                                    
                        <div style="text-align:center;margin: 8px auto 10px auto">Most Common: </div>
                        <div class="col" style="justify-content:center;"> 
                          <nuxt-link to="/private-limited-registration" type="button" class="btn btn-outline-primary suggested"><i class="fas fa-building pr-2"></i> Private Ltd Company</nuxt-link>
                          <nuxt-link to="/startup-registration" type="button" class="btn btn-outline-primary suggested" ><i class="fas fa-rocket pr-2"></i> Startup Registration</nuxt-link>
                          <nuxt-link to="/limited-liability-partnership-registration" type="button" class="btn btn-outline-primary suggested" ><i class="fas fa-building pr-2"></i>  LLP Registration</nuxt-link>
                          <nuxt-link to="/msme-registration" type="button" class="btn btn-outline-primary suggested" ><i class="fas fa-handshake"></i> MSME Registration</nuxt-link>
                        </div>
                    </div> 

                    <div class="row">
                      <p style="text-align:center;">Register with us for a free video consultation session.</p>
                    </div>  
                </div>
    
            
                      <div class="col-lg-4 col-md-4 col-sm-4 form-lead"> 
                        <Registrationcard></Registrationcard>
                      </div>  
  <!--========================================== End Search Banner-Area ==============================================-->                

              </div>
            </div>  
          </div>
    </section>
  
   <Introarea></Introarea> 
   <Servicearea></Servicearea>
   
  
  
  </div>
</template>
<script>


  export default {
    name: 'Home',
    components: {

    },
    methods:{
      
    }  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.suggested{
  width:250px;
}

.mostcommon .col{
  display: flex;
  flex-wrap: wrap;
}

.centerspace {
    justify-content: center;
    display: flex;
}

.centerspace img{
  margin:100% auto 0 auto; 
  width:70%; 
  height:auto;
}

</style>