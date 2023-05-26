    function question() {
    
        let doc = prompt("Qual o seu tipo de gatos favorito?");
    
        if (doc != null) {
            document.getElementById("g").innerHTML =
            "Eu também gosto de gatos " + doc;
        }
    }