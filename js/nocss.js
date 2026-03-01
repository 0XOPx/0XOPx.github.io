window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('nocss') === 'true') {
        const styleSheets = document.querySelectorAll('link[rel="stylesheet"], style');
        styleSheets.forEach(el => el.remove());
    }
});