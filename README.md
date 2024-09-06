# Sistema Antifraude Transaccional para el Sector Financiero

## Descripción del Proyecto

Este proyecto es un sistema backend en Node.js diseñado para detectar y prevenir fraudes en transacciones financieras. Utiliza una base de datos remota MongoDB para almacenar y procesar información de clientes y transacciones.

## Estructura del Proyecto

proyecto-antifraude/
├── docs/
│ ├── EspecificacionesRequerimientos.md
│ └── HistoriasdeUsuario.md
│ └── TicketsUS-001.md
│ └── US-001.md
├── src/
│ ├── config/
│ │ ├── database.js
│ ├── models/
│ │ ├── cliente.js
│ │ ├── transaccion.js
│ │ └── fraudeSospechado.js
│ ├── services/
│ │ └── deteccionFraude.js
│ ├── controllers/
│ │ └── transaccionController.js
│ ├── routes/
│ │ └── transaccionRoutes.js
│ ├── tests/
│ │ └── testDatabase.js
│ └── app.js
├── .env
├── package.json
└── README.md

## Especificaciones Técnicas

- **Backend**: Node.js
- **Base de Datos**: MongoDB (remota)
- **ORM**: Mongoose
- **Testing**: Jest (recomendado, no implementado aún)

Para más detalles, consulta [docs/EspecificacionRequerimientos.md](docs/EspecificacionRequerimientos.md).

## Historia de Usuario

La historia de usuario principal se centra en el bloqueo automático de cuentas por sospecha de fraude. Para más detalles, consulta [docs/US-001.md](docs/US-001.md).

## Configuración del Proyecto

1. Clona el repositorio:
   ```
   git clone [URL_DEL_REPOSITORIO]
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Configura las variables de entorno en el archivo `.env`:
   ```
   MONGODB_URI=tu_uri_de_mongodb
   ```

4. Ejecuta el proyecto:
   ```
   npm start
   ```

## Ejecución de Tests

Para ejecutar los tests:

npm test

## Prompts Relevantes Utilizados

1. Solicitud inicial del proyecto:
   ```
   "Necesito crear un proyecto backend en node.js para un sistema antifraude transaccional del sector financiero. Te pasaré la historia de usuario y el detalle de los tickets, debes tener en cuenta que la bd no será local sino remota con mongodb"
   ```


Si deseas contribuir al proyecto, por favor:

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Mario Forero - mforero95@gmail.com

Link del proyecto: [https://github.com/mcforero95/ProyectoAntifraude](https://github.com/mcforero95/ProyectoAntifraude)

