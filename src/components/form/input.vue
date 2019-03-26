<template>
  <div>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'LbInput',
  inject: ['form', 'name'],
  components: {
    type: {
      type: String,
      default: 'text'
    }
  },
  mounted() {
    console.log(this.form.age)
  }
}
</script>

<style>
</style>