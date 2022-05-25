let moninputtext=document.querySelector('#add')
let maliste=document.querySelector('.items')
moninputtext.addEventListener("keydown",ajouteruntodo)
function ajouteruntodo(e) {
    let montext = moninputtext.value;
    let mestodo = document.querySelectorAll("input[type=checkbox]");
    let nombretodo = mestodo.length + 1
    if (e.code == "Enter" && montext.length>0) {               
        let moninput = new Object (document.createElement ("input"));
        moninput.setAttribute ("type", "checkbox");
        moninput.setAttribute ("id", "item" + nombretodo );
        maliste.appendChild(moninput)
        let monlabel = new Object (document.createElement ("label"));
        monlabel.setAttribute ("for", "item" + nombretodo );
        monlabel.innerHTML= montext ;
        maliste.appendChild(monlabel);
        moninputtext.value='';
    }
}