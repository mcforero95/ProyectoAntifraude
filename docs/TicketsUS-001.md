Ticket 1: Configuración de Base de Datos
ID del Ticket: TASK-001
Título del Ticket: Configuración de Tablas en Base de Datos para el Bloqueo de Cuentas
Descripción: Crear las tablas `Clientes`, `Transacciones` y `FraudeSospechado` en la base de datos local, así como establecer relaciones entre ellas para soportar el bloqueo automático de cuentas ante sospecha de fraude.
Criterios de aceptación:
- Las tablas deben estar correctamente creadas con los campos especificados en el diseño.
- Las relaciones entre `Clientes`, `Transacciones` y `FraudeSospechado` deben estar implementadas y funcionales.
- Debe existir un campo `estado_cuenta` en la tabla `Clientes` que permita bloquear una cuenta.
- El campo `estado_transaccion` en la tabla `Transacciones` debe soportar el estado "pendiente de validación".
Prioridad: Alta
Estimación de esfuerzo: 4 horas
Tareas Técnicas:
1. Crear la tabla `Clientes` con los campos especificados (nombre, documento, estado_cuenta).
2. Crear la tabla `Transacciones` con los campos especificados (monto, fecha_hora, tipo_transaccion, estado_transaccion, id_cliente).
3. Crear la tabla `FraudeSospechado` con los campos (nivel_riesgo, motivo_sospecha, id_transaccion, id_cliente).
4. Establecer las relaciones de clave foránea entre las tablas.
5. Probar la correcta creación de registros y actualizaciones de estado en la base de datos.
Notas: Se debe preparar un script SQL para la creación y configuración de las tablas y relaciones.
Ticket 2: Implementación de Algoritmo de Detección de Fraude
ID del Ticket: TASK-002
Título del Ticket: Desarrollo del Algoritmo de Detección de Transacciones Sospechosas
Descripción: Implementar la lógica para detectar transacciones sospechosas basadas en reglas predefinidas como monto inusual, ubicación geográfica, y múltiples intentos fallidos. Este algoritmo debe marcar las transacciones como sospechosas.
Criterios de aceptación:
- El algoritmo debe detectar y marcar correctamente las transacciones sospechosas.
- Se debe registrar en la tabla `FraudeSospechado` cada transacción que cumpla con las condiciones predefinidas.
- Debe ser capaz de verificar si una transacción supera el umbral definido para cada regla (monto, ubicación, intentos fallidos).
Prioridad: Alta
Estimación de esfuerzo: 6 horas
Tareas Técnicas:
1. Definir las reglas de detección de fraude (monto máximo, ubicaciones inusuales, intentos fallidos).
2. Implementar la lógica en el backend para detectar transacciones sospechosas en tiempo real.
3. Actualizar el estado de la transacción a "pendiente de validación" cuando sea sospechosa.
4. Registrar los detalles de la transacción en la tabla `FraudeSospechado`.
5. Pruebas unitarias para validar que el algoritmo funciona correctamente.
Notas: Se pueden añadir reglas adicionales en el futuro, pero se recomienda empezar con las reglas básicas.
Ticket 3: Implementación del Proceso de Bloqueo Automático
ID del Ticket: TASK-003
Título del Ticket: Implementar Bloqueo Automático de Cuenta ante Transacciones Sospechosas
Descripción: Desarrollar la funcionalidad que cambia el estado de una cuenta de "activa" a "bloqueada" cuando se detecta una transacción sospechosa. El proceso de bloqueo debe ejecutarse automáticamente al identificar una alerta de fraude.
Criterios de aceptación:
- El estado de la cuenta debe cambiar a "bloqueada" en la base de datos cuando se detecta una transacción sospechosa.
- El bloqueo debe ocurrir en tiempo real sin intervención manual.
- El sistema debe registrar el motivo del bloqueo en un log o registro interno.
Prioridad: Alta
Estimación de esfuerzo: 5 horas
Tareas Técnicas:
1. Implementar la lógica que actualiza el estado de la cuenta en la tabla `Clientes` a "bloqueada".
2. Conectar el algoritmo de detección de fraude con la actualización del estado de la cuenta.
3. Probar que el bloqueo de la cuenta ocurre en tiempo real cuando se detecta fraude.
4. Registrar el motivo del bloqueo en un archivo de log o en la base de datos.
5. Probar la actualización de la base de datos para asegurar que el bloqueo es irreversible hasta la validación.
Notas: El proceso debe ser eficiente para garantizar que no existan retrasos en el bloqueo.
Ticket 4: Registro de la Transacción Sospechosa
ID del Ticket: TASK-004
Título del Ticket: Registrar Transacción Sospechosa y Generar Alerta Interna
Descripción: Crear la funcionalidad para registrar los detalles de las transacciones sospechosas en la base de datos y generar una alerta interna para el equipo antifraude.
Criterios de aceptación:
- Las transacciones sospechosas deben ser almacenadas en la tabla `FraudeSospechado`.
- Se debe generar un log interno o alerta notificando al equipo de seguridad sobre la transacción sospechosa.
- La información de la transacción debe incluir el motivo del bloqueo y el nivel de riesgo.
Prioridad: Media
Estimación de esfuerzo: 3 horas
Tareas Técnicas:
1. Implementar la funcionalidad para almacenar las transacciones sospechosas en la tabla `FraudeSospechado`.
2. Generar una alerta interna en el sistema que notifique al equipo de operaciones antifraude.
3. Probar que la información registrada es correcta y detallada.
4. Validar que las alertas se generen solo cuando el estado de la cuenta cambie a "bloqueada".
Notas: El equipo de operaciones debe ser notificado de todas las transacciones bloqueadas para su revisión manual.
Ticket 5: Pruebas y Validaciones del Bloqueo Automático
ID del Ticket: TASK-005
Título del Ticket: Realizar Pruebas Funcionales y Unitarias del Bloqueo Automático
Descripción: Realizar las pruebas funcionales y unitarias para asegurar que el bloqueo automático de cuentas por fraude funcione correctamente en todos los escenarios posibles.
Criterios de aceptación:
- Todas las reglas de detección de fraude deben disparar correctamente el bloqueo de la cuenta.
- El bloqueo automático debe reflejarse en la base de datos y ser irreversible hasta la validación.
- Las pruebas deben incluir diferentes escenarios de fraude (monto elevado, intentos fallidos, ubicación inusual).
Prioridad: Alta
Estimación de esfuerzo: 4 horas
Tareas Técnicas:
1. Escribir pruebas unitarias para validar el algoritmo de detección de fraude.
2. Realizar pruebas funcionales para asegurarse de que el bloqueo de cuenta ocurre correctamente.
3. Probar la correcta actualización del estado de la cuenta y el registro de transacciones sospechosas.
4. Documentar los resultados de las pruebas.
Notas: Asegurarse de probar los escenarios extremos (transacciones muy grandes o muy frecuentes) para validar la eficiencia del sistema.
Ticket 6: Preparación de Documentación Técnica
ID del Ticket: TASK-006
Título del Ticket: Documentación Técnica del Proceso de Bloqueo de Cuentas
Descripción: Preparar la documentación técnica que describa el proceso de bloqueo automático de cuentas, incluyendo la configuración de la base de datos, reglas de fraude y el flujo de trabajo.
Criterios de aceptación:
- La documentación debe incluir detalles técnicos del proceso de bloqueo.
- Deben estar documentadas las reglas de detección de fraude implementadas.
- La documentación debe estar disponible para el equipo de desarrollo y operaciones.
Prioridad: Media
Estimación de esfuerzo: 2 horas
Tareas Técnicas:
1. Redactar la documentación técnica del proceso de bloqueo.
2. Incluir diagramas de flujo y ejemplos de base de datos.
3. Compartir la documentación con el equipo de desarrollo y operaciones.
Notas: Esta documentación servirá de base para futuras iteraciones y mejoras del sistema.
