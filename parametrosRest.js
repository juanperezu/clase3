function sumar(...valores) {
    let suma=0;
    for(let x=0;x<valores.length;x++)
      suma+=valores[x];
    return suma;
  }

 console.log(sumar(10, 2, 44, 3,10));
 console.log();
 console.log(sumar(1, 2));
 console.log();
 console.log(sumar());
 console.log();