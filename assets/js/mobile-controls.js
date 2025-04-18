function initMobileControls(canvas, rocket, shootBullet) {
    let touchStartX = 0;
    let isShooting = false;
    
    // Handle initial touch
    canvas.addEventListener('touchstart', e => {
        e.preventDefault();
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        
        // Second finger triggers shooting
        if (e.touches.length >= 2 && !isShooting) {
            isShooting = true;
            shootBullet();
            
            // Auto-fire while second finger is held
            const shootInterval = setInterval(() => {
                if (!isShooting) {
                    clearInterval(shootInterval);
                    return;
                }
                shootBullet();
            }, 200); // Fire every 200ms
        }
    }, { passive: false });
    
    // Handle touch movement
    canvas.addEventListener('touchmove', e => {
        e.preventDefault();
        const touch = e.touches[0];
        const moveX = touch.clientX - touchStartX;
        
        // Move rocket based on touch movement
        if (Math.abs(moveX) > 5) { // Small threshold to prevent tiny movements
            rocket.x += moveX * 0.5; // Adjust sensitivity as needed
            touchStartX = touch.clientX;
        }
        
        // Keep rocket within canvas bounds
        rocket.x = Math.max(rocket.width / 2, 
                          Math.min(canvas.width - rocket.width / 2, rocket.x));
    }, { passive: false });
    
    // Handle touch end
    canvas.addEventListener('touchend', e => {
        e.preventDefault();
        if (e.touches.length === 0) {
            isShooting = false;
        }
    }, { passive: false });
    
    // Disable default touch actions
    canvas.style.touchAction = 'none';
}

// Export for use in game.js
export { initMobileControls };