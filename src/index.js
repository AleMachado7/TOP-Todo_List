import "./style.css"
import UserInterface from "./modules/UserInterface"
import Project from "./modules/Project"
import Storage from "./modules/Storage"

UserInterface.loadStorageProjects()

const newProjectButton = document.getElementById("new-project-button")
newProjectButton.addEventListener("click", () => {
  let newProjectName = prompt("What's the name of the new project?")
  newProjectName = newProjectName
    ?.replaceAll("<", "")
    .replaceAll(">", "")
    .trim()

  if (newProjectName?.length > 0) {
    const project = new Project(newProjectName)
    UserInterface.loadProject(project)
    Storage.addNewProject(project)
  }
})
