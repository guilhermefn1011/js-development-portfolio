//function to update profile header information.
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    // photo.src = profileData.photo;
    photo.alt =profileData.name;


    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
    
}

//function to update profile soft skills information.
function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

//function to update profile hard skills information.
function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

//function to update profile languages information.
function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

//function to update portfolio information.
function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' :  ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('');
}

//function to update professional experiences information.
function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience');
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <h4 class="period">${experience.period}</h4>
                <p>${experience.description}</p>
            </li>
        `
    }).join('');
}

function updateEducation(profileData) {
    const education = document.getElementById('profile.education');

    education.innerHTML = profileData.education.map(instruction => {
        return `
        <li>
            <h3 class="course">${instruction.course}</h3>
            <h4 class="institution">${instruction.institution}</h4>
            <p class="period">${instruction.period}</p>
        </li>
        `
    }).join('')
}

//update all page information
(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData);
    updateLanguages(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
    updateEducation(profileData);
})()