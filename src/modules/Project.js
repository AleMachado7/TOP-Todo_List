class Project {
  constructor(name) {
    this.name = name
    this.taskList = []
  }

  addTask(Task) {
    this.taskList.push(Task)
  }

  removeTask(Task) {
    if (this.taskList.indexOf(Task) < 0) return

    this.taskList.splice(this.taskList.indexOf(Task), 1)
  }
}

export default Project
