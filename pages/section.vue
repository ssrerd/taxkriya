<template>
  <div> 
   

     <section class="site-section">

  <!--========================================== Search Banner-Area ==============================================-->
      

        <div class="banner-area">
          <div class="container">
                <div class="row">
                  <div class="col">
                    <h1 style="text-align: center;">Business Solutions Simplified</h1>
                    <p style="text-align: center;">Our sole focus is on quality over quanity with special attention to Startups and Small Businesses.</p>
                <div class="input-group mb-3 mx-auto">
                  <input type="text" class="form-control search-input" list="datalistOptions"  placeholder="Search for a Service" aria-label="Recipient's username" aria-describedby="button-addon2"> 
                  <button class="btn btn-primary" style="border-radius: 0; border-width: 2px;" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
                    
                  <datalist id="datalistOptions">
                    <option href="/private-limited-company" value="Startup Registration"></option>
                    <option value="Private Limited Registration"></option>
                    <option value="One Person Registration"></option>
                    <option value="Partnership Firm Registration"></option>
                    <option value="Add or Remove Directors"></option>
                  </datalist>   
                </div>
                
              
              <div class="row">
                               
                  <div class="col" style="display: flex; flex-wrap:wrap; justify-content: center;"> 
                    <div style="text-align:center;align-items:center;justify-content:center;margin-top:8px; margin-bottom: 10px;margin-left: auto; margin-right: auto;">Most Common: </div>
                    <router-link :to="{name: 'Private Ltd Company'}" type="button" class="btn btn-outline-primary suggested"><i class="fas fa-building pr-2"></i> Private Ltd Company</router-link>
                    <router-link :to="{name: 'Startup'}" type="button" class="btn btn-outline-primary suggested" ><i class="fas fa-rocket pr-2"></i> Startup Registration</router-link>
                    <a type="button" class="btn btn-outline-primary suggested"  href="#/services"><i class="fas fa-file-alt pr-2"></i> MCA Annual Filing</a>
                    <a type="button" class="btn btn-outline-primary suggested"  href="#/services"> <i class="fas fa-percentage pr-2"></i>GST Registration</a>
                  </div>
                </div> 
                </div>

  <!--========================================== End Search Banner-Area ==============================================-->                

              </div>
            </div>  
          </div>
    </section>

 
  
  </div>
</template>
<script>

  export default {
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.row{
  border: 2px;
}
</style>
