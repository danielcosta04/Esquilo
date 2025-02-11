// esquilo.js
let hamsterSpeedFactor = 4;

function init() {
    const wrapper = document.querySelector(".wrapper");
    const wheel = document.querySelector(".wheel");
    const hamster = {
        speedFactor: hamsterSpeedFactor
    };

    const setSpeed = () => {
        wrapper.style.setProperty("--hamster-speed",
            `${1 / hamster.speedFactor}s`);
        wrapper.style.setProperty("--wheel-speed",
            `${2 / hamster.speedFactor}s`);
    };

    setSpeed();
}

function increaseSpeed() {
    if (hamsterSpeedFactor > 1) {
        hamsterSpeedFactor--;
        init();
    }
}

function decreaseSpeed() {
    if (hamsterSpeedFactor < 10) {
        hamsterSpeedFactor++;
        init();
    }
}

document.addEventListener("DOMContentLoaded", init);
