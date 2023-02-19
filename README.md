# Aplicación de clima en consola :
Esta aplicación de consola permite conocer con exactitud  el clima actual  de cualquiere ciudad del mundo , Esto es posible gracias a [Mapbox](https://www.mapbox.com/) el cual nos entrega las coordenadas exactas del lugar que deseas conocer y a [openWeather](https://openweathermap.org/) el cual en base a las cordenadas nos entrega toda la información del clima actual.

## ¿ Como empezar a usarlo ? 

- Haz la clonación de este repositorio 
- Desde tu terminal navega hacia la ruta donde hayas clonado este proyecto

- Deberas crear el archivo .env en la raiz del proyecto , esto  para el manejo de las variables de entorno ; dentro de el archivo .example.env tendras un ejemplo de las variables que necesita el proyecto para su perfecto funcionamiento. Basicamente necesitas dos variables de entorno las cuales hacen referencia a las api-keys de [Mapbox](https://www.mapbox.com/)  y  [openWeather](https://openweathermap.org/) donde deberas de crear tu respectiva cuenta para tener acceso a estas api-key

- Dentro del proyecto ejecuta el comando `$ npm i` o `$ npm install`  para reconstruir los modulos de node 

- Una vez reconstruidos los modulos de node puedes ejecutar el proyecto de dos maneras `$ node app.js` o  `$ npm start` , Ambos comndo ejecutar el proyecto.

## Nota :
Cabe recalcar de que se debe tener instalado [node.js](https://nodejs.org/es/) en tu maquina