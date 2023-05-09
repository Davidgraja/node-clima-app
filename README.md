# Aplicación de clima en consola :
Esta aplicación de consola permite conocer con exactitud  el clima actual  de cualquiere ciudad del mundo , Esto es posible gracias a [Mapbox](https://www.mapbox.com/) el cual nos entrega las coordenadas exactas del lugar que deseas conocer y a [openWeather](https://openweathermap.org/) el cual en base a las cordenadas nos entrega toda la información del clima actual.

## Instalación :
1. Clona de este repositorio :  ``` git@github.com:Davidgraja/node-clima-app.git  ```

2.  Desde tu terminal navega hacia la ruta donde hayas clonado este proyecto : ``` cd node-clima-app ``` 

3. Deberas crear el archivo .env en la raiz del proyecto , esto  para el manejo de las variables de entorno ; dentro de el archivo .example.env tendras un ejemplo de las variables que necesita el proyecto para su perfecto funcionamiento. Basicamente necesitas dos variables de entorno las cuales hacen referencia a las api-keys de [Mapbox](https://www.mapbox.com/)  y  [openWeather](https://openweathermap.org/) donde deberas de crear tu respectiva cuenta para tener acceso a estas api-key

4. Dentro del proyecto ejecuta el comando `$ npm i` o `$ npm install`  para reconstruir los modulos de node 

5. Una vez reconstruidos los modulos de node puedes ejecutar el proyecto de dos maneras `$ node app.js` o  `$ npm start` , Ambos comandos ejecutan el proyecto.



## ¿ Como empezar a usarlo ? 
El  uso de la aplicación es bastante facil , al ejecutar el programa tendras la siguiente menu interativo :

![Vista menu principal](https://i.postimg.cc/1tjJ8Nq5/Node-clima-app-menu-Principal.png)

Como ves tendras dos tres opciones , buscar ciudad , historial de tus busquedas , y salir de la aplicación. 

- ### Buscar ciudad :

    En la opción buscar ciudad podremos buscar ciudades de cualquier parte del mundo , pero algo a tener en cuenta es de que la aplicación solo retornara 5 ciudades que coincidan con esa busqueda , esto quiere decir de que tendremos que ser bastantes precisos con el nombre de la ciudad.

    Esta se ve de la siguiente manera :
    
    ![Vista Historial](https://i.postimg.cc/mZcG8YVj/Node-clima-app-Vistabuscar-Ciuda.png)

    Luego solo tendremos que elegir la ciudad de la cual queremos optener la  información , su vista es la siguiente :

    ![Vista información de la ciudad](https://i.postimg.cc/Cdy7NT73/Node-clima-app-vista-Informaci-n-Ciudad.png)

- ## Historial :
    La aplicación tiene la capacidad de mantener el historial de tus ultimas 6 busquedas , no importas si bajas la aplicación , esta información no se perdera.
    Este historial se ve de la siguiente menera :

    ![Vista del historial](https://i.postimg.cc/WzqSgbGm/Node-clima-app-Vista-Historial.png)

## Nota :
Cabe recalcar de el proyecto esta creado sobre [node.js](https://nodejs.org/es/) , por lo que es importante que lo tengas instalado en tu maquina