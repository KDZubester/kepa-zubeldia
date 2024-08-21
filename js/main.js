document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const popupText = document.getElementById("popup-text");
    const popupImage = document.getElementById("popup-image");

    // Only proceed if the popup element is found
    if (popup && closePopup && popupText && popupImage) {
        // Content for each pop-up
        const popupContent = {
            "1": {
                text: "This is the content for Pop-up 1.",
                image: "images/yellowLEDCube.png" // Replace with the path to your image
            },
            "2": {
                text: "This is the content for Pop-up 2.",
                image: "images/diyWatch.png"
            },
            "3": {
                text: "This is the content for Pop-up 3.",
                image: "images/bluetoothRobot.png"
            },
            "4": {
                text: "This is the content for Pop-up 4.",
                image: "images/rgbLEDCube.png"
            },
            "5": {
                text: "This is the content for Pop-up 5.",
                image: "images/projectJohnny2.png"
            }
        };

        // Select all icons
        const icons = document.querySelectorAll('.project-grid-item');

        // Log how many icons were found
        console.log(`Found ${icons.length} icons`);

        // Show the pop-up when an icon is clicked
        icons.forEach(function(icon) {
            const popupId = icon.getAttribute("data-popup");
            console.log(`Attaching event listener to icon with popupId: ${popupId}`);

            icon.addEventListener("click", function() {
                const clickedPopupId = this.getAttribute("data-popup"); // Get the popupId dynamically on click
                console.log(`Icon clicked: ${clickedPopupId}`);

                // Check if valid popup content exists
                if (popupContent[clickedPopupId]) {
                    // Update the content of the pop-up
                    popupText.innerHTML = popupContent[clickedPopupId].text;
                    popupImage.src = popupContent[clickedPopupId].image;

                    // Show the pop-up
                    popup.style.display = "flex";
                } else {
                    console.log(`No content found for popupId: ${clickedPopupId}`);
                }
            });
        });

        // Hide the pop-up when the close button is clicked
        closePopup.addEventListener("click", function() {
            popup.style.display = "none";
        });

        // Hide the pop-up if the user clicks outside the content area
        window.addEventListener("click", function(event) {
            if (event.target == popup) {
                popup.style.display = "none";
            }
        });
    } else {
        console.log("Popup elements not found.");
    }
});
