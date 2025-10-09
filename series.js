class Serie {
    constructor(id, url, name, language, generes, image) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.language = language;
        this.generes = generes;
        this.image = image;
    }

    toJsonString(){
        return JSON.stringify(this);
    }

    static createFromJsonString(json){
        const obj = JSON.parse(json);
        return new Serie(obj.id, obj.url, obj.name, obj.language, obj.generes, obj.image);
    }

    createHtmlElement() {
        const div = document.createElement("div");
        div.classList.add("serie");

        const nameSerie = document.createElement("h3");
        nameSerie.textContent = this.name;

        const languageSerie = document.createElement("h3");
        languageSerie.textContent = `Idioma: ${this.language}`;
        
        
        // this.generes.forEach(element => {
        //     generesSerie.textContent = element;
        // });
        const generesSerie = document.createElement("p");
        generesSerie.textContent = `Géneros: ${this.generes.join(", ")}`;
        
        const linkSerie = document.createElement("a");
        linkSerie.href = this.url;
        linkSerie.target = "_blank";

        const imgSerie = document.createElement("img");
        imgSerie.src = this.image;
        imgSerie.alt = this.name;
        imgSerie.style.width = "150px";

        //agrego la imagen a la etiqueta
        linkSerie.appendChild(imgSerie);
        
        //boton guardar
        const btnGuardar = document.createElement("button");
        btnGuardar.textContent = "Guardar";
        btnGuardar.addEventListener("click", () => {
            Serie.guardarCarta(this);
        });

        // agregamos al div
        div.appendChild(nameSerie);
        div.appendChild(languageSerie);
        div.appendChild(generesSerie);
        div.appendChild(btnGuardar);
        div.appendChild(linkSerie);

        return div;
    }    

    static guardarCarta(serie){
        let seriesGuardadas = localStorage.getItem("series");

        // console.log(cartasGuardadas);
        
        ///si el local storage tiene algun dato guardado
        if (seriesGuardadas) {
             seriesGuardadas = JSON.parse(seriesGuardadas);
        } else {
            //si esta vacio empieza el array de nuevo
            seriesGuardadas = [];
        }
        let flag = false;
        ///paso todas las series a obj para comparar
        let seriesParseadas = seriesGuardadas.map(e => Serie.createFromJsonString(e));
        seriesParseadas.forEach(element => {
            if (element.id === serie.id) {
                console.log("son iguales");
                flag = true;
            }
        });
        
        ///si no son iguales es true, la serie no se repite
        if (!flag) {
            // agregar la nueva serie
            seriesGuardadas.push(serie.toJsonString());
            localStorage.setItem("series", JSON.stringify(seriesGuardadas));
        }else{
            console.log("La serie ya existe");
            
        }
        
        console.log(JSON.parse(localStorage.getItem("series")));
    }

}