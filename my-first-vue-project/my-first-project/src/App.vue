<template>
  <MyFirstComponent />
  <LayoutHeader />
  <BookList />
</template>

<script>
import MyFirstComponent from "./components/MyFirstComponent.vue";

import LayoutHeader from "./components/LayoutHeader.vue";

import BookList from "@/components/BookList.vue";

export default {
  name: "App",
  components: {
    MyFirstComponent,
    LayoutHeader,
    BookList,
  },
};
</script>

<style>
@import url(./assets/global.css);
</style>
