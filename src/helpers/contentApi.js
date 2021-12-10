export const contentApi = (doc, data) => {
  doc.setFontSize(10);
  // doc.setFont("helvetica", "bold");
  doc.text("Lugar:", 11, 70.3);
  doc.setTextColor("black");
  doc.text(data.lugar, 21, 70.3);

  doc.setTextColor("#00008f");
  doc.text("Fecha:", 109, 70.3);
  doc.setTextColor("black");
  doc.text(data.fecha, 119, 70.3);

  doc.setTextColor("#00008f");
  doc.text("Apellido paterno:", 11, 85);
  doc.setTextColor("black");
  doc.text(data.apellidoP, 11, 88.5);

  doc.setTextColor("#00008f");
  doc.text("Apellido materno:", 71, 85);
  doc.setTextColor("black");
  doc.text(data.apellidoM, 71, 88.5);

  doc.setTextColor("#00008f");
  doc.text("Nombre(s):", 136, 85);
  doc.setTextColor("black");
  doc.text(data.nombre, 136, 88.5);

  doc.setTextColor("#00008f");
  doc.text("Edad:", 11, 93);
  doc.setTextColor("black");
  doc.text(data.edad, 11, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Fecha de nacimiento:", 21, 93);
  doc.setTextColor("#00008f");
  doc.text("Dia    Mes    Año", 58, 93);
  doc.setTextColor("black");
  doc.text(data.fechaN, 58, 97);

  doc.setTextColor("#00008f");
  doc.text("Sexo", 92, 93);
  doc.text("Masculino", 100, 96.5);
  doc.text("Femenino", 120, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Talla:", 142, 93);
  doc.setTextColor("black");
  doc.text(data.talla, 142, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Peso:", 162, 93);
  doc.setTextColor("black");
  doc.text(`${data.peso}kg`, 162, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Tensión arterial:", 177, 93);
  doc.setTextColor("black");
  doc.text(data.tension, 177, 96.5);

  doc.setTextColor("#00008f");
  doc.text("Enfermedad", 15, 106.5);
  doc.setTextColor("#00008f");
  doc.text("Accidente", 65, 106.5);
  doc.setTextColor("#00008f");
  doc.text("Maternidad", 108, 106.5);
  doc.setTextColor("#00008f");
  doc.text("Segunda opinión médica", 160, 106.5);

  doc.setTextColor("#00008f");
  doc.text("Urgencia", 15, 116.5);
  doc.setTextColor("#00008f");
  doc.text("Hospitalización", 65, 116.5);
  doc.setTextColor("#00008f");
  doc.text("Corta estancia / ambulatoria", 108, 116.5);
  doc.setTextColor("#00008f");
  doc.text("Consultorio", 160, 116.5);

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

  doc.text(
    "Padecimiento actual (principales signos, síntomas y detalles de evolución):",
    11,
    211
  );

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
export const contentApi2 = (doc) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(
    "Causa o etiología del padecimiento (en caso de accidente, describa tiempo, modo y lugar donde ocurrió la lesión):",
    11,
    45
  );

  doc.text("Tiene relación con otro padecimiento:", 11, 84);
  doc.text("Si", 75, 84);
  doc.text("No", 85, 84);
  doc.text("¿Cuál?", 11, 88);

  doc.text("El padecimiento ocasionó incapacidad:", 11, 94);
  doc.text("Si", 20, 98);
  doc.text("No", 40, 98);
  doc.text("Parcial", 60, 98);
  doc.text("Total", 80, 98);
  doc.text("Desde:", 110, 98);
  doc.text("Hasta:", 155, 98);

  doc.text(
    "Diagnóstico (indicando si es unilateral o bilateral, derecho o izquierdo):",
    11,
    104
  );

  doc.text("Código ICD:", 11, 145);
  doc.text("Es cáncer:", 109, 145);
  doc.text("Sí", 130, 145);
  doc.text("No", 145, 145);
  doc.text("Escala TNM:", 160, 145);

  doc.text("Señale los datos relevantes de exploración física:", 11, 152);

  doc.text(
    "Describe los estudios de laboratorio y/o gabinete que realizaron para confirmar el diagnóstico, con su interpretación:",
    11,
    172
  );

  doc.text("Tratamiento propuesto (quirúrgico, no quirúrgico):", 11, 206);
  doc.text("Fecha de cirugía:", 144, 206);
  doc.text("Día Mes Año", 144, 210);

  doc.text("Fecha de hospitalización:", 11, 220);
  doc.text("Día Mes Año", 70, 220);
  doc.text("Fecha de alta:", 109, 220);
  doc.text("Día Mes Año", 150, 220);

  doc.text("Días que se brindó atención médica:", 11, 231);

  doc.text("Sitio en el cual se realizará el procedimiento:", 11, 238);
  doc.text("Consultorio", 15, 242);
  doc.text("Hospital", 55, 242);
  doc.text("Gabinete", 88, 242);
  doc.text("Otro", 118, 242);
  doc.text("Especifique:", 140, 242);

  doc.text(
    "En caso de haber seleccionado hospital indique el nombre del hospital:",
    11,
    248
  );

  doc.text("Se realizó estudio histopatológico:", 11, 260);
  doc.text("Si", 70, 260);
  doc.text("No", 80, 260);
  doc.text("Describa el resultado del estudio histopatológico:", 11, 264);
};
export const contentApi3 = (doc) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  doc.text("Se presentaron complicaciones:", 11, 44);
  doc.text("Si", 70, 44);
  doc.text("No", 80, 44);
  doc.text("Describa las complicaciones:", 11, 48);

  doc.text("Continuará recibiendo tratamiento en el futuro:", 11, 84);
  doc.text("Si", 90, 84);
  doc.text("No", 100, 84);
  doc.text("Describa el tratamiento:", 11, 88);

  doc.text(
    "Especificar tratamiento (sesiones de quimioterapia, sesiones de rehabilitación física, número de sesiones, cantidad, cada",
    11,
    128
  );
  doc.text("cuánto y durante cuánto tiempo):", 11, 132);

  doc.text("#", 14, 153);
  doc.text("Nombre y presentación del medicamento", 22, 153);
  doc.text("(Ej: Paracetamol 100 mg)", 32, 156.5);
  doc.text("Cantidad", 98, 153);
  doc.text("(Ej: 1 tableta)", 95, 156.5);
  doc.text("Cada cuánto", 128, 153);
  doc.text("(Ej: Cada 24 hrs)", 126, 156.5);
  doc.text("Durante cuánto tiempo", 163, 153);
  doc.text("(Ej: Por un mes)", 168, 156.5);

  doc.text(".1", 11, 162);
  doc.text(".2", 11, 168);
  doc.text(".3", 11, 174);
  doc.text(".4", 11, 180);
  doc.text(".5", 11, 186);
  doc.text(".6", 11, 192);
  doc.text(".7", 11, 198);
  doc.text(".8", 11, 204);
  doc.text(".9", 11, 210);
  doc.text(".10", 11, 216);

  doc.text("Días:", 11, 226.5);
  doc.text("No. de sesiones:", 70, 226.5);

  doc.text("Días requeridos:", 11, 236.5);
  doc.text("Matutino", 85, 236.5);
  doc.text("Vespertino", 115, 236.5);
  doc.text("Nocturno", 145, 236.5);
  doc.text("24 horas", 175, 236.5);

  doc.text("Nombre de medicamentos:", 11, 242);

  return doc;
};
export const contentApi4 = (doc) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  doc.text(
    "En caso de terapia inmunológica, biológica, etc., justifique el tratamiento:",
    11,
    44
  );

  doc.text(
    "Lista de materiales que utilizó o se utilizarán en cirugía y/o equipo especial (monitoreo, Da Vinci u otros):",
    11,
    84
  );

  doc.text("Tipo de terapia:", 11, 114);
  doc.text("Cédula de especialidad:", 121, 114);

  doc.text("Detalle de evolución:", 11, 134);

  doc.text("Médico o especialista", 40, 203.5);
  doc.text("Médico o especialista (anestesiólogo)", 120, 203.5);

  doc.text("Tipo de participación:", 11, 211);
  doc.text("Tipo de participación:", 109, 211);

  doc.text("Nombre:", 11, 219);
  doc.text("Nombre:", 109, 219);

  doc.text("Especialidad:", 11, 227);
  doc.text("Especialidad:", 109, 227);

  doc.text("Cédula profesional:", 11, 235);
  doc.text("Cédula profesional:", 109, 235);

  doc.text("Cédula de especialidad:", 11, 243);
  doc.text("Cédula de especialidad:", 109, 243);

  doc.text("RFC:", 11, 251);
  doc.text("RFC:", 109, 251);

  doc.text("Domicilio:", 11, 259);
  doc.text("Domicilio:", 109, 259);

  doc.text("Teléfono:", 11, 267);
  doc.text("Teléfono:", 109, 267);

  return doc;
};
export const contentApi5 = (doc) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Ayudante 1", 50, 45.5);
  doc.text("Ayudante 2", 145, 45.5);

  doc.text("Tipo de participación:", 11, 53.5);
  doc.text("Tipo de participación:", 109, 53.5);

  doc.text("Nombre:", 11, 61.5);
  doc.text("Nombre:", 109, 61.5);

  doc.text("Otros médicos:", 11, 68);

  doc.text("Firma del médico", 55, 85.5);
  doc.text("Lugar y fecha", 150, 85.5);

  doc.text(
    "En caso de reembolso y/o programación de servicios, el asegurado deberá llenar el siguiente apartado:",
    11,
    117
  );

  doc.setFontSize(9.7);
  doc.text(
    "Autorizo que AXA trate mis datos personales sensibles y los transfiera a médicos especialistas en México y/o en el extranjero,",
    11,
    160
  );
  doc.text(
    "así como a prestadores de servicios médicos con los que tenga convenio, para efectos del cumplimiento de las obligaciones",
    11,
    164
  );
  doc.text("derivadas del Contrato de Seguro.", 11, 168);
  doc.text("Sí acepto", 20, 176);
  doc.text("No acepto", 20, 182);
  doc.text("Firma del Asegurado:", 60, 182);

  doc.text(
    "Autorizo que AXA Seguros S.A. de C.V., al inscribirme en alguno de los programas que incluye la Póliza de gastos médicos",
    11,
    188
  );
  doc.text(
    "mayores, transfiera mis datos personales sensibles a médicos especialistas en México y/o en el extranjero, así como a",
    11,
    192
  );
  doc.text(
    "prestadores de servicios médicos, con la finalidad de ofrecerme los servicios de asistencia que me permitan dar seguimiento",
    11,
    196
  );
  doc.text(
    "específico a mi padecimiento, así como solicitar una segunda opinión médica y en su caso se me ofrezcan alternativas para",
    11,
    200
  );
  doc.text("el tratamiento de mi enfermedad.", 11, 204);
  doc.text("Sí acepto", 20, 214);
  doc.text("No acepto", 20, 218);
  doc.text("Firma del Asegurado:", 60, 218);

  return doc;
};
