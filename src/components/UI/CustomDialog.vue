<template>
  <div class="custom-dialog">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CustomDialog"
}
</script>

<style scoped lang="scss">
  .custom-dialog {
    border-radius: 10px;
    border: 1px solid black;
    padding: 1%;
    position: relative;
  }
</style>