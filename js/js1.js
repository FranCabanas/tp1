
let contrasena = 123456;
let nombre = 'marcos';
let inp_nombre = document.getElementById('nombres');
let inp_apellido = document.getElementById('apellidos');
let boton = document.getElementById('enviar');
let cont_tabla = document.getElementById('cont-tabla');
let precio = document.getElementById('valor');
let check = document.getElementsByClassName('check');
let sexo = document.getElementById('sexo');

boton.addEventListener("click", (e) => {
    enviarDato(e);
})
function enviarDato(e) { 
    e.preventDefault();
    if (inp_apellido.value!="" && inp_nombre.value!="") {
        
   
    let cont = "asd";
   
    console.log(inp_nombre.value);
    console.log(inp_apellido.value);
    console.log(sexo.value);

    for (let i = 0; i < check.length; i++) {
        if (check[i].checked==true) {
            cont = check[i].value  
        }    
     }
    cont_tabla.innerHTML += `
    <tr>
        <th scope="row"> </th>
         <td>${inp_nombre.value}</td>
          <td>${inp_apellido.value}</td>
          <td>${cont}</td>
    </tr>`
     inp_apellido.value="";
     inp_nombre.value="";
     sexo.value="";

     for (let j = 0; j < check.length; j++) {
    if (check[j].checked==true) {
        check[j].checked = false
    }    
 }
 }
 else{
    alert("ERROR A LA HORA DE INGRESAR LOS DATOS")
 }
}

function prevenir(e) {
    e.preventDefault();

}





