<template>
  <div> 
   
             
   <BannerPages :name='name'></BannerPages>
   <Howitworks></Howitworks>
   <Benefits :name='name'></Benefits>
   <Documents :name='name'></Documents>
   <Criteria style="display:none;" :name='name'></Criteria>
   <Deliverables style="display:none;" :name='name'></Deliverables>
   <Faq :name='name'></Faq>

  
  
  </div>
</template>
<script>

  export default {
    name: 'MSME',
    components: {

    },
    data(){
      return{
        name:'msme'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
