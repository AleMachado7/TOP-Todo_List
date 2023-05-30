import Project from "./Project"
import Task from "./Task"
import Storage from "./Storage"
import formatDate from "../global functions/dateFormat"

class UserInterface {
  static load() {
    UserInterface.loadStorageProjects(Storage.getTodoList())
    UserInterface.loadNewProjectButton()
  }

  static loadStorageProjects(todoList) {
    for (let i = 0; i < todoList.length; i++) {
      const project = todoList[i]
      const projectObject = new Project(project.name)

      if (project.taskList.length > 0) {
        for (let j = 0; j < project.taskList.length; j++) {
          const task = project.taskList[j]
          const taskObject = new Task(
            task.title,
            task.description,
            task.dueDate,
            task.priority,
            task.completedStatus
          )
          projectObject.addTask(taskObject)
        }
      }

      todoList[i] = projectObject
      UserInterface.loadProject(projectObject)
      UserInterface.loadProjectItem(projectObject)
      Storage.saveTodoList()
    }
  }

  static loadProject(project) {
    const projectWrapper = document.getElementById("projects")
    projectWrapper.innerHTML = `
        <div id="project-wrapper">
          <h2 id="project-title">${project.name}</h2>
          <div class="project-buttons">
            <button id="new-task">New Task</button>
          </div>
          <div id="project-tasks-wrapper"></div>        
        </div>`

    if (project.taskList.length > 0) {
      UserInterface.loadTasks(project)
    }

    const newTaskButton = document.getElementById("new-task")
    newTaskButton.addEventListener("click", () => {
      let taskPopUp = document.querySelector("#form-container")
      if (taskPopUp === null) {
        const taskPopUp = UserInterface.loadNewTaskForm()
        document.body.appendChild(taskPopUp)

        const addTaskButton = document.querySelector("#create-task")
        addTaskButton.addEventListener("click", () => {
          const taskTitle = document.querySelector("#title").value
          const taskDescription = document.querySelector("#description").value
          const taskDueDate = document.querySelector("#dueDate").value
          const taskPriority = document.querySelector("#priority").value
          const taskStatus = document.querySelector("#completed").checked

          if (taskTitle === "" || taskDescription === "" || taskDueDate === "")
            return

          const newTask = new Task(
            taskTitle,
            taskDescription,
            taskDueDate,
            taskPriority,
            taskStatus
          )

          project.addTask(newTask)
          UserInterface.loadTasks(project)
          Storage.saveTodoList()
          taskPopUp.parentElement.removeChild(taskPopUp)
        })
      } else {
        taskPopUp.parentElement.removeChild(taskPopUp)
      }
    })
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
      const addTaskForm = document.getElementById("form-container")
      if (addTaskForm !== null) {
        document.body.removeChild(addTaskForm)
      }
    })
    const projectsList = document.getElementById("projects-names")
    projectsList.appendChild(projectItem)

    const deleteProjectButton = projectItem.querySelector("button")
    deleteProjectButton.addEventListener("click", () => {
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

  static loadTasks(project) {
    const taskList = project.taskList
    const tasksWrapper = document.getElementById("project-tasks-wrapper")
    while (tasksWrapper.firstChild) {
      tasksWrapper.removeChild(tasksWrapper.firstChild)
    }

    taskList.forEach((taskItem) => {
      const task = document.createElement("div")
      task.classList.add("task")
      task.innerHTML = `
          <div class="task-attributes">
            <p class="task-title">${taskItem.title}</p>
            <p class="task-text"><span class="task-attribute">Description:</span> ${
              taskItem.description
            }</p>
            <div>
              <p class="task-text"><span class="task-attribute">Due Date: </span>${formatDate(
                taskItem.dueDate
              )}</p>
            </div>          
            <p class="task-text"><span class="task-attribute">Priority:</span> ${
              taskItem.priority
            }</p>
            <p class="task-text"><span class="task-attribute">Completed:</span> <input type=checkbox><p>
          </div>
          <div>
            <button class="delete-task">Delete Task</button>
          </div>
      `
      const deleteTaskButton = task.querySelector("button")
      deleteTaskButton.addEventListener("click", () => {
        project.deleteTask(taskItem)
        task.parentElement.removeChild(task)
        Storage.saveTodoList()
      })

      const taskCompleted = task.querySelector("input")
      taskCompleted.checked = taskItem.completedStatus
      taskCompleted.addEventListener("click", () => {
        taskItem.changeCompletedStatus()
        Storage.saveTodoList()
      })
      tasksWrapper.appendChild(task)
    })
  }

  static loadNewProjectButton() {
    const newProjectButton = document.getElementById("new-project-button")
    newProjectButton.addEventListener("click", () => {
      const taskPopUp = document.querySelector("#form-container")
      taskPopUp?.parentElement.removeChild(taskPopUp)

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

  static loadNewTaskForm() {
    const newTaskPopup = document.createElement("div")
    newTaskPopup.id = "form-container"
    newTaskPopup.innerHTML = `
        <h3 id="popup-title">NEW TASK</h3>
        <form action="#" method="POST">
          <label for="title">Title:</label>
          <input type="text" id="title" name="title">
          
          <label for="description">Description:</label>
          <input type="text" id="description" name="description">
          
          <label for="dueDate">Due Date:</label>
          <input type="date" id="dueDate" name="dueDate">
          
          <label for="priority">Priority:</label>
          <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
          
          <div>
            <label for="completed">Completed:</label>
            <input type="checkbox" id="completed" name="completed">
          </div>

          <input id="create-task" type="reset" value="Add Task">
        </form>
      `

    return newTaskPopup
  }
}

export default UserInterface
