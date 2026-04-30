window.addEventListener('load', () => {
    const yearElement = document.querySelector('.year');
    if (yearElement) yearElement.textContent = new Date().getFullYear();

    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const totalMinutes = (hour * 60) + minute;

    const statusElement = document.querySelector('#status');
    if (statusElement) {
        const isWeekend = (day === 0 || day === 6);
        let status = "I'm awake!";

        if ((!isWeekend && totalMinutes >= 1260) || (isWeekend && totalMinutes >= 1290)) {
            status = "sleeping (probably, maybe not?) 😴";
        }

        statusElement.textContent = status;
    }
});