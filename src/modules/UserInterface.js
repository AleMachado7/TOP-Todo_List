class UserInterface {
  static renderProjectsList(Projects) {
    if (Projects.length < 1) return

    const projectsList = document.getElementById("projects-list")
    while (projectsList.firstChild) {
      projectsList.removeChild(projectsList.firstChild)
    }

    for (let i = 0; i < Projects.length; i++) {
      const newProjectHTMLElement = document.createElement("li")
      newProjectHTMLElement.textContent = Projects[i].getName()
      newProjectHTMLElement.setAttribute("data-index", i)
      projectsList.appendChild(newProjectHTMLElement)
    }
  }

  static renderProjectElement(project) {
    const projectRender = document.createElement("div")
    projectRender.classList.add("project-wrapper")
    projectRender.classList.add("active")
    projectRender.innerHTML += `
        <h2 class="project-title">${project.getName()}</h2>
            <div class="project-buttons">
                <button>New Task</button>
            </div>
            <div class="project-tasks-wrapper">
            </div>
            <div class="project-buttons">
                <button>Delete Project</button>
            </div>
        `
    return projectRender
  }
}

export default UserInterface
