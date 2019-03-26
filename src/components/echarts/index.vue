<template>
  <div class="r-echarts-line">
    <div class="top">
      <div class="title">
        {{origin.title}}
      </div>
    </div>
    <div class="bottom" id="echart" ref="mychart" style="width: 600px;height: 400px"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markLine'
import { data } from '@/utils/index.js'

export default {
  name: 'LbEcharts',
  data () {
    return {
      // myChart实例
      myChart: {},
      flag: true
    }
  },
  props: {
    index: {
      required: true,
      type: Number
    },
    data: {
      required: true,
      type: Object
    }
  },
  mounted () {
    this.setEchart();
  },
  updated () {
    if (!this.myChart) {
      this.setEchart()
    }
    this.chartChange()
  },
  computed: {
    origin () {
      return this.data
    }
  },
  methods: {
    setEchart () {
      const opt = data[this.index]
      let dom = this.$refs.mychart;
      this.myChart = echarts.init(dom);
      this.myChart.setOption(opt);
    },
    chartChange () {
      const opt = data[this.index]
      this.myChart.setOption(opt)
    }
  }
}
</script>

<style>
</style>