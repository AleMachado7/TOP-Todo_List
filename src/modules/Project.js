class Project {
  constructor(name) {
    this.name = name
    this.taskList = []
  }

  addTask(newTask) {
    if (this.getTask(newTask) === undefined) {
      this.taskList.push(newTask)
    }
  }

  getTask(task) {
    return this.taskList.find((storedTask) => storedTask.title === task.title)
  }

  deleteTask(task) {
    const taskIndex = this.taskList.findIndex(
      (storedTask) => storedTask.title === task.title
    )

    if (taskIndex >= 0) {
      this.taskList.splice(taskIndex, 1)
      return true
    }

    return false
  }
}

export default Project
