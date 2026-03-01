async function loadProjects() {
    try {
        const response = await fetch('/assets/json/stuff/projects.json');
        const data = await response.json();
        const projectsContainer = document.querySelector('.projects');

        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'project';
            
            let linkItems = '';
            const linkEntries = Object.entries(project.links);

            linkEntries.forEach(([key, url]) => {
                linkItems += `<li><a href="${url}" class="btn-small">${key.toUpperCase()}</a></li>`;
            });

            projectDiv.innerHTML = `
                <div class="project-info">
                    <h3>${project.name}</h3>
                    <p>Status: <span class="status-${project.status.replace(/\s+/g, '-').toLowerCase()}">${project.status}</span></p>
                    <p>Released: ${project.release_date}</p>
                    <p>${project.description}</p>
                </div>
                <div class="project-links">
                    <ul class="link-list">
                        ${linkItems}
                    </ul>
                </div>
                <hr width="100%" size="1" color="grey">
            `;
            projectsContainer.appendChild(projectDiv);
        });
    } catch (error) {
        console.error('ERROR: ', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);