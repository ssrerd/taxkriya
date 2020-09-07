<template>
  <div>
     <!--=============================== Secondary Header ================================-->

    <section class="secondary-header">
      <div class="container">
        <div class="row">
        <div class="col-lg-8 col-md-12 col-sm-12">
          <h1 class="mb-3 howitworks" style="text-align: center;">How it works</h1>
          <div class="mb-3 mx-auto horiline" style="background-color:#fff; width: 75px; height: 5px; border-radius:5px;" ></div>
          <div class="row mb-2" style="padding: 8% 5% 0% 5%;">
            
            <div class="col-lg-4">
              <div style="display:flex;justify-content:center;margin:auto !important;">
              <img src="../assets/img/phone.svg" class="img-fluid mb-3" style="width:25%;height:auto;" alt="">
              </div>
              <h3 style="text-align:center;">Step 1</h3>
              <p style="text-align:center;">Some of the process listed here cannot be listed. Some of the process listed here cannot be listed</p>
            </div>   

            <div class="col-lg-4">
              <div style="display:flex;justify-content:center;margin:auto !important;">
              <img src="../assets/img/documentation.svg" class="img-fluid mb-3" style="width:25%;height:auto;" alt="">
              </div>
              <h3 style="text-align:center;">Step 2</h3>
              <p style="text-align:center;">Some of the process listed here cannot be listed. Some of the process listed here cannot be listed</p>
            </div>   

            <div class="col-lg-4">
              <div style="display:flex;justify-content:center;margin:auto !important;">
              <img src="../assets/img/documentation.svg" class="img-fluid mb-3" style="width:25%;height:auto;" alt="">
              </div>
              <h3 style="text-align:center;">Step 3</h3>
              <p style="text-align:center;">Some of the process listed here cannot be listed. Some of the process listed here cannot be listed</p>
            </div>   
     
            
          </div>

          
        </div>


        <div class="col-lg-4 col-md-12 col-sm-12 form-lead">



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

  export default {
   
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .howitworks:hover .horiline{
   width:150px;

 }

</style>
