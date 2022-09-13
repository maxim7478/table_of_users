<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton"
}
</script>

<style scoped lang="scss">
 button {
   border-radius: 10px;
   background-color: white;
   border: 1px solid gray;
   outline: none;
   padding: 10px 20px;
   &:hover {
     background-color: #1959a5;
     color: white;
     transform: translate(0, -1px);
    }
   &:active {
     transform: translate(0, 0);
   }
 }
</style>