let defaultFontSize = 16;

function toggleContrast() {
    document.body.classList.toggle('alto-contraste');
}

function increaseFont() {
    defaultFontSize += 2;
    document.body.style.fontSize = defaultFontSize + 'px';
}

function decreaseFont() {
    if (defaultFontSize > 10) {
        defaultFontSize -= 2;
        document.body.style.fontSize = defaultFontSize + 'px';
    }
}

function resetFont() {
    defaultFontSize = 16;
    document.body.style.fontSize = defaultFontSize + 'px';
}
