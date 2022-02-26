function formulascuadrado(){
        lado = document.getElementById('lado').value;  
        var area = lado*lado;
        var perimetro = 4*lado;
        document.getElementById('Area').innerHTML = 'Area: ' + area;
        document.getElementById('perimetro').innerHTML ='Perimetro: ' + perimetro;
}

function calcularbrecha(){
    var retorno = brecha(promedios(Msalario),promedios(Fsalario));
    document.getElementById('brecha').innerHTML ='Brecha: ' + retorno*100 + '%';
}
function agregardatos(){
    var salario = document.getElementById('salario').value;
    if(salario>0 && salario!=null){ 
        if(document.getElementById('genero').value == 'Masculino')agregar(Msalario,salario);
        else agregar(Fsalario,salario);
        document.getElementById('hombres').innerHTML ='Masculino: ' + promedios(Msalario);
        document.getElementById('mujeres').innerHTML ='Femenino: ' + promedios(Fsalario);
        agregarcolumna(document.getElementById('genero').value,salario);
        if(Msalario[0]!=null && Fsalario[0]!=null) calcularbrecha();
    } else alert('ingrese un salario');
}
function brecha(shombre, smujeres){
    return (shombre-smujeres)/shombre;
}
 function promedios(arreglo){
    var suma = 0;
    var aux = 0;
    for(var i = 0;i<arreglo.length;i++){
        suma = suma + parseInt(arreglo[i]);
        aux++;
    }
    suma = suma/aux;
    return suma;
}
function agregar(arreglo,salario){
    arreglo.push(salario);
}
function agregarcolumna(genero,salario){
    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = genero;
    cell2.innerHTML = salario;

}
var Msalario = [];
var Fsalario = [];








