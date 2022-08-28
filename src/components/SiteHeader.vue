<template>
  <header class="site-header sticky-top py-1">
    <nav
      class="container col-10 d-flex flex-column flex-md-row justify-content-between"
    >
      <router-link class="py-2" to="/home" aria-label="Product">
        <img src="../assets/pictures/logo.svg" alt="logo" />
      </router-link>
      <router-link class="py-2 d-none d-md-inline-block" to="/fqa"
        >資訊查詢</router-link
      >
      <router-link class="py-2 d-none d-md-inline-block" to="/game"
        >遊戲專區</router-link
      >
      <a class="py-2 d-none d-md-inline-block" href="#">與我聯絡</a>
      <router-link class="py-2 d-none d-md-inline-block" to="/admin/login"
        >管理者登入</router-link
      >
    </nav>
  </header>
</template>

<style scoped src="@/assets/css/siteHeader.css"></style>
