document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const popupText = document.getElementById("popup-text");
    const popupImage = document.getElementById("popup-image");
    const popupRepo = document.getElementById("popup-repo");
    const popupLinkText = document.getElementById("popup-link-text")

    // Only proceed if the popup element is found
    if (popup && closePopup && popupText && popupImage) {
        // Content for each pop-up
        const popupContent = {
            "1": {
                text: "For a school project, I designed and built an 8x8x8 LED matrix cube, controlled by an Arduino and 74HC595 shift registers. Initially inspired by a YouTube tutorial, I faced a major challenge when I inadvertently soldered the LEDs backwards. To address this, I engineered a new circuit and developed entirely original code to drive the LEDs. I also incorporated a prototype game controller, enabling the cube to run abstract 3D games, including the game Snake, which utilized all three axes of the matrix. Despite the limitation that the backward soldering, which prevented the use of PWM frameworks, the project demonstrated my problem-solving skills and creativity. The experience has motivated me to design and prototype an even larger cube, which will be powered by a Raspberry Pi and capable of supporting 4-player games, building on the lessons learned from the initial project.",
                image: "images/yellowLEDCube.png", // Replace with the path to your image
                repo: "https://github.com/KDZubester/snake-cube",
                link_text: "Check out source code on GitHub"
            },
            "2": {
                text: "Just for fun, I designed a digital watch prototype using an Arduino ATMega chip, a Real Time Clock chip, and an OLED screen with I2C communication. With a friend, I developed a user interface featuring widgets and games like a stopwatch and racing game. We created kits for friends and family to assemble. Currently, I’m working on a sleeker version with smaller components and Bluetooth, inspired by feedback that the original design wasn’t stylish enough for my wife.",
                image: "images/diyWatch.png",
                repo: "https://github.com/KDZubester/Self-Starter-Kits",
                link_text: "Check out source code on GitHub"
            },
            "3": {
                text: "While developing the digital watch, we decided to add bluetooth functionality. So, I designed a port for an Arduino Bluetooth module and built a little robot to showcase this extra feature.",
                image: "images/bluetoothRobot.png",
                repo: "https://youtube.com/shorts/z_sofN2enVc?si=2a8KVNoREIz-cPIx",
                link_text: "Check out this video to see it work!"
            },
            "4": {
                text: "Inspired by my 8x8x8 LED cube, I am making a multicolor display that will fit inside of a coffee table. This display will connect to four custom controllers to enable innovative 3D multiplayer games, all powered by multiple Raspberry PIs. Because the LEDs can emit more than one color, the circuit to control it is far more complex. I had to create my own SMD soldering oven to place industrial LED controller chips onto custom boards. Now that the LEDs are soldered correctly, this allows for refresh rates far greater than the previous LED cube, and simplifies the circuit to Shift Register chips specifically designed to drive RGB LEDs. Before creating a cube of arbitrary size, I am prototyping the code on a 4x4x4 LED cube. Once I can recreate the snake game from the 8x8x8 cube, I will move on to designing building the rest of the system.",
                image: "images/rgbLEDCube.png",
                repo: "https://github.com/KDZubester/rgb-cube-rasp-pi",
                link_text: "Check out source code on GitHub"
            },
            "5": {
                text: "My first foray into videogame development, titled 'Project Johnny' was completed in 2 months and built with the Godot 4.2 engine. This game leverages Godot's component system to create complex systems in a simple and abstract manner. Godot's custom, python-like coding language 'gdscript' was used to create the gameplay --such as the grapple dash mechanic-- and connect all of the components. Sprites for this game came from: ID Infinite Design (jayaitchison.blogspot.com/). The Grapple Area Indicator was created by Hawraa Alsalman from Noun Project. The game art was created using generative AI. All music and sfx were found for free online, and the title music came from zapsplat.",
                image: "images/projectJohnny2.png",
                repo: "https://kepadz.itch.io/project-johny-killroy",
                link_text: "Check out the game on itch.io"
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
                    popupRepo.href = popupContent[clickedPopupId].repo;
                    popupLinkText.innerHTML = popupContent[clickedPopupId].link_text;

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
