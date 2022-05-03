var counter;
var growth_rate;

if (localStorage.getItem("count")) {
    counter = parseInt(localStorage.getItem("count"))
} else {
    counter = 0;
}
document.getElementById("counter").innerHTML = counter;

if (localStorage.getItem("growth_rate")) {
    growth_rate = parseInt(localStorage.getItem("growth_rate"))
} else {
    growth_rate = 1
}
document.getElementById("growth").innerHTML = growth_rate;

const iterate = () => {
    counter += 1;
    localStorage.setItem("count", counter);
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
}

const grow = () => {
    growth_rate += 1;
    localStorage.setItem("growth_rate", growth_rate);
    document.getElementById("growth").innerHTML = growth_rate;
    console.log(counter);
}

const start = () => {
    var interval = 1000 / growth_rate;
    interval_id = setInterval(iterate, interval);
}

const stop = () => {
    clearInterval(interval_id);
}

const reset = () => {
    reset_counter();
    reset_growth();
    clearInterval(interval_id);
}

const reset_counter = () => {
    counter = 0;
    localStorage.setItem("count", counter);
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
}

const reset_growth = () => {
    growth_rate = 1;
    localStorage.setItem("growth_rate", growth_rate);
    document.getElementById("growth").innerHTML = growth_rate;
    console.log(growth_rate);
}

document.getElementById("btn_grow").addEventListener("click", grow)
document.getElementById("btn_start").addEventListener("click", start)
document.getElementById("btn_stop").addEventListener("click", stop)
document.getElementById("btn_reset").addEventListener("click", reset)