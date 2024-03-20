<template>
  <LayoutHeader />
  <BookList />
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader.vue";

import BookList from "@/components/BookList.vue";

export default {
  name: "App",
  components: {
    LayoutHeader,
    BookList,
  },
};
</script>

<style>
@import url(@/assets/global.css);
</style>
