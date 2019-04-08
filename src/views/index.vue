<template>
  <div>
    <echartsDemo ref="echarts"/>
  </div>
</template>

<script>
import echartsDemo from '@/components/echarts/echarts'
export default {
  name: 'index',
  components: {
    echartsDemo
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