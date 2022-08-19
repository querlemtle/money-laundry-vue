<template>
  <header class="site-header sticky-top py-1">
    <nav
      class="container col-10 d-flex flex-column flex-md-row justify-content-between"
    >
      <a class="py-2" href="#" aria-label="Product">
        <img src="../assets/pictures/logo.svg" alt="logo" />
      </a>
      <p class="py-2 d-none d-md-inline-block" href="#">管理者，您好</p>
      <router-link class="py-2 d-none d-md-inline-block" to="/admin/login"
        >登出</router-link
      >
    </nav>
  </header>
</template>

<style scoped src="@/assets/css/adminHeader.css"></style>
