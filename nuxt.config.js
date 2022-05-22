import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s ' + ' | Taxkriya - Startup Registration | Company Registration ' ,
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Taxkriya.com is a complete business solution company providing services like startup registration, company registration, finance consulting etc.' },
      { hid:'og:title', property: 'og:title', content: "Taxkriya - Startup Registration | Company Registration"},
      { hid:'og:site_name', property: 'og:site_name', content: 'Taxkriya'},
      { hid: 'og:description', name:'og:description', content:'Taxkriya.com is a complete business solution company providing services like startup registration, company registration, finance consulting etc.'},
      { hid:'og:type', property: 'og:type', content: 'website'}, 
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css', integrity:'sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I' , crossorigin:'anonymous'},
      {rel:'stylesheet', href:'https://use.fontawesome.com/releases/v5.14.0/css/all.css'},
      {rel:'stylesheet', href:'https://use.fontawesome.com/releases/v5.14.0/css/v4-shims.css'},
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100;1,300&display=swap'},
      {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,600&display=swap'}
      
     
    ],
    script:[
      {
        src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", integrity:"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo", crossorigin:"anonymous", defer: true
      },
      {
        src:"https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js", integrity:"sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/", crossorigin:"anonymous", defer: true
      },
      {
    type: 'text/javascript',
    hid: 'fb-customer-chat',
    body: true,
    innerHTML: `
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "123480682665158");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v11.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));`
  }
    ],
    __dangerouslyDisableSanitizersByTagID: { 'fb-customer-chat': ['innerHTML'] },
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/variables.css','~/assets/css/customstyle.css'],
  
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/firebase.js',
    {src:'~plugins/ga.js', mode: 'client'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    ['nuxt-compress',
        {
          gzip: {
            cache: true
          },
          brotli: {
            threshold: 10240
          }
        }
      ]   
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
