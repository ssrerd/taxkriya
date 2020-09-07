<template>
  <div> 

             
   <BannerPages :name='name'></BannerPages>
   <Howitworks></Howitworks>
   <Benefits :name='name'></Benefits>
   <Documents :name='name'></Documents>
   <FAQ :name='name'></FAQ>
    
  
  </div>
</template>
<script>



  export default {
    name: 'BookKeeping',
    data(){
     return{
       name: 'accounting',
     }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

