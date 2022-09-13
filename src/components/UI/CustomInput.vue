<template>
  <input :value="modelValue" @input="updateInput" :type="typeInput" :placeholder="placeholder">
</template>

<script>
export default {
  name: "customInput",
  props: {
    modelValue: [String, Number],
    typeInput: String,
    placeholder: String,
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  input {
    border: 1px solid gray;
    padding: 10px;
    border-radius: 10px;
    outline: none;
    font-size: 1em;
  }
</style>