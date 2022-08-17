<template>
  <div>
    <AdminHeader />
    <AdminNavPills />
    <DataList />
  </div>
</template>

<script>
import AdminHeader from "../components/AdminHeader.vue";
import DataList from "../components/DataList.vue";
import AdminNavPills from "../components/AdminNavPills.vue";

export default {
  components: {
    AdminHeader,
    DataList,
    AdminNavPills,
  },
  beforeRouteUpdate(to, from, next) {
    // 透過路由找出目前所在分頁
    // TODO：發出對應 API 請求
    switch (to.name) {
      case "dashboard-newest":
        console.log("requesting newest");
        break;
      case "dashboard-jobs":
        console.log("requesting jobs");
        break;
      case "dashboard-startup":
        console.log("requesting startup");
        break;
      case "dashboard-investment":
        console.log("requesting investment");
        break;
      case "dashboard-gamble":
        console.log("requesting gamble");
        break;
      default:
        break;
    }
    next();
  },
};
</script>
