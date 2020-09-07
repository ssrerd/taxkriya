<template>
  <div class="card card-md-12 card-sm-12 reg-card">
                  
            <img src="../assets/img/logo-trans.png" style="width: 50px; height: 50px;" class="mx-auto" alt="logo-trans">
            
            
            <div class="row reg-form">
              <h4 class="instant-quote" style="text-align: center;">Get an Instant Quote</h4>
              <div style="background-color:#01D5D5; width: 75px; height: 5px; border-radius:5px;" class="mx-auto"></div>
             
              
            </div> 
            
            <form name="registrationcard" action="/thank-you">  
              <div class="row" style="padding-top: 10%;">

                <div class="input-group mb-3">
                  <!-- <label class="input-group-text custom-input-group-text col-2" for="inputGroupSelect01">  <i class="fas fa-user mx-auto" aria-hidden="true"></i></label> -->
                  <label for="inputGroupSelect01" hidden></label> 
                  <select class="form-select" id="inputGroupSelect01" name="dropdownser">
                    
                    <option selected>Select a service..</option>
                    <option class="options" value="1">Private Ltd Registration</option>
                    <option class="options" value="2">Startup Registration</option>
                    <option class="options" value="3">Other services</option>
                    
                  </select>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text custom-input-group-text col-2">
                    <i class="fas fa-user mx-auto" aria-hidden="true"></i>
                  </span>
                <label for="inputFullName" hidden></label>  
                <input type="text" class="form-control" placeholder="Full Name" id="inputFullName" v-model="firstName" aria-label="Full Name" required name="regname">
                </div>
          
              
                </div>
              <div class="input-group mb-3">
                <span class="input-group-text custom-input-group-text col-2">
                  <i class="fas fa-envelope mx-auto" aria-hidden="true"></i>
                </span>
                
                <label for="inputEmail" hidden class="form-label">Email address</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="Email-id" v-model="emailId" aria-describedby="emailHelp" required name="email">
                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text custom-input-group-text col-2">
                  <i class="fas fa-map-marker-alt mx-auto" aria-hidden="true"></i>
                </span>
                <label for="inputCity" hidden class="form-label">City</label>
                <input type="text" class="form-control" placeholder="City" v-model="city" id="inputCity" required name="city">
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text custom-input-group-text col-2">
                  <i class="fas fa-mobile-alt mx-auto" aria-hidden="true"></i>
                </span>
                <label for="inputNumber" hidden class="form-label">Mobile Number</label>
                <input type="text" class="form-control" placeholder="Mobile No" v-model="number" id="inputNumber" required name="number">
                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
    
              </div>
    
              <div class="text-center">
              
              <button type="submit" v-on:click="submit" class="btn btn-primary btn-block startup" id="startupbtn" style="border-radius: 0; font-size: large;">START UP</button>
              </div>
              
    
            
            </form>
          
        </div>
</template>

<script>


import {fireDb} from '~/plugins/firebase'

export default {
  data(){
    return{

      firstName:'',
      emailId:'',
      city:'',
      number:''
    }
  },

  methods: {
      submit(e) {
        if(this.firstName !=='' && this.emailId !== '' && this.city !=='' && this.number != ''){
        fireDb.ref().push({
           firstName: this.firstName,
           emailId: this.emailId,
           city: this.city,
           number: this.number 
          
        })
        }
       
      }
  } 
}
</script>