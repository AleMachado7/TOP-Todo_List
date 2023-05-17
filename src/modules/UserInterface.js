import Project from "./Project"
import Task from "./Task"
import Storage from "./Storage"

class UserInterface {
  static loadStorageProjects() {
    const todoList = Storage.getTodoList()

    todoList.forEach((project) => {
      const projectObject = new Project(project.name)
      project.taskList.forEach((task) => {
        const taskObject = new Task(
          task.title,
          task.description,
          task.dueDate,
          task.completedStatus
        )
        projectObject.addTask(taskObject)
      })
      UserInterface.loadProject(projectObject)
    })
  }

  static loadProject(project) {
    const projectWrapper = document.getElementById("projects")
    projectWrapper.innerHTML = `
        <div id="project-wrapper">
          <h2 id="project-title">${project.name}</h2>
          <div class="project-buttons">
            <button>New Task</button>
          </div>
          <div id="project-tasks-wrapper"></div>        
        </div>`
    const projectTaskList = project.taskList

    if (projectTaskList.length > 0) {
      UserInterface.loadTasks(projectTaskList)
    }
    UserInterface.loadProjectItem(project)
  }

  static loadProjectItem(project) {
    const projectItem = document.createElement("li")
    projectItem.classList.add("project-item")
    projectItem.innerHTML = `
        <p>${project.name}</p>
        <button class="delete-button">Delete Project</button>`

    const projectName = projectItem.querySelector("p")
    projectName.addEventListener("click", () => {
      console.log("clicked")
    })

    const projectsList = document.getElementById("projects-names")
    projectsList.appendChild(projectItem)
  }

  static loadTasks(taskList) {
    const tasksWrapper = document.getElementById("project-tasks-wrapper")
    taskList.forEach((taskItem) => {
      const task = document.createElement("div")
      task.classList.add("task")
      task.innerHTML = `
        <p>${taskItem.title}</p>
        <p>${taskItem.description}</p>
        <p>${taskItem.dueDate}</p>
        <p>${taskItem.priority}</p>
        <p>${taskItem.completedStatus}</p>
      `
      tasksWrapper.appendChild(task)
    })
  }

  static deleteProject(projectName, projectsArray) {
    let projectIndex = -1

    projectsArray.forEach((project) => {
      if (project.name === projectName) {
        projectIndex = projectsArray.indexOf(project)
      }
    })
    console.log(projectIndex)
  }

  static loadEventListeners() {
    const deleteButtons = document.querySelectorAll(".delete-button")
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {})
    })
  }
}

export default UserInterface
