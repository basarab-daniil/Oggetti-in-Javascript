const animale1 = {
    specie: "mucca",
    razza: "chianina",
    zampe: 4
};

const animale2 = {
    specie: "cane",
    razza: "bassotto",
    zampe: 4
};

const animale3 = {
    specie: "gallina",
    razza: "andalusa",
    zampe: 2
};

function mostraCaratteristiche(animale) {
    document.getElementById("info").innerHTML =
        "Specie: " + animale["specie"] + "<br>" +
        "Razza: " + animale["razza"] + "<br>" +
        "Zampe: " + animale["zampe"];
}

document.getElementById("animale1Btn").addEventListener("click", function () {
    mostraCaratteristiche(animale1);
});

document.getElementById("animale2Btn").addEventListener("click", function () {
    mostraCaratteristiche(animale2);
});

document.getElementById("animale3Btn").addEventListener("click", function () {
    mostraCaratteristiche(animale3);
});
