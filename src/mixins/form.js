// import AsyncValidator from 'async-validator'
// import _ from 'lodash'

export default {
  data() {
    return {
      fields: [] // 所有需要校验的dom节点的容器
    }
  },
  created() {
    this.$on('on-form-item-add', field => {
      if (field) this.fields.push(field);
      return false;
    })
    this.$on('on-form-item-remove', field => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
      return false;
    })
  }
}