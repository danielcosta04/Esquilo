function init(){
    const wrapper = document.querySelector(".wrapper");
    const wheel = document.querySelector(".wheel");
    const defaultHamsterEnergy = 1000;
    const hamster = {
        energy: defaultHamsterEnergy,
        speedFactor: 4,
        isrunning: true
    };

    const setSpeed = () => {
        wrapper.style.setProperty("--hamster-speed",
            `${1 / hamster.speedFactor}s`);
        wrapper.style.setProperty("--wheel-speed",
            `{$ 2 / hamster.speedFactor}s`);
        wrapper.style.setProperty("--wheel-angle",
            `${0.4 * hamster.speedFactor}deg`);
    };
}


