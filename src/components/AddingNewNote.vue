<template>
  <custom-dialog>
    <img src="@/assets/images/close_button.ico"
         @click="$emit('close')"
         height="20" width="20"/>
    <div class="adding-dialog">
      <div class="adding-dialog__dialog_item">
      <span><i>*</i>Username:</span>
      <custom-input v-model="username" type="text" placeholder="Enter Username"/>
      </div>
      <div class="adding-dialog__dialog_item">
        <span><i>*</i>First Name:</span>
        <custom-input v-model="first_name" type="text" placeholder="Enter First Name"/>
      </div>
      <div class="adding-dialog__dialog_item">
        <span><i>*</i>Last Name:</span>
        <custom-input v-model="last_name" type="text" placeholder="Enter Last Name"/>
      </div>
      <div class="adding-dialog__dialog_item">
        <span><i>*</i>Email:</span>
        <custom-input v-model="email" type="text" placeholder="Enter Email"/>
      </div>
      <div class="adding-dialog__dialog_item">
        <span>Pay Status:</span>
        <input v-model="pay_status" id="pay_status" type="checkbox"/>
      </div>
      <div class="adding-dialog__dialog_item">
        <span>Profile Link:</span>
        <custom-input v-model="profile_link" type="text" placeholder="Enter Profile Link"/>
      </div>
      <div v-if="errorField" class="adding-dialog__error-field">
        <span>Enter all required fields</span>
      </div>
      <div>
        <CustomButton @click="addNote">Add Note</CustomButton>
      </div>
    </div>
  </custom-dialog>
</template>

<script>
import CustomDialog from "./UI/CustomDialog.vue";
import CustomInput from "./UI/CustomInput.vue";
import CustomButton from "./UI/CustomButton.vue";
export default {
  name: "AddingNewNote",
  components: {CustomButton, CustomInput, CustomDialog},
  data() {
    return {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      pay_status: false,
      profile_link: '',
      errorField: false,
    }
  },
  methods: {
    addNote() {
      if (!this.username || !this.first_name || !this.last_name || !this.email) {
        this.errorField = true
      } else {
        let id = Math.random()*1000
        const params = {
          id: Number(id.toFixed(0)),
          email: this.email,
          last_name: this.last_name,
          pay_status: this.pay_status,
          first_name: this.first_name,
          profile_link: this.profile_link,
          username: this.username,
        }
        this.$store.dispatch('addNewItem', params)
        this.$emit('updateData')
      }
    }
  }
}
</script>

<style scoped lang="scss">

  img {
    position: absolute;
    top: 2px;
    right: 2px;
    cursor: pointer;
  }
  i {
    color: red;
    margin-right: 1px;
  }
  .adding-dialog {
    width: 100%;
    display: grid;
    &__error-field {
      color: red;
      margin: 10px;
    }
    &__dialog_item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      position: relative;
      & span {
        margin-right: 20px;
      }
    }
  }
</style>