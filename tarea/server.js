const http = require('http');
const ExcelJS = require('exceljs');

const productosTech = [
  'Laptop Gamer ASUS ROG',
  'MacBook Pro 16 M3',
  'Monitor LG UltraGear 27"',
  'Teclado Mecánico Keychron K2',
  'Mouse Logitech MX Master 3S',
  'Audífonos Sony WH-1000XM5',
  'SSD Externo Samsung T7 1TB',
  'Tarjeta Gráfica RTX 4070',
  'Procesador Ryzen 7 7800X3D',
  'RAM Corsair Vengeance 32GB',
  'Silla Gamer Secretlab Titan',
  'Webcam Logitech C920',
  'Micrófono Blue Yeti USB',
  'Smartphone Galaxy S24 Ultra',
  'Tablet iPad Air M2',
  'Apple Watch Series 9',
  'Router Wi-Fi 6 TP-Link Deco',
  'Impresora Epson EcoTank',
  'Hub USB-C Anker 8 en 1',
  'Fuente Corsair 850W'
];

const server = http.createServer(async (req, res) => {
  if (req.url === '/reporte') {
    try {
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      );
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=reporte_ventas.xlsx'
      );

      const workbook = new ExcelJS.stream.xlsx.WorkbookWriter({ stream: res });
      const worksheet = workbook.addWorksheet('Ventas');

      worksheet.columns = [
        { header: 'Producto', key: 'producto', width: 32 },
        { header: 'Cantidad', key: 'cantidad', width: 12 },
        { header: 'Precio ($)', key: 'precio', width: 12 }
      ];

      for (let i = 0; i < productosTech.length; i++) {
        worksheet.addRow({
          producto: productosTech[i],
          cantidad: Math.floor(Math.random() * 30) + 1,
          precio: (Math.random() * 800 + 50).toFixed(2)
        }).commit();
      }

      await worksheet.commit();
      await workbook.commit();
    } catch (error) {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Error interno al generar el reporte.');
      }
    }
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Visita /reporte para descargar el Excel');
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});