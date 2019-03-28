import AsyncValidator from 'async-validator'
import _ from 'lodash'

export default {
  data() {
    return {
      fields: [] // 所有需要校验的dom节点的容器
    }
  },
  mounted() {
    console.log(AsyncValidator, _)
  }
}