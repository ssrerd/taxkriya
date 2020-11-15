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

                    <h5><i class="fas fa-map-marker-alt"></i> Office Address</h5>
                    <p>No. 78/132, Dr. Radhakrishnan Salai, Mylapore, Chennai - 600004</p>
                  </div>  
              </div>
              <div class="row" style="margin:auto; padding:0 3% 0 3%;display:flex; flex-wrap:wrap;">
                    <div class="col-6"><i class="fas fa-mobile"></i> 9791156891</div>    
                    <div class="col-6"><i class="fas fa-mobile"></i> 9345918985</div>

              </div>     
              <div class="row" style="margin: auto; padding:0 3% 0 3%;display:flex; flex-wrap:wrap;">

                    <div class="col-lg-12"><i class="fas fa-envelope"></i> support@taxkriya.com</div>    


              </div>     
              </div>
          <div class="col-lg-6 col-md-6 col-sm-6 rightcol">
          <form name="contactus" action="/">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style="text-align:center;">Name</label>
                <input type="name" v-model="firstName" class="form-control" id="exampleFormControlInput1" placeholder="Full Name">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style="text-align:center;">Email address</label>
                <input type="email" v-model="emailId" class="form-control" id="exampleFormControlInput1" placeholder="name@email.com">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" style="text-align:center;">Your message</label>
                <textarea class="form-control" v-model="suggestion" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" v-on:click="submit" class="btn btn-primary">Submit</button>
          </form>    
          </div>
     
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.839669313016!2d80.2603850147714!3d13.045875490807221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526631d2eeb25d%3A0xc992efa4b9bde3d0!2sKarya%20Space%20%7C%20Coworking%20Space%20%7C%20Mylapore-Alwarpet!5e0!3m2!1sen!2sin!4v1601391107935!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
     
      </div>

  </div>  
</div>    
</template>

<script>
import {fireDb} from '~/plugins/firebase'
import firebase from 'firebase/app'

export default {
    layout: 'contact',

    data(){
    return{

      firstName:'',
      emailId:'',
      suggestion:''

    }
  },

  methods: {
      submit() {
        if(this.firstName !=='' && this.emailId !== '' && this.suggestion !==''){
        fireDb.collection("suggestion").doc().set({
           firstName: this.firstName,
           emailId: this.emailId,
           suggestion: this.suggestion,
           timestamp: firebase.firestore.FieldValue.serverTimestamp() 
        })
        };
      }
  }

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