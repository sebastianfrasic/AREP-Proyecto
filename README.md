# Escuela Colombiana de Ingenieria Julio Garavito

# Watson Personality Insights
Aplicación que simula una herramienta que ayuda a pronosticar las características, las necesidades y los valores de la personalidad por medio de textos escritos. Ayuda a comprender los hábitos y las preferencias de los clientes a nivel individual y a escala.

## Requisitos

* Cuenta de IBM Cloud.
* Cuenta en GitHub.
* NodeJS.
* Utilizar browser.


## Ejecucion local

Ejecuta los siguientes comandos en la terminal, en la carpeta clonada:

``` 
bash
npm install
npm start
```
Usa el link [Localhost](http://localhost:8080) para cargar la aplicacion web en el navegador.

# Datos importantes

Ya que se haga el llenado del formulario, nos pasara a la siguiente donde nos mostrara caracteristicas de personalidad, pero en la terminal nos arrojara gracias a **Estructurador.js** toda la información que el servicio nos da. Es importante que el escrito contenga cierto numero de palabras, como se muestra a continuacion: 

* 3000 palabras son suficientes para conseguir la máxima precisión del servicio.
* Al menos 1200 palabras da como resultado un MAE que está dentro del dos por ciento del mejor MAE que puede devolver el servicio.
* Entre 600 y 1200 palabras da como resultado un MAE que está dentro del tres por ciento del mejor MAE que puede devolver el servicio.
* Menos de 600 palabras generan un aviso, pero el servicio sigue analizando la entrada.
* Menos de 100 palabras generan un error.

## Reviewed

Luis Daniel Benavides Navarro

## Authors

* **Juan Sebastián Frásica Galeano** - [PurpleBooth](https://github.com/sebastianfrasic)
* **Carlos Julián Gómez Ardila** - [PurpleBooth](https://github.com/CarlosGomez380)
* **Maria Fernanda Hernandez Vargas** - [PurpleBooth](https://github.com/mariahv9)



Students of Systems Engineering of Escuela Colombiana de Ingenieria Julio Garavito 