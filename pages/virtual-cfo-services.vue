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
    name: 'VirtualCFO',
    components: {

    },
    data(){
      return{
        name:'virtual cfo'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->