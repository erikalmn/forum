<template>
  <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="commentModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="commentModalLabel">Novo comentário</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createComment">
            <div class="form-group">
              <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" value="computador" v-model="newComment.title" />
              <label class="badge badge-pill mr-1" style="color: #fff; background-color: #00b9e5;" for="option1" :class="{ 'selected-label': newComment.title === 'computador' }">
                computador
              </label>

              <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" value="aplicativos" v-model="newComment.title" />
              <label class="badge badge-pill mr-1" style="color: #fff; background-color: #00b9e5;" for="option2" :class="{ 'selected-label': newComment.title === 'aplicativos' }">
                aplicativos
              </label>

              <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" value="periféricos" v-model="newComment.title" />
              <label class="badge badge-pill mr-1" style="color: #fff; background-color: #00b9e5;" for="option3" :class="{ 'selected-label': newComment.title === 'periféricos' }">
                periféricos
              </label>

              <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" value="programação" v-model="newComment.title" />
              <label class="badge badge-pill mr-1" style="color: #fff; background-color: #00b9e5;" for="option4" :class="{ 'selected-label': newComment.title === 'programação' }">
                programação
              </label>

              <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off" value="outros" v-model="newComment.title" />
              <label class="badge badge-pill mr-1" style="color: #fff; background-color: #00b9e5;" for="option5" :class="{ 'selected-label': newComment.title === 'outros' }">
                outros
              </label>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" id="author" placeholder="Usuário" v-model="newComment.author" />
            </div>
            <div class="form-group">
              <textarea class="form-control" id="message" placeholder="Escreva seu comentário" v-model="newComment.message"></textarea>
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
import { commentsColRef, imagesColRef } from "../firebase";
import { addDoc, getDocs } from "firebase/firestore";

export default {
  name: "AddComment",
  components: {},
  data() {
    return {
      data: [],
      images: [],
      newComment: {
        title: null,
        author: null,
        message: null,
        icon: null,
        createdAt: null,
      },
    };
  },
  methods: {
    async createComment() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      this.newComment.icon = this.images[randomIndex];

      const currentDateTime = new Date();
      this.newComment.createdAt = currentDateTime.toLocaleDateString();

      try {
        await addDoc(commentsColRef, this.newComment);
        console.log("Data added successfully.");
        this.newComment = {
          title: "",
          author: "",
          message: "",
          icon: "",
          createdAt: "",
        };
        $("#commentModal").modal("hide");
        $("#commentModal").on("hidden.bs.modal", function () {
          location.reload();
        });
      } catch (error) {
        console.error("Error adding data:", error);
      }
    },
  },
  async mounted() {
    try {
      const querySnapshot = await getDocs(imagesColRef);
      querySnapshot.forEach((doc) => {
        this.images.push(doc.data().url);
      });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
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
