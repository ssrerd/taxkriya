<template>
  <div> 


   <BannerPages :name='name'></BannerPages>
   <Howitworks></Howitworks>
   <Benefits :name='name'></Benefits>
   <Documents :name='name'></Documents>
   <Criteria :name='name'></Criteria>
   <Deliverables :name='name'></Deliverables>
   <Faq :name='name'></Faq>

   
  
  </div>
</template>
<script>


  export default {
    name: 'LLP',
    components: {
    
    },
    data(){
      return{
        name:'llp',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tab-content .active{
  display: block;
}

.tab-content .tab-pane{
  display:block;
}
</style>
