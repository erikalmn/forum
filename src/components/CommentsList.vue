<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(comment, index) in comments" :key="index">
        <div class="card h-100 p-3" style="border-color: #231a47; background-color: rgba(255, 255, 255, 0.4);">
          <div class="d-flex flex-row mb-3">
            <img :src="comment.icon" width="50" class="rounded-circle" />
            <div class="d-flex flex-column ml-2">
              <span>{{ comment.title }}</span>
              <span class="text-black-50" style="font-size: 13px;">{{ comment.author }}</span>
            </div>
          </div>
          <span style="font-size: 14px;">{{ comment.message }}</span>
          <div class="mt-auto">
            <div class="d-flex justify-content-between install mt-3">
              <span style="font-size: 12px;">{{ comment.createdAt }}</span>
              <a href="" data-toggle="modal" :data-target="'#answerModal-' + comment.id" style="font-size: 12px; color: #231a47;">
                Respostas ({{ comment.answers.length }})
              </a>
              <AddAnswer :commentId="comment.id" :initialCount="comment.answers.length" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddAnswer from "./AddAnswer.vue";
import { commentsColRef } from "@/firebase";
import { query, where, getDocs } from "firebase/firestore";

export default {
  name: "CommentsList",
  components: {
    AddAnswer,
  },
  props: {
    filterTitle: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    async fetchComments() {
      let q;
      if (this.filterTitle) {
        q = query(commentsColRef, where("title", "==", this.filterTitle));
      } else {
        q = commentsColRef;
      }

      let commentsSnapShot = await getDocs(q);
      let comments = [];
      commentsSnapShot.forEach((comment) => {
        let commentData = comment.data();
        commentData.id = comment.id;
        commentData.answers = commentData.answers || [];
        comments.push(commentData);
      });

      this.comments = comments;
    },
  },
  created() {
    this.fetchComments();
  },
  watch: {
    filterTitle(newTitle, oldTitle) {
      if (newTitle !== oldTitle) {
        this.fetchComments();
      }
    },
  },
};
</script>

<style scoped>
.ratings i {
  color: green;
}

.col-md-4 {
  margin-top: 27px;
}
</style>
