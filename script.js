// document.addEventListener('DOMContentLoaded', function() {
//     // Get all nav links
//     const navLinks = document.querySelectorAll('nav ul li a');

//     // Add click event listener to each nav link
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const page = this.id.split('-')[0]; // Extract page name from id
//             navigateToPage(page);
//         });
//     });

//     // Function to handle navigation
//     function navigateToPage(page) {
//         // Remove 'active' class from all links
//         navLinks.forEach(link => link.classList.remove('active'));

//         // Add 'active' class to clicked link
//         document.getElementById(`${page}-link`).classList.add('active');

//         // Here you would typically use AJAX to load the new content
//         // For simplicity, we'll just change the window location
//         window.location.href = `${page}.html`;
//     }
// });