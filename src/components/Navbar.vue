<template>
  <div class="navbar">
    <div class="navbar__wrapper">
      <div class="navbar__content">
        <div class="navbar__sort-search">
          <custom-input v-model="searchData" placeholder="Search"
                        type-input="search" @input="$emit('searchData', searchData)"/>
          <custom-select :items="optionSort" v-model="selectedSort" class="navbar__sort-wrapper" @change="changeSort"/>
        </div>
        <div class="navbar__add-button">
          <div class="navbar__add-button-wrapper">
            <custom-button @click="$emit('showAddingNote')">
              Add Note
            </custom-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "./UI/CustomInput.vue";
import CustomButton from "./UI/CustomButton.vue";
import CustomSelect from "./UI/CustomSelect.vue";
export default {
  name: "Navbar",
  components: {CustomButton, CustomInput, CustomSelect},
  data() {
    return {
      searchData: null,
      optionSort: [
        { value: 'username', text: 'Username' },
        { value: 'payStatus', text: 'Pay Status' },
      ],
      selectedSort: null
    }
  },
  methods: {
    changeSort() {
      this.$emit('changeSort', this.selectedSort)
    }
  }
}
</script>

<style scoped lang="scss">
  .navbar {
    height: 50px;
    background-color: white;
    box-shadow: 1px 1px 5px black;

    &__wrapper {
      max-width: 1280px;
      margin: 0 auto;
      height: 100%;
    }
    &__sort-wrapper {
      margin-left: 10px;
    }
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  }
</style>