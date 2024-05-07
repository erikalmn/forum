<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between">
      <button type="button" class="btn" style="color: #231a47; border-color: #231a47;" data-toggle="modal" data-target="#commentModal">
        Criar comentário
      </button>
      <AddComment />
    </div>
  </div>
</template>

<script>
import AddComment from "@/components/AddComment.vue";

export default {
  name: "HomeView",
  components: {
    AddComment,
  },
};
</script>

<style></style>
