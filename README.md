# API-SSFF
This repository is for connect to SSFF SAP and return data in a JSON.

This is the link of the documentation to connect for the API SSFF:
[OData V2](https://help.sap.com/doc/a7c08a422cc14e1eaaffee83610a981d/2305/en-US/SF_HCM_OData_API_DEV.pdf)

Este código crea un servidor Express que responde a las solicitudes en la ruta /api/products. Al acceder a esa ruta, hará una solicitud GET a la URL de la API proporcionada y devolverá los datos en formato JSON.

Para ejecutar el código, guarda el código en un archivo (por ejemplo, app.js) y ejecuta:

<code>node app.js</code>

Luego, puedes acceder a los datos JSON en tu navegador o utilizando herramientas como cURL o Postman:

<code>http://localhost:3000/api/products </code>
