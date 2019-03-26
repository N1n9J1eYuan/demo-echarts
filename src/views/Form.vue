<template>
  <div>
    <lb-input type="text"/>
  </div>
</template>

<script>
import inputs from '@/components/form/input.vue'
export default {
  name: 'FormDemo',
  provide() {
    return {
      form: this,
      name: 'sanfen'
    }
  },
  components: {
    'lb-input': inputs
  },
  data() {
    return {
      age: 19,
      ruleValidate: {
        toefl: [{
          message: '单科分数为 0 - 30 分，请输入正确的分数',
          trigger: 'blur',
          score: [0, 30]
        }]
      }
    }
  }
}
</script>

<style>
</style>