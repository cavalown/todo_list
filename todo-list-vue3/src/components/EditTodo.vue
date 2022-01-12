<template>
  <div class="edit-todo">
    <form>
      <label for="task">Task Subject</label>
      <input type="text" id="task" placeholder="Please Enter the Task Title" />
      <label for="task-deadline">Deadline</label>
      <input type="date" id="task-deadline" />
      <label for="task-file">Attach File</label>
      <input type="file" id="task-file" />
      <label for="task-comment">Comment</label>
      <textarea
        name="task-comment"
        class="task-comment"
        id="task-comment"
        cols="30"
        rows="10"
      ></textarea>
      <div class="check-edit">
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditTodo',
  data () {
    return {
      isCreate: true
    }
  },
  methods: {
    async createNewTask () {}
  }
}
</script>

<style lang="scss">
.edit-todo {
  width: 800px;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    text-align: left;
    border: 2px solid rgb(146, 185, 236);
    padding: 10px;
    background: rgb(208, 220, 236);
    legend {
      margin-bottom: 10px;
    }
    label {
      margin-bottom: 10px;
    }
    input {
      margin-bottom: 10px;
      line-height: 20px;
    }
    .task-comment {
      margin-bottom: 10px;
    }
    .check-edit {
      margin-left: 640px;
      display: flex;
      width: 120px;
      justify-content: space-between;
    }
  }
}
</style>
