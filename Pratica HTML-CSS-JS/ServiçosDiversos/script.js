function msg() {
    let inputs = document.getElementById("input1").value;

    let inputsNovo = document.getElementsByClassName("inputs").value;
    var novo=inputs;
   
    dv1.innerHTML +=`
    <input value="DISPSUB:DN=${novo} ; " class="inputs11" id="inputJS" type="text">
    `;

    const codigos = document.getElementById("input1").value;
    inputJS.select();
    inputJS.setSelectionRange(0, 9999);
    document.execCommand("copy");
    let teste = document.getElementById("inputJS").style.display="none";
    window.location.reload();

}

function msg2() {
    let inputs = document.getElementById("input2").value;

    let inputsNovo = document.getElementsByClassName("inputs").value;
    var novo=inputs;
   
    dv1.innerHTML +=`
    <input value="MODSUB:COS=CLIP,DN=${novo} ; " class="inputs11" id="inputJS" type="text">
    `;
    const codigos = document.getElementById("input1").value;
    inputJS.select();
    inputJS.setSelectionRange(0, 9999);
    document.execCommand("copy");
    let teste = document.getElementById("inputJS").style.display="none";


}



function msg3() {
    let inputs = document.getElementById("input3").value;

    let inputsNovo = document.getElementsByClassName("inputs").value;
    var novo=inputs;
   
    dv1.innerHTML +=`
    <input value="MODSUB:CCOS=CLIP,DN=${novo} ; " class="inputs11" id="inputJS" type="text">
    `;
    const codigos = document.getElementById("input1").value;
    inputJS.select();
    inputJS.setSelectionRange(0, 9999);
    document.execCommand("copy");
    let teste = document.getElementById("inputJS").style.display="none";

    inputs = " ";
    



}


function msg4() {
    let inputs = document.getElementById("input4").value;

    let inputsNovo = document.getElementsByClassName("inputs").value;
    var novo=inputs;
   
    dv1.innerHTML +=`
    <input value="MODSUB:COS=CLIP,DN=${novo} ; " class="inputs11" id="inputJS" type="text">
    `;
    const codigos = document.getElementById("input1").value;
    inputJS.select();
    inputJS.setSelectionRange(0, 9999);
    document.execCommand("copy");
    let teste = document.getElementById("inputJS").style.display="none";


}