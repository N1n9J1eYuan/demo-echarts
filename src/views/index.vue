<template>
  <div>
  </div>
</template>

<script>
import echartsComponent from '@/components/echarts/index'
export default {
  name: 'index',
  components: {
    echartsComponent
  },
  data() {
    return {
      index: 1
    }
  }
}
</script>

<style scope>
  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #ddd;
    margin-right: 10px;
    cursor: pointer;
  }
</style>