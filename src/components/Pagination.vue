<template>
  <div class="container">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <Paginate
      :page-count="20"
      :click-handler="functionName"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'className'"
      >>
    </Paginate>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";
export default {
  name: "Pagination",
  components: {
    Paginate,
  },
  data() {},
};
</script>

<style scoped>
.page-item a {
  color: #802626;
}

.disabled a {
  color: #d8ccc1;
}
</style>
