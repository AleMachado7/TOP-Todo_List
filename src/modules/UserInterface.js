import Project from "./Project"
import Task from "./Task"
import Storage from "./Storage"

class UserInterface {
  static load() {
    UserInterface.loadStorageProjects(Storage.getTodoList())
    UserInterface.loadNewProjectButton()
  }

  static loadStorageProjects(todoList) {
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
      UserInterface.loadProjectItem(projectObject)
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

    if (project.taskList.length > 0) {
      UserInterface.loadTasks(project.taskList)
    }
  }

  static loadProjectItem(project) {
    const projectItem = document.createElement("li")
    projectItem.classList.add("project-item")
    projectItem.innerHTML = `
        <p>${project.name}</p>
        <button class="delete-button">Delete Project</button>`

    const projectName = projectItem.querySelector("p")
    projectName.addEventListener("click", () => {
      UserInterface.loadProject(project)
    })
    const projectsList = document.getElementById("projects-names")
    projectsList.appendChild(projectItem)

    const deleteButton = projectItem.querySelector("button")
    deleteButton.addEventListener("click", () => {
      if (Storage.deleteProject(project)) {
        projectItem.parentElement.removeChild(projectItem)

        const projectWrapper = document.getElementById("projects")
        const projectTitle = document.getElementById("project-title")

        if (projectTitle?.textContent === project.name) {
          projectWrapper.innerHTML = ""
        }
      }
    })
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

  static loadNewProjectButton() {
    const newProjectButton = document.getElementById("new-project-button")
    newProjectButton.addEventListener("click", () => {
      let newProjectName = prompt("What's the name of the new project?")
      newProjectName = newProjectName
        ?.replaceAll("<", "")
        .replaceAll(">", "")
        .trim()

      if (newProjectName?.length > 0) {
        const project = new Project(newProjectName)
        if (Storage.addNewProject(project)) {
          UserInterface.loadProject(project)
          UserInterface.loadProjectItem(project)
        } else {
          window.alert(
            `There's already a project created with the name: ${newProjectName}`
          )
        }
      }
    })
  }
}

export default UserInterface
