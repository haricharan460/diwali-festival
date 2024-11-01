document.getElementById('surpriseButton').addEventListener('click', function() {
    console.log("Button clicked!"); // Check if the button is working
    const flowersDiv = document.getElementById('flowers');
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        flowersDiv.appendChild(flower);
        
        // Remove the flower after animation
        setTimeout(() => {
            flower.remove();
        }, 1000); // Adjust time to match the animation duration
    }
});
