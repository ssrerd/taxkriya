<template>
  <div> 

             
   <BannerPages :name='name'></BannerPages>
   <Howitworks></Howitworks>
   <Benefits style="display:none;" :name='name'></Benefits>
   <Documents :name='name'></Documents>
   <Criteria style="display:none;" :name='name'></Criteria>
   <Deliverables style="display:none;" :name='name'></Deliverables>
   <Faq :name='name'></Faq>



  
  </div>
</template>
<script>


  export default {
    name: 'ChangeinAuth',
    data(){
      return{
        name:'changes in authorised capital',
        description:'Changes in Authorised Capital service at Rs. 5000. A company can raise its paid-up capital to the extent of its authorised capital only.'
      }
    },
    
    head(){

      return{

      title: 'Changes in Authorised Capital',
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
