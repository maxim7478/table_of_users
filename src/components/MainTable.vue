<template>
  <div class="main-table" v-show="items.length">
    <div class="main-table__wrapper">
      <div class="main-table__header">
        <div class="main-table__field-wrapper">
          <span>Username</span>
        </div>
        <div class="main-table__field-wrapper">
          <span>First Name</span>
        </div>
        <div class="main-table__field-wrapper">
          <span>Last Name</span>
        </div>
        <div class="main-table__field-wrapper">
          <span>Email</span>
        </div>
        <div class="main-table__field-wrapper">
          <span>Pay Status</span>
        </div>
        <div class="main-table__field-wrapper">
          <span>Profile Link</span>
        </div>
      </div>
      <div class="main-table__body">

        <div v-for="(item, index) in items" :key="item.id" class="main-table__body-wrapper" :class="{'field-color': index % 2 === 0}">
          <div class="main-table__field-wrapper">
            <input :class="{'field-color': index % 2 === 0}" v-model="item.username">
          </div>
          <div class="main-table__field-wrapper">
            <input :class="{'field-color': index % 2 === 0}" v-model="item.first_name">
          </div>
          <div class="main-table__field-wrapper">
            <input :class="{'field-color': index % 2 === 0}" v-model="item.last_name">
          </div>
          <div class="main-table__field-wrapper">
            <input :class="{'field-color': index % 2 === 0}" v-model="item.email">
          </div>
          <div class="main-table__field-wrapper">
            <input :class="{'field-color': index % 2 === 0}" v-model="item.pay_status">
          </div>
          <div class="main-table__field-wrapper">
            <input :class="{'field-color': index % 2 === 0}" v-model="item.profile_link">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTable",
  props: ['searchItem', 'typeSort'],
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.$store.dispatch('setFirstData')
    this.getData()
  },
  methods: {
    getData() {
      if (this.typeSort) {
        this.items = this.$store.getters.sortUsers(this.typeSort);
      } else {
        this.items = this.$store.getters.allUsers;
      }
    }
  },
  watch: {
    searchItem() {
      if (!this.searchItem) {
        this.items = this.$store.getters.allUsers;
      } else {
        this.items = this.$store.getters.searchingUsers(this.searchItem);
      }
    },
    typeSort() {
      this.items = this.$store.getters.sortUsers(this.typeSort);
    },
  }
}
</script>

<style scoped lang="scss">
  .field-color {
    background-color: #fbf1da;
  }
  .main-table {
    width: 100%;
    height: 100%;
    &__wrapper {
      border: 1px solid black;
      border-radius: 10px;
      overflow: hidden;
    }
    &__header {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: #1959a5;
    }
    &__body-wrapper {
      display: flex;
    }
    &__field-wrapper {
      width: 16.6%;
      overflow: hidden;
      height: 100%;
      min-height: 50px;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    & input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      text-align:center;
      font-size: 1em;
    }
  }

</style>