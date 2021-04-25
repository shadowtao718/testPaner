<template>
  <div>
    <span>
      <a-rate v-model="value" :tooltips="desc" />
      <span class="ant-rate-text">{{ desc[value - 1] }}</span>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 3,
      desc: ["差评", "一般", "中评", "好评", "很棒"],
    };
  },
};
</script>
