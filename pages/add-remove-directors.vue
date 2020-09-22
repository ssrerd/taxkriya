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
        name:'add or remove director',
        description:'Add or Remove Directors service is provided at Rs. 3500. A Director is a person who acts on behalf of the company. He directs, controls and manages the company in day-to-day operations of the company. '
      }
    },

    head(){

      return{

      title: 'Add or Remove Directors',
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
