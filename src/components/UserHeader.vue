<template>
  <div class="header">
    <ul>
      <li>
        <router-link to="/home"
          ><h1 class="title">MONEY-LAUNDRY-LIBRARY</h1>
        </router-link>
      </li>
      <li>
        <router-link class="py-2 d-none d-lg-inline-block" to="/fqa"
          >資訊查詢</router-link
        >
      </li>
      <li>
        <router-link class="py-2 d-none d-lg-inline-block" to="/game"
          >遊戲專區</router-link
        >
      </li>
      <li>
        <a href="" class="py-2 d-none d-lg-inline-block">與我聯絡</a>
      </li>
      <li>
        <router-link class="py-2 d-none d-lg-inline-block" to="/admin/login"
          >管理者登入</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400;500;600;700&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");
@font-face {
  font-family: "辰宇落雁體 Thin";
  src: url("./../assets/fonts/ChenYuluoyan-Thin.ttf") format("truetype");
  src: url("./../assets/fonts/ChenYuluoyan-Thin.woff") format("woff");
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
</style>
