# Enigmail


## 1. Resumen del proyecto
Enigmail es una página web que cifra y descifra textos y números mediante el método de cifrado César asegurandote una comunicación de correo electrónico fiable y segura.

## 2. Definición del producto

### ¿Quiénes son los principales usuarios de Enigmail?
Desde personas que solo desean mantener el contenido de su mensaje protegido hasta las que laboran en empresas u organizaciones que tienen normas estrictas acerca de cómo comunicarse por correo electrónico, donde encriptar sus mensajes garantiza el cumplimiento de esos estándares.
### ¿Cuáles son los objetivos de los usuarios en relación con Enigmail?
Cifrar o descifrar los mensajes cuyos contenidos contienen informacion interna, personal o de caracter sensible, la cual puede ser enviada de manera errónea y accedida si no está adecuadamente protegida.
### ¿Cómo Enigmail está resolviendo los problemas de los usuarios?
Cifrando o descifrando la información confidencial del correo electrónico, así si alguien logra interceptar o acceder sin autorización, no podrá saber que dice ya que este estará encriptado, además de garantizar el cumplimiento de confidencialidad de algunas empresas u organizaciones.

## 3. Consideraciones generales
### Características del proyecto

El proyecto esta basado en el cifrado césar, en el cual se sustituye una letra por otra que se encuentre cierto número de posiciones adelante o atrás, dentro del abecedario español sin considerar la ñ.

Acepta letras en mayúsculas o minúsculas, así como números pero con caracteres especiales y espacios retorna el mismo valor. 

El número de desplazamiento representa un número específico que indicará el número de saltos que dará cada letra para ser cifrada.
### ¿Cómo funciona Enigmail?
La interfaz permite al usuario:
* Insertar un mensaje (texto o número) que queremos cifrar.
* Elegir un desplazamiento indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto o número) a descifrar.
* Ver el resultado del mensaje descifrado.

### Prototipo
El prototipo se realizó en Lunacy y constaba de dos pantallas.

**Primera Pantalla**
![imagen1](page1.png)

**Segunda Pantalla**
![imagen2](page2.png)


## 4. Objetivos de aprendizaje

### HTML

- [x] Entender uso de HTML semántico

### CSS

- [x] Entender los tipos de selectores de CSS
- [x] Identificar y entender modelo de caja

### Web APIs

- [ ] Uso de selectores del DOM
- [x] Manejo de eventos del DOM
- [ ] Manipulación dinámica del DOM

### JavaScript

- [x] Manipulación de Strings
- [x] Variables (declaración, asignación, ámbito)
- [x] Uso de condicionales (if-else)
- [x] Uso de bucles/ciclos (for)
- [x] Funciones (params, args, return)
- [ ] Pruebas unitarias (unit tests)
- [x] Módulos de ECMAScript (import & export)

### Control de Versiones (Git y GitHub)

- [x] Git: Instalación y configuración
- [x] Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
- [ ] GitHub: Creación de cuenta y repos, configuración de llaves SSH
- [ ] GitHub: Despliegue con GitHub Pages

### UX (User eXperience)

- [x] Diseñar la aplicación pensando en y entendiendo al usuario
- [ ] Crear prototipos para obtener feedback e iterar
- [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)