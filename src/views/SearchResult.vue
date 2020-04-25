<template>
  <div>
    <NavigationBar />
    <div class="resultList">
      <ResultItem v-for="result of results" :key="result.id" :result="result"></ResultItem>
    </div>
  </div>

</template>

<script>
import ResultItem from "../components/ResultItem";
import NavigationBar from "../components/NavigationBar";
const url =
  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg";
export default {
  /*props: {
    results: Array
  },*/
  components: {
    ResultItem,
    NavigationBar
  },
  data() {
    return {
      results: [
        {
          url:
            "https://img0.pconline.com.cn/pconline/2004/21/g_13373490_1587445398924.jpg",
          title: " 荣耀Play4T Pro性能实测：神U加持，游戏力惊人 ",
          desc:
            "荣耀Play系列一直以来，凭借出色的性能以及竞争力十足的性价比，成为年轻玩家心目中的新机，如今荣耀Play4T Pro正式发布，那么对比上一代荣耀Play系列在性能方面又是否有着显著的提升..."
        },
        {
          url:
            "https://img0.pconline.com.cn/pconline/2004/23/g_13380545_1587643470033.jpg",
          title: "荣耀30 Pro+拍照全体验:IMX700大底加持,前置也好看的影像旗舰",
          desc:
            "荣耀30 Pro+搭载的IMX700主摄提供了旗舰级影像实力，能轻松驾驭白天和黑夜的极端影像场景，全像素八核对焦指哪打哪。而5倍光学变焦支持OIS+EIS防抖，拍人像、拍远景既稳又清晰。1600万超广角镜头兼顾了解析度和广视野，拍大景，拍视频，堪称“全能”，至于自拍，这里卖个关子。"
        },
        {
          url:
            "https://img0.pconline.com.cn/pconline/2004/23/g_13336987_1587614643158.jpg",
          title: "三星S20 Ultra对iPhone 11 Pro Max：顶级旗舰的较量",
          desc:
            "2月份的时候，三星Galaxy S20系列正式发布，其中的最高端型号Galaxy S20 Ultra作为史上最强的三星手机，就难免用来和苹果目前在售的最强型号iPhone 11 Pro Max对比一番了。"
        },
        {
          url:
            "https://img0.pconline.com.cn/pconline/2004/24/g_13377666_1587700881665.jpg",
          title: "一加 8评测：2020年里不可多得的轻薄旗舰",
          desc:
            "[PConline 专业评测]日前，一加科技CEO刘作虎称一加 8系列全系售罄，目前已经加紧扩大产能，满足用户高涨的购机需求。一加 8系列包括一加 8 Pro和一加 8两款产品，在一加 8 Pro这款屏幕机皇产品的衬托下，一加 8 仿佛并不抢眼，但在使用了一段时间的一加 8之后，编辑部里不少同事对这款轻薄旗舰“路转粉”。"
        },
        {
          url:
            "https://img0.pconline.com.cn/pconline/2004/24/g_13383266_1587724924423.jpg",
          title: "荣耀30 Pro+魔改瞄准8倍镜：百步穿杨，只需50倍变焦",
          desc:
            "作为影像旗舰，荣耀30系列引入了新一代潜望棱镜光学超长焦，全系搭载50倍潜望式手持超稳远摄。借助由折射棱镜和横置精密变焦机构组成潜望式光路设计：感光元件垂直放置在手机内，保证轻薄的同时，可以实现实现5倍光学变焦、10倍混合变焦和最高50倍数字变焦。"
        }
      ]
    };
  }
};
</script>

<style scoped>
.resultList {
  width: 80%;
  padding-left: 121px;
  padding-top: 5px;
  margin-top: 35px;
}
</style>