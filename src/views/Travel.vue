<template>
  <div class="Travel-main">
    <!-- <NavBar2 /> -->
    <CJumbotron class="travel-img">
      <div class="overlay"></div>
      <div class="travel-details">
        <h1>Travel Name</h1>
        <h6>Travel Short Talk</h6>
      </div>
    </CJumbotron>
    <div class="details-container">
      <div class="container">
        <CRow class="details">
          <CCol lg="3" md="6" sm="12">
            <div>
              <h6>Location: Rio,Brazil</h6>
            </div>
          </CCol>
          <CCol lg="3"  md="6" sm="12">
            <div>
              <h6>Price : $500</h6>
            </div>
          </CCol>
          <CCol lg="3"  md="6" sm="12">
            <div>
              <h6>8 Nights - 9 Days</h6>
            </div>
          </CCol>
          <CCol lg="3"  md="6" sm="12">
            <button class="book-btn">
              <h4>Book Now</h4>
            </button>
          </CCol>
        </CRow>
      </div>
    </div>
    <div class="container">
      <CRow class="description">
        <CCol lg="8">
          <div>
            <h1>The Best of Brazil & Argentina</h1>

            <h3>
              <i class="fas fa-suitcase-rolling" style="color: Black"></i>
              Description
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              suscipit quos voluptates id, velit quisquam veniam at dolorum
              blanditiis rerum laboriosam aliquid error, repellat, quia
              voluptatem dolore quis nam labore!
            </p>
          </div>
          <div>
            <h3>
              <i class="fas fa-camera" style="color: Black"></i>
              Photo Gallery
            </h3>
            <div>
              <el-carousel :interval="4000" type="card" height="320px">
                <el-carousel-item
                  v-for="(item, index) in items"
                  :key="index"
                  :style="{
                    'background-image':
                      'url(' +
                      require('../assets/images/home' + (index + 1) + '.jpg') +
                      ')',
                  }"
                >
                  <h3 class="medium"></h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </CCol>
        <CCol lg="4" sm="12" md="12">
          <div class="trip-info">
            <CRow>
              <CCol>
                <CCard>
                  <CCardHeader
                  >
                    TRIP INFORMATION
                  </CCardHeader>
                  <CCardBody>
                    <CListGroup>
                      <CListGroupItem href="#">
                        <i class="fas fa-star" ></i> This
                        is a default list group item
                      </CListGroupItem>
                      <CListGroupItem href="#">
                        <i class="fas fa-star" ></i> This
                        is a primary list group item
                      </CListGroupItem>
                      <CListGroupItem href="#">
                        <i class="fas fa-star" ></i> This
                        is a secondary list group item
                      </CListGroupItem>
                      <CListGroupItem href="#">
                        <i class="fas fa-star"></i> This
                        is a success list group item
                      </CListGroupItem>
                    </CListGroup>
                  </CCardBody>
                </CCard>
                <CCard>
                  <CCardHeader
                  >
                    HELP & SUPPORT

                  </CCardHeader>
                  <CCardBody>
                    <CListGroup>
                      <CListGroupItem href="#"
                       style="text-align:center">
                        <h2
                        style="color:crimson"
                        >Call Us Now</h2> 
                        <h4><i class="fas fa-phone-alt"
                        
                        style="color:black"></i> 10-800-123-000</h4>

                      </CListGroupItem>
                    </CListGroup>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </div>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
import NavBar2 from "../components/NavBar2";
export default {
  components: {
    NavBar2,
  },
  data() {
    return {
      items: [
        {
          img: "",
        },
        {
          img: "",
        },
        {
          img: "",
        },
        {
          img: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* main color #253D52 */

.travel-img {
  background-image: url("../assets/images/carosel.jpg");
  background-size: cover;
  background-position: center;
}
.jumbotron {
  height: 350px;
  position: relative;
  margin-bottom: 0;
}
.jumbotron .travel-details {
  position: absolute;
  bottom: 20px;
}
.jumbotron .travel-details {
  color: white;
}
.row.details {
  text-align: center;
  background-color: #253d52;
}
.row.details {
  margin-bottom: 30px;
}
.row.details > div {
  padding: 0;
  background-color: #253d52;
  color: white;
  height: 50px;
  border: 1px solid #314c64;
  position: relative;
}
.row.details > div div {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.row.details > div div h6,
.row.details > div button.book-btn h4 {
  padding: 0;
  margin: 0;
}
.row.details > div button.book-btn {
  width: 100%;
  height: 100%;
  border-radius: 0;
  border: none;
  background-color: #e62a43;
}
.row.details > div button.book-btn:hover {
  background-color: #3e50b0;
}
.details-container {
  background-color: #253d52;
}
.details-container .row div{
    transition: 0.3s;
}
.details-container .row div:hover{
    background-color:#ccc ;
}
.row.details > div div h6 {
  font-weight: 700;
  font-size: 15px;
}
.row.description {
  padding: 15px;
}
.description h1 {
  font-weight: 600;
  color: #253d52;
}
.description h3 {
  margin-top: 20px;
  padding-left: 7px;
}

.description p {
  font-size: 16px;
  margin-top: 20px;
  color: rgb(161, 160, 160);
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.list-group {
  border-radius: 0;
}
.card-body {
  padding: 0;
}
.trip-info .card-header{
    background-color: #253d52;
    color: white;
    font-size: 16px;
}
.trip-info i{
    color: #ffd700;
}
</style>
