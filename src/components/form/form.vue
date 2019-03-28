<template>
  <form autocomplete="off"><slot></slot></form>
</template>

<script>
import formMixin from '@/mixins/form.js'
export default {
  name: 'LbForm',
  props: {
    rules: {
      type: Object,
      default: null
    },
    model: {
      type: Object
    }
  },
  mixins: [],
  provide() {
    return { form : this };
  },
  mounted() {}
}
</script>

<style>
</style>