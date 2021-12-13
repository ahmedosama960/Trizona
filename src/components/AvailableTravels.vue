<template>
  
<div class="avail-travel">

  <div class="container">
    <div class="travells-content">

      <div class=""
      v-for="(item,index) in indexes" :key="index"
      >
        <div class="card" style="width: 18rem;">
          <div class="avail-members" style="position: absolute;">
            Available Tickets: 42
          </div>
          <div class="img card-img-top" 
           :style="{
                    'background-image':
                      'url(' +
                      require('../assets/images/home' + (index+1) + '.jpg') +
                      ')',
                  }"
          >
          </div>
          <div class="card-body">
            <div class="details">
              <h4> GTC Grand Chola</h4>
              <p>City: illunois,united states</p>
              <p> Rating :
                <i class="fas fa-star"></i>  
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </p>
            </div>
            <div class="price">
              <span>$420</span>
            </div>

            <div>
              <router-link to="/travel/1">
              <button class="book-btn"
            style="margin-bottom:5px"
            >

              Book Now
              </button>
              </router-link>
              </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
props:['indexes']
}
</script>

<style>

</style>