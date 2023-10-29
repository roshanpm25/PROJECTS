document.addEventListener("DOMContentLoaded", function() {
    const selectedItem = document.getElementById("selectedItem");
    const dropdownContent = document.getElementById("dropdownContent");

    selectedItem.addEventListener("click", function() {
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    });

    const dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(item => {
        item.addEventListener("click", function() {
            selectedItem.textContent = item.textContent;
            dropdownContent.style.display = "none";
        });
    });

    // Close dropdown when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches('.selected-item')) {
            dropdownContent.style.display = "none";
        }
    });
});
