import * as echarts from 'echarts/core'
import {
  LineChart,
  LineSeriesOption,
  BarChart,
  BarSeriesOption,
  PieChart,
  PieSeriesOption,
  RadarChart,
  RadarSeriesOption
} from 'echarts/charts'
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  DatasetComponent,
  DatasetComponentOption,
  TransformComponent,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components'

import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

import { useSettingStore } from '@/store/modules/setting'
import { useThrottle } from '@/hooks/logic/useDelay'

export type ECOption = echarts.ComposeOption<
  BarSeriesOption
  | LineSeriesOption
  | PieSeriesOption
  | RadarSeriesOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
>

// 注册必须的组件
echarts.use([
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default echarts

export function initChart(root: HTMLDivElement, options: ECOption) {
  const myChart = echarts.init(root)
  myChart.setOption(options)
  const settingStore = useSettingStore()
  watch(settingStore.isDark, v => {
    myChart.setOption({
      darkMode: v
    })
  }, {
    immediate: true
  })
  onResize(root, myChart)
  return myChart
}

export function onResize(root: HTMLDivElement, chart: echarts.ECharts) {
  const throttleResize = useThrottle(() => {
    chart.resize({
      width: 'auto',
      height: 'auto',
    })
  }, 400)
  const resizeObserver = new ResizeObserver(() => throttleResize())
  resizeObserver.observe(root)
}
