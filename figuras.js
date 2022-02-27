
//-----------------------Cuadrado--------------------------------

function cuadrado(ladoCuadrado) {
    const perimetroC = ladoCuadrado + ladoCuadrado + ladoCuadrado;
    const areaC = ladoCuadrado * ladoCuadrado;

    console.group("Cuadrado");
    console.log(`El perimetro del cuadrado es: ${perimetroC}cm`);
    console.log(`El area del cuadrado es: ${areaC}cm`);
    console.groupEnd();
}

function cuadrado2() {
    const elemento = document.getElementById("cLado");
    const ladoCuadrado = parseFloat(elemento.value);
    const perimetroC = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado;
    const areaC = ladoCuadrado * ladoCuadrado;

    alert(`El perimetro del cuadrado es: ${perimetroC} cm y el area es: ${areaC} cm^2`);
}


//-----------------------Triangulo--------------------------------

function triangulo(lado1, lado2, base, altura ) {
    const perimetroT = lado1 + lado2 + base;
    const areaT = (base * altura) / 2;

    console.group("Triangulo");
    console.log(`El perimetro del triangulo es: ${perimetroT} cm`);
    console.log(`El del triangulo es: ${areaT} cm^2`);
    console.groupEnd();
}

function triangulo2() {
    const lado1 = document.getElementById("tLado1");
    const tLado1 = parseFloat(lado1.value);

    const lado2 = document.getElementById("tLado2");
    const tLado2 = parseFloat(lado2.value);

    const base = document.getElementById("tBase");
    const tBase = parseFloat(base.value);

    const altura = document.getElementById("tAltura");
    const tAltura = parseFloat(altura.value);

    const tPerimetro = tLado1 + tLado2 + tBase;
    const tArea = (tBase*tAltura)/ 2;

    alert(`El perimetro del triangulo es: ${tPerimetro} cm 
            y el area es de ${tArea} cm^2`);
}

//-----------------------Circulo--------------------------------

function circulo(radio) {
    const diametroCi = radio*2;
    const PI = Math.PI;
    const perimetroCi = diametroCi * PI;
    const areaCi = PI * Math.pow(radio,2);

    console.group("Circulo");
    console.log(`El perimetro del circulo es: ${perimetroCi} cm`);
    console.log(`El area del circulo es: ${areaCi} cm^2`);
    console.groupEnd();
}

function circulo2() {
    const radio = document.getElementById("cRadio");
    const cRadio = parseFloat(radio.value);
    const PI = Math.PI;

    const diametroCi = 2 * cRadio;
    const perimetroCi = diametroCi * PI;
    const areaCi = PI * (cRadio**2);

    alert(`El perimetro del circulo es: ${perimetroCi} cm
            y el area del circulo es: ${areaCi} cm^2`);
}


//-----------------------Triangulo isosceles------------------------------

function trianguloIso() {
    const lado1 = document.getElementById("isoLado1");
    const iLado1 = parseFloat(lado1.value);

    const lado2 = document.getElementById("isoLado2");
    const iLado2 = parseFloat(lado2.value);

    const base = document.getElementById("isoBase");
    const iBase = parseFloat(base.value);

    if(iLado1 != iLado2){
        alert("No se puede calcular debido a que los lados son diferentes");
    }else {
        const pequenoLado2 = iBase /2;
        const pequenoBase = iLado1 / 2;

        const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
        const pequenoBaseCuadrado = pequenoBase * pequenoBase;

        const pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

        const granedAltura = pequenoLado1;
        alert(`La altura del triangulo es: ${granedAltura} cm`);
    }
}