export const contentStatico = (doc) => {
  doc.setTextColor("#00008f");
  doc.text("Datos del Asegurado afectado (paciente).", 11, 80.5);

  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 72, 194, 5, "F");
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
  doc.text("tiempo con el padecimiento dd/mm/aaaa):", 11, 129);

  doc.setTextColor("#00008f");
  doc.text(
    "Antecedentes no patológicos (especificar frecuencia, cantidad",
    109,
    126
  );
  doc.setTextColor("#00008f");
  doc.text("y desde cuándo):", 109, 129);

  doc.setTextColor("#00008f");
  doc.text("Antecedentes gineco-obstétricos", 11, 163.5);

  doc.setTextColor("#00008f");
  doc.text("Antecedentes perinatales", 109, 162);
  doc.text("(evolución, complicaciones, tratamientos).", 109, 165);

  doc.setDrawColor(0);
  doc.setFillColor("#00008f");
  doc.rect(10, 202, 194, 5, "F");
  doc.setTextColor("white");
  doc.text("Diagnóstico(s)", 11, 205.5);
  return doc;
};

export const bordesStaticos = (doc) => {
  doc.setTextColor("#00008f");
  doc.setFontSize(7.5);
//   doc.text("AI - 346 • NOVIEMBRE 2018", 109, 162);
  doc.text("AXA Seguros, S.A. de C.V. Félix Cuevas 366, Piso 6, Col. Tlacoquemécatl, Del. Benito Juárez, 03200, CDMX, México • Tels. 5169 1000 • 01 800 900 1292 • axa.mx ).", 10, 275);
  return doc;
};
