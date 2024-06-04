// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
document.addEventListener("DOMContentLoaded", function() {
    // Create an img element
    var img = document.createElement("img");
    img.src = ""D:\priya.jpg""; // Replace with the actual path to your image file
    img.alt = "Description of the image";
    img.id = "top-right-img";

    // Append the img element to the top-right-img-container div
    document.getElementById("top-right-img-container").appendChild(img);
});

// Function to show/hide project details
function toggleProjectDetails(projectId) {
    const project = document.getElementById(projectId);
    project.classList.toggle("show-details");
}

// Function to handle form submission
function submitForm() {
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    
    // Example: send form data to backend for processing
    // Replace this with your actual form submission logic
    fetch("https://example.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Form submitted successfully!");
            form.reset();
        } else {
            throw new Error("Form submission failed!");
        }
    })
    .catch(error => {
        console.error(error);
        alert("Oops! Something went wrong. Please try again later.");
    });
}

// Add event listeners
document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

const projectToggleButtons = document.querySelectorAll(".project-toggle");
projectToggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const projectId = button.dataset.projectId;
        toggleProjectDetails(projectId);
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    submitForm();
});
