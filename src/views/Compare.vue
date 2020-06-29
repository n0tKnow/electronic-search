<template>
  <div class="compare">

    <table style="width: 100%" class="myTable">
      <tr v-for="key in keys" :key="keys[key]">
        <td class="column">{{ key }}</td>
        <td class="column">{{ item1[key]||"" }}</td>
        <td class="column">{{ item2[key]||"" }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import eventBus from "../router/eventBus.js";
import { searchPhoneByid } from "../net/netUser";
export default {
  data() {
    return {
      item1: {},
      item2: {},
      index : 0,
    };
  },
  computed: {
    keys() {
      return new Set([...Object.keys(this.item1), ...Object.keys(this.item2)]);
    }
  },
  created: function() {
    eventBus.$on("addCompare", id => {
      console.log("add" + id);
      searchPhoneByid(id).then((res) => {
          console.log(res.data.data);
          this.index%2==0?this.item1 = res.data.data[0]:this.item2=res.data.data[0];
          this.index++;
      });
    });
  }
};
</script>

<style scoped>

.myTable {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
}
 
.myTable td,
.myTable th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 60px;
}

</style>