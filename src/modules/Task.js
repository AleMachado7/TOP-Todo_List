class Task {
  constructor(title, description, dueDate, priority, completedStatus) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completedStatus = completedStatus
  }

  changeCompletedStatus() {
    this.completedStatus = !this.completedStatus
  }
}

export default Task
