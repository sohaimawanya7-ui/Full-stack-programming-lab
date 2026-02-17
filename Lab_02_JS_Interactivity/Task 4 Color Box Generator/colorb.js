function addColors() {

    let colors = [
        document.getElementById("color1").value,
        document.getElementById("color2").value,
        document.getElementById("color3").value
    ];

    for (let i = 0; i < colors.length; i++) {

        if (colors[i] !== "") {

            let box = document.createElement("div");
            box.className = "box";
            box.style.backgroundColor = colors[i];

            document.getElementById("colorArea").appendChild(box);
        }
    }

    document.getElementById("info").innerText =
        "Width: " + window.innerWidth +
        " | Height: " + window.innerHeight +
        " | Browser: " + navigator.appName;
}

function clearBoxes() {
    document.getElementById("colorArea").innerHTML = "";
}