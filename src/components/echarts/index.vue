<template>
  <div class="r-echarts-line">
    <div class="top">
      <div class="title">
        {{origin.title}}
      </div>
    </div>
    <div class="bottom" id="echart" ref="mychart" style="width: 400px;height: 400px"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markLine'

export default {
  name: 'LbEcharts',
  data () {
    return {
      // myChart实例
      myChart: {}
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
    },
    opt() {
      let obj = {
        calculable : true,
        xAxis: [
          {
            type: 'category',
            data: ['', '上个周期','当前周期'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '累计练习数量',
            min: 0,
            max: 10,
            interval: 2,
            axisLabel: {
              formatter: '{value} 个'
            }
          }
        ],
        series: [
          {
            name:'累计练习数量',
            type:'bar',
            data:[2, 4, 6],
            barWidth: 30,
            label: {
              normal: {
                show: true,
                position: 'insideTop',
                color: '#000',
                fontSize: 18
              }
            },
            markLine : {
              data : [
                { type : 'average', name: '平均值' }
              ]
            }
          },
          {
            name:'分数',
            type:'bar',
            data:[5, 4, 7],
            barWidth: 30,
            label: {
              normal: {
                show: true,
                position: 'insideTop',
                color: '#000',
                fontSize: 18
              }
            },
            markLine : {
              data : [
                {
                  type : 'average',
                  name: '平均值',
                  label: {
                    show: true,
                    position: 'end',
                    formatter: ''
                  }
                }
              ]
            }
          }
        ],
        color: ['rgb(251,223,83)','rgb(240,158,114)', 'rgb(0, 0, 0)']
      }
      return obj
    }
  },
  methods: {
    setEchart () {
      let dom = this.$refs.mychart;
      this.myChart = echarts.init(dom);
      this.myChart.setOption(this.opt);
    },
    chartChange () {
      this.myChart.setOption(this.opt);
    }
  }
}
</script>

<style>
</style>