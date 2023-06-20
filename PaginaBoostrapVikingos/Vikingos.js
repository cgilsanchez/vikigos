
function validar(){

    let actor=document.getElementById('actor');
    let correo=document.getElementById('correo');
    let correodos=document.getElementById('correodos');
    let contraseña=document.getElementById('contraseña');
    let anyo=document.getElementById('anyo');
    let hijos=document.getElementById('hijos');



    
    let check=document.getElementById('check');
    let ok =true;  

    
    if (actor.value.length==0) {
        ok=false;
        actor.style.borderColor="red";
        document.getElementById("errorActor").style.visibility="visible";
    }
    
    
    regexp_correo = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/ ;
    if (!regexp_correo.test(correo.value)) { 
        ok=false;
        correo.style.borderColor="red";
        document.getElementById("errorCorreo").style.visibility="visible";
    }

    if(correo.value!==correodos.value){
        ok=false;
        correodos.style.borderColor="red";
        document.getElementById("errorCorreodos").style.visibility="visible";
    } 

    regexp_contraseña = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$!%?&]{6,14}/;
    if (!regexp_contraseña.test(contraseña.value)) { 
        ok=false;
        contraseña.style.borderColor="red";
        document.getElementById("errorContraseña").style.visibility="visible";
    }

    
    

    if (isNaN(anyo.value) || anyo.value<1950 || anyo.value>2020 ) {
        ok=false;
        anyo.style.borderColor="red";
        document.getElementById("errorAnyo").style.visibility="visible";
    }

    
    if (hijos.value==0){ 
        ok=false;
        hijos.style.borderColor="red";
        document.getElementById("errorHijos").style.visibility="visible";
    }

    
    if (!check.checked){
        ok=false;
        check.style.borderColor="red";
        document.getElementById("errorCheck").style.visibility="visible";
    }

    return ok;
    

}


function quitarError(nodo,id){
    nodo.style.borderColor="lightgray";
    document.getElementById(id).style.visibility="hidden";
} 

