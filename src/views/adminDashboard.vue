<template>
  <div>
    <Header />
    <Tabs />
    <DataList />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import DataList from "../components/DataList.vue";
import Tabs from "../components/Tabs.vue";

export default {
  components: {
    Header,
    DataList,
    Tabs,
  },
};
</script>
