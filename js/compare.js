
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if(carArr.length < 2){
                carArr.push(carClass);
            } else {
                el.checked = false;
                alert("Pode comparar no máximo 2 carros!");
            }
        } else {
            let index = GetCarArrPosition(carArr, carClass);
            if(index !== -1){
                carArr.splice(index, 1);
            }
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    
    let overlay = document.getElementById("compare-overlay");
    if(!overlay) {
        overlay = document.createElement("div");
        overlay.id = "compare-overlay";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.zIndex = "999";
        overlay.style.display = "none";
        overlay.onclick = () => HideCompare();
        document.body.appendChild(overlay);
    }
    
    overlay.style.display = "block";
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    let overlay = document.getElementById("compare-overlay");
    if(overlay) {
        overlay.style.display = "none";
    }
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    for(let i = 0; i < carArr.length; i++){
        document.getElementById("compare_image_" + i).innerHTML = "<img src='" + carArr[i].image + "' width='100%'>";
        document.getElementById("compare_modelo_" + i).innerHTML = carArr[i].nome;
        document.getElementById("compare_alturacacamba_" + i).innerHTML = carArr[i].alturaCacamba;
        document.getElementById("compare_alturaveiculo_" + i).innerHTML = carArr[i].alturaVeiculo;
        document.getElementById("compare_alturasolo_" + i).innerHTML = carArr[i].alturaSolo;
        document.getElementById("compare_capacidadecarga_" + i).innerHTML = carArr[i].capacidadeCarga;
        document.getElementById("compare_motor_" + i).innerHTML = carArr[i].motor;
        document.getElementById("compare_potencia_" + i).innerHTML = carArr[i].potencia;
        document.getElementById("compare_volumecacamba_" + i).innerHTML = carArr[i].volumeCacamba;
        document.getElementById("compare_roda_" + i).innerHTML = carArr[i].roda;
        document.getElementById("compare_preco_" + i).innerHTML = "R$ " + carArr[i].preco.toLocaleString('pt-BR');
    }
}
