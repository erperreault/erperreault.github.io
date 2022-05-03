var counter = 0;
document.getElementById("counter").innerHTML = counter;

const iterate = () => {
    counter += 1;
    console.log(counter);
    document.getElementById("counter").innerHTML = counter;
}
document.getElementById("btn").addEventListener("click", iterate)