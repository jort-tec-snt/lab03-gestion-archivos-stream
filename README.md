# Lab 03: Gestión de Archivos y Streams

Repositorio de resolución del laboratorio de gestión de archivos y flujos de datos en Node.js[cite: 1].

## 📋 Estado del Laboratorio

- [x] **Actividad 1:** Lectura de un archivo usando Streams (`index.js` / `datos.txt`)[cite: 1]
- [ ] **Actividad 2:** Escritura en un archivo usando Streams (`salida.txt`)[cite: 1]
- [ ] **Actividad 3:** Compresión con Pipes (`entrada.txt.gz`)[cite: 1]
- [ ] **Actividad 4:** Manejo de Errores y Backpressure[cite: 1]
- [ ] **Tarea 1:** Transform Stream a Mayúsculas (`texto_mayusculas.txt`)[cite: 1]
- [ ] **Tarea 2:** Servidor HTTP con Reporte Excel (`exceljs`)[cite: 1]

---

### 📝 Actividad 1 — Lectura de Archivo
- **Archivo principal:** `index.js`[cite: 1]
- **Archivo de datos:** `datos.txt`[cite: 1]
- **Resultado:** Ejecutado correctamente con `node index.js`. Se leyeron los fragmentos de datos mediante el evento `'data'` sin cargar todo el archivo en memoria[cite: 1].