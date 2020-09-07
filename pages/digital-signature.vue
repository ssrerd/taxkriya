<template>
  <div> 

             
   <BannerPages :name='name'></BannerPages>
   <Benefits :name='name'></Benefits>
   <Documents :name='name'></Documents>
   <Criteria :name='name'></Criteria>
   <Deliverables :name='name'></Deliverables>
   <Faq :name='name'></Faq>


  
  </div>
</template>
<script>


  export default {
    name: 'DigitalSign',
    components: {
    
    },
    data(){
      return{
        name:'digital signature'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

