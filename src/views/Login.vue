<template>
<div>
  <div class="sign-container">
    <div class="container">
    <div class="grid-container">
    <div class="form-container">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Email">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Passowrd">
          <el-input v-model="form.name" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Log in</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
    </div>
  </div>
    <Footer/>
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
export default {
    components:{
        Footer
    },
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.container{
    height: 100%;
}
.sign-container{
    widows: 100%;
    margin: 51px 0;
}
.grid-container{
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.grid-container form{
    padding:20px;
    border: 1px solid #eee;
    border-radius: 15px;
    box-shadow: 10px 10px 8px 10px #edeaea;
}
</style>