--Ejercicio de Express JS – API – MongoDb:
La API de tareas permitirá a los usuarios crear, leer, actualizar y eliminar tareas que estén
asociadas a una cuenta de un usuario existente y logueado. La información de las tareas se
almacenará en una base de datos MongoDB utilizando Mongoose. Además, se utilizará
Express.js para crear el servidor y definir las rutas de la API.

--Requisitos
A continuación, se detallan los requisitos para la implementación de la API de tareas:

• La API debe permitir a los usuarios autenticarse y obtener un token de acceso para
realizar operaciones en su cuenta.
• Los usuarios deben poder crear una nueva tarea proporcionando un título,
descripción, fecha de vencimiento y prioridad.
• Los usuarios deben poder ver todas las tareas asociadas a su cuenta.
• Los usuarios deben poder ver los detalles de una tarea específica.
• Los usuarios deben poder actualizar los detalles de una tarea existente, incluyendo el
título, descripción, fecha de vencimiento y prioridad.
• Los usuarios deben poder eliminar una tarea existente.
• La API debe manejar los errores y devolver una respuesta adecuada cuando se
produzca un error.
• La API debe ser segura y proteger los datos de los usuarios mediante autenticación y
autorización.