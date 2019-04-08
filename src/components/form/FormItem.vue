<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// import validatorInput from '@/mixins/validatorInput.js'
import emmiter from '@/mixins/emmiter.js'
import formItem from '@/mixins/formItem.js'
export default {
  name: 'FormItem',
  inject: ['form'],
  mixins: [formItem, emmiter],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    prop: {
      type: String
    },
    rules: {
      type: [Object, Array]
    }
  },
  data() {
    return {
      isRequired: false
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch('LbForm', 'on-form-item-add', this)
      this.setRules()
    }
  }
}
</script>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
</style>