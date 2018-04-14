import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './home.vue'
const echarts = require('echarts')
@Component({
  mixins: [Template]
})
export default class Home extends Vue {
  apps = [
    {
      text: '应用1'
    },
    {
      text: '应用2'
    },
    {
      text: '应用3'
    },
    {
      text: '应用4'
    },
    {
      text: '应用5'
    },
    {
      text: '应用6'
    }
  ]

  activeName1: string = '1'
  activeName2: string = '1'

  option1 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['产品一', '产品二', '产品三', '产品四', '产品五']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: '产品一' },
          { value: 310, name: '产品二' },
          { value: 234, name: '产品三' },
          { value: 135, name: '产品四' },
          { value: 1548, name: '产品五' }
        ]
      }
    ]
  }

  option2 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['产品一', '产品二', '产品三', '产品四', '产品五']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: '产品一' },
          { value: 310, name: '产品二' },
          { value: 234, name: '产品三' },
          { value: 135, name: '产品四' },
          { value: 1548, name: '产品五' }
        ]
      }
    ]
  }

  option3 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['产品一', '产品二', '产品三']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 335, name: '产品一' },
          { value: 310, name: '产品二' },
          { value: 234, name: '产品三' }
        ]
      }
    ]
  }

  option = [this.option1, this.option2, this.option3]
  myChart = null

  tableData = [
    {
      date: '2016-05-02',
      name: '产品1',
      num: '100'
    },
    {
      date: '2016-05-04',
      name: '产品2',
      num: '100'
    },
    {
      date: '2016-05-01',
      name: '产品3',
      num: '100'
    },
    {
      date: '2016-05-03',
      name: '产品4',
      num: '100'
    }
  ]

  handleClick(tab, event) {
    // 绘制图表
    this.myChart.setOption(this.option[Number(tab.name) - 1])
  }

  handleClickTable(tab, event) {

  }

  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = (echarts as any).init(
      document.getElementById('echartContainer')
    )
    this.myChart.setOption(this.option[0])
  }
}
