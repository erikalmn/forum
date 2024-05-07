<template>
  <div class="modal fade" :id="'answerModal-' + commentId" tabindex="-1" role="dialog" aria-labelledby="answerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="answerModalLabel">Respostas</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <AnswersList :commentId="commentId" />
          <form @submit.prevent="addAnswer">
            <div class="form-group">
              <input type="text" class="form-control" id="user" placeholder="Usuário" v-model="newAnswer.user" />
            </div>
            <div class="form-group">
              <textarea class="form-control" id="answer" placeholder="Escreva sua resposta" v-model="newAnswer.msg"></textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" style="color: #fff; background-color: #a0a0a0;" data-dismiss="modal">
                Cancelar
              </button>
              <button type="submit" class="btn" style="color: #fff; background-color: #00b9e5;">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnswersList from "./AnswersList.vue";

import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { commentsColRef } from "@/firebase";

export default {
  name: "AddAnswer",
  components: {
    AnswersList,
  },
  props: ["commentId"],
  data() {
    return {
      newAnswer: {
        user: "",
        msg: "",
      },
    };
  },
  methods: {
    async addAnswer() {
      const commentDocRef = doc(commentsColRef, this.commentId);
      try {
        await updateDoc(commentDocRef, {
          answers: arrayUnion(this.newAnswer),
        });
        console.log("Data added successfully.");
        this.newAnswer = {
          user: "",
          msg: "",
        };

        $("#answerModal-" + this.commentId).modal("hide");
        $("#answerModal-" + this.commentId).on("hidden.bs.modal", () => {
          location.reload();
        });
        
      } catch (error) {
        console.error("Error adding data:", error);
      }
    },
  },
};
</script>

<style>
.btn-check[type="radio"] {
  display: none;
}

.selected-label {
  border: 2px solid #007bff;
}
</style>
