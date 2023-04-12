class Task {
  constructor(title, description, dueDate, priority) {
    this._title = title
    this._description = description
    this._dueDate = dueDate
    this._priority = priority
    this._completedStatus = false
  }

  changeDueDate(newDate) {
    this._dueDate = newDate
  }

  changePriority(newPriority) {
    this._priority = newPriority
  }

  changeCompletedStatus() {
    this._completedStatus = !this._completedStatus
  }

  render() {
    return {
      title: this._title,
      description: this._description,
      dueDate: this._dueDate,
      priority: this._priority,
      completedStatus: this._completedStatus,
    }
  }
}

export default Task
