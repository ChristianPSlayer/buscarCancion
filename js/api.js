import * as UI from './interfaz.js';

export class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;

        this.consultarAPI();

    }

    consultarAPI(){
        fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            if(resultado.lyrics){
                const {lyrics} = resultado;
                UI.divResultado.textContent = lyrics;
                UI.headingResultado.textContent = 'Resultado';

            } else{
                UI.divMensajes.innerHTML=`La cancion no existe`;
                UI.divMensajes.classList.add('error');
                setTimeout(() => {
                    UI.divMensajes.classList.remove('error');
                    UI.formularioBuscar.reset();
                }, 3000);


                
            }
        })
        .catch(error => console.log(error))
    }
}