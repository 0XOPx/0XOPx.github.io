const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('e') === 'true') {
    const elements = document.querySelectorAll('p, h1, h2, h3, a, span, li, td, th');
    elements.forEach(el => {
        el.innerText = el.innerText.replace(/[a-zA-Z0-9]/g, 'E');
    });
}
if (urlParams.get('oxop') === 'true') {
    const elements = document.querySelectorAll('p, h1, h2, h3, a, span, li, td, th');
    elements.forEach(el => {
        el.innerText = el.innerText.replace(/[a-zA-Z0-9]+/g, 'OXOP');
    });
}

if (urlParams.get('blackmidi') === 'true') {
    const elements = document.querySelectorAll('p, h1, h2, h3, a, span, li, td, th');
    elements.forEach(el => {
        el.innerText = el.innerText.replace(/[a-zA-Z0-9]+/g, 'Black MIDI');
    });
}