<template>
  <div> 

             
   <BannerPages :name='name'></BannerPages>
   <Howitworks></Howitworks>
   <Benefits style="display:none;" :name='name'></Benefits>
   <Documents style="display:none;"  :name='name'></Documents>
   <Criteria style="display:none;"  :name='name'></Criteria>
   <Deliverables style="display:none;"  :name='name'></Deliverables>
   <Faq :name='name'></Faq>

  
  </div>
</template>
<script>


  export default {
    name: 'changeObj',
    components: {
      
    },
    data(){
      return{
        name:'change in objective'
      }
    
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
