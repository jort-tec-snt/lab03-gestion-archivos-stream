# Lab 03: Gestión de Archivos y Streams

Repositorio de resolución del laboratorio de gestión de archivos y flujos de datos en Node.js[cite: 1].

## 📋 Estado del Laboratorio

- [x] **Actividad 1:** Lectura de un archivo usando Streams (`index.js` / `datos.txt`)[cite: 1]
- [x] **Actividad 2:** Escritura en un archivo usando Streams (`salida.txt`)[cite: 1]
- [x] **Actividad 3:** Compresión con Pipes (`entrada.txt.gz`)[cite: 1]
- [ ] **Actividad 4:** Manejo de Errores y Backpressure[cite: 1]
- [ ] **Tarea 1:** Transform Stream a Mayúsculas (`texto_mayusculas.txt`)[cite: 1]
- [ ] **Tarea 2:** Servidor HTTP con Reporte Excel (`exceljs`)[cite: 1]

---

### 📝 Actividad 1 — Lectura de Archivo
- **Archivo principal:** `index.js`[cite: 1]
- **Archivo de datos:** `datos.txt`[cite: 1]
- **Resultado:** Ejecutado correctamente con `node index.js`. Se leyeron los fragmentos de datos mediante el evento `'data'` sin cargar todo el archivo en memoria[cite: 1].

### 📝 Actividad 2 — Escritura en un Archivo
- **Archivo principal:** `index.js`[cite: 1]
- **Archivo generado:** `salida.txt`[cite: 1]
- **Resultado:** Ejecutado correctamente con `node index.js`. Se creó el archivo de salida enviando los bloques con `.write()` y `.end()`, finalizando la escritura a través del evento `'finish'`[cite: 1].

### 📝 Actividad 3 — Compresión con Pipes
- **Archivo principal:** `index.js`[cite: 1]
- **Archivo de entrada:** `entrada.txt`[cite: 1]
- **Archivo generado:** `entrada.txt.gz`[cite: 1]
- **Resultado:** Ejecutado correctamente con `node index.js`. Se conectaron los flujos de lectura y escritura mediante el método `.pipe()` haciendo uso del módulo nativo `zlib` para comprimir el archivo en tiempo real[cite: 1].

