<template>
  <div>
    <img :src="imgArr[index]" />
    <a href="javascript:void(0)" @click="$emit('prev')" v-show="index!=0">上一张</a>
    <a href="javascript:void(0)" @click="$emit('next')" v-show="index<imgArr.length-1">下一张</a>
  </div>
</template>

<script>
export default {
  name: "index",
  props: ['imgArr', "index"],
  data() {
    return {
     
    };
  },
  methods: {
  },
};
</script>

<style>
</style>