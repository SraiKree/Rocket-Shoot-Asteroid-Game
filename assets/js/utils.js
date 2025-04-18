function getTouchPos(canvas, touch) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleX
    };
}

function preventDefaultTouchActions(element) {
    element.style.touchAction = 'none';
    element.style.webkitTouchCallout = 'none';
    element.style.webkitUserSelect = 'none';
    element.style.userSelect = 'none';
}