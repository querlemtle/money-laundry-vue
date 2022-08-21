<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead class="table-head">
            <tr>
              <th scope="col">類別</th>
              <th scope="col">
                所屬關卡 <i class="fa-solid fa-caret-down c-black"></i>
              </th>
              <th scope="col">選項</th>
              <th scope="col">狀態</th>
              <th scope="col">更新日期</th>
              <th scope="col">是否合法</th>
              <th scope="col">功能</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in itemlist" :key="i.id">
              <th scope="row">{{ i.category }}</th>
              <td>{{ i.level }}</td>
              <td>{{ i.name }}</td>
              <td>{{ i.isPublished ? "已發布" : "草稿" }}</td>
              <td>{{ i.updatedAt | fromNow }}</td>
              <td>{{ i.isLegal ? "是" : "否" }}</td>
              <td>
                <span @click="edititem(i.id)"
                  ><i class="fa-solid fa-pen-to-square"></i
                ></span>
                <span @click="deleteitem(i.name, i.id)"
                  ><i class="fa-solid fa-trash-can"></i
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

export default {
  name: "DataList",
  props: {
    itemlist: {
      type: Array,
      required: true,
    },
  },
  mixins: [fromNowFilter],
  methods: {
    edititem(id) {
      this.$store.commit("setOption", id);
      this.$router.push(`/admin/option/${id}`);
    },
    deleteitem(name, id) {
      this.$emit("delete", name, id);
    },
  },
};
</script>

<style scoped src="@/assets/css/dataList.css"></style>
