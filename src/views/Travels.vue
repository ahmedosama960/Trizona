<template>
<div>
    <div class="container">
    <div class="filter">
    <el-select v-model="value" placeholder="Choose City 😍">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>


      
    </div>
    </div>
      <AvailableTravels :indexes=4 />

</div>
</template>

<script>
import AvailableTravels from "../components/AvailableTravels.vue";
export default {
components:{
    AvailableTravels
},
data() {
      return {
        options: [{
          label: 'Popular cities',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'City name',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        value: ''
      }
    }
}
</script>

<style>
.filter{
    margin:20px 0 ;

}
</style>