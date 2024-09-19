function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var seconds = currentTime.getSeconds().toString().padStart(2, '0');

    var clockDiv = document.getElementById("clock");
    clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Atualiza a hora a cada segundo
setInterval(displayTime, 1000);
