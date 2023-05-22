class Storage {
  static todoList = []

  static addNewProject(project) {
    if (Storage.getProject(project) === undefined) {
      this.todoList.push(project)
      Storage.saveTodoList()
      return true
    }
    return false
  }

  static getProject(project) {
    return this.todoList.find(
      (storedProject) => storedProject.name === project.name
    )
  }

  static saveTodoList() {
    localStorage.setItem("todoList", JSON.stringify(this.todoList))
  }

  static getTodoList() {
    const storedProjects = JSON.parse(localStorage.getItem("todoList"))
    if (storedProjects !== null) {
      this.todoList = [...storedProjects]
    }
    return this.todoList
  }

  static deleteProject(project) {
    const projectIndex = this.todoList.findIndex(
      (storedProject) => storedProject.name === project.name
    )

    if (projectIndex >= 0) {
      this.todoList.splice(projectIndex, 1)
      Storage.saveTodoList()
      return true
    }

    return false
  }

  static clear() {
    localStorage.removeItem("todoList")
  }
}

export default Storage
