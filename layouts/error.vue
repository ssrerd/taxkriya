<template>
    <div class="container" style="padding:10%;">
      <div class="imgerr">
        <img src="../assets/img/404_page_not_found.svg" class="img-fluid" alt="errimg">
      </div>  
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <div style="text-align:center;">
          
          <NuxtLink type=button class="btn btn-primary" to="/">
            Home page
          </NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Page Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 35px;
  text-align: center;
}
</style>
