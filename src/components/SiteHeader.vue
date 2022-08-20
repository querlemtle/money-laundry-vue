<template>
  <header class="site-header sticky-top py-1">
    <nav
      class="container col-10 d-flex flex-column flex-md-row justify-content-between"
    >
      <a class="py-2" href="#" aria-label="Product">
        <img src="../assets/pictures/logo.svg" alt="logo" />
      </a>
      <a class="py-2 d-none d-md-inline-block" href="#">資訊查詢</a>
      <a class="py-2 d-none d-md-inline-block" href="#">遊戲專區</a>
      <a class="py-2 d-none d-md-inline-block" href="#">與我聯絡</a>
      <router-link class="py-2 d-none d-md-inline-block" to="/admin/login"
        >管理者登入</router-link
      >
    </nav>
  </header>
</template>

<style scoped src="@/assets/css/siteHeader.css"></style>
