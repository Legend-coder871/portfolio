function showSection(sectionId) {
    // hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // show selected section
    document.getElementById(sectionId).style.display = 'block';
}

// show default section when page loads
window.onload = function () {
    showSection('about');
};