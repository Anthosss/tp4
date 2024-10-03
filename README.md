# API KOA - Documentación

Este proyecto es una API sencilla construida con KOA, que contiene varios endpoints para demostrar su funcionamiento basico.

## Endpoints disponibles

A continuacion se presenta la lista de endpoints disponibles junto con una breve descripción y ejemplos de como usarlos.

### 1. **GET /ayuda**
- **Descripción**: Devuelve un mensaje de ayuda que describe los endpoints disponibles.
- **URL**: `http://localhost:3000/ayuda`
- **Método HTTP**: GET
- **Respuesta**: 
/ayuda : muestra este mensaje de ayuda 
/nombre : devuelve un saludo con mi nombre 
/nombre/numero devuelve mi numero de alumno 
/acogida/:nombre devuelve un saludo personalizado con el nombre

### 2. **GET /nombre**
- **Descripción**: Devuelve un saludo que contiene mi nombre.
- **URL**: `http://localhost:3000/nombre`
- **Método HTTP**: GET
- **Respuesta**: Hola, me llamo Antoine

### 3. **GET /nombre/numero**
- **Descripción**: Devuelve mi numero de alumno
- **URL**: `http://localhost:3000/nombre/numero`
- **Método HTTP**: GET
- **Respuesta**: Mi numero de alumno es 1234

### 4. **GET /acogida/:nombre**
- **Descripción**: Devuelve un saludo personalizado con el nombre que se proporciona en la URL.
- **URL**: `http://localhost:3000/acogida/:nombre`
- **Parámetro**: `:nombre` es un parámetro dinámico que representa un nombre.
- **Método HTTP**: GET
- **Ejemplo de uso**: `http://localhost:3000/acogida/Isidora`
- **Respuesta**: Hola Isidora, bienvenido