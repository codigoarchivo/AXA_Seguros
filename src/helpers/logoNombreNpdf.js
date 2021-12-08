import axaLogo from "../assets/axa-logo.png";

export const logo = (doc) => {
  doc.addImage(axaLogo, "JPEG", 10, 10, 20, 20);
  doc.setFontSize(12);
  doc.setTextColor("#8080c7", 250);
  doc.setFont("helvetica", "bold");
  doc.text("Gastos Médicos Mayores ", 201, 18, null, null, "right");
  doc.setTextColor("blue");
  doc.setFont("helvetica", "bold");
  doc.text("Informe Médico", 200, 23, null, null, "right");
  return doc;
};

export const pdf1 = (doc) => {
  doc.setFontSize(8);
  doc.setTextColor("blue");
  doc.text("1/5", 200, 13, null, null, "right");
  return doc;
};
