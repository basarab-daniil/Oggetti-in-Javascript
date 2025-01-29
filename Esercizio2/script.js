const animale1 = {
    specie: "mucca",
    razza: "chianina",
    zampe: 4,
    caratteristicheComplete: function() {
        return "Specie: " + this.specie + "<br>" +
               "Razza: " + this.razza + "<br>" +
               "Zampe: " + this.zampe;
    }
};

const animale2 = {
    specie: "cane",
    razza: "bassotto",
    zampe: 4,
    caratteristicheComplete: function() {
        return "Specie: " + this.specie + "<br>" +
               "Razza: " + this.razza + "<br>" +
               "Zampe: " + this.zampe;
    }
};

const animale3 = {
    specie: "gallina",
    razza: "andalusa",
    zampe: 2,
    caratteristicheComplete: function() {
        return "Specie: " + this.specie + "<br>" +
               "Razza: " + this.razza + "<br>" +
               "Zampe: " + this.zampe;
    }
};

function mostraCaratteristiche(animale) {
    document.getElementById("info").innerHTML = animale.caratteristicheComplete();
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
