<template>
  <div>
    <div :ref="myRef" style="width: 600px;height: 400px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
// import echarts from 'echarts/lib/echarts'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/toolbox'
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/markLine'
import { data2 } from '@/utils/index.js'
export default {
  name: 'EchartsDemo',
  props: {
    data: {
      type: Array,
      default: null
    },
    myRef: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      opt: {}
    }
  },
  created() {
  },
  mounted() {
    this.setEchart()
  },
  methods: {
    setEchart () {
      const opt = data2
      let dom = this.$refs[this.myRef];
      this.myChart = echarts.init(dom);
      this.myChart.setOption(opt);
    }
  }
}
</script>

<style>
</style>