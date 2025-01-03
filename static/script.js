console.log("Script is loaded and running!");

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');  // Hide all sections
        section.classList.remove('visible'); // Remove the visible class from all sections
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');  // Show the clicked section
    selectedSection.classList.add('visible');    // Add visible class
}

