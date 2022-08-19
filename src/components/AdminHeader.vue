<template>
  <header class="site-header sticky-top py-1">
    <nav
      class="container col-10 d-flex flex-column flex-md-row justify-content-between"
    >
      <a class="py-2" href="#" aria-label="Product">
        <img src="../assets/pictures/logo.svg" alt="logo" />
      </a>
      <p class="py-2 d-none d-md-inline-block">管理者，您好</p>
      <div class="py-2 d-none d-md-inline-block" @click.prevent.stop="logout">
        登出
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AdminHeader",
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/admin/login");
    },
  },
};
</script>

<style scoped src="@/assets/css/adminHeader.css"></style>
