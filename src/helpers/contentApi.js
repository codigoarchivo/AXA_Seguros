import jsPDF from "jspdf";
const { TextField } = jsPDF.AcroForm;

// textField.Q = 1; for Center alignment and textField.Q = 2; for Right alignment

export const contentApi = (doc, data) => {
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  // lugar
  const lugar = new TextField();
  doc.text("Lugar:", 11, 69.8);
  lugar.Rect = [22, 67, 85, 5];
  lugar.multiline = true;
  lugar.value = data.lugar; //
  lugar.fieldName = "lugar";
  lugar.maxFontSize = 10;
  doc.addField(lugar);

  // FechaDia
  const fechaDia = new TextField();
  doc.text("Fecha:", 109, 69.8);
  fechaDia.Rect = [120, 67, 83, 5];
  fechaDia.multiline = true;
  fechaDia.value = data.fecha; //
  fechaDia.fieldName = "fechaDia";
  fechaDia.maxFontSize = 10;
  doc.addField(fechaDia);

  // Apellido paterno:
  const apellido = new TextField();
  doc.text("Apellido paterno:", 11, 85);
  apellido.Rect = [11, 86, 58, 5];
  apellido.multiline = true;
  apellido.value = data.apellidoP; //
  apellido.fieldName = "apellido";
  apellido.maxFontSize = 10;
  doc.addField(apellido);

  // Apellido materno:
  const materno = new TextField();
  doc.text("Apellido materno:", 71, 85);
  materno.Rect = [71, 86, 63, 5];
  materno.multiline = true;
  materno.value = data.apellidoM; //
  materno.fieldName = "materno";
  materno.maxFontSize = 10;
  doc.addField(materno);

  // nombre
  const nombreP = new TextField();
  doc.text("Nombre(s):", 136, 85);
  nombreP.Rect = [136, 86, 67, 5];
  nombreP.multiline = true;
  nombreP.value = data.nombre; //
  nombreP.fieldName = "nombreP";
  nombreP.maxFontSize = 10;
  doc.addField(nombreP);

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
  // Causa o etiología del padecimiento
  const padecimiento = new TextField();
  doc.text(
    "Causa o etiología del padecimiento (en caso de accidente, describa tiempo, modo y lugar donde ocurrió la lesión):",
    11,
    44
  );
  padecimiento.Rect = [11, 45, 192, 24];
  padecimiento.multiline = true;
  padecimiento.value = "value"; //
  padecimiento.fieldName = "padecimiento";
  padecimiento.maxFontSize = 10;
  doc.addField(padecimiento);

  // Tiene relación con otro padecimiento:
  const relacion = new TextField();
  doc.text("Tiene relación con otro padecimiento:", 11, 74);
  doc.text("Si", 75, 74);
  doc.text("No", 85, 74);
  doc.text("¿Cuál?", 11, 78);
  relacion.Rect = [25, 75, 90, 5];
  relacion.multiline = true;
  relacion.value = "value"; //
  relacion.fieldName = "relacion";
  relacion.maxFontSize = 10;
  doc.addField(relacion);

  // El padecimiento ocasionó incapacidad:
  const desde = new TextField();
  doc.text("Desde:", 110, 88);
  desde.Rect = [122, 84.5, 32, 5];
  desde.multiline = true;
  desde.value = "value"; //
  desde.fieldName = "desde";
  desde.maxFontSize = 10;
  doc.addField(desde);

  const hasta = new TextField();
  doc.text("Hasta:", 155, 88);
  hasta.Rect = [167, 84.5, 32, 5];
  hasta.multiline = true;
  hasta.value = "value"; //
  hasta.fieldName = "hasta";
  hasta.maxFontSize = 10;
  doc.addField(hasta);
  doc.text("El padecimiento ocasionó incapacidad:", 11, 84);
  doc.text("Si", 20, 88);
  doc.text("No", 40, 88);
  doc.text("Parcial", 60, 88);
  doc.text("Total", 80, 88);

  // Diagnóstico
  const diagnostico = new TextField();
  doc.text(
    "Diagnóstico (indicando si es unilateral o bilateral, derecho o izquierdo):",
    11,
    94
  );
  diagnostico.Rect = [11, 96, 192, 23];
  diagnostico.multiline = true;
  diagnostico.value = "value"; //
  diagnostico.fieldName = "diagnostico";
  diagnostico.maxFontSize = 10;
  doc.addField(diagnostico);

  // Código ICD:
  const codigo = new TextField();
  doc.text("Código ICD:", 11, 125);
  codigo.Rect = [30, 122, 76, 5];
  codigo.multiline = true;
  codigo.value = "value"; //
  codigo.fieldName = "codigo";
  codigo.maxFontSize = 10;
  doc.addField(codigo);

  const escala = new TextField();
  doc.text("Escala TNM:", 160, 125);
  escala.Rect = [180, 122, 23, 5];
  escala.multiline = true;
  escala.value = "value"; //
  escala.fieldName = "escala";
  escala.maxFontSize = 10;
  doc.addField(escala);
  doc.text("Es cáncer:", 109, 125);
  doc.text("Sí", 130, 125);
  doc.text("No", 145, 125);

  // Señale los datos
  const senales = new TextField();
  doc.text("Señale los datos relevantes de exploración física:", 11, 132);
  senales.Rect = [11, 133, 192, 14];
  senales.multiline = true;
  senales.value = "value"; //
  senales.fieldName = "senales";
  senales.maxFontSize = 10;
  doc.addField(senales);

  // Describe los estudios
  const estudios = new TextField();
  doc.text(
    "Describe los estudios de laboratorio y/o gabinete que realizaron para confirmar el diagnóstico, con su interpretación:",
    11,
    152
  );
  estudios.Rect = [11, 153, 192, 24];
  estudios.multiline = true;
  estudios.value = "value"; //
  estudios.fieldName = "estudios";
  estudios.maxFontSize = 10;
  doc.addField(estudios);

  //Tratamiento propuesto
  const propuesto = new TextField();
  doc.text("Tratamiento propuesto (quirúrgico, no quirúrgico):", 11, 186.5);
  propuesto.Rect = [11, 187.5, 128, 8];
  propuesto.multiline = true;
  propuesto.value = "value"; //
  propuesto.fieldName = "propuesto";
  propuesto.maxFontSize = 10;
  doc.addField(propuesto);

  doc.text("Fecha de cirugía:", 144, 186.5);
  doc.text("Día Mes Año", 144, 190.5);

  doc.text("Fecha de hospitalización:", 11, 200);
  doc.text("Día Mes Año", 70, 200);
  doc.text("Fecha de alta:", 109, 200);
  doc.text("Día Mes Año", 150, 200);

  //Días que se brindó
  const brindo = new TextField();
  doc.text("Días que se brindó atención médica:", 11, 211);
  brindo.Rect = [70, 208, 133, 5];
  brindo.multiline = true;
  brindo.value = "value"; //
  brindo.fieldName = "brindo";
  brindo.maxFontSize = 10;
  doc.addField(brindo);

  doc.text("Sitio en el cual se realizará el procedimiento:", 11, 218);
  doc.text("Consultorio", 15, 222);
  doc.text("Hospital", 55, 222);
  doc.text("Gabinete", 88, 222);
  doc.text("Otro", 118, 222);

  //Sitio procedimiento:
  const especifique = new TextField();
  doc.text("Especifique:", 140, 222);
  especifique.Rect = [160, 218, 43, 5];
  especifique.multiline = true;
  especifique.value = "value"; //
  especifique.fieldName = "especifique";
  especifique.maxFontSize = 10;
  doc.addField(especifique);

  //nombre del hospital:
  const hospital = new TextField();
  doc.text(
    "En caso de haber seleccionado hospital indique el nombre del hospital:",
    11,
    228
  );
  hospital.Rect = [11, 229, 192, 5];
  hospital.multiline = true;
  hospital.value = "value"; //
  hospital.fieldName = "hospital";
  hospital.maxFontSize = 10;
  doc.addField(hospital);

  //Describa el resultado
  const resultadoD = new TextField();
  doc.text("Describa el resultado del estudio histopatológico:", 11, 242);
  resultadoD.Rect = [11, 244, 192, 25];
  resultadoD.multiline = true;
  resultadoD.value = "value"; //
  resultadoD.fieldName = "resultadoD";
  resultadoD.maxFontSize = 10;
  doc.addField(resultadoD);

  doc.text("Se realizó estudio histopatológico:", 11, 238);
  doc.text("Si", 70, 238);
  doc.text("No", 80, 238);
};
export const contentApi3 = (doc) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  // Describa las complicaciones:
  const complicaionD = new TextField();
  doc.text("Describa las complicaciones:", 11, 48);
  doc.text("Si", 70, 44);
  doc.text("No", 80, 44);
  doc.text("Se presentaron complicaciones:", 11, 44);
  complicaionD.Rect = [11, 50, 192, 29];
  complicaionD.multiline = true;
  complicaionD.value = "value"; //
  complicaionD.fieldName = "complicaionD";
  complicaionD.maxFontSize = 10;
  doc.addField(complicaionD);

  // Continuará recibiendo
  const recibiendoT = new TextField();
  doc.text("Continuará recibiendo tratamiento en el futuro:", 11, 84);
  doc.text("Si", 90, 84);
  doc.text("No", 100, 84);
  doc.text("Describa el tratamiento:", 11, 88);
  recibiendoT.Rect = [11, 90, 192, 29];
  recibiendoT.multiline = true;
  recibiendoT.value = "value"; //
  recibiendoT.fieldName = "recibiendoT";
  recibiendoT.maxFontSize = 10;
  doc.addField(recibiendoT);

  // Especificar tratamiento
  const especificarT = new TextField();
  doc.text(
    "Especificar tratamiento (sesiones de quimioterapia, sesiones de rehabilitación física, número de sesiones, cantidad, cada",
    11,
    128
  );
  doc.text("cuánto y durante cuánto tiempo):", 11, 132);
  especificarT.Rect = [11, 134, 192, 9];
  especificarT.multiline = true;
  especificarT.value = "value"; //
  especificarT.fieldName = "especificarT";
  especificarT.maxFontSize = 10;
  doc.addField(especificarT);

  doc.text("#", 14, 153);
  doc.text("Nombre y presentación del medicamento", 22, 153);
  doc.text("(Ej: Paracetamol 100 mg)", 32, 156.5);
  doc.text("Cantidad", 98, 153);
  doc.text("(Ej: 1 tableta)", 95, 156.5);
  doc.text("Cada cuánto", 128, 153);
  doc.text("(Ej: Cada 24 hrs)", 126, 156.5);
  doc.text("Durante cuánto tiempo", 163, 153);
  doc.text("(Ej: Por un mes)", 168, 156.5);

  // .1
  doc.text(".1", 11, 162);
  const unoA = new TextField();
  unoA.Rect = [21, 158.7, 68, 5];
  unoA.multiline = true;
  unoA.value = "value"; //
  unoA.fieldName = "unoA";
  unoA.maxFontSize = 10;
  doc.addField(unoA);

  const unoB = new TextField();
  unoB.Rect = [91, 158.7, 28, 5];
  unoB.multiline = true;
  unoB.value = "value"; //
  unoB.fieldName = "unoB";
  unoB.maxFontSize = 10;
  doc.addField(unoB);

  const unoC = new TextField();
  unoC.Rect = [121, 158.7, 38, 5];
  unoC.multiline = true;
  unoC.value = "value"; //
  unoC.fieldName = "unoC";
  unoC.maxFontSize = 10;
  doc.addField(unoC);

  const unoD = new TextField();
  unoD.Rect = [161, 158.7, 42, 5];
  unoD.multiline = true;
  unoD.value = "value"; //
  unoD.fieldName = "unoD";
  unoD.maxFontSize = 10;
  doc.addField(unoD);

  // .2
  doc.text(".2", 11, 168);
  const dosA = new TextField();
  dosA.Rect = [21, 164.7, 68, 5];
  dosA.multiline = true;
  dosA.value = "value"; //
  dosA.fieldName = "dosA";
  dosA.maxFontSize = 10;
  doc.addField(dosA);

  const dosB = new TextField();
  dosB.Rect = [91, 164.7, 28, 5];
  dosB.multiline = true;
  dosB.value = "value"; //
  dosB.fieldName = "dosB";
  dosB.maxFontSize = 10;
  doc.addField(dosB);

  const dosC = new TextField();
  dosC.Rect = [121, 164.7, 38, 5];
  dosC.multiline = true;
  dosC.value = "value"; //
  dosC.fieldName = "dosC";
  dosC.maxFontSize = 10;
  doc.addField(dosC);

  const dosD = new TextField();
  dosD.Rect = [161, 164.7, 42, 5];
  dosD.multiline = true;
  dosD.value = "value"; //
  dosD.fieldName = "dosD";
  dosD.maxFontSize = 10;
  doc.addField(dosD);

  // .3
  doc.text(".3", 11, 174);
  const tresA = new TextField();
  tresA.Rect = [21, 170.7, 68, 5];
  tresA.multiline = true;
  tresA.value = "value"; //
  tresA.fieldName = "tresA";
  tresA.maxFontSize = 10;
  doc.addField(tresA);

  const tresB = new TextField();
  tresB.Rect = [91, 170.7, 28, 5];
  tresB.multiline = true;
  tresB.value = "value"; //
  tresB.fieldName = "tresB";
  tresB.maxFontSize = 10;
  doc.addField(tresB);

  const tresC = new TextField();
  tresC.Rect = [121, 170.7, 38, 5];
  tresC.multiline = true;
  tresC.value = "value"; //
  tresC.fieldName = "tresC";
  tresC.maxFontSize = 10;
  doc.addField(tresC);

  const tresD = new TextField();
  tresD.Rect = [161, 170.7, 42, 5];
  tresD.multiline = true;
  tresD.value = "value"; //
  tresD.fieldName = "tresD";
  tresD.maxFontSize = 10;
  doc.addField(tresD);

  // .4
  doc.text(".4", 11, 180);
  const cuatroA = new TextField();
  cuatroA.Rect = [21, 176.7, 68, 5];
  cuatroA.multiline = true;
  cuatroA.value = "value"; //
  cuatroA.fieldName = "cuatroA";
  cuatroA.maxFontSize = 10;
  doc.addField(cuatroA);

  const cuatroB = new TextField();
  cuatroB.Rect = [91, 176.7, 28, 5];
  cuatroB.multiline = true;
  cuatroB.value = "value"; //
  cuatroB.fieldName = "cuatroB";
  cuatroB.maxFontSize = 10;
  doc.addField(cuatroB);

  const cuatroC = new TextField();
  cuatroC.Rect = [121, 176.7, 38, 5];
  cuatroC.multiline = true;
  cuatroC.value = "value"; //
  cuatroC.fieldName = "cuatroC";
  cuatroC.maxFontSize = 10;
  doc.addField(cuatroC);

  const cuatroD = new TextField();
  cuatroD.Rect = [161, 176.7, 42, 5];
  cuatroD.multiline = true;
  cuatroD.value = "value"; //
  cuatroD.fieldName = "cuatroD";
  cuatroD.maxFontSize = 10;
  doc.addField(cuatroD);

  // .5
  doc.text(".5", 11, 186);
  const cincoA = new TextField();
  cincoA.Rect = [21, 182.7, 68, 5];
  cincoA.multiline = true;
  cincoA.value = "value"; //
  cincoA.fieldName = "cincoA";
  cincoA.maxFontSize = 10;
  doc.addField(cincoA);

  const cincoB = new TextField();
  cincoB.Rect = [91, 182.7, 28, 5];
  cincoB.multiline = true;
  cincoB.value = "value"; //
  cincoB.fieldName = "cincoB";
  cincoB.maxFontSize = 10;
  doc.addField(cincoB);

  const cincoC = new TextField();
  cincoC.Rect = [121, 182.7, 38, 5];
  cincoC.multiline = true;
  cincoC.value = "value"; //
  cincoC.fieldName = "cincoC";
  cincoC.maxFontSize = 10;
  doc.addField(cincoC);

  const cincoD = new TextField();
  cincoD.Rect = [161, 182.7, 42, 5];
  cincoD.multiline = true;
  cincoD.value = "value"; //
  cincoD.fieldName = "cincoD";
  cincoD.maxFontSize = 10;
  doc.addField(cincoD);

  // .6
  doc.text(".6", 11, 192);
  const seisA = new TextField();
  seisA.Rect = [21, 188.7, 68, 5];
  seisA.multiline = true;
  seisA.value = "value"; //
  seisA.fieldName = "seisA";
  seisA.maxFontSize = 10;
  doc.addField(seisA);

  const seisB = new TextField();
  seisB.Rect = [91, 188.7, 28, 5];
  seisB.multiline = true;
  seisB.value = "value"; //
  seisB.fieldName = "seisB";
  seisB.maxFontSize = 10;
  doc.addField(seisB);

  const seisC = new TextField();
  seisC.Rect = [121, 188.7, 38, 5];
  seisC.multiline = true;
  seisC.value = "value"; //
  seisC.fieldName = "seisC";
  seisC.maxFontSize = 10;
  doc.addField(seisC);

  const seisD = new TextField();
  seisD.Rect = [161, 188.7, 42, 5];
  seisD.multiline = true;
  seisD.value = "value"; //
  seisD.fieldName = "seisD";
  seisD.maxFontSize = 10;
  doc.addField(seisD);

  // .7
  doc.text(".7", 11, 198);
  const sieteA = new TextField();
  sieteA.Rect = [21, 194.7, 68, 5];
  sieteA.multiline = true;
  sieteA.value = "value"; //
  sieteA.fieldName = "sieteA";
  sieteA.maxFontSize = 10;
  doc.addField(sieteA);

  const sieteB = new TextField();
  sieteB.Rect = [91, 194.7, 28, 5];
  sieteB.multiline = true;
  sieteB.value = "value"; //
  sieteB.fieldName = "sieteB";
  sieteB.maxFontSize = 10;
  doc.addField(sieteB);

  const sieteC = new TextField();
  sieteC.Rect = [121, 194.7, 38, 5];
  sieteC.multiline = true;
  sieteC.value = "value"; //
  sieteC.fieldName = "sieteC";
  sieteC.maxFontSize = 10;
  doc.addField(sieteC);

  const sieteD = new TextField();
  sieteD.Rect = [161, 194.7, 42, 5];
  sieteD.multiline = true;
  sieteD.value = "value"; //
  sieteD.fieldName = "sieteD";
  sieteD.maxFontSize = 10;
  doc.addField(sieteD);

  // .8
  doc.text(".8", 11, 204);
  const ochoA = new TextField();
  ochoA.Rect = [21, 200.7, 68, 5];
  ochoA.multiline = true;
  ochoA.value = "value"; //
  ochoA.fieldName = "ochoA";
  ochoA.maxFontSize = 10;
  doc.addField(ochoA);

  const ochoB = new TextField();
  ochoB.Rect = [91, 200.7, 28, 5];
  ochoB.multiline = true;
  ochoB.value = "value"; //
  ochoB.fieldName = "ochoB";
  ochoB.maxFontSize = 10;
  doc.addField(ochoB);

  const ochoC = new TextField();
  ochoC.Rect = [121, 200.7, 38, 5];
  ochoC.multiline = true;
  ochoC.value = "value"; //
  ochoC.fieldName = "ochoC";
  ochoC.maxFontSize = 10;
  doc.addField(ochoC);

  const ochoD = new TextField();
  ochoD.Rect = [161, 200.7, 42, 5];
  ochoD.multiline = true;
  ochoD.value = "value"; //
  ochoD.fieldName = "ochoD";
  ochoD.maxFontSize = 10;
  doc.addField(ochoD);

  // .9
  doc.text(".9", 11, 210);
  const nueveA = new TextField();
  nueveA.Rect = [21, 206.7, 68, 5];
  nueveA.multiline = true;
  nueveA.value = "value"; //
  nueveA.fieldName = "nueveA";
  nueveA.maxFontSize = 10;
  doc.addField(nueveA);

  const nueveB = new TextField();
  nueveB.Rect = [91, 206.7, 28, 5];
  nueveB.multiline = true;
  nueveB.value = "value"; //
  nueveB.fieldName = "nueveB";
  nueveB.maxFontSize = 10;
  doc.addField(nueveB);

  const nueveC = new TextField();
  nueveC.Rect = [121, 206.7, 38, 5];
  nueveC.multiline = true;
  nueveC.value = "value"; //
  nueveC.fieldName = "nueveC";
  nueveC.maxFontSize = 10;
  doc.addField(nueveC);

  const nueveD = new TextField();
  nueveD.Rect = [161, 206.7, 42, 5];
  nueveD.multiline = true;
  nueveD.value = "value"; //
  nueveD.fieldName = "nueveD";
  nueveD.maxFontSize = 10;
  doc.addField(nueveD);

  // .10
  doc.text(".10", 11, 216);
  const diezA = new TextField();
  diezA.Rect = [21, 212.7, 68, 5];
  diezA.multiline = true;
  diezA.value = "value"; //
  diezA.fieldName = "diezA";
  diezA.maxFontSize = 10;
  doc.addField(diezA);

  const diezB = new TextField();
  diezB.Rect = [91, 212.7, 28, 5];
  diezB.multiline = true;
  diezB.value = "value"; //
  diezB.fieldName = "diezB";
  diezB.maxFontSize = 10;
  doc.addField(diezB);

  const diezC = new TextField();
  diezC.Rect = [121, 212.7, 38, 5];
  diezC.multiline = true;
  diezC.value = "value"; //
  diezC.fieldName = "diezC";
  diezC.maxFontSize = 10;
  doc.addField(diezC);

  const diezD = new TextField();
  diezD.Rect = [161, 212.7, 42, 5];
  diezD.multiline = true;
  diezD.value = "value"; //
  diezD.fieldName = "diezD";
  diezD.maxFontSize = 10;
  doc.addField(diezD);

  // secciones
  const secionesA = new TextField();
  doc.text("Días:", 11, 226.5);
  secionesA.Rect = [20, 223.5, 42, 4.7];
  secionesA.multiline = true;
  secionesA.value = "value"; //
  secionesA.fieldName = "secionesA";
  secionesA.maxFontSize = 10;
  doc.addField(secionesA);

  const secionesB = new TextField();
  doc.text("No. de sesiones:", 70, 226.5);
  secionesB.Rect = [100, 223.5, 42, 4.7];
  secionesB.multiline = true;
  secionesB.value = "value"; //
  secionesB.fieldName = "secionesB";
  secionesB.maxFontSize = 10;
  doc.addField(secionesB);
  // Días requeridos:
  const diasR = new TextField();
  doc.text("Días requeridos:", 11, 236.5);
  diasR.Rect = [40, 233, 42, 5];
  diasR.multiline = true;
  diasR.value = "value"; //
  diasR.fieldName = "diasR";
  diasR.maxFontSize = 10;
  doc.addField(diasR);

  doc.text("Matutino", 85, 236.5);
  doc.text("Vespertino", 115, 236.5);
  doc.text("Nocturno", 145, 236.5);
  doc.text("24 horas", 175, 236.5);

  const medicamentosT = new TextField();
  doc.text("Nombre de medicamentos:", 11, 242);
  medicamentosT.Rect = [11, 243, 192, 26];
  medicamentosT.multiline = true;
  medicamentosT.value = "value"; //
  medicamentosT.fieldName = "medicamentosT";
  medicamentosT.maxFontSize = 10;
  doc.addField(medicamentosT);

  return doc;
};
export const contentApi4 = (doc) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  // En caso de terapia
  const terapia = new TextField();
  doc.text(
    "En caso de terapia inmunológica, biológica, etc., justifique el tratamiento:",
    11,
    44
  );
  terapia.Rect = [11, 45, 192, 34];
  terapia.multiline = true;
  terapia.value = "value"; //
  terapia.fieldName = "terapia";
  terapia.maxFontSize = 10;
  doc.addField(terapia);

  // Lista de materiales
  const materiales = new TextField();
  doc.text(
    "Lista de materiales que utilizó o se utilizarán en cirugía y/o equipo especial (monitoreo, Da Vinci u otros):",
    11,
    84
  );
  materiales.Rect = [11, 85, 192, 24];
  materiales.multiline = true;
  materiales.value = "value"; //
  materiales.fieldName = "materiales";
  materiales.maxFontSize = 10;
  doc.addField(materiales);

  // Tipo de terapia: Cédula de especialidad:
  const terapiaT = new TextField();
  doc.text("Tipo de terapia:", 11, 114);
  terapiaT.Rect = [11, 115, 108, 14];
  terapiaT.multiline = true;
  terapiaT.value = "value"; //
  terapiaT.fieldName = "terapiaT";
  terapiaT.maxFontSize = 10;
  doc.addField(terapiaT);

  const especialidad = new TextField();
  doc.text("Cédula de especialidad:", 121, 114);
  especialidad.Rect = [121, 115, 82, 14];
  especialidad.multiline = true;
  especialidad.value = "value"; //
  especialidad.fieldName = "especialidad";
  especialidad.maxFontSize = 10;
  doc.addField(especialidad);

  // Detalle de evolución:
  const evolucion = new TextField();
  doc.text("Detalle de evolución:", 11, 134);
  evolucion.Rect = [11, 135, 192, 24];
  evolucion.multiline = true;
  evolucion.value = "value"; //
  evolucion.fieldName = "evolucion";
  evolucion.maxFontSize = 10;
  doc.addField(evolucion);

  // Observaciones
  const observaciones = new TextField();
  observaciones.Rect = [11, 166, 192, 27];
  observaciones.multiline = true;
  observaciones.value = "value"; //
  observaciones.fieldName = "observaciones";
  observaciones.maxFontSize = 10;
  doc.addField(observaciones);

  //Médico o especialista
  doc.text("Médico o especialista", 40, 203.5);
  doc.text("Médico o especialista (anestesiólogo)", 120, 203.5);
  // Tipo de participación:
  const participacionA = new TextField();
  doc.text("Tipo de participación:", 11, 211);
  participacionA.Rect = [51, 208.5, 56, 5];
  participacionA.multiline = true;
  participacionA.value = "value"; //
  participacionA.fieldName = "participacionA";
  participacionA.maxFontSize = 10;
  doc.addField(participacionA);

  const participacionB = new TextField();
  doc.text("Tipo de participación:", 109, 211);
  participacionB.Rect = [151, 208.5, 52, 5];
  participacionB.multiline = true;
  participacionB.value = "value"; //
  participacionB.fieldName = "participacionB";
  participacionB.maxFontSize = 10;
  doc.addField(participacionB);

  // Nombre:
  const nombreA = new TextField();
  doc.text("Nombre:", 11, 219);
  nombreA.Rect = [51, 215.5, 56, 5];
  nombreA.multiline = true;
  nombreA.value = "value"; //
  nombreA.fieldName = "nombreA";
  nombreA.maxFontSize = 10;
  doc.addField(nombreA);

  const nombreB = new TextField();
  doc.text("Nombre:", 109, 219);
  nombreB.Rect = [151, 215.5, 52, 5];
  nombreB.multiline = true;
  nombreB.value = "value"; //
  nombreB.fieldName = "nombreB";
  nombreB.maxFontSize = 10;
  doc.addField(nombreB);

  //Especialidad:
  const especialidadA = new TextField();
  doc.text("Especialidad:", 11, 227);
  especialidadA.Rect = [51, 223.5, 56, 5];
  especialidadA.multiline = true;
  especialidadA.value = "value"; //
  especialidadA.fieldName = "especialidadA";
  especialidadA.maxFontSize = 10;
  doc.addField(especialidadA);

  const especialidadB = new TextField();
  doc.text("Especialidad:", 109, 227);
  especialidadB.Rect = [151, 223.5, 52, 5];
  especialidadB.multiline = true;
  especialidadB.value = "value"; //
  especialidadB.fieldName = "especialidadB";
  especialidadB.maxFontSize = 10;
  doc.addField(especialidadB);

  //Cédula profesional:
  const cedulaA = new TextField();
  doc.text("Cédula profesional:", 11, 235);
  cedulaA.Rect = [51, 231.5, 56, 5];
  cedulaA.multiline = true;
  cedulaA.value = "value"; //
  cedulaA.fieldName = "cedulaA";
  cedulaA.maxFontSize = 10;
  doc.addField(cedulaA);

  const cedulaB = new TextField();
  doc.text("Cédula profesional:", 109, 235);
  cedulaB.Rect = [151, 231.5, 52, 5];
  cedulaB.multiline = true;
  cedulaB.value = "value"; //
  cedulaB.fieldName = "cedulaB";
  cedulaB.maxFontSize = 10;
  doc.addField(cedulaB);

  //Cédula de especialidad:
  const cedulaEspeA = new TextField();
  doc.text("Cédula de especialidad:", 11, 243);
  cedulaEspeA.Rect = [51, 239.5, 56, 5];
  cedulaEspeA.multiline = true;
  cedulaEspeA.value = "value"; //
  cedulaEspeA.fieldName = "cedulaEspeA";
  cedulaEspeA.maxFontSize = 10;
  doc.addField(cedulaEspeA);

  const cedulaEspeB = new TextField();
  doc.text("Cédula de especialidad:", 109, 243);
  cedulaEspeB.Rect = [151, 239.5, 52, 5];
  cedulaEspeB.multiline = true;
  cedulaEspeB.value = "value"; //
  cedulaEspeB.fieldName = "cedulaEspeB";
  cedulaEspeB.maxFontSize = 10;
  doc.addField(cedulaEspeB);

  //RFC:
  const rfcA = new TextField();
  doc.text("RFC:", 11, 251);
  rfcA.Rect = [51, 247.5, 56, 5];
  rfcA.multiline = true;
  rfcA.value = "value"; //
  rfcA.fieldName = "rfcA";
  rfcA.maxFontSize = 10;
  doc.addField(rfcA);

  const rfcB = new TextField();
  doc.text("RFC:", 109, 251);
  rfcB.Rect = [151, 247.5, 52, 5];
  rfcB.multiline = true;
  rfcB.value = "value"; //
  rfcB.fieldName = "rfcB";
  rfcB.maxFontSize = 10;
  doc.addField(rfcB);

  //Domicilio:
  const domicilioA = new TextField();
  doc.text("Domicilio:", 11, 259);
  domicilioA.Rect = [51, 255.5, 56, 5];
  domicilioA.multiline = true;
  domicilioA.value = "value"; //
  domicilioA.fieldName = "domicilioA";
  domicilioA.maxFontSize = 10;
  doc.addField(domicilioA);

  const domicilioB = new TextField();
  doc.text("Domicilio:", 109, 259);
  domicilioB.Rect = [151, 255.5, 52, 5];
  domicilioB.multiline = true;
  domicilioB.value = "value"; //
  domicilioB.fieldName = "domicilioB";
  domicilioB.maxFontSize = 10;
  doc.addField(domicilioB);

  //Teléfono:
  const telefonoA = new TextField();
  doc.text("Teléfono:", 11, 267);
  telefonoA.Rect = [51, 263.5, 56, 5];
  telefonoA.multiline = true;
  telefonoA.value = "value"; //
  telefonoA.fieldName = "telefonoA";
  telefonoA.maxFontSize = 10;
  doc.addField(telefonoA);

  const telefonoB = new TextField();
  doc.text("Teléfono:", 109, 267);
  telefonoB.Rect = [151, 263.5, 52, 5];
  telefonoB.multiline = true;
  telefonoB.value = "value"; //
  telefonoB.fieldName = "telefonoB";
  telefonoB.maxFontSize = 10;
  doc.addField(telefonoB);

  return doc;
};
export const contentApi5 = (doc) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Ayudante 1", 50, 45.5);
  doc.text("Ayudante 2", 145, 45.5);

  //Participación
  const participacioA = new TextField();
  doc.text("Tipo de participación:", 11, 53.5);
  participacioA.Rect = [51, 50, 56, 5];
  participacioA.multiline = true;
  participacioA.value = "value"; //
  participacioA.fieldName = "participacioA";
  participacioA.maxFontSize = 10;
  doc.addField(participacioA);

  const participacioB = new TextField();
  doc.text("Tipo de participación:", 109, 53.5);
  participacioB.Rect = [151, 50, 52, 5];
  participacioB.multiline = true;
  participacioB.value = "value"; //
  participacioB.fieldName = "participacioB";
  participacioB.maxFontSize = 10;
  doc.addField(participacioB);

  //Nombre
  const nombresA = new TextField();
  doc.text("Nombre:", 11, 61.5);
  nombresA.Rect = [51, 57.5, 56, 5];
  nombresA.multiline = true;
  nombresA.value = "value"; //
  nombresA.fieldName = "nombresA";
  nombresA.maxFontSize = 10;
  doc.addField(nombresA);

  const nombresB = new TextField();
  doc.text("Nombre:", 109, 61.5);
  nombresB.Rect = [151, 57.5, 52, 5];
  nombresB.multiline = true;
  nombresB.value = "value"; //
  nombresB.fieldName = "nombresB";
  nombresB.maxFontSize = 10;
  doc.addField(nombresB);

  //médico
  const medico = new TextField();
  doc.text("Otros médicos:", 11, 68);
  medico.Rect = [12, 69, 190, 10];
  medico.multiline = true;
  medico.value = "value";
  medico.fieldName = "medico";
  medico.maxFontSize = 10;
  doc.addField(medico);

  //Firma
  const firma = new TextField();
  doc.text("Firma del médico", 55, 85.5);
  firma.Rect = [11, 90, 118, 21];
  firma.multiline = true;
  firma.value = "value";
  firma.fieldName = "firma";
  firma.maxFontSize = 10;
  doc.addField(firma);

  //lugar
  const lugarF = new TextField();
  doc.text("Lugar y fecha", 150, 85.5);
  lugarF.Rect = [131, 90, 72, 21];
  lugarF.multiline = true;
  lugarF.value = "value";
  lugarF.fieldName = "lugarF";
  lugarF.maxFontSize = 10;
  doc.addField(lugarF);

  doc.text(
    "En caso de reembolso y/o programación de servicios, el asegurado deberá llenar el siguiente apartado:",
    11,
    117
  );
  // Datos personales
  const personales = new TextField();
  personales.Rect = [11, 128, 192, 22];
  personales.multiline = true;
  personales.value = "value";
  personales.fieldName = "personales";
  personales.maxFontSize = 10;
  doc.addField(personales);

  // Transferencia de datos a terceros
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

  // Datos personales
  const firmaA = new TextField();
  doc.text("Firma del Asegurado:", 60, 182);
  firmaA.Rect = [100, 178, 60, 5];
  firmaA.multiline = true;
  firmaA.value = "value";
  firmaA.fieldName = "firmaA";
  firmaA.maxFontSize = 10;
  doc.addField(firmaA);

  // Autorizo que AXA
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

  const firmaB = new TextField();
  doc.text("Firma del Asegurado:", 60, 218);
  firmaB.Rect = [100, 214, 60, 5];
  firmaB.multiline = true;
  firmaB.value = "value";
  firmaB.fieldName = "firmaB";
  firmaB.maxFontSize = 10;
  doc.addField(firmaB);

  return doc;
};
