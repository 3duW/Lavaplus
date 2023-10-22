use("LavaGroup");

// Colección de Clientes
db.getCollection("clientes").insertOne(
    {
        "nombre": "Cliente_1",
        "direccion": "123 Calle Principal",
        "telefono": "+51 123456789",
        "email": "cliente1@example.com"
    }
)

// Colección de Pedidos
db.getCollection("Pedidos").insertOne(
    {
        "cliente_id": ("Cliente_1"),
        "fecha_pedido": ISODate("2023-10-22T08:00:00Z"),
        "tipo_servicio": "Lavado en seco",
        "estado": "En proceso",
        "articulos": [
            { "nombre": "Camisa", "cantidad": 5 },
            { "nombre": "Pantalón", "cantidad": 3 }
        ]
    }
)
// Colección de Inventario
db.getCollection("Inventario").insertOne(
    {
        "nombre": "Detergente para ropa",
        "stock_actual": 100,
        "unidad_medida": "litros",
        "precio_unitario": 5.99
    }
)
// Colección de Facturación y Pagos
db.getCollection("Facturación_Pagos").insertOne(
    {
        "cliente_id": "cliente_1",
        "fecha_pedido": "2023-10-20",
        "tipo_servicio": "Lavado en seco",
        "estado_pedido": "Entregado"
    }
)
// Colección de Rutas de Reparto
db.getCollection("Rutas_de_Reparto").insertOne(
    {
        "nombre_ruta": "Ruta 1",
        "entregas_programadas": [
            {
                "cliente_id": "Cliente_1",
                "fecha_entrega": "2023-10-24",
                "estado_entrega": "Programada"
            },
        ]
    }
)
// Colección de Proveedores de Suministros
db.getCollection("Proveedores_de_Suministros").insertOne(
    {
        "nombre_proveedor": "Proveedor A",
        "suministros": [
          {
            "nombre": "Detergente",
            "cantidad_disponible": 500,
            "unidad_medida": "litros"
          },
          {
            "nombre": "Clorox",
            "cantidad_disponible": 1000,
            "unidad_medida": "litros"
          }
        ]
    }
)
// Colección de Promociones y Descuentos
db.getCollection("Promociones_Descuentos").insertOne(
    {
        "nombre_promocion": "Oferta de Temporada",
        "descripcion": "¡Lava 5 prendas y la 6ta es gratis!",
        "fecha_inicio": "2023-11-01",
        "fecha_fin": "2023-11-30"
    }
)
// Colección de Notificaciones y Alertas
db.getCollection("Notificaciones_Alertas").insertOne(
    {
        "cliente_id": "1",
        "tipo_alerta": "Recordatorio de Entrega",
        "mensaje": "Su pedido se entregará mañana a las 10 AM."
    }
)// Colección de Registros de Limpieza
db.getCollection("Registros_Limpieza").insertOne(
    {
        "prenda": "Camisa",
        "temperatura_lavado": "30°C",
        "tiempo_lavado": "30 minutos",
        "detergente_utilizado": "Detergente A"
    }
)
// Colección de Horarios de Trabajo
db.getCollection("Horarios_Trabajo").insertOne(
    {
        "empleado_id": "empleado_1",
        "dia_semana": "Lunes",
        "horario": "9:00 AM - 5:00 PM"
    }
)
// Colección de Programación de Recogida y Entrega
db.getCollection("Programación_Recogida_Entrega").insertOne(
    {
        "cliente_id": "cliente_1",
        "fecha_recogida": "2023-10-22",
        "hora_recogida": "14:00",
        "fecha_entrega": "2023-10-25",
        "hora_entrega": "10:00"
    }
)
// Colección de comentarios y reseñas
db.getCollection("comentarios_reseñas").insertOne(
    {
        "cliente_id": 2,
        "fecha": ISODate("2023-10-25T10:30:00Z"),
        "calificacion": 4,
        "comentario": "El servicio fue rápido y eficiente, ¡gracias!"
    }
)
// Colección de Maquinas y equipos
db.getCollection("Maquinas_equipos").insertOne(
    {
        "nombre_equipo": "Lavadora Industrial",
        "estado_funcionamiento": "Operativa",
        "ultimo_mantenimiento": "2023-10-15"
    }
)
// Colección de Historial de pedidos del cliente
db.getCollection("Historial_cliente").insertOne(
    {
        "cliente_id": "cliente_1",
        "fecha_pedido": "2023-10-20",
        "tipo_servicio": "Lavado en seco",
        "estado_pedido": "Entregado"
    }
)