function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function getDeviceType() {
    return {
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isTablet: /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent)
    };
}

function scaleForScreen(baseSize) {
    const screenWidth = window.innerWidth;
    return baseSize * (screenWidth / 800); // 800 is our base desktop width
}

function preventDefaultBehavior(element) {
    element.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
    element.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
    element.addEventListener('touchend', e => e.preventDefault());
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}