<template>
  <div> 
  

   <BannerPages :name='name'></BannerPages>
   <Howitworks></Howitworks>
  
    <Benefits :name='name'></Benefits>
   
    <Documents :name ='name'></Documents> 
    

   
     <Criteria :name ='name'></Criteria> 
    
   <Deliverables style="display:none;" :name='name'></Deliverables>
   
    <Faq :name='name'></Faq>
    
  
  
  </div>
</template>
<script>

  export default {
    name: 'StartupReg',
    components: {

    },
    computed:{
    
    },
    data(){

      return{
        name: 'startup india registration',
        tag: 'Startup India Registration',
        description:'Our experts offer the best possible complete business solutions for startups including company registration, business model, financing etc at.'
      }
    },
    head(){

     return {

       title: this.tag,
       meta:[
          {
            hid: 'description',
            name: 'description',
            content: this.description
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.tag 
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: this.description
          }

       ]
     }

      
      
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

