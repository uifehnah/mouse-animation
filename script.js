document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('centerButton');
    const customCursor = document.getElementById('customCursor');

    document.addEventListener('mousemove', (e) => {
        const buttonRect = button.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;
        const angle = Math.atan2(buttonY - e.clientY, buttonX - e.clientX) * 180 / Math.PI;

        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
        customCursor.style.transform = `rotate(${angle}deg)`;
    });
});