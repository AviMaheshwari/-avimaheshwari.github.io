document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    let toggle = true; // Toggle variable to swap positions

    noBtn.addEventListener('click', () => {
        const buttonsContainer = yesBtn.parentElement;
        // Swap the positions of the Yes and No buttons based on the toggle
        if (toggle) {
            buttonsContainer.insertBefore(noBtn, yesBtn);
        } else {
            buttonsContainer.insertBefore(yesBtn, noBtn);
        }
        toggle = !toggle; // Toggle the value for the next click
    });
    yesBtn.addEventListener('click', () => {
        alert("Okay, let's go for a coffee!");
    });
});
