<template>
  <div class="header">
    <ul>
      <li>
        <router-link to="/home"
          ><h1 class="title">MONEY-LAUNDRY-LIBRARY</h1>
        </router-link>
      </li>
      <li>
        <router-link class="py-2 d-none d-md-inline-block" to="/fqa"
          >資訊查詢</router-link
        >
      </li>
      <li>
        <router-link class="py-2 d-none d-md-inline-block" to="/game"
          >遊戲專區</router-link
        >
      </li>
      <li>
        <a href="" class="py-2 d-none d-md-inline-block">與我聯絡</a>
      </li>
      <li>
        <router-link class="py-2 d-none d-md-inline-block" to="/admin/login"
          >管理者登入</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "辰宇落雁體 Thin";
  src: url("/fonts/ChenYuLuoYanTi-Thin.ttf") format("truetype"),
    url("/fonts/ChenYuLuoYanTi-Thin.woff") format("woff");
}

* {
  font-family: "Edu VIC WA NT Beginner", "辰宇落雁體 Thin";
  list-style: none;
}
.site-header {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #8e8e8e;
  transition: color 0.15s ease-in-out;
}
.site-header a:hover {
  color: black;
  text-decoration: none;
}

.body {
  background-color: #d8ccc1;
}

a {
  text-decoration: none;
  color: black;
}

.header {
  height: 10vh;
  padding: 0 20px;
  padding-bottom: 20px;
  font-size: 24px;
  background-image: url("./../assets/pictures/paper.png");
  background-size: cover;
  background-position: bottom;
}

ul {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: green;
}

@media (max-width: 992px) {
}
</style>
