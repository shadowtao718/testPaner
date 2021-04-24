<template>
  <div>
    <div v-for="(item, index) in list" :key="index" style="display:flex">
      <p class="item">{{ item }}</p>
      <a-button class="item" :data-clipboard-text="item" @click="onCopy(index)"
        >复制</a-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    onCopy() {
      var clipboard = new this.Clipboard(".item");
      clipboard.on("success", () => {
        clipboard.success("复制成功");
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", () => {
        // 不支持复制
        console.log("该浏览器不支持自动复制");
        // 释放内存
        clipboard.destroy();
      });
    },
  },
};
</script>

<style></style>
