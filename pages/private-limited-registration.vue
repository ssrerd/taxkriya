<template>
  <div> 

   <BannerPages :name='name'></BannerPages>
   <Howitworks></Howitworks> 

   <Benefits :name='name'></Benefits>
 
   <Documents :name ='name'></Documents> 
    
   <Criteria :name ='name'></Criteria>

   <Deliverables :name='name'></Deliverables>
  
   <Faq :name='name'></Faq>
  
  
  </div>
</template>
<script>


  export default {
    name: 'PrivateLtdCompany',
    computed:{
    
    },
     data(){
      return{
        name:'private limited',
        description:'A private limited company is the most sought after business entity due to its two common key features, one, limited liability of the owner to their respective contribution.'
      }
    },

    head(){

      return{

      title: 'Private Limited Registration',
      meta:[
        {
            hid: 'description',
            name: 'description',
            content: this.description
          },
          {
            hid: 'og:title',
            property: 'og:title',
            content: this.name 
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
