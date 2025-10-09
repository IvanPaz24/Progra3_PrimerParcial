const contenedor = document.getElementById("series");
const series = [];
let contadorInicio = 0; // inicio
const pageSize = 6;     // cuántas series por página
let totalSeries = 50;

async function cargarSeries() {
    try{
        for (let i = 1; i <= totalSeries ; i++) {
            let respuesta = await fetch(`https://api.tvmaze.com/shows/${i}`);
            let data = await respuesta.json();
            let serie = new Serie(
                data.id,
                data.url,
                data.name,
                data.language,
                data.genres,
                data.image ? data.image.medium: ""
            );
            series.push(serie);
        }
        
        mostrarSeries()
    }catch (e){
        console.log("Error cargando las series: " + e);
    }
}


function mostrarSeries() {
    contenedor.innerHTML = ""; // limpiar
    let auxLista = series.slice(contadorInicio, contadorInicio + pageSize);
    auxLista.forEach((serie) => {
        contenedor.appendChild(serie.createHtmlElement())
    });
}

document.getElementById("siguiente").addEventListener("click", () => {
    // e.preventDefault();
    if (contadorInicio + pageSize < series.length) { // no me paso
        contadorInicio += pageSize;
        mostrarSeries();
    }
});

document.getElementById("anterior").addEventListener("click", () => {
    // e.preventDefault();
    if (contadorInicio - pageSize >= 0) { // evito negativos
        contadorInicio -= pageSize;
        mostrarSeries();
    }
});

cargarSeries();
// mostrarSeries();