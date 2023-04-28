class Project {
  constructor(name) {
    this._name = name
    this._taskList = new Array()
  }

  addTask(Task) {
    this._taskList.push(Task)
  }

  removeTask(Task) {
    if (this._taskList.indexOf(Task) < 0) return

    this._taskList.splice(this._taskList.indexOf(Task), 1)
  }

  getName() {
    return this._name
  }
}

export default Project
