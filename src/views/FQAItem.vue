<template>
  <div class="body">
    <UserHeader />
    <div class="container">
      <div class="content">
        <h2>
          <router-link class="py-2 d-none d-md-inline-block" to="/fqa"
            >返回資料查詢</router-link
          >
        </h2>
        <div class="itemtext container">
          <div class="itemtitle">
            <p>法院: {{ item.court }}</p>
            <p>判決字號: {{ item.doc_number }}</p>
            <p>判決日期: {{ item.date }}</p>
            <p>判決類別: {{ item.judgment_type }}</p>
            <p>理由: {{ item.reason }}</p>
            <p>主文: {{ item.main_text }}</p>
          </div>
          <div class="itemlaw">
            <p>法條: {{ item.description }}</p>
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
      item: {
        id: 1,
        court: "最高法院",
        date: "2020/2/13",
        doc_number: "108 年度台上字第 3993 號",
        judgment_type: "刑事判決",
        reason: "違反洗錢防制法",
        main_text: "原判決撤銷，發回臺灣高等法院",
        description:
          "洗錢防制法業於民國 105 年 12 月 28 日修正公布，並 於 106 年 6 月 28 日生效施行（下稱新法）。修正前該法（ 下稱舊法）第 1 條揭櫫之立法目的為「防制洗錢，追查重大 犯罪」，而本次修法後修正為「為防制洗錢，打擊犯罪，健 全防制洗錢體系，穩定金融秩序，促進金流之透明，強化國 際合作」，其立法目的及保護法益，已自單純國家對重大（ 特定）犯罪之追訴及處罰，擴增至防制洗錢體系之健全、金 融秩序之穩定及透明金流軌跡之建置。至於洗錢犯罪本質在 於影響合法資本市場並阻撓偵查，且洗錢之行為包含處置（ 即將犯罪所得直接予以處理）、多層化（即為使偵查機關難 以追查金流狀況，以迂迴層轉、化整為零之多層化包裝方式 ，掩飾或隱匿特定犯罪所得）及整合（即收受、持有或使用 他人犯罪所得，使該犯罪所得披上合法之外衣，回歸正常金 融體系）等各階段行為，其模式不祗一端，故為澈底打擊洗 錢犯罪，新法乃參照相關國際標準建議及公約之洗錢行為定 義，將洗錢行為之處置、多層化及整合等各階段，全部納為 洗錢行為，而於新法第 2 條規定：「本法所稱洗錢，指下列 行為：一、意圖掩飾或隱匿特定犯罪所得來源，或使他人逃 避刑事追訴，而移轉或變更特定犯罪所得。二、掩飾或隱匿 特定犯罪所得之本質、來源、去向、所在、所有權、處分權 或其他權益者。三、收受、持有或使用他人之特定犯罪所得 。」以求與國際規範接軌。從而，行為人對於特定犯罪所得 ，基於洗錢之犯意，參與整體洗錢過程中任一環節之處置、 分層化或整合行為，致生新法所保護法益之危險者，即應屬 新法所欲禁絕之洗錢行為，至該行為是否已使特定犯罪所得 轉換成合法來源之財產，則非所問。而上開第 1 款之洗錢行 為，祗以有掩飾或隱匿特定犯罪所得來源之意圖，與「移轉 」或「變更」特定犯罪所得之行為，即為已足，不以有掩飾 或隱匿特定犯罪所得來源之行為為必要。所稱「移轉特定犯 罪所得」，係指將刑事不法所得移轉予他人，以達成隱匿效 果而言；所謂「變更特定犯罪所得」，乃指將刑事不法所得 之原有法律或事實上存在狀態予以變更而達成隱匿效果",
      },
    };
  },
  components: {
    UserHeader,
  },
};
</script>

<style scoped src="@/assets/css/FQAItem.css"></style>
