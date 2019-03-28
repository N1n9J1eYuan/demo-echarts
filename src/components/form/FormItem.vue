<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import validatorInput from '@/mixins/validatorInput.js'
export default {
  name: 'FormItem',
  inject: ['form'],
  mixins: [validatorInput],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    prop: {
      type: String
    }
  },
  mounted() {
    // console.log(this.form.rules, 26)
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