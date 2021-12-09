export const infoInportante = (doc) => {
  doc.setTextColor("#00008f");
  doc.setFontSize(9.95);
  doc.setFont("helvetica", "normal");
  doc.text("Instrucciones", 10, 40, null, null, "left");
  doc.text("1. Es necesario llenar el presente formato en su totalidad. Utilice letra de molde, legible y tinta negra.", 10, 45, null, null, "left");
  doc.text("2. El documento será inválido si presenta tachaduras y/o enmendaduras y debe presentarse en original.", 10, 50, null, null, "left");
  doc.text("3. La inexacta o falsa declaración de la información médica aquí detallada, exentará de toda responsabilidad a AXA Seguros.", 10, 55, null, null, "left");
  doc.text("4. Se debe actualizar cada 6 meses o cuando se cambie de médico tratante o cuando cambie el tratamiento o padecimiento.", 10, 60, null, null, "left");
  doc.text("5. Cada médico tratante e interconsultantes deberán llenar un informe médico. ", 10, 65, null, null, "left");
  return doc
};
