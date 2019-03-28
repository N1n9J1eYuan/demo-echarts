// import AsyncValidator from 'async-validator'
// import _ from 'lodash'

export default {
  methods: {
    setRules() {
      console.log(this.getRules())
    },
    getRules() {
      let formRules = this.form.rules
      const selfRules = this.rules
      formRules = formRules ? formRules[this.prop] : []
      return [].concat(selfRules || formRules || [])
    }
  },
}