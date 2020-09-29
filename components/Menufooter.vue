<template>
  <div>
      <footer class="page-footer font-small stylish-color-dark pt-4">

    <!-- Footer Links -->
    <div class="container text-center text-md-left">

      <!-- Grid row -->
      <div class="row">

        <!-- Grid column -->
        <div class="col-md-4 mx-auto">

          <!-- Content -->
          <h5 style="font-weight: bold;">Taxkriya</h5>
          <p>Taxkriya.com is a complete business solution company providing services like startup registration, company registration, finance consulting etc.</p>

        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none">

        <!-- Grid column -->
        <div class="col-md-2 mx-auto">

          <!-- Links -->
          <h5 style="font-weight: bold;">Establish</h5>

          <ul class="list-unstyled ">
            <li><nuxt-link :to="{name:'private-limited-registration'}" target="_blank" class="foot-1">Private Ltd Company</nuxt-link></li>
            <li><nuxt-link :to="{name: 'partnership-firm-registration'}" target="_blank" class="foot-1">Partnership Firm Registration</nuxt-link></li>
            <li><nuxt-link :to="{name:'startup-registration'}" target="_blank" class="foot-1">Startup Registration</nuxt-link></li>
            <li><nuxt-link :to="{name:'limited-liability-partnership-registration'}" target="_blank" class="foot-1">Limited Liability Partnership</nuxt-link></li>
            <li><nuxt-link :to="{name:'one-person-company-registration'}" target="_blank" class="foot-1">One Person Company</nuxt-link></li>
            <li><nuxt-link :to="{name:'sole-proprietorship'}" target="_blank" class="foot-1">Sole Proprietorship</nuxt-link></li>
            <li><nuxt-link :to="{name:'section-8-registration'}" target="_blank" class="foot-1">Section 8 Company</nuxt-link></li>
          </ul>

        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none">

        <!-- Grid column -->
        <div class="col-md-2 mx-auto">

          <!-- Links -->
          <h5 style="font-weight: bold;">Progress</h5>

          <ul class="list-unstyled ">
            <li><nuxt-link :to="{name:'gst-registration'}" target="_blank" class="foot-1" >GST Registration</nuxt-link></li>
            <li><nuxt-link :to="{name:'msme-registration'}" target="_blank" class="foot-1" >MSME Registration</nuxt-link></li>
            <li><nuxt-link :to="{name:'esi-registration'}" target="_blank" class="foot-1" >ESI Registration</nuxt-link></li>
            <li><nuxt-link :to="{name:'import-export-code'}" target="_blank" class="foot-1" >Import Export Code</nuxt-link></li>
            <li><nuxt-link :to="{name:'pf-registration'}" target="_blank" class="foot-1" >PF Registration</nuxt-link></li>
          </ul>

        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none">

        <!-- Grid column -->
        <div class="col-md-2 mx-auto">

          <!-- Links -->
          <h5 style="font-weight: bold;">Comply</h5>

          <ul class="list-unstyled ">
            <li><nuxt-link :to="{name:'add-remove-directors'}" target="_blank" class="foot-1">Add or Remove Directors</nuxt-link></li>
            <li><nuxt-link :to="{name:'change-in-authorised-capital'}" target="_blank" class="foot-1">Change in Authorised Capital</nuxt-link></li>
            <li><nuxt-link :to="{name:'change-in-name'}" target="_blank" class="foot-1">Change in Name</nuxt-link></li>
            <li><nuxt-link :to="{name:'change-in-objective'}" target="_blank" class="foot-1">Change in Objective</nuxt-link></li>
            <li><nuxt-link :to="{name:'change-in-address'}" target="_blank" class="foot-1">Change in Address</nuxt-link></li>

            <li><nuxt-link :to="{name:'transfer-of-shares'}" target="_blank" class="foot-1">Transfer of Shares</nuxt-link></li>
            <li><nuxt-link :to="{name:'director-identification-kyc'}" target="_blank" class="foot-1">DIN KYC</nuxt-link></li>
          </ul>
        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->


    <!-- Call to action -->
    <!-- <ul class="list-unstyled list-inline text-center py-2">
      <li class="list-inline-item">
        <h5 class="mb-1">Register for free</h5>
      </li>
      <li class="list-inline-item">
        <a href="#!" class="btn btn-primary btn-rounded">Sign up!</a>
      </li>
    </ul> -->
    <!-- Call to action -->

    <hr>

    <!-- Social buttons -->
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1" id="social-icons">
          <i class="fab fa-facebook-f"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1" id="social-icons">
          <i class="fab fa-twitter"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1" id="social-icons">
          <i class="fab fa-youtube"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1" id="social-icons">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a target="_blank" rel="noopener" href="https://www.instagram.com/taxkriya/" aria-label="instagram" class="btn-floating btn-instagram mx-1" id="social-icons">
          <i class="fab fa-instagram"> </i>
        </a>
      </li>
    </ul>
    <!-- Social buttons -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
      Zrepra Innovations Private Limited
    </div>
    <!-- Copyright -->

  </footer>
  
  </div>
</template>
<script>
  export default {
  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->