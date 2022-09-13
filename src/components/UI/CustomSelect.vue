<template>
  <select v-model="typeSort" @change="changeTypeSorting">
    <option disabled :value="null">Select</option>
    <option v-for="(item, index) in items" :value="item.value" :key="index">{{ item.text }}</option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  props: ['items'],
  data() {
    return {
      typeSort: null
    }
  },
}
</script>

<style scoped lang="scss">
 select {
   padding: 10px 20px;
   border-radius: 10px;
   outline: none;
   background-color: white;
   height: 100%;
   border: 1px solid gray;
   font-size: 1em;
 }
</style>