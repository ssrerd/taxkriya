<template>
<div>  

  <div class="container" style="padding:2% 0 2% 0 !important;">
     <div class="row headrow"> 
        <h1>Reach Us</h1>
        <div class="mb-3 horiline" style="background-color:white; margin:auto;width: 75px; height: 5px; border-radius:5px;"></div>
     </div>
  </div>    
  <div class="container">
      <div class="row contactrow">         
          <div class="col-lg-6 col-md-6 col-sm-6 leftcol">
                <h1>Address</h1>
                <div class="mb-3 horiline" style="background-color:var(--primary-color); margin:auto;width: 75px; height: 5px; border-radius:5px;"></div>
              <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-6">
                      
                    <h5><i class="fas fa-map-marker-alt"></i> Registered Address</h5>
                    <p>123/45, Appu Street, Mylapore, Chennai - 600004</p>
                  </div>  
                  <div class="col-lg-6 col-md-6 col-sm-6">

                    <h5><i class="fas fa-map-marker-alt"></i>  Some other Address</h5>
                    <p>Glascow Tower, Avaiyar Aramba Paada Saalai, Chennai - 999999</p>
                  </div>  
              </div>
              <div class="row" style="padding:0 3% 0 3%;display:flex; flex-wrap:wrap;">
                    <div class="col-4"><i class="fas fa-mobile"></i> 9791156891</div>    
                    <div class="col-4"><i class="fas fa-mobile"></i> 7550037737</div>    
                    <div class="col-4"><i class="fas fa-mobile"></i> 9791156891</div>    

              </div>     
              <div class="row" style="padding:0 3% 0 3%;display:flex; flex-wrap:wrap;">

                    <div class="col-lg-6"><i class="fas fa-envelope"></i> support@taxkriya.com</div>    
                    <div class="col-lg-6"><i class="fas fa-envelope"></i> admin@taxkriya.com</div>    

              </div>     
              </div>

          <div class="col-lg-6 col-md-6 col-sm-6 rightcol">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style="text-align:center;">Name</label>
                <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Full Name">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style="text-align:center;">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@email.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" style="text-align:center;">Your message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </div>    
     
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.80679223059!2d80.22161631464606!3d13.047966890805798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f05b6db509%3A0x1638b4c90be7e7a3!2sNTR%20Garden%20St%2C%20KG%20NTR%20Heritage%2C%20Boopathy%20Nagar%2C%20Kodambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600024!5e0!3m2!1sen!2sin!4v1598801507845!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;padding:2%;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  
     
      </div>

  </div>  
</div>    
</template>

<script>
export default {
    layout: 'contact',

}
</script>

<style scoped>
.container{
    padding: 2% 0 5% 0;
}
.headrow{
    padding:3% 2% 3% 2%;
    background-color: var(--primary-color);
    color:white;
    text-align: center;
    background-image:url(../assets/img/contactus.svg);
    box-shadow: 3px 3px 6px 2px rgba(0,0,0,0.2);
}    
.contactrow{
    border-color: lightgrey;
    border-width: thin;
    border-style: solid;
    box-shadow: 3px 3px 6px 2px rgba(0,0,0,0.2);
}    
.leftcol{
    padding:5% 2% 5% 2%;
    text-align: center;
}

.rightcol{
    padding:5% 2% 5% 2%;

}
</style>