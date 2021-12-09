export const contentApi = (doc) => {
  doc.setFontSize(8);
  doc.text("Lugar:", 11, 70.3);
  doc.setTextColor("black");
  doc.text("Mexico", 20, 70.3);

  doc.setTextColor("#00008f");
  doc.text("Fecha:", 109, 70.3);
  doc.setTextColor("black");
  doc.text("15/11/97", 118, 70.3);

  doc.setTextColor("#00008f");
  doc.text("Apellido paterno:", 11, 85);
  doc.setTextColor("black");
  doc.text("Paredes", 11, 88.5);

  doc.setTextColor("#00008f");
  doc.text("Apellido materno:", 71, 85);
  doc.setTextColor("black");
  doc.text("Quintero", 71, 88.5);

  doc.setTextColor("#00008f");
  doc.text("Nombre(s):", 136, 85);
  doc.setTextColor("black");
  doc.text("Juan", 136, 88.5);

  doc.setTextColor("#00008f");
  doc.text("Edad:", 11, 93);
  doc.setTextColor("black");
  doc.text("50", 11, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Fecha de nacimiento:", 21, 93);
  doc.setTextColor("#00008f");
  doc.text("Dia    Mes    Año", 58, 93);

  doc.setTextColor("#00008f");
  doc.text("Sexo", 92, 93);
  doc.text("Masculino", 100, 96.5);
  doc.text("Femenino", 120, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Talla:", 142, 93);
  doc.setTextColor("black");
  doc.text("M", 142, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Peso:", 162, 93);
  doc.setTextColor("black");
  doc.text("54kg", 162, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Tensión arterial:", 177, 93);
  doc.setTextColor("black");
  doc.text("120-60", 177, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Enfermedad", 15, 106.5);
  doc.setTextColor("#00008f");
  doc.text("Accidente", 65, 106.5);
  doc.setTextColor("#00008f");
  doc.text("Maternidad", 119, 106.5);
  doc.setTextColor("#00008f");
  doc.text("Segunda opinión médica", 170, 106.5);

  doc.setTextColor("#00008f");
  doc.text("Urgencia", 15, 116.5);
  doc.setTextColor("#00008f");
  doc.text("Hospitalización", 65, 116.5);
  doc.setTextColor("#00008f");
  doc.text("Corta estancia / ambulatoria", 119, 116.5);
  doc.setTextColor("#00008f");
  doc.text("Consultorio", 170, 116.5);

  doc.setTextColor("#00008f");
  doc.text("Cardiacos:", 15, 136);
  doc.text("Diabetes mellitus:", 15, 142);
  doc.text("Cáncer:", 15, 148);
  doc.text("Convulsivos:", 15, 154);

  doc.setTextColor("#00008f");
  doc.text("Hipertensivos:", 61, 136);
  doc.text("VIH/SIDA:", 61, 142);
  doc.text("Hepáticos:", 61, 148);
  doc.text("Otros:", 61, 154);

  doc.setTextColor("#00008f");
  doc.text("¿Fuma?", 110, 136);
  doc.text("¿Consume bebidas alcohólicas?", 110, 142);
  doc.text("¿Consume o ha consumido algún tipo de drogas? ", 110, 148);
  doc.text("Otros", 110, 154);

  doc.setTextColor("#00008f");
  doc.text("Gestación:", 11, 169);
  doc.text("Partos:", 35, 169);
  doc.text("Abortos:", 60, 169);
  doc.text("Cesáreas:", 85, 169);

  doc.setTextColor("#00008f");
  doc.text("Fecha de última", 11, 174);
  doc.text("menstruación:", 11, 177);
  doc.text("Dia    Mes    Año", 58, 174);

  doc.text("Especificar si recibió:", 11, 184);
  doc.text("tratamiento para infertilidad:", 11, 187);

  doc.text("Tiempo de evolución:", 11, 194);
  doc.text("Tiempo de evolución:", 109, 194);
  
  doc.text("Referido por otro médico o unidad: ", 11, 200);
  doc.text("Sí", 70, 200);
  doc.text("No", 80, 200);
  doc.text("¿Cuál?", 90, 200);

  doc.text("Padecimiento actual (principales signos, síntomas y detalles de evolución):", 11, 211);

  doc.text("Fecha de padecimiento:", 11, 235);
  doc.text("Dia    Mes    Año", 58, 235);
  doc.text("Fecha de diagnóstico:", 110, 235);
  doc.text("Dia    Mes    Año", 158, 235);

  doc.text("Tipo de padecimiento:", 11, 243);

  doc.text("Congénito", 15, 250);
  doc.text("Adquirido", 45, 250);
  doc.text("Agudo", 75, 250);
  doc.text("Crónico", 100, 250);
  doc.text("Tiempo de evolución:", 130, 250);

  return doc;
};
