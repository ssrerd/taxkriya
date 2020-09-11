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
        description:'Add or Remove Directors at'
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
