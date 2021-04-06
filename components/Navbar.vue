<template>
  <div>
  <header class="main-menu">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <nuxt-link class="navbar-brand" aria-label="navbar" to="/"><img src="~/assets/img/logo.png" alt="navbar-img"></nuxt-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse menu-list" id="navbarNavDropdown">
                <div class="mr-auto"></div>  
                <ul class="navbar-nav menu-items">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown dropdownmenu" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                      Establish
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <div class="row dropdown-menu-right">
                        
                        <div class="col-lg-6 mt-2 navhead">
                            <img src="~/assets/img/1x/private ltd.svg" class="img-fluid" style="margin:auto !important;padding-left:2%;width:15%; height:auto;">
                            <div class="dropdown-header"><h4 style="padding-top:5%;color: #01D5D5;">Establish</h4></div>
                            <div style="padding-left:2%;padding-right:50%;">Establishing a business is the first step towards bringing your dream into reality. If there is any hassle in this step the whole business model might collapse and hence extra eye should be employed.</div>
                            <div style="padding-left:2%;padding-right:50%;"></div>
                        
                        </div> 
                        <div class="col-lg-6 mt-2">
                            <div class="dropdown-header"><h4 style="color: #01D5D5;">Incorporation</h4><hr></div>
                              <li><nuxt-link :to="{name:'private-limited-registration'}" target="_blank" class="dropdown-item">Private Ltd Company</nuxt-link></li>
                              <li><nuxt-link :to="{name: 'partnership-firm-registration'}" target="_blank" class="dropdown-item">Partnership Firm Registration</nuxt-link></li>
                              <li><nuxt-link :to="{name:'startup-registration'}" target="_blank" class="dropdown-item">Startup Advisory</nuxt-link></li>
                              <li><nuxt-link :to="{name:'limited-liability-partnership-registration'}" target="_blank" class="dropdown-item">Limited Liability Partnership</nuxt-link></li>
                              <li><nuxt-link :to="{name:'one-person-company-registration'}" target="_blank" class="dropdown-item">One Person Company</nuxt-link></li>
                              <li><nuxt-link :to="{name:'sole-proprietorship'}" target="_blank" class="dropdown-item">Sole Proprietorship</nuxt-link></li>
                              <li><nuxt-link :to="{name:'section-8-registration'}" target="_blank" class="dropdown-item">Section 8 Company</nuxt-link></li>


                        </div> 
                                                
                      </div>  
                    </ul>
                  </li>
                  <li class="nav-item dropdown ">
                    <a class="nav-link dropdown dropdownmenu" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                      Progress
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <div class="row dropdown-menu-right">
                        <div class="col-6 mt-2 navhead">

                          <img src="../assets/img/1x/progress.svg" class="img-fluid" style="margin:auto !important;padding-left:2%;width:15%; height:auto;">
                            <div class="dropdown-header"><h4 style="padding-top:5%;color: #01D5D5;">Progress</h4></div>
                            <div style="padding-left:2%;padding-right:50%;">Once the business is up and running, it is vital that the business should viewed from the progress standpoint. It's growth depends on several internal and external, and the later can be taken care of with not so difficult proactive measures.</div>
                            <div style="padding-left:2%;padding-right:50%;"></div>
                          
                        </div>  
                        <div class="col-3 mt-2">
                          <div class="dropdown-header"><h4 style="color: #01D5D5;">Grow</h4> <hr></div>
                          <li><nuxt-link :to="{name:'gst-registration'}" target="_blank" class="dropdown-item">GST Registration</nuxt-link></li>
                          <li><nuxt-link :to="{name:'msme-registration'}" target="_blank" class="dropdown-item">MSME Registration</nuxt-link></li>
                          <li><nuxt-link :to="{name:'esi-registration'}" target="_blank" class="dropdown-item">ESI Registration</nuxt-link></li>
                          <li><nuxt-link :to="{name:'import-export-code'}" target="_blank" class="dropdown-item">Import Export Code</nuxt-link></li>
                          <li><nuxt-link :to="{name:'pf-registration'}" target="_blank" class="dropdown-item">PF Registration</nuxt-link></li>
                          <li><nuxt-link :to="{name:'trademark-registration'}" target="_blank" class="dropdown-item">Trademark Registration</nuxt-link></li>

                        </div>  
                        <!-- <div class="col-3 mt-2">
                          <div class="dropdown-header"><h4 style="color: #01D5D5;">Finance & Tax</h4> <hr></div>
                          <li><nuxt-link :to="{name:'payroll-maintenance'}" target="_blank" class="dropdown-item">Payroll Management</nuxt-link></li>
                          <li><nuxt-link :to="{name:'virtual-cfo-services'}" target="_blank" class="dropdown-item">Virtual CFO</nuxt-link></li>
                          <li><nuxt-link :to="{name:'book-keeping'}" target="_blank" class="dropdown-item">Book Keeping</nuxt-link></li>
                          
                        </div>  -->
                      </div>  
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown dropdownmenu" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                      Comply
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <div class="row dropdown-menu-right">
                        
                        <div class="col-lg-6 mt-2 navhead">
                            <img src="~/assets/img/1x/compliance.svg" class="img-fluid" style="margin:0 auto 0 auto !important;padding-left:2%;width:15%; height:auto;">
                            <div class="dropdown-header"><h4 style="padding-top:2%;color: var(--contrast-color);">Comply</h4></div>
                            <div style="padding-left:2%;padding-right:50%;">Establishments in India or anywhere else, are bound by several laws and rules which may change from time to time. And complaince of the same shouldn't be underlooked as it is also forms a vital role in sustaining the growth of an establishment.</div>
                            <div style="padding-left:2%;padding-right:50%;"></div>
                              

                        </div> 
                        <div class="col-lg-3 mt-2">
                            <div class="dropdown-header"><h4 style="color: #01D5D5;">ROC Compliance</h4><hr></div>
                              <li><nuxt-link :to="{name:'add-remove-directors'}" target="_blank" class="dropdown-item">Add or Remove Directors</nuxt-link></li>
                              <li><nuxt-link :to="{name:'change-in-authorised-capital'}" target="_blank" class="dropdown-item">Change in Authorised Capital</nuxt-link></li>
                              <li><nuxt-link :to="{name:'change-in-name'}" target="_blank" class="dropdown-item">Change in Name</nuxt-link></li>
                              <li><nuxt-link :to="{name:'change-in-objective'}" target="_blank" class="dropdown-item">Change in Objective</nuxt-link></li>
                              <li><nuxt-link :to="{name:'change-in-address'}" target="_blank" class="dropdown-item">Change in Address</nuxt-link></li>
                              <li><nuxt-link :to="{name:'director-identification-kyc'}" target="_blank" class="dropdown-item">DIN KYC</nuxt-link></li>
                            

                        </div> 
                        <div class="col-lg-3 mt-2">
                            <div class="dropdown-header"><h4 style="color: #01D5D5;">Annual maintenance</h4><hr></div>
                              <li><nuxt-link :to="{name:'llp-annual-maintenance'}" target="_blank" class="dropdown-item">LLP Annual Maintenance</nuxt-link></li>
                              <li><nuxt-link :to="{name:'private-limited-annual-maintanence'}" target="_blank" class="dropdown-item">Private Limited Annual Maintanence</nuxt-link></li>
                              <li><nuxt-link :to="{name:'section-8-maintanence'}" target="_blank" class="dropdown-item">Section 8 Maintanence</nuxt-link></li>
                              <li><nuxt-link :to="{name:'one-person-company-maintanence'}" target="_blank" class="dropdown-item">OPC Maintanence</nuxt-link></li>
                      
                        </div> 
                                                
                      </div>  
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown dropdownmenu" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                      Resources
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="#">Coming Soon</a></li>

                    </ul>
                  </li>
                  <li style="display:none;" class="nav-item">
                    <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                      Blog
                    </a>
                   
                  </li>
                  
                </ul>
                <nuxt-link :to="{name: 'contact-us'}" type="button" class="btn btn-primary contact">Contact</nuxt-link>
              </div>
            </div>
        </nav>

    </header>
  
  </div>
</template>
<script>
  export default {

    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.contact{
  font-family: 'Roboto', sans-serif;
}

</style>
