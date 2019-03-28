<template>
  <form>
    <lb-form :rules="ruleValidate" :model="formData">
      <form-item prop="toefl">
        <input type="number" v-model="formData.toefl"/>
      </form-item>
    </lb-form>
  </form>
</template>

<script>
import formItem from '@/components/form/FormItem.vue';
import lbForm from '@/components/form/form.vue';
import ValidatorUtils from '@/utils/validatorUtils';
export default {
  name: 'FormDemo',
  components: {
    formItem,
    lbForm
  },
  data() {
    return {
      ruleValidate: {
        toefl: [
          { required: true, type: 'string', trigger: 'blur' },
          { validator: (rule, val, callBack) => {
            if (val > 30 || val < 0) {
              callBack('请输入正确的分数')
              alert('请输入正确的分数')
              console.log(rule)
              this.formData[rule.field] = ''
            }
          }}
        ]
      },
      formData: {
        toefl: null
      }
    }
  },
  created() {
    this.validator = new ValidatorUtils({
      rules: this.ruleValidate,
      data: this.formData,
      automatic: true,
      self: this })
    this.formData = this.validator.Data
  }
}
</script>

<style>
</style>