# ad-l11
AD-20-1 Assessment-Individual


# Laboratorio: Pruebas Unitarias y TDD con Jest

## Objetivo

Practicar la implementación de **pruebas unitarias** con Jest y aplicar el ciclo de **Desarrollo Guiado por Pruebas (TDD)** para depurar y mejorar funciones existentes.

---

## Preparación

**Antes de empezar:**

Abre la terminal integrada y ejecuta:

```bash
npm install jest
```

Verifica las pruebas existentes ejecutando:

```bash
npm test
```


## Tarea 1: Pruebas para el módulo `calculator.js`

**Archivo:** `./js/calculator/calculator.js`

**Instrucciones:**

1. Implementar **2 pruebas unitarias** para la función `divide()`.
2. Implementar **2 pruebas unitarias** para la función `multiply()`.

**Pistas:**

- Cada prueba debe verificar un caso diferente (por ejemplo, números positivos, negativos, decimales).
- Usa el formato de Jest: `test('nombre descriptivo', () => { expect(...).toBe(...); })`.
- El nombre de cada prueba debe ser descriptivo: incluir la función, los parámetros y el resultado esperado.

---

## Tarea 2: Pruebas para los módulos de usuario

**Archivos:** `./js/user/user.js` y `./js/user/user-controller.js`

**Instrucciones:**

1. Implementar **1 prueba** para la función `add()` que verifique un usuario que **no está** en la lista de usuarios.
2. Implementar **1 prueba** para la función `remove()` que verifique un usuario que **no está** en la lista de usuarios.
3. Implementar **2 pruebas unitarias** para la función `findByEmail()`.
4. Implementar **2 pruebas unitarias** para la función `findById()`.

**Pistas:**

- Investiga cómo funciona cada función leyendo el código fuente.
- Cada prueba debe verificar un caso diferente.
- Para los casos de "usuario que no está en la lista", piensa qué debería devolver la función (por ejemplo, `null`, `undefined` o `false`).
- Usa `expect().toBe()` para valores primitivos y `expect().toEqual()` para objetos o arrays.

---

## Tarea 3: TDD para la función `divide()`

**Archivo:** `./js/calculator/calculator.js`

**Instrucciones:**

1. Escribir una **prueba unitaria** para verificar la función `divide()` pasando `0` como segundo argumento (división por cero).
2. Ejecutar la prueba y verificar que **falla** (porque la función actual no maneja ese caso).
3. Corregir la función `divide()` para que la prueba pase y maneje correctamente la división por cero.

**Pistas:**

- Sigue el ciclo de TDD:
  1. **Agregar la prueba** (que la división por cero debe manejarse de una forma específica).
  2. **Ejecutar todas las pruebas** (la nueva prueba debe fallar).
  3. **Escribir el código más simple** para que la prueba pase.
  4. **Ejecutar todas las pruebas** (todas deben pasar).
  5. **Refactorizar** si es necesario.
  6. **Repetir** si se necesita otra característica.

- Decide cómo debe comportarse la función al dividir por cero:
  - ¿Debe lanzar un error?
  - ¿Debe devolver `null`?
  - ¿Debe devolver `Infinity`?
  - ¿Debe devolver un mensaje específico?

- Asegúrate de que la prueba refleje ese comportamiento esperado.

---

## Puntuación

El instructor calificará tu evaluación al final de la sesión.

---

## Consejos para Resolver el Laboratorio



| 1 | Lee el código fuente de cada función antes de escribir las pruebas. |
| 2 | Usa `console.log()` para inspeccionar los valores que devuelven las funciones. |
| 3 | Ejecuta `npm test` con frecuencia para verificar que tus pruebas pasan. |
| 4 | Si una prueba falla, lee el mensaje de error con atención. |
| 5 | Recuerda que Jest es muy literal: los valores y tipos deben coincidir exactamente. |
| 6 | Para la Tarea 3, sigue los 6 pasos de TDD paso a paso. |

---



