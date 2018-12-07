function adresseIdent() {
    var elem = document.getElementById("l_adresse");
    var elem2 = document.getElementById("l_code_postal");
    var elem3 = document.getElementById("l_ville");

    if (document.getElementById('checkbox').checked){
        var adresse = document.getElementById("f_adresse").value;
        var cp = document.getElementById("f_code_postal").value;
        var ville = document.getElementById("f_ville").value;

        elem.value = adresse;
        elem.setAttribute('readonly', 'readonly');
        elem2.value = cp;
        elem2.setAttribute('readonly', 'readonly');
        elem3.value = ville;
        elem3.setAttribute('readonly', 'readonly');
    }
    else {
        elem.value = "";
        elem.removeAttribute('readonly');
        elem2.value = "";
        elem2.removeAttribute('readonly');
        elem3.value = "";
        elem3.removeAttribute('readonly');
    }
}
