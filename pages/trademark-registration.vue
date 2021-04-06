<template>
  <div> 

             
   <BannerPages :name='name'></BannerPages>
   <Howitworks></Howitworks>
   <Benefits :name='name'></Benefits>
   <Documents :name='name'></Documents>
   <Faq :name='name'></Faq>

  
  </div>
</template>
<script>

  export default {
    name: 'Trademark Registration',
    components: {

    },
    data(){
      return{
        name:'trademark registration'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
