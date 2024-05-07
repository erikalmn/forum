<template>
  <ul class="list-group">
    <li class="list-group-item mb-3 border-top rounded" v-for="(answer, index) in answers" :key="index">
      <div class="d-flex flex-column">
        <span class="font-weight-bold">{{ answer.user }}</span>
        <span>{{ answer.msg }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { commentsColRef } from "@/firebase";

export default {
  name: "AnswersList",
  props: ["commentId"],
  data() {
    return {
      answers: [],
    };
  },
  computed: {
    answersCount() {
      return this.answers.length;
    }
  },
  methods: {
    async fetchAnswers() {
      const commentDocRef = doc(commentsColRef, this.commentId);
      try {
        const commentSnap = await getDoc(commentDocRef);
        if (commentSnap.exists()) {
          const commentData = commentSnap.data();
          this.answers = commentData.answers || [];
        } else {
          console.log("No such comment!");
        }
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    },
  },
  created() {
    this.fetchAnswers();
  },
};
</script>

<style scoped>
span {
  font-size: 15px;
}
</style>
