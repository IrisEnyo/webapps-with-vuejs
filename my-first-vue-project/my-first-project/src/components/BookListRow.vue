<template>
  <tr class="table-item__table-row">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td>
      <BaseButton
        :text="bookMarkedBtnText"
        variant="secondary"
        @btn-clicked="handleBookMarkButtonClick"
      />
    </td>
  </tr>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: { BaseButton },
  props: {
    title: String,
    isbn: String,
    isBookmarked: Boolean,
  },

  computed: {
    bookMarkedBtnText() {
      return this.isBookmarked ? "Remove Bookmark" : "Add Bookmark";
    },
  },

  methods: {
    handleBookMarkButtonClick() {
      this.$emit("bookmark-clicked", this.isbn);
    },
  },
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
