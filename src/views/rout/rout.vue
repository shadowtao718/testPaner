<template>
  <div>
    {{ count }}
    <a-button @click="btn">点击增加</a-button>
    <a-button @click="btnSyc(5)">点击增加1</a-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      count: (state) => state.rout.count,
    }),
  },
  methods: {
    btnSyc() {
      //   this.$store.dispatch("rout/addSyc", 10);
    },

    btn() {
      this.btn();
    },
    ...mapMutations("rout", {
      btn: "ROUT_LIST_DEV",
    }),

    ...mapActions({
      btnSyc: "rout/addSyc",
    }),
  },
};
</script>

<style></style>
