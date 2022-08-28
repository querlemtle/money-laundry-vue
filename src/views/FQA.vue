<template>
  <div class="body">
    <UserHeader />
    <div class="container">
      <div class="banner row justify-content-center align-items-center mb-4">
        <h1 class="banner_text col-10">洗錢防制<br />資訊查詢專區</h1>
      </div>

      <div class="content">
        <div class="search-group d-flex row align-items-center">
          <div class="align-items-center d-flex col-10">
            <label
              class="col-4 col-md-3 fs-4 fs-md-3 py-3 rounded-start text-white"
              for="crop"
              >關鍵字查詢</label
            >
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="請輸入查詢內容"
              aria-label=".form-control-lg example"
              v-model="inputtext"
            />
          </div>
          <button
            type="button"
            class="col-2 fs-4 search text-white btn btn-dark"
            @click="search()"
          >
            搜尋
          </button>
        </div>

        <div
          v-if="isroleopen"
          class="role row justify-content-around align-items-center mb-4 gap-4"
        >
          <button
            type="button"
            class="btn-lg col-10 col-md-4 col-lg-2 btn btn-outline-secondary"
          >
            我是學生
          </button>
          <button
            type="button"
            class="btn-lg col-10 col-md-4 col-lg-2 btn btn-outline-secondary"
          >
            我是上班族
          </button>
          <button
            type="button"
            class="btn-lg col-10 col-md-4 col-lg-2 btn btn-outline-secondary"
          >
            我是金融人員
          </button>
          <button
            type="button"
            class="btn-lg col-10 col-md-4 col-lg-2 btn btn-outline-secondary"
          >
            我是退休人員
          </button>
        </div>
        <div
          v-if="isroleopen"
          class="role row justify-content-around align-items-center mb-4 gap-4"
        >
          <button
            type="button"
            class="btn-lg col-10 col-md-4 col-lg-2 btn btn-outline-success"
          >
            ATM提領轉帳
          </button>
          <button
            type="button"
            class="btn-lg col-10 col-md-4 col-lg-2 btn btn-outline-success"
          >
            有價證券買賣
          </button>
          <button
            type="button"
            class="btn-lg col-10 col-md-4 col-lg-2 btn btn-outline-success"
          >
            不動產交易
          </button>
          <button
            type="button"
            class="btn-lg col-10 col-md-4 col-lg-2 btn btn-outline-success"
          >
            外匯交易
          </button>
        </div>
        <div v-if="!isroleopen">
          <h2>
            符合 <span class="keyword">{{ searchtext }} </span>之最新五筆案例
          </h2>
          <div class="container mb-4">
            <div class="row justify-content-around">
              <div class="col-md-10">
                <table class="table">
                  <thead class="table-head">
                    <tr>
                      <th scope="col">法院</th>
                      <th scope="col">判決字號</th>
                      <th scope="col">判決日期</th>
                      <th scope="col">備註</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in datalist" :key="i.id">
                      <th scope="row">{{ i.court }}</th>
                      <td>{{ i.doc_number }}</td>
                      <td>{{ i.date }}</td>
                      <td>
                        詳細案例資料
                        <router-link to="/fqa_item"
                          ><i class="fa-solid fa-file-lines"></i
                        ></router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue";

export default {
  name: "Home",
  data() {
    return {
      isroleopen: true,
      inputtext: "",
      searchtext: "",
      datalist: [
        {
          id: 1,
          court: "最高法院",
          date: "2022/2/23",
          doc_number: "110年度台上大字第1797號",
        },
        {
          id: 2,
          court: "最高法院",
          date: "2020/12/16",
          doc_number: "108年度台上大字第3101號",
        },
        {
          id: 3,
          court: "嘉義地方法院",
          date: "2020/4/24",
          doc_number: "109年度金重訴字第2號",
        },
        {
          id: 4,
          court: "最高法院",
          date: "2020/2/13",
          doc_number: "108 年度台上字第 3993 號",
        },
        {
          id: 5,
          court: "最高法院",
          date: "2011/3/24",
          doc_number: "100 年度台上字第 5138 號",
        },
      ],
    };
  },
  components: {
    UserHeader,
  },
  methods: {
    search() {
      this.isroleopen = false;
      this.searchtext = this.inputtext;
      this.inputtext = "";
    },
  },
};
</script>

<style scoped src="@/assets/css/FQA.css"></style>
