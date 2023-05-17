class Storage {
  static projectsArray = []

  static addNewProject(project) {
    this.projectsArray.push(project)
    Storage.saveTodoList()
  }

  static saveTodoList() {
    localStorage.setItem("todoList", JSON.stringify(this.projectsArray))
  }

  static getTodoList() {
    const storedProjects = JSON.parse(localStorage.getItem("todoList"))
    if (storedProjects !== null) {
      this.projectsArray = [...storedProjects]
    }
    return this.projectsArray
  }

  static clear() {
    localStorage.removeItem("todoList")
  }
}

export default Storage
