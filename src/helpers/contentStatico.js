import axaLogo from "../assets/axa-logo.png";
export const logoInfoStaticos = (doc) => {
  doc.addImage(axaLogo, "JPEG", 10, 10, 20, 20);
  doc.setFontSize(12);
  doc.setTextColor("#8080c7", 250);
  doc.setFont("helvetica", "bold");
  doc.text("Gastos Médicos Mayores ", 205.5, 18, null, null, "right");
  doc.setTextColor("#00008f");
  doc.setFont("helvetica", "bold");
  doc.text("Informe Médico", 204.5, 23, null, null, "right");
  return doc;
};
export const nPdfStatico1 = (doc) => {
  doc.setFontSize(8);
  doc.setTextColor("#00008f");
  doc.text("1/5", 204.5, 13, null, null, "right");
  return doc;
};
export const nPdfStatico2 = (doc) => {
  doc.setFontSize(8);
  doc.setTextColor("#00008f");
  doc.text("2/5", 204.5, 13, null, null, "right");
  return doc;
};
export const nPdfStatico3 = (doc) => {
  doc.setFontSize(8);
  doc.setTextColor("#00008f");
  doc.text("3/5", 204.5, 13, null, null, "right");
  return doc;
};
export const nPdfStatico4 = (doc) => {
  doc.setFontSize(8);
  doc.setTextColor("#00008f");
  doc.text("4/5", 204.5, 13, null, null, "right");
  return doc;
};
export const nPdfStatico5 = (doc) => {
  doc.setFontSize(8);
  doc.setTextColor("#00008f");
  doc.text("5/5", 204.5, 13, null, null, "right");
  return doc;
};
export const infoStaticos = (doc) => {
  doc.setTextColor("#00008f");
  doc.setFontSize(9.9);
  doc.setFont("helvetica", "normal");
  doc.text("Instrucciones", 10, 40, null, null, "left");
  doc.text(
    "1. Es necesario llenar el presente formato en su totalidad. Utilice letra de molde, legible y tinta negra.",
    10,
    45,
    null,
    null,
    "left"
  );
  doc.text(
    "2. El documento será inválido si presenta tachaduras y/o enmendaduras y debe presentarse en original.",
    10,
    50,
    null,
    null,
    "left"
  );
  doc.text(
    "3. La inexacta o falsa declaración de la información médica aquí detallada, exentará de toda responsabilidad a AXA Seguros.",
    10,
    55,
    null,
    null,
    "left"
  );
  doc.text(
    "4. Se debe actualizar cada 6 meses o cuando se cambie de médico tratante o cuando cambie el tratamiento o padecimiento.",
    10,
    60,
    null,
    null,
    "left"
  );
  doc.text(
    "5. Cada médico tratante e interconsultantes deberán llenar un informe médico. ",
    10,
    65,
    null,
    null,
    "left"
  );
  return doc;
};
export const bordeStaticos = (doc) => {
  doc.setTextColor("#00008f");
  doc.setFontSize(7.5);
  //   doc.text("AI - 346 • NOVIEMBRE 2018", 109, 162);
  doc.text(
    "AXA Seguros, S.A. de C.V. Félix Cuevas 366, Piso 6, Col. Tlacoquemécatl, Del. Benito Juárez, 03200, CDMX, México • Tels. 5169 1000 • 01 800 900 1292 • axa.mx ).",
    10,
    274.5
  );
  doc.text("AI - 346 • NOVIEMBRE 2018", 208, 230, null, -90);
  return doc;
};
export const contentStatico1 = (doc) => {
  doc.setTextColor("#00008f");
  doc.text("Datos del Asegurado afectado (paciente).", 11, 80.5);

  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 72, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.text("Información general", 11, 75.5);

  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 98, 194, 5, "F");
  doc.setTextColor("white");
  doc.text("Motivo de la atención médica", 11, 101.5);

  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 108, 194, 5, "F");
  doc.setTextColor("white");
  doc.text("Tipo de estancia", 11, 111.5);

  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 118, 194, 5, "F");
  doc.setTextColor("white");
  doc.text("Antecedentes médicos", 11, 121.5);

  doc.setTextColor("#00008f");
  doc.text("Antecedentes patológicos (especificar fecha de inicio o ", 11, 126);
  doc.setTextColor("#00008f");
  doc.text("tiempo con el padecimiento dd/mm/aaaa):", 11, 130);

  doc.setTextColor("#00008f");
  doc.text(
    "Antecedentes no patológicos (especificar frecuencia,",
    109,
    126
  );
  doc.setTextColor("#00008f");
  doc.text("cantidad y desde cuándo):", 109, 130);

  doc.setTextColor("#00008f");
  doc.text("Antecedentes gineco-obstétricos", 11, 163.5);

  doc.setTextColor("#00008f");
  doc.text("Antecedentes perinatales", 109, 162);
  doc.text("(evolución, complicaciones, tratamientos).", 109, 165.5);

  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 202, 194, 5, "F");
  doc.setTextColor("white");
  doc.text("Diagnóstico(s)", 11, 205.5);
  return doc;
};
export const contentStatico2 = (doc) => {
  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 178, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.text("Tratamiento", 11, 181.6);
};
export const contentStatico3 = (doc) => {
  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 120, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.text(
    "Otros tratamientos y/o materiales, equipos y/o biológicos/monitoreos",
    11,
    123.6
  );

  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 144, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.setFontSize(9.45);
  doc.text(
    "Programación de sesiones de quimioterapia o radioterapia (en caso de ser más de 10 medicamentos, favor de llenar otro formato)",
    11,
    147.6
  );
  doc.setFontSize(10);
  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 218, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.text("Programación de sesiones de rehabilitación física", 11, 221.6);
  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 228, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.text("Se requiere servicio de enfermería", 11, 231.6);
  doc.setFontSize(10);
};
export const contentStatico4 = (doc) => {
  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 160, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.text("Observaciones", 11, 163.6);
  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 194, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.text("Datos del médico", 11, 197.6);
  return doc;
};
export const contentStatico5 = (doc) => {
  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 120, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.text("Datos personales", 11, 123.6);

  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 152, 194.1, 5, "F");
  doc.setTextColor("white");
  doc.text("Transferencia de datos a terceros", 11, 155.6);
  return doc;
};
