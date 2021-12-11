export const estructuraPdf1 = (doc) => {
  doc.setDrawColor("#00008f");
  doc.setLineWidth(0.2);
  //   cuadro1 lugar: FechaDia:
  doc.line(10, 66, 204, 66); // horizontal line
  doc.line(10, 72, 204, 72); // horizontal line
  doc.line(10, 66, 10, 72); // vertical line
  doc.line(204, 66, 204, 72); // vertical line
  doc.line(108, 66, 108, 72); // vertical line
  //   cuadro2 
  doc.line(10, 77, 204, 77); // horizontal line
  doc.line(10, 82, 204, 82); // horizontal line
  doc.line(10, 77, 10, 82); // vertical line
  doc.line(204, 77, 204, 82); // vertical line
  //   cuadro3 Apellido paterno: 
  doc.line(10, 82, 204, 82); // horizontal line
  doc.line(10, 90, 204, 90); // horizontal line
  doc.line(10, 82, 10, 90); // vertical line
  doc.line(70, 82, 70, 90); // vertical line
  doc.line(135, 82, 135, 90); // vertical line
  doc.line(204, 82, 204, 90); // vertical line
  //   cuadro4 Datos
  doc.line(10, 90, 204, 90); // horizontal line
  doc.line(10, 98, 204, 98); // horizontal line
  doc.line(10, 90, 10, 98); // vertical line
  doc.line(20, 90, 20, 98); // vertical line
  doc.line(50, 94, 50, 98); // vertical line
  doc.line(86, 90, 86, 98); // vertical line
  doc.line(140, 90, 140, 98); // vertical line
  doc.line(160, 90, 160, 98); // vertical line
  doc.line(175, 90, 175, 98); // vertical line
  doc.line(204, 90, 204, 98); // vertical line
  //   cuadro5--
  doc.line(10, 98, 204, 98); // horizontal line
  doc.line(10, 108, 204, 108); // horizontal line
  doc.line(10, 98, 10, 108); // vertical line
  doc.line(204, 98, 204, 108); // vertical line
  //   cuadro6--
  doc.line(10, 108, 204, 108); // horizontal line
  doc.line(10, 118, 204, 118); // horizontal line
  doc.line(10, 118, 10, 108); // vertical line
  doc.line(204, 118, 204, 108); // vertical line
  //   cuadro7 v
  doc.line(10, 118, 204, 118); // horizontal line
  doc.line(10, 131, 204, 131); // horizontal line
  doc.line(10, 118, 10, 131); // vertical line
  doc.line(108, 118, 108, 131); // vertical line
  doc.line(204, 118, 204, 131); // vertical line
  //   cuadro8  Antecedentes patológicos y no  patológicos 
  doc.line(10, 131, 204, 131); // horizontal line
  doc.line(10, 159, 204, 159); // horizontal line

  doc.line(35, 136, 52, 136); // horizontal line
  doc.line(85, 136, 107, 136); // horizontal line
  doc.line(128, 136, 203, 136); // horizontal line

  doc.line(44, 142, 52, 142); // horizontal line
  doc.line(85, 142, 107, 142); // horizontal line
  doc.line(170, 142, 203, 142); // horizontal line

  doc.line(35, 148, 52, 148); // horizontal line
  doc.line(85, 148, 107, 148); // horizontal line
  doc.line(193, 148, 203, 148); // horizontal line

  doc.line(35, 154, 52, 154); // horizontal line
  doc.line(85, 154, 107, 154); // horizontal line
  doc.line(128, 154, 203, 154); // horizontal line

  doc.line(10, 159, 10, 131); // vertical line
  doc.line(108, 159, 108, 131); // vertical line
  doc.line(204, 159, 204, 131); // vertical line
  //   cuadro9 Antecedentes
  doc.line(10, 159, 204, 159); // horizontal line
  doc.line(10, 167, 204, 167); // horizontal line
  doc.line(10, 159, 10, 167); // vertical line
  doc.line(108, 159, 108, 167); // vertical line
  doc.line(204, 159, 204, 167); // vertical line
  //   cuadro10 Gestación:
  doc.line(10, 167, 204, 167); // horizontal line
  doc.line(10, 171, 108, 171); // horizontal line

  doc.line(28, 170.6, 37, 170.6); // horizontal line
  doc.line(49, 170.6, 60, 170.6); // horizontal line
  doc.line(73, 170.6, 83, 170.6); // horizontal line
  doc.line(100, 170.6, 107, 170.6); // horizontal line
  doc.line(108, 190, 204, 190); // horizontal line
  doc.line(55, 187, 107, 187); // horizontal line
  doc.line(45, 195, 107, 195); // horizontal line
  doc.line(143, 195, 203, 195); // horizontal line

  doc.line(10, 196, 204, 196); // horizontal line
  doc.line(10, 196, 10, 167); // vertical line
  doc.line(108, 196, 108, 167); // vertical line
  doc.line(204, 196, 204, 167); // vertical line
  //   cuadro11 
  doc.line(10, 196, 204, 196); // horizontal line
  doc.line(10, 202, 204, 202); // horizontal line
  doc.line(103, 201, 204, 201); // horizontal line
  doc.line(10, 196, 10, 202); // vertical line
  doc.line(204, 196, 204, 202); // vertical line
  //   cuadro12 Referido por otro médico 
  doc.line(10, 196, 204, 196); // horizontal line
  doc.line(10, 202, 204, 202); // horizontal line
  doc.line(10, 196, 10, 202); // vertical line
  doc.line(204, 196, 204, 202); // vertical line
  //   cuadro13 Padecimiento actual 
  doc.line(10, 202, 204, 202); // horizontal line
  doc.line(10, 250, 204, 250); // horizontal line
  doc.line(10, 250, 10, 202); // vertical line
  doc.line(204, 250, 204, 202); // vertical line
  //   cuadro14 Fecha de padecimiento:
  doc.line(10, 250, 204, 250); // horizontal line
  doc.line(10, 258, 204, 258); // horizontal line
  doc.line(10, 250, 10, 258); // vertical line
  doc.line(204, 250, 204, 258); // vertical line
  doc.line(108, 250, 108, 258); // vertical line
  //   cuadro15 Tipo de padecimiento:
  doc.line(10, 258, 204, 258); // horizontal line
  doc.line(10, 270, 204, 270); // horizontal line
  doc.line(164, 269, 204, 269); // horizontal line
  doc.line(10, 270, 10, 258); // vertical line
  doc.line(204, 270, 204, 258); // vertical line

  return doc;
};

export const estructuraPdf2 = (doc) => {
  doc.setDrawColor("#00008f");
  doc.setLineWidth(0.2);
  // cuadro1 Causa o etiología del padecimiento
  doc.line(10, 40, 204, 40); // horizontal line
  doc.line(10, 70, 204, 70); // horizontal line
  doc.line(10, 40, 10, 70); // vertical line
  doc.line(204, 40, 204, 70); // vertical line
  // cuadro2 Tiene relación con otro padecimiento:
  doc.line(10, 70, 204, 70); // horizontal line
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(25, 79, 115, 79); // horizontal line
  doc.line(10, 80, 10, 70); // vertical line
  doc.line(204, 80, 204, 70); // vertical line
  // cuadro3 El padecimiento ocasionó incapacidad:
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 90, 204, 90); // horizontal line
  doc.line(122, 89, 152, 89); // horizontal line
  doc.line(167, 89, 199, 89); // horizontal line
  doc.line(10, 80, 10, 90); // vertical line
  doc.line(204, 80, 204, 90); // vertical line
  // cuadro4 Diagnóstico
  doc.line(10, 90, 204, 90); // horizontal line
  doc.line(10, 120, 204, 120); // horizontal line
  doc.line(10, 120, 10, 90); // vertical line
  doc.line(204, 120, 204, 90); // vertical line
  // cuadro5  Código ICD:
  doc.line(10, 120, 204, 120); // horizontal line
  doc.line(10, 128, 204, 128); // horizontal line
  doc.line(30, 127, 106, 127); // horizontal line
  doc.line(180, 127, 203, 127); // horizontal line
  doc.line(10, 120, 10, 128); // vertical line
  doc.line(204, 120, 204, 128); // vertical line
  // cuadro6 Señale los datos
  doc.line(10, 128, 204, 128); // horizontal line
  doc.line(10, 148, 204, 148); // horizontal line
  doc.line(10, 148, 10, 128); // vertical line
  doc.line(204, 148, 204, 128); // vertical line
  // cuadro7 Describe los estudios
  doc.line(10, 148, 204, 148); // horizontal line
  doc.line(10, 178, 204, 178); // horizontal line
  doc.line(10, 148, 10, 178); // vertical line
  doc.line(204, 148, 204, 178); // vertical line
  // cuadro8 Tratamiento propuesto
  doc.line(10, 182, 204, 182); // horizontal line
  doc.line(10, 196, 204, 196); // horizontal line
  doc.line(10, 196, 10, 182); // vertical line
  doc.line(204, 196, 204, 182); // vertical line
  doc.line(140, 196, 140, 182); // vertical line
  // cuadro9 Fecha de hospitalización:
  doc.line(10, 196, 204, 196); // horizontal line
  doc.line(10, 206, 204, 206); // horizontal line
  doc.line(10, 196, 10, 206); // vertical line
  doc.line(204, 196, 204, 206); // vertical line
  doc.line(108, 196, 108, 206); // vertical line
  // cuadro10 Días que se brindó
  doc.line(10, 206, 204, 206); // horizontal line
  doc.line(10, 214, 204, 214); // horizontal line
  doc.line(10, 214, 10, 206); // vertical line
  doc.line(204, 214, 204, 206); // vertical line
  // cuadro11 Sitio procedimiento:
  doc.line(10, 214, 204, 214); // horizontal line
  doc.line(10, 224, 204, 224); // horizontal line
  doc.line(10, 214, 10, 224); // vertical line
  doc.line(204, 214, 204, 224); // vertical line
  // cuadro12 nombre del hospital:
  doc.line(10, 224, 204, 224); // horizontal line
  doc.line(10, 234, 204, 234); // horizontal line
  doc.line(10, 234, 10, 224); // vertical line
  doc.line(204, 234, 204, 224); // vertical line
  // cuadro13 Describa el resultado
  doc.line(10, 234, 204, 234); // horizontal line
  doc.line(10, 270, 204, 270); // horizontal line
  doc.line(10, 234, 10, 270); // vertical line
  doc.line(204, 234, 204, 270); // vertical line

  return doc;
};

export const estructuraPdf3 = (doc) => {
  doc.setDrawColor("#00008f");
  doc.setLineWidth(0.2);
  // cuadro1 Describa las complicaciones:
  doc.line(10, 40, 204, 40); // horizontal line
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 40, 10, 80); // vertical line
  doc.line(204, 40, 204, 80); // vertical line
  // cuadro2 Continuará recibiendo
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 120, 204, 120); // horizontal line
  doc.line(10, 120, 10, 80); // vertical line
  doc.line(204, 120, 204, 80); // vertical line
  // cuadro3 Especificar tratamiento
  doc.line(10, 124, 204, 124); // horizontal line
  doc.line(10, 144, 204, 144); // horizontal line
  doc.line(10, 124, 10, 144); // vertical line
  doc.line(204, 124, 204, 144); // vertical line
  // cuadro4
  doc.line(10, 149, 204, 149); // horizontal line
  doc.line(10, 158, 204, 158); // horizontal line
  doc.line(10, 158, 10, 149); // vertical line
  doc.line(204, 158, 204, 149); // vertical line
  doc.line(20, 158, 20, 149); // vertical line
  doc.line(90, 158, 90, 149); // vertical line
  doc.line(120, 158, 120, 149); // vertical line
  doc.line(160, 158, 160, 149); // vertical line
  // cuadro5 -- .1
  doc.line(10, 158, 204, 158); // horizontal line
  doc.line(10, 164, 204, 164); // horizontal line
  doc.line(10, 158, 10, 164); // vertical line
  doc.line(204, 158, 204, 164); // vertical line
  doc.line(20, 164, 20, 149); // vertical line
  doc.line(90, 164, 90, 149); // vertical line
  doc.line(120, 164, 120, 149); // vertical line
  doc.line(160, 164, 160, 149); // vertical line
  // cuadro6 .2
  doc.line(10, 170, 204, 170); // horizontal line
  doc.line(10, 164, 204, 164); // horizontal line
  doc.line(10, 170, 10, 164); // vertical line
  doc.line(204, 170, 204, 164); // vertical line
  doc.line(20, 170, 20, 149); // vertical line
  doc.line(90, 170, 90, 149); // vertical line
  doc.line(120, 170, 120, 149); // vertical line
  doc.line(160, 170, 160, 149); // vertical line
  // cuadro7 .3
  doc.line(10, 176, 204, 176); // horizontal line
  doc.line(10, 170, 204, 170); // horizontal line
  doc.line(10, 170, 10, 176); // vertical line
  doc.line(204, 170, 204, 176); // vertical line
  doc.line(20, 176, 20, 149); // vertical line
  doc.line(90, 176, 90, 149); // vertical line
  doc.line(120, 176, 120, 149); // vertical line
  doc.line(160, 176, 160, 149); // vertical line

  // cuadro8 .4
  doc.line(10, 182, 204, 182); // horizontal line
  doc.line(10, 176, 204, 176); // horizontal line
  doc.line(10, 182, 10, 176); // vertical line
  doc.line(204, 182, 204, 176); // vertical line
  doc.line(20, 182, 20, 149); // vertical line
  doc.line(90, 182, 90, 149); // vertical line
  doc.line(120, 182, 120, 149); // vertical line
  doc.line(160, 182, 160, 149); // vertical line
  // cuadro9  .5
  doc.line(10, 188, 204, 188); // horizontal line
  doc.line(10, 182, 204, 182); // horizontal line
  doc.line(10, 182, 10, 188); // vertical line
  doc.line(204, 182, 204, 188); // vertical line
  doc.line(20, 188, 20, 149); // vertical line
  doc.line(90, 188, 90, 149); // vertical line
  doc.line(120, 188, 120, 149); // vertical line
  doc.line(160, 188, 160, 149); // vertical line
  // cuadro10 .6
  doc.line(10, 194, 204, 194); // horizontal line
  doc.line(10, 188, 204, 188); // horizontal line
  doc.line(10, 194, 10, 188); // vertical line
  doc.line(204, 194, 204, 188); // vertical line
  doc.line(20, 194, 20, 149); // vertical line
  doc.line(90, 194, 90, 149); // vertical line
  doc.line(120, 194, 120, 149); // vertical line
  doc.line(160, 194, 160, 149); // vertical line
  // cuadro11 .7
  doc.line(10, 200, 204, 200); // horizontal line
  doc.line(10, 194, 204, 194); // horizontal line
  doc.line(10, 194, 10, 200); // vertical line
  doc.line(204, 194, 204, 200); // vertical line
  doc.line(20, 200, 20, 149); // vertical line
  doc.line(90, 200, 90, 149); // vertical line
  doc.line(120, 200, 120, 149); // vertical line
  doc.line(160, 200, 160, 149); // vertical line
  // cuadro12 .8
  doc.line(10, 206, 204, 206); // horizontal line
  doc.line(10, 200, 204, 200); // horizontal line
  doc.line(10, 206, 10, 200); // vertical line
  doc.line(204, 206, 204, 200); // vertical line
  doc.line(20, 206, 20, 149); // vertical line
  doc.line(90, 206, 90, 149); // vertical line
  doc.line(120, 206, 120, 149); // vertical line
  doc.line(160, 206, 160, 149); // vertical line
  // cuadro13 .9
  doc.line(10, 212, 204, 212); // horizontal line
  doc.line(10, 206, 204, 206); // horizontal line
  doc.line(10, 206, 10, 212); // vertical line
  doc.line(204, 206, 204, 212); // vertical line
  doc.line(20, 212, 20, 149); // vertical line
  doc.line(90, 212, 90, 149); // vertical line
  doc.line(120, 212, 120, 149); // vertical line
  doc.line(160, 212, 160, 149); // vertical line
  // cuadro14 .10
  doc.line(10, 218, 204, 218); // horizontal line
  doc.line(10, 212, 204, 212); // horizontal line
  doc.line(10, 218, 10, 212); // vertical line
  doc.line(204, 218, 204, 212); // vertical line
  doc.line(20, 218, 20, 149); // vertical line
  doc.line(90, 218, 90, 149); // vertical line
  doc.line(120, 218, 120, 149); // vertical line
  doc.line(160, 218, 160, 149); // vertical line
  // cuadro15 secciones
  doc.line(10, 228, 204, 228); // horizontal line
  doc.line(10, 222, 204, 222); // horizontal line
  doc.line(20, 227.5, 62, 227.5); // horizontal line
  doc.line(100, 227.5, 142, 227.5); // horizontal line
  doc.line(10, 222, 10, 228); // vertical line
  doc.line(204, 222, 204, 228); // vertical line
  // cuadro16 Días requeridos
  doc.line(10, 232, 204, 232); // horizontal line
  doc.line(10, 238, 204, 238); // horizontal line
  doc.line(40, 237.5, 82, 237.5); // horizontal line
  doc.line(10, 238, 10, 232); // vertical line
  doc.line(204, 238, 204, 232); // vertical line
  // cuadro17 Nombre de medicamentos:
  doc.line(10, 238, 204, 238); // horizontal line
  doc.line(10, 270, 204, 270); // horizontal line
  doc.line(10, 238, 10, 270); // vertical line
  doc.line(204, 238, 204, 270); // vertical line

  return doc;
};

export const estructuraPdf4 = (doc) => {
  doc.setDrawColor("#00008f");
  doc.setLineWidth(0.2);
  // cuadro1 En caso de terapia
  doc.line(10, 40, 204, 40); // horizontal line
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 40, 10, 80); // vertical line
  doc.line(204, 40, 204, 80); // vertical line
  // cuadro2  Lista de materiales
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 110, 204, 110); // horizontal line
  doc.line(10, 110, 10, 80); // vertical line
  doc.line(204, 110, 204, 80); // vertical line
  // cuadro3 Tipo de terapia: Cédula de especialidad:
  doc.line(10, 110, 204, 110); // horizontal line
  doc.line(10, 130, 204, 130); // horizontal line
  doc.line(10, 110, 10, 130); // vertical line
  doc.line(204, 110, 204, 130); // vertical line
  doc.line(120, 110, 120, 130); // vertical line
  // cuadro4 Detalle de evolución:
  doc.line(10, 130, 204, 130); // horizontal line
  doc.line(10, 160, 204, 160); // horizontal line
  doc.line(10, 160, 10, 130); // vertical line
  doc.line(204, 160, 204, 130); // vertical line
  // cuadro5 Observaciones
  doc.line(10, 165, 204, 165); // horizontal line
  doc.line(10, 194, 204, 194); // horizontal line
  doc.line(10, 165, 10, 194); // vertical line
  doc.line(204, 165, 204, 194); // vertical line
  // cuadro6-- Médico o especialista
  doc.line(10, 198, 204, 198); // horizontal line
  doc.line(10, 206, 204, 206); // horizontal line
  doc.line(10, 206, 10, 198); // vertical line
  doc.line(204, 206, 204, 198); // vertical line
  doc.line(108, 206, 108, 198); // vertical line
  // cuadro7 participación
  doc.line(10, 206, 204, 206); // horizontal line
  doc.line(10, 214, 204, 214); // horizontal line
  doc.line(10, 206, 10, 214); // vertical line
  doc.line(204, 206, 204, 214); // vertical line
  doc.line(108, 206, 108, 214); // vertical line
  doc.line(50, 206, 50, 214); // vertical line
  doc.line(150, 206, 150, 214); // vertical line
  // cuadro8 Nombre:
  doc.line(10, 214, 204, 214); // horizontal line
  doc.line(10, 222, 204, 222); // horizontal line
  doc.line(10, 222, 10, 214); // vertical line
  doc.line(204, 222, 204, 214); // vertical line
  doc.line(108, 222, 108, 214); // vertical line
  doc.line(50, 222, 50, 214); // vertical line
  doc.line(150, 222, 150, 214); // vertical line
  // cuadro9 Especialidad:
  doc.line(10, 222, 204, 222); // horizontal line
  doc.line(10, 230, 204, 230); // horizontal line
  doc.line(10, 222, 10, 230); // vertical line
  doc.line(204, 222, 204, 230); // vertical line
  doc.line(108, 222, 108, 230); // vertical line
  doc.line(50, 222, 50, 230); // vertical line
  doc.line(150, 222, 150, 230); // vertical line
  // cuadro10 Cédula profesional:
  doc.line(10, 230, 204, 230); // horizontal line
  doc.line(10, 238, 204, 238); // horizontal line
  doc.line(10, 238, 10, 230); // vertical line
  doc.line(204, 238, 204, 230); // vertical line
  doc.line(108, 238, 108, 230); // vertical line
  doc.line(50, 238, 50, 230); // vertical line
  doc.line(150, 238, 150, 230); // vertical line
  // cuadro11 Cédula de especialidad:
  doc.line(10, 238, 204, 238); // horizontal line
  doc.line(10, 246, 204, 246); // horizontal line
  doc.line(10, 238, 10, 246); // vertical line
  doc.line(204, 238, 204, 246); // vertical line
  doc.line(108, 238, 108, 246); // vertical line
  doc.line(50, 238, 50, 246); // vertical line
  doc.line(150, 238, 150, 246); // vertical line
  // cuadro12 RFC:
  doc.line(10, 246, 204, 246); // horizontal line
  doc.line(10, 254, 204, 254); // horizontal line
  doc.line(10, 254, 10, 246); // vertical line
  doc.line(204, 254, 204, 246); // vertical line
  doc.line(108, 254, 108, 246); // vertical line
  doc.line(50, 254, 50, 246); // vertical line
  doc.line(150, 254, 150, 246); // vertical line
  // cuadro13 Domicilio:
  doc.line(10, 254, 204, 254); // horizontal line
  doc.line(10, 262, 204, 262); // horizontal line
  doc.line(10, 254, 10, 262); // vertical line
  doc.line(204, 254, 204, 262); // vertical line
  doc.line(108, 254, 108, 262); // vertical line
  doc.line(50, 254, 50, 262); // vertical line
  doc.line(150, 254, 150, 262); // vertical line
  // cuadro14 Teléfono:
  doc.line(10, 262, 204, 262); // horizontal line
  doc.line(10, 270, 204, 270); // horizontal line
  doc.line(10, 270, 10, 262); // vertical line
  doc.line(204, 270, 204, 262); // vertical line
  doc.line(108, 270, 108, 262); // vertical line
  doc.line(50, 270, 50, 262); // vertical line
  doc.line(150, 270, 150, 262); // vertical line

  return doc;
};

export const estructuraPdf5 = (doc) => {
  doc.setDrawColor("#00008f");
  doc.setLineWidth(0.2);
  // cuadro1
  doc.line(10, 40, 204, 40); // horizontal line
  doc.line(10, 48, 204, 48); // horizontal line
  doc.line(10, 40, 10, 48); // vertical line
  doc.line(204, 40, 204, 48); // vertical line
  doc.line(108, 40, 108, 48); // vertical line
  // cuadro2 Tipo de participación:
  doc.line(10, 48, 204, 48); // horizontal line
  doc.line(10, 56, 204, 56); // horizontal line
  doc.line(10, 56, 10, 48); // vertical line
  doc.line(204, 56, 204, 48); // vertical line
  doc.line(108, 56, 108, 48); // vertical line
  doc.line(50, 56, 50, 48); // vertical line
  doc.line(150, 56, 150, 48); // vertical line
  // cuadro3 Nombre
  doc.line(10, 56, 204, 56); // horizontal line
  doc.line(10, 64, 204, 64); // horizontal line
  doc.line(10, 56, 10, 64); // vertical line
  doc.line(204, 56, 204, 64); // vertical line
  doc.line(108, 56, 108, 64); // vertical line
  doc.line(50, 56, 50, 64); // vertical line
  doc.line(150, 56, 150, 64); // vertical line
  // cuadro4 medico
  doc.line(10, 64, 204, 64); // horizontal line
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 80, 10, 64); // vertical line
  doc.line(204, 80, 204, 64); // vertical line
  // cuadro5
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 88, 204, 88); // horizontal line
  doc.line(10, 80, 10, 88); // vertical line
  doc.line(204, 80, 204, 88); // vertical line
  doc.line(130, 80, 130, 88); // vertical line
  // cuadro6 Firma del médico | Lugar y fecha
  doc.line(10, 88, 204, 88); // horizontal line
  doc.line(10, 112, 204, 112); // horizontal line
  doc.line(10, 112, 10, 88); // vertical line
  doc.line(204, 112, 204, 88); // vertical line
  doc.line(130, 112, 130, 88); // vertical line
  // cuadro7
  doc.line(10, 112, 204, 112); // horizontal line
  doc.line(10, 120, 204, 120); // horizontal line
  doc.line(10, 112, 10, 120); // vertical line
  doc.line(204, 112, 204, 120); // vertical line
  // cuadro8 Datos personales
  doc.line(10, 124, 204, 124); // horizontal line
  doc.line(10, 152, 204, 152); // horizontal line
  doc.line(10, 152, 10, 124); // vertical line
  doc.line(204, 152, 204, 124); // vertical line
  // cuadro9 Transferencia de datos a terceros
  doc.line(10, 156, 204, 156); // horizontal line
  doc.line(10, 184, 204, 184); // horizontal line
  doc.line(100, 183, 160, 183); // horizontal line
  doc.line(10, 184, 10, 156); // vertical line
  doc.line(204, 184, 204, 156); // vertical line
  // cuadro9 Autorizo que AXA
  doc.line(10, 184, 204, 184); // horizontal line
  doc.line(10, 220, 204, 220); // horizontal line
  doc.line(100, 219, 160, 219); // horizontal line
  doc.line(10, 220, 10, 184); // vertical line
  doc.line(204, 220, 204, 184); // vertical line

  return doc;
};
