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
    name: 'changeinname',
    data(){
      return{
        name:'change in name',
        description:'A change in the name of the private limited company includes various procedures to be followed'
      }

    },
    computed:{
    
    },

    head(){

      return{

      title: 'Change in Name',
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
