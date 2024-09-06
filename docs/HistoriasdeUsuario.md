Historias de Usuario - Sistema Antifraude Transaccional (Criterios de Aceptación Detallados)
US-001: Bloqueo Automático de Cuenta por Sospecha de Fraude
Como sistema antifraude, quiero bloquear automáticamente la cuenta del cliente cuando se detecta una transacción sospechosa, para evitar la ejecución de transacciones fraudulentas y proteger los fondos del cliente.
**Criterios de aceptación**:
- Cuando una transacción se marca como sospechosa, la cuenta del cliente debe bloquearse automáticamente en tiempo real.
- El estado de la cuenta debe cambiar de "activa" a "bloqueada" en la base de datos.
- El sistema debe registrar el motivo del bloqueo y almacenar los detalles de la transacción sospechosa.
- Ninguna transacción debe procesarse mientras la cuenta esté bloqueada.
- El sistema debe generar una alerta interna para el equipo antifraude, indicando que la cuenta ha sido bloqueada.
- El cliente debe recibir una notificación informando que su cuenta ha sido bloqueada y el motivo del bloqueo.
US-002: Notificación de Bloqueo al Cliente
Como cliente, quiero ser notificado cuando mi cuenta sea bloqueada, para estar informado de la acción tomada por el sistema.
**Criterios de aceptación**:
- El cliente debe recibir una notificación (SMS, correo electrónico o notificación en la app) que le informe que su cuenta ha sido bloqueada.
- La notificación debe incluir la razón del bloqueo (transacción sospechosa).
- La notificación debe llegar al cliente dentro de los 5 minutos posteriores al bloqueo.
US-003: Orquestación de Llamada Automática mediante IA
Como sistema antifraude, quiero iniciar una llamada automática mediante IA al cliente para verificar los detalles de la transacción sospechosa.
**Criterios de aceptación**:
- El sistema debe orquestar una llamada al número de teléfono registrado del cliente.
- La llamada debe iniciarse dentro de los 5 minutos posteriores al bloqueo.
- La IA debe solicitar la confirmación de detalles de la transacción sospechosa al cliente.
US-004: Validación de Identidad del Cliente mediante IA
Como sistema antifraude, quiero verificar la identidad del cliente mediante preguntas automáticas, para asegurarme de que el cliente es quien está validando la transacción.
**Criterios de aceptación**:
- La IA debe hacer preguntas clave sobre los datos personales del cliente (nombre, número de identificación).
- La IA debe validar que los datos proporcionados por el cliente coinciden con la información registrada en el sistema.
- Si los datos son correctos, la transacción debe continuar a la siguiente fase de validación.
US-005: Confirmación de la Transacción por el Cliente
Como cliente, quiero poder confirmar si fui yo quien realizó la transacción sospechosa, para desbloquear mi cuenta rápidamente si la transacción es legítima.
**Criterios de aceptación**:
- La IA debe preguntar al cliente si fue él quien realizó la transacción.
- Si el cliente confirma que realizó la transacción, se debe registrar una validación exitosa.
- Si el cliente no reconoce la transacción, se debe registrar un rechazo.
US-006: Desbloqueo Automático de la Cuenta tras Validación Exitosa
Como sistema antifraude, quiero desbloquear automáticamente la cuenta del cliente tras la validación exitosa de la transacción.
**Criterios de aceptación**:
- Si el cliente valida con éxito la transacción, la cuenta debe ser desbloqueada inmediatamente.
- El estado de la cuenta en la base de datos debe cambiar de "bloqueada" a "activa".
- El cliente debe recibir una notificación de que su cuenta ha sido desbloqueada.
US-007: Mantener Bloqueo por Fallo en la Verificación
Como sistema antifraude, quiero mantener el bloqueo de la cuenta si la validación de la transacción falla, para prevenir fraudes.
**Criterios de aceptación**:
- Si el cliente no puede validar la transacción o los datos no coinciden, la cuenta debe permanecer bloqueada.
- El sistema debe registrar que la verificación falló y mantener el bloqueo.
- El cliente debe ser notificado de que su cuenta permanece bloqueada.
US-008: Registro de Auditoría de Validaciones
Como equipo de seguridad, quiero almacenar un registro de todas las validaciones realizadas, para fines de auditoría y cumplimiento normativo.
**Criterios de aceptación**:
- Se debe registrar cada intento de validación (éxito o fallo) junto con la fecha, hora y detalles de la transacción.
- El sistema debe almacenar los registros en una base de datos para auditorías futuras.
US-009: Notificación de Resultado de Validación al Cliente
Como cliente, quiero ser notificado del resultado del proceso de validación, para saber si mi cuenta ha sido desbloqueada o sigue bloqueada.
**Criterios de aceptación**:
- El sistema debe enviar una notificación al cliente con el resultado del proceso de validación.
- Si la validación fue exitosa, el cliente debe recibir una notificación de desbloqueo.
- Si la validación falló, se debe notificar al cliente que su cuenta sigue bloqueada.
US-010: Escalado de Casos de Fraude No Validados
Como sistema antifraude, quiero escalar automáticamente los casos de fraude no validados al equipo de seguridad, para una revisión manual.
**Criterios de aceptación**:
- Los casos de fraude que no son validados por el cliente deben ser escalados automáticamente a un equipo de análisis manual.
- El sistema debe generar una alerta interna para los casos no re
