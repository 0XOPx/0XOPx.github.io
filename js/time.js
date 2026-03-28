function updateClocks() {
    const now = new Date();

    const ukOptions = {
        timeZone: 'Europe/Warsaw',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    
    const usOptions = {
        timeZone: 'Europe/Warsaw',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const ukTime = new Intl.DateTimeFormat('en-GB', ukOptions).format(now);
    const usTime = new Intl.DateTimeFormat('en-US', usOptions).format(now);

    document.getElementById('time-uk').innerText = ukTime;
    document.getElementById('time-us').innerText = usTime;
}

setInterval(updateClocks, 1000);
updateClocks();