<template>
  <div v-if="tripsLoad" style="max-width: 100%; overflow: hidden">
    <LoadingBar />
  </div>
  <div v-else>
    <MainHeader />
    <Heading title1="Top" title2="Tour Travells" />
    <Travells />
    <Heading title1="Top" title2="Tour Travells" />
    <Cities />
    <Heading title1="Top" title2="Tour Travells" />
    <AvailableTravels :indexes=3 />
    <Heading title1="Top" title2="Tour Travells" />
    <TravelSearch />
    <Heading title1="Top" title2="Tour Travells" />
    <Packages />
    <Footer />

  </div>
</template>
<script>
/* eslint-disable */
// @ is an alias to /src
import LoadingBar from "../components/LoadingBar.vue";
import Heading from "../components/Heading.vue";
import NavBar from "../components/NavBar.vue";
import Travells from "../components/Travells.vue";
import Cities from "../components/Cities.vue";
import AvailableTravels from "../components/AvailableTravels.vue";
import TravelSearch from "../components/TravelSearch.vue";
import Packages from "../components/Packages.vue";
import Footer from "../components/Footer.vue";
import Slider from "../components/Slider.vue";
import MainHeader from '../components/MainHeader.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    LoadingBar,
    Heading,
    NavBar,
    Travells,
    Cities,
    AvailableTravels,
    TravelSearch,
    Packages,
    Footer,
    Slider,
    MainHeader
  },
  name: "Home",
  mounted() {
    this.getTrips();
  },
  computed: {
    ...mapGetters({
      tripsLoad: "trip/tripsLoad",
      trips: "trip/trips",
    }),
  },
  methods: {
    ...mapActions({
      getTrips: "trip/getTrips",
    }),
  },
};
</script>
