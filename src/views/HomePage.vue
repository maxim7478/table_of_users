<template>
  <div class="home-page">
    <Navbar @searchData="searchData" @changeSort="changeSort" @showAddingNote="showAddingNote = true"/>
    <div class="home-page__content-wrapper">
      <main-table ref="tableData" :search-item="searchItem" :typeSort="typeSort"/>
    </div>
    <div class="home-page__modal-wrapper" v-if="showAddingNote">
      <adding-new-note class="home-page__dialog" @close="showAddingNote = false" @updateData="updateData"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MainTable from "../components/MainTable.vue";
import AddingNewNote from "../components/AddingNewNote.vue";
export default {
  name: "HomePage",
  components: {
    MainTable,
    Navbar,
    AddingNewNote,
  },
  data() {
    return {
      searchItem: null,
      typeSort: null,
      showAddingNote: false
    }
  },
  methods: {
    searchData(searchItem) {
      this.searchItem = searchItem
    },
    changeSort(typeSort) {
      this.typeSort = typeSort
    },
    updateData() {
      this.showAddingNote = false;
      this.$refs.tableData.getData()
    }
  }
}
</script>

<style scoped lang="scss">
  .home-page {
    height: 100%;
    width: 100%;
    &__content-wrapper {
      max-width: 1280px;
      margin: 0 auto;
      padding: 10px;
    }
    &__dialog {
      max-width: 400px;
      display: grid;
      background-color: white;
    }
    &__modal-wrapper {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      justify-content: center;
      align-items: center;
      display: flex;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
</style>