<template>
  <div> 

             
   <BannerPages :name='name'></BannerPages>
   <Howitworks></Howitworks>
   <Documents :name='name'></Documents>
   <FAQ :name='name'></FAQ>
  


  
  </div>
</template>
<script>



  export default {
    name: 'ESIPFReg',
    data(){
      return {
        name:'change in address'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
