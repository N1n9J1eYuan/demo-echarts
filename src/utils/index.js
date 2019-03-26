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