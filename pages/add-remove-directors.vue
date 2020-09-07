<template>
  <div> 
   

   <BannerPages :name="name"></BannerPages>
   <Howitworks></Howitworks> 
   <Documents :name="name"></Documents>
   <Faq :name="name"></Faq>          
  

  </div>
</template>
<script>




  export default {
    name: 'AddRemDir',
    data(){
      return{
        name:'add or remove director'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
