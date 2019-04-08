import echarts from 'echarts'
export const data = {
  1: {
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '水量',
        min: 0,
        max: 100,
        interval: 15,
        axisLabel: {
          formatter: '{value} ml'
        }
      }
    ],
    series: [
      {
        name:'蒸发量',
        type:'bar',
        data:[10.0, 14.9, 27.0, 83.2, 25.6]
      }
    ]
  },
  2: {
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '水量',
        min: 0,
        max: 100,
        interval: 15,
        axisLabel: {
          formatter: '{value} ml'
        }
      }
    ],
    series: [
      {
        name:'蒸发量',
        type:'line',
        data:[10.0, 14.9, 27.0, 83.2, 25.6]
      }
    ]
  },
  3: {
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: true},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    legend: {
      data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '水量',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: '温度',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C'
        }
      }
    ],
    series: [
      {
        name:'蒸发量',
        type:'bar',
        data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      },
      {
        name:'降水量',
        type:'bar',
        data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
        name:'平均温度',
        type:'line',
        yAxisIndex: 1,
        data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ],
    color: ['rgb(164,200,0)','rgb(42,255,20)','rgb(25,200,94)']
  },
  4: {
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
    ]
  }
}

export const data2 = {

  color: ["#0080ff","#4cd5ce"],
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  legend: {
    data: ['邮件营销'],
    align: 'left',
    left: 10,
  },
  xAxis : [
      {
          type : 'category',
          boundaryGap : false,
          data : ['周一','周二','周三','周四','周五','周六','周日'],
          splitLine: {
              show: true
          }
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [

      {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          smooth: true,
          itemStyle: {  
              normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                          offset: 0, color: '#d7f4f8' // 0% 处的颜色
                      }, {
                          offset: 0.5, color: '#eefcfd' // 100% 处的颜色
                      }, {
                          offset: 1, color: '#fff' // 100% 处的颜色
                      }]
                  ),  //背景渐变色 
                  lineStyle: {        // 系列级个性化折线样式  
                      width: 2,  
                      type: 'solid',  
                      color: "#4fd6d2"
                  }
              },  
              emphasis: {  
                  color: '#4fd6d2',  
                  lineStyle: {        // 系列级个性化折线样式  
                      width:2,  
                      type: 'dotted',  
                      color: "#4fd6d2" //折线的颜色
                  }  
              }  
          },//线条样式  
          symbolSize:5, //折线点的大小
          areaStyle: {normal: {}},
          data:[320, 332, 601, 134, 120, 230, 210]
      }
  ],
  dataZoom: [
      {
          type: 'inside',
          startValue: 0,
          endValue: 4,
          zoomLock: true
      }
  ]
}
