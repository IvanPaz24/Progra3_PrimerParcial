const contenedorGuardadas = document.getElementById("seriesGuardadas");
let seriesGuardadas = JSON.parse(localStorage.getItem("series"));
let seriesParseadas = seriesGuardadas.map(e => Serie.createFromJsonString(e));

seriesParseadas.forEach( element => {
            contenedorGuardadas.appendChild(element.createHtmlElement());
});

function mostrarSeries(lista){
    lista.forEach( element => {
            contenedorGuardadas.appendChild(element.createHtmlElement());
        });
    
}
// mostrarSeries(seriesParseadas);

document.getElementById("ordenarNombre").addEventListener( "click",() => { 
    let seriesOrdenadas = []; 
    contenedorGuardadas.innerHTML = "";
    seriesOrdenadas = seriesParseadas.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1; // a va antes
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1; // a va después
        }
        return 0; // son iguales
    });
    // console.log(seriesOrdenadas);
    // contenedorGuardadas.innerHTML = "";
    // seriesOrdenadas.forEach(element => {
    //     contenedorGuardadas.appendChild(element.createHtmlElement());
    // });
    // console.log(seriesOrdenadas);
    mostrarSeries(seriesOrdenadas);
    
});

document.getElementById("ordenarIdioma").addEventListener( "click",() => { 
    let seriesOrdenadas = [];  
    contenedorGuardadas.innerHTML = "";

    seriesOrdenadas = seriesParseadas.sort((a, b) => {
        if (a.language.toLowerCase() < b.language.toLowerCase()) {
            return -1; // a va antes
        }
        if (a.language.toLowerCase() > b.language.toLowerCase()) {
            return 1; // a va después
        }
        return 0; // son iguales
    });
    // console.log(seriesOrdenadas);
    // contenedorGuardadas.innerHTML = "";
    // seriesOrdenadas.forEach(element => {
    //     contenedorGuardadas.appendChild(element.createHtmlElement());
    // });
    mostrarSeries(seriesOrdenadas);
});



document.getElementById("ordenarId").addEventListener( "click",() => { 
    let seriesOrdenadas = []; 
    contenedorGuardadas.innerHTML = "";

    seriesOrdenadas = seriesParseadas.sort((a, b) => a.id - b.id);
    // console.log(seriesOrdenadas);
    // contenedorGuardadas.innerHTML = "";
    // seriesOrdenadas.forEach(element => {
    //     contenedorGuardadas.appendChild(element.createHtmlElement());
    // });
    mostrarSeries(seriesOrdenadas);

    // console.log(seriesOrdenadas);
    
});