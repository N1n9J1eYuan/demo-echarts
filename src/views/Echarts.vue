<template>
  <div>
    <span
      v-for="n in 4"
      :key="n"
      @click="index = n">
      {{ n }}
    </span>
    <echartsComponent :index="index" :data="{ title: '柱状图'}"/>
  </div>
</template>

<script>
import echartsComponent from '@/components/echarts/index'
export default {
  name: 'EchartsDemo',
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

<style>
</style>