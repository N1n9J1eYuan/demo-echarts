<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <lb-echarts :index="1" :data="{title: '柱状图'}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LbEcharts from '@/components/echarts'
export default {
  name: 'home',
  components: {
    'lb-echarts': LbEcharts
  }
}
</script>
