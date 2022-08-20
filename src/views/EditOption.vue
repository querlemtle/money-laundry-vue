<template>
  <div>
    <AdminHeader />
    <div class="wrap">
      <h4 class="title text-center py-3">修改選項</h4>
      <OptionForm />
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue";
import OptionForm from "../components/OptionForm.vue";

export default {
  name: "EditOption",
  components: {
    AdminHeader,
    OptionForm,
  },
  data() {
    return {
      description: "",
    };
  },
  methods: {},
};
</script>

<style scoped src="@/assets/css/createOption.css"></style>
