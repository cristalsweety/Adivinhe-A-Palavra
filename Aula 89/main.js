function addUser() {
    var nome1 = document.getElementById("jogador1nome").value;
    var nome2 = document.getElementById("jogador2nome").value;
    localStorage.setItem("n1", nome1);
    localStorage.setItem("n2", nome2);

    window.location = "game_page.html"
}

