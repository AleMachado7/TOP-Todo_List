class Task {
  constructor(title, description, dueDate, priority, completedStatus) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.completedStatus = completedStatus
  }

  changeDueDate(newDate) {
    this.dueDate = newDate
  }

  changePriority(newPriority) {
    this.priority = newPriority
  }

  changeCompletedStatus() {
    this.completedStatus = !this.completedStatus
  }
}

export default Task
