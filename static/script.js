function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');  // Hide all sections
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');  // Show the clicked section
}
