<template>
  <div id="app">
   <NavBar />
    <router-view/>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
export default {
components:{
 NavBar
}
}
</script>

<style lang="scss">
// Import styles
 @import './assets/css/normalize.css';
  @import './assets/css/style2.css';
  @import './assets/css/style.css';
  @import './assets/css/extrasmall.css';
  @import './assets/css/small.css';
  @import './assets/css/medium.css';
  @import './assets/css/large.css';
@import "~@coreui/coreui/scss/coreui";
body{
    background-color: white !important;
  }
</style>
