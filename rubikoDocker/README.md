🇺🇸

Basic:

1️⃣Rename file ".env.example" as ".env" and fill with our info, "PORT" will be server's listening port (in our case 5000) and "DEFAULT" will be our default message to display (in this case "OK")

2️⃣Install dependencies in the terminal with "npm install" or "npm i"

3️⃣Make sure that the instruction "EXPOSE" in our file "dockerfile" has the port 5000 assigned

4️⃣Delete lines 8 and 9 in file "docker-compose.yml" "environment:" and "-GREETINGS=Hello Rubiko Tech!" respectively

5️⃣Back in the terminal we create our image with "docker build -t rubiko-basic-docker ."

6️⃣Finally we will start docker compose's service with "docker-compose up"

Advanced:

1️⃣Follow basic steps skipping 4️⃣

🇪🇸

Básico:

1️⃣Renombramos el archivo ".env.example" a ".env" y cubrimos los datos, "PORT" será el puerto en el que el servidor se quedará en escucha (en nuestro caso el 5000) y "DEFAULT" será el mensaje por defecto que queremos mostrar (en este caso "OK")

2️⃣En la terminal hacemos la instalación de las dependencias con el comando "npm install" o "npm i"

3️⃣Nos aseguramos que en el archivo "dockerfile" la instrucción "EXPOSE" tiene asignado el puerto 5000

4️⃣En el archivo "docker-compose.yml" eliminamos las líneas 8 y 9 en las que pone "environment:" y "- GREETINGS=Hello Rubiko Tech!" respectivamente

5️⃣De nuevo en la terminal escribimos el comando "docker build -t rubiko-basic-docker ." para crear la imagen

6️⃣Para terminar iniciamos el servicio de docker compose con el comando "docker-compose up"

Avanzado:

1️⃣Seguimos los pasos de la prueba básica saltándonos el 4️⃣
