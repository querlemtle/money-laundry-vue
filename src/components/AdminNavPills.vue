<template>
  <div class="container mt-4 mb-2">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="newest"
              >最近更新</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="jobs">求職</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="startup">創業</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="investment">投資</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="gamble">賭博</router-link>
          </li>
          <li class="ms-auto">
            <router-link
              class="btn btn-warning"
              :to="{ path: '/admin/option/new' }"
              >新增選項</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/adminNavPills.css"></style>
