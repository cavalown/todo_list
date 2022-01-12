<template>
  <div class="todo-content">
    <input
      type="text"
      name="newTask"
      id="new-task"
      class="new-task"
      placeholder="Enter Your New Task"
      v-model.trim="taskTemp"
      @keyup.enter="createNewTask"
      focuse
    />
    <div class="edit-task-form" v-show="isEditTask">
      <EditTodo />
    </div>
    <div class="clear-all-tasks">
      <button type="button" class="btn-clear-all-tasks" @click="clearAllTasks">Clear All Tasks</button>
    </div>
    <div class="todo-list-content">
      <thead>
        <tr>
          <th class="col-icon"></th>
          <th class="col-icon"></th>
          <th class="col-icon border-right"></th>
          <th class="col1 border-right">Task</th>
          <th class="col2 border-right">Deadline</th>
          <th class="col-icon"></th>
          <th class="col-icon"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, taskID, index) in tasks" :key="taskID">
          <td class="col-icon"><input type="checkbox" class="check-important" :id="item.taskID" v-model="item.completed" /></td>
          <td class="col-icon">
            <button class="task-important"  type="button">
              <img src="../assets/star-outline.png" alt="not important" v-show="!tasks[taskID].important" @click="changeImportant(taskID)">
              <img src="../assets/star.png" alt="not important" v-show="tasks[taskID].important" @click="changeImportant(taskID)">
            </button>
          </td>
          <td class="col-icon border-right task-index">{{ index+1 }}.</td>
          <td class="col1 border-right" :class="{ 'completed': item.completed }">{{ item.title }}</td>
          <td class="col2 border-right">{{ item.deadline }}</td>
          <td class="col-icon">
            <button @click="editTask" type="button">
              <img src="../assets/pencil.png" alt="edit task"  class="btn-edit-task"/>
            </button>
          </td>
          <td class="col-icon">
            <button @click="deleteTask(item.taskID)" type="button">
              <img src="../assets/delete.png" alt="delete task"  class="btn-delete-task"/>
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import EditTodo from './EditTodo.vue'
export default {
  name: 'TodoContent',
  components: {
    EditTodo
  },
  data () {
    return {
      isEditTask: false,
      isImportant: false,
      taskTemp: '',
      tasks: {}
    }
  },
  methods: {
    createNewTask () {
      if (this.taskTemp.length > 0) {
        const taskID = uuidv4()
        const createTime = new Date().toISOString()
        const theTask = {
          taskID: taskID,
          createTime: createTime,
          title: this.taskTemp,
          deadline: '-',
          completed: false,
          important: false
        }
        this.tasks[taskID] = theTask
        this.taskTemp = ''
      }
    },
    editTask () {
      this.isEditTask = true
      // const theTask = tasks[taskID]
    },
    taskDone (taskID) {
      this.task[taskID].completed = true
    },
    deleteTask (taskID) {
      delete this.tasks[taskID]
    },
    changeImportant (taskID) {
      this.tasks[taskID].important = !this.tasks[taskID].important
    },
    clearAllTasks () {
      alert('Clear all ?')
      this.tasks = {}
      this.taskTemp = ''
      this.isEditTask = false
      this.isImportant = false
    }
  }
}
</script>

<style lang="scss">
.todo-content {
  min-height: 600px;
  .new-task {
    width: 800px;
    line-height: 30px;
    font-size: 27px;
    padding-left: 10px;
  }
  .btn-create {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .clear-all-tasks {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    .btn-clear-all-tasks {
    width: 150px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: 2px rgba(13, 96, 145, 0.829) dashed;
    background-color: rgba(98, 186, 236, 0.829);
    margin-bottom: 10px;
    margin-top: 10px;
    border-radius: 10px;
    cursor: pointer
    }
  }
  .todo-list-content {
    margin: 0 auto;
    min-height: 400px;
    width: 800px;
    line-height: 20px;
    // font-family: LiHei Pro Medium;
    tr {
      line-height: 30px;
      th {
        background-color: rgb(212, 208, 208);
        text-align: center;
      }
      td {
        background-color: rgb(230, 224, 224);
        border-bottom: 2px solid rgb(219, 214, 214);
        font-size: 26px;
        text-align: left;
        padding-left: 10px;
      }
      .task-index {
        font-size: 15px;
      }
    }
    .check-important {
      width: 18px;
      height: 18px;
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
    }
    .task-important:hover {
      border: none;
    }
    .col1 {
      width: 500px;
    }
    .col2 {
      width: 150px;
      text-align: center;
    }
    .col-icon {
      width: 50px;
      .btn-edit-task,
      .btn-delete-task {
        opacity: 0.5;
      }
      .btn-edit-task:hover,
      .btn-delete-task:hover {
        opacity: 1;
      }
    }
    .completed {
      text-decoration: line-through 2px;
    }
    .border-right {
      border-right: 2px solid rgb(241, 237, 237);
    }
  }
  .edit-task-form {
    margin-top: 10px;
  }
}
</style>
