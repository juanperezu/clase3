
function generarLista(vec, tipo='<ul>') {
    let lista=tipo;
    for(let x=0;x<vec.length;x++)
      lista += `<li>${vec[x]}</li>`;
    if (tipo=='<ul>') 
      lista += '</ul>';
    else
      lista += '</ul>'
    return lista;
  }
  console.log(generarLista([1,3,5,6,7,8,9]));
