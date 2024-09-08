document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        const resumeHTML = `
            <h2>${name}'s Resume</h2>
            <p><strong>Email:</strong> ${email}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${workExperience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        form.style.display = 'none'; 
        resumeOutput.innerHTML = resumeHTML;  
        resumeOutput.style.display = 'block';  
    });
});
