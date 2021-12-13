import jsPDF from "jspdf";
const { TextField, RadioButton, Appearance } = jsPDF.AcroForm;

// textField.Q = 1; for Center alignment and textField.Q = 2; for Right alignment

export const contentApi = (doc, data) => {
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");

  // lugar
  const lugar = new TextField();
  doc.text("Lugar:", 11, 69.8);
  lugar.Rect = [22, 67, 85, 5];
  // lugar.multiline = true;
  lugar.maxLength = 48;
  lugar.value = data.lugar; //
  lugar.fieldName = "lugar";
  lugar.maxFontSize = 10;
  doc.addField(lugar);

  // FechaDia
  const fechaDia = new TextField();
  doc.text("Fecha:", 109, 69.8);
  fechaDia.Rect = [120, 67, 20, 5];
  // fechaDia.multiline = true;
  fechaDia.maxLength = 8;
  fechaDia.value = data.fecha; //
  fechaDia.fieldName = "fechaDia";
  fechaDia.maxFontSize = 10;
  doc.addField(fechaDia);

  // Apellido paterno:
  const apellido = new TextField();
  doc.text("Apellido paterno:", 11, 85);
  apellido.Rect = [11, 86, 58, 5];
  // apellido.multiline = true;
  apellido.maxLength = 32;
  apellido.value = data.apellidoP; //
  apellido.fieldName = "apellido";
  apellido.maxFontSize = 10;
  doc.addField(apellido);

  // Apellido materno:
  const materno = new TextField();
  doc.text("Apellido materno:", 71, 85);
  materno.Rect = [71, 86, 63, 5];
  // materno.multiline = true;
  materno.maxLength = 36;
  materno.value = data.apellidoM; //
  materno.fieldName = "materno";
  materno.maxFontSize = 10;
  doc.addField(materno);

  // nombre
  const nombreP = new TextField();
  doc.text("Nombre(s):", 136, 85);
  nombreP.Rect = [136, 86, 67, 5];
  // nombreP.multiline = true;
  nombreP.maxLength = 37;
  nombreP.value = data.nombre; //
  nombreP.fieldName = "nombreP";
  nombreP.maxFontSize = 10;
  doc.addField(nombreP);

  // Datos
  const edadP = new TextField();
  doc.text("Edad:", 11, 93);
  edadP.Rect = [11, 93.5, 8, 5];
  // edadP.multiline = true;
  edadP.maxLength = 2;
  edadP.value = data.edad; //
  edadP.fieldName = "edadP";
  edadP.maxFontSize = 2;
  doc.addField(edadP);

  const fechaN = new TextField();
  doc.text("Fecha de nacimiento:", 21, 93);
  doc.text("Dia", 58, 93);
  doc.text("Mes", 64, 93);
  doc.text("Año", 73, 93);
  fechaN.Rect = [58, 93.5, 27, 5];
  // fechaN.multiline = true;
  fechaN.maxLength = 8;
  fechaN.value = data.fechaN; //
  fechaN.fieldName = "fechaN";
  fechaN.maxFontSize = 10;
  doc.addField(fechaN);

  // Sexo
  const genero = new RadioButton();
  genero.value = "value";
  doc.addField(genero);

  doc.text("Sexo", 92, 93);
  doc.text("Masculino", 98, 96.5);
  doc.text("Femenino", 122, 96.5);

  const masculino = genero.createOption("masculino");
  masculino.Rect = [92, 93.5, 4, 4];

  const femenino = genero.createOption("femenino");
  femenino.Rect = [116, 93.5, 4, 4];

  genero.setAppearance(Appearance.RadioButton.Cross);

  const talla = new TextField();
  doc.text("Talla:", 142, 93);
  talla.Rect = [142, 93.5, 8, 5];
  // talla.multiline = true;
  talla.maxLength = 2;
  talla.value = data.talla; //
  talla.fieldName = "talla";
  talla.maxFontSize = 10;
  doc.addField(talla);

  const peso = new TextField();
  doc.text("Peso:", 162, 93);
  peso.Rect = [162, 93.5, 12, 5];
  // peso.multiline = true;
  peso.maxLength = 4;
  peso.value = `${data.peso}kg`; //
  peso.fieldName = "peso";
  peso.maxFontSize = 10;
  doc.addField(peso);

  const tension = new TextField();
  doc.text("Tensión arterial:", 177, 93);
  tension.Rect = [177, 93.5, 16, 5];
  // tension.multiline = true;
  tension.maxLength = 6;
  tension.value = data.tension; //
  tension.fieldName = "tension";
  tension.maxFontSize = 10;
  doc.addField(tension);

  // Motivo de la atención médica
  const motivoA = new RadioButton();
  motivoA.value = "value";
  doc.addField(motivoA);

  doc.text("Enfermedad", 18, 106.7);
  const enfermedad = motivoA.createOption("enfermedad");
  enfermedad.Rect = [12, 103.7, 4, 4];

  doc.text("Accidente", 65, 106.7);
  const accidente = motivoA.createOption("accidente");
  accidente.Rect = [59, 103.7, 4, 4];

  doc.text("Maternidad", 108, 106.7);
  const maternidad = motivoA.createOption("maternidad");
  maternidad.Rect = [102, 103.7, 4, 4];

  doc.text("Segunda opinión médica", 160, 106.7);
  const segunda = motivoA.createOption("segunda");
  segunda.Rect = [154, 103.7, 4, 4];
  motivoA.setAppearance(Appearance.RadioButton.Cross);

  // Tipo de estancia
  const tipoE = new RadioButton();
  tipoE.value = "value";
  doc.addField(tipoE);

  doc.text("Urgencia", 18, 116.5);
  const urgencia = tipoE.createOption("urgencia");
  urgencia.Rect = [12, 113.5, 4, 4];
  doc.text("Hospitalización", 65, 116.5);
  const hospitalizacion = tipoE.createOption("hospitalizacion");
  hospitalizacion.Rect = [59, 113.5, 4, 4];

  doc.text("Corta estancia / ambulatoria", 108, 116.5);
  const estancia = tipoE.createOption("estancia");
  estancia.Rect = [102, 113.5, 4, 4];

  doc.text("Consultorio", 160, 116.5);
  const consultorio = tipoE.createOption("consultorio");
  consultorio.Rect = [154, 113.5, 4, 4];
  tipoE.setAppearance(Appearance.RadioButton.Cross);

  // Antecedentes patológicos y no  patológicos

  const cardiacos = new TextField();
  doc.text("Cardiacos:", 16, 136);
  cardiacos.Rect = [35, 132, 17.1, 5];
  // cardiacos.multiline = true;
  cardiacos.maxLength = 12;
  cardiacos.maxLength = 10;
  cardiacos.value = "value"; //
  cardiacos.fieldName = "cardiacos";
  cardiacos.maxFontSize = 10;
  doc.addField(cardiacos);

  const patologias1 = new RadioButton();
  patologias1.value = "value";
  patologias1.radio = false;
  doc.addField(patologias1);
  const refCardiacos = patologias1.createOption("refCardiacos");
  refCardiacos.Rect = [11, 133, 4, 4];
  patologias1.setAppearance(Appearance.RadioButton.Cross);

  const hipertension = new TextField();
  doc.text("Hipertensivos:", 61, 136);
  hipertension.Rect = [85, 132, 22, 5];
  // hipertension.multiline = true;
  hipertension.maxLength = 12;
  hipertension.value = "value"; //
  hipertension.fieldName = "hipertension";
  hipertension.maxFontSize = 10;
  doc.addField(hipertension);

  const patologias2 = new RadioButton();
  patologias2.value = "value";
  patologias2.radio = false;
  doc.addField(patologias2);
  const refHipertencion = patologias2.createOption("refHipertencion");
  refHipertencion.Rect = [109, 133, 4, 4];
  patologias2.setAppearance(Appearance.RadioButton.Cross);

  const fuma = new TextField();
  doc.text("¿Fuma?", 114, 136);
  fuma.Rect = [128, 132, 75, 5];
  // fuma.multiline = true;
  fuma.maxLength = 42;
  fuma.value = "value"; //
  fuma.fieldName = "fuma";
  fuma.maxFontSize = 10;
  doc.addField(fuma);

  const patologias3 = new RadioButton();
  patologias3.value = "value";
  patologias3.radio = false;
  doc.addField(patologias3);
  const refFuma = patologias3.createOption("refFuma");
  refFuma.Rect = [55, 133, 4, 4];
  patologias3.setAppearance(Appearance.RadioButton.Cross);

  const diabetes = new TextField();
  doc.text("Diabetes mellitus:", 16, 142);
  diabetes.Rect = [44, 138, 8, 5];
  // diabetes.multiline = true;
  diabetes.maxLength = 5;
  diabetes.value = "value"; //
  diabetes.fieldName = "diabetes";
  diabetes.maxFontSize = 10;
  doc.addField(diabetes);

  const patologias4 = new RadioButton();
  patologias4.value = "value";
  patologias4.radio = false;
  doc.addField(patologias4);
  const refDiabetes = patologias4.createOption("refDiabetes");
  refDiabetes.Rect = [11, 139, 4, 4];
  patologias4.setAppearance(Appearance.RadioButton.Cross);

  const vih = new TextField();
  doc.text("VIH/SIDA:", 61, 142);
  vih.Rect = [85, 138, 22, 5];
  // vih.multiline = true;
  vih.maxLength = 12;
  vih.value = "value"; //
  vih.fieldName = "vih";
  vih.maxFontSize = 10;
  doc.addField(vih);

  const patologias5 = new RadioButton();
  patologias5.value = "value";
  patologias5.radio = false;
  doc.addField(patologias5);
  const refVih = patologias5.createOption("refVih");
  refVih.Rect = [55, 139, 4, 4];
  patologias5.setAppearance(Appearance.RadioButton.Cross);

  const bebidas = new TextField();
  doc.text("¿Consume bebidas alcohólicas?", 114, 142);
  bebidas.Rect = [170, 138, 33, 5];
  // bebidas.multiline = true;
  bebidas.maxLength = 19;
  bebidas.value = "value"; //
  bebidas.fieldName = "bebidas";
  bebidas.maxFontSize = 10;
  doc.addField(bebidas);

  const patologias6 = new RadioButton();
  patologias6.value = "value";
  patologias6.radio = false;
  doc.addField(patologias6);
  const refBebidas = patologias6.createOption("refBebidas");
  refBebidas.Rect = [109, 139, 4, 4];
  patologias6.setAppearance(Appearance.RadioButton.Cross);

  const cancer = new TextField();
  doc.text("Cáncer:", 16, 148);
  cancer.Rect = [35, 144, 17, 5];
  // cancer.multiline = true;
  cancer.maxLength = 12;
  cancer.value = "value"; //
  cancer.fieldName = "cancer";
  cancer.maxFontSize = 10;
  doc.addField(cancer);

  const patologias7 = new RadioButton();
  patologias7.value = "value";
  patologias7.radio = false;
  doc.addField(patologias7);
  const refCancer = patologias7.createOption("refCancer");
  refCancer.Rect = [11, 145, 4, 4];
  patologias7.setAppearance(Appearance.RadioButton.Cross);

  const hepaticos = new TextField();
  doc.text("Hepáticos:", 61, 148);
  hepaticos.Rect = [85, 144, 22, 5];
  // hepaticos.multiline = true;
  hepaticos.maxLength = 12;
  hepaticos.value = "value"; //
  hepaticos.fieldName = "hepaticos";
  hepaticos.maxFontSize = 10;
  doc.addField(hepaticos);

  const patologias8 = new RadioButton();
  patologias8.value = "value";
  patologias8.radio = false;
  doc.addField(patologias8);
  const refHepaticos = patologias8.createOption("refHepaticos");
  refHepaticos.Rect = [55, 145, 4, 4];
  patologias8.setAppearance(Appearance.RadioButton.Cross);

  const drogas = new TextField();
  doc.text("¿Consume o ha consumido algún tipo de drogas? ", 114, 148);
  drogas.Rect = [193, 144, 10, 5];
  // drogas.multiline = true;
  drogas.maxLength = 5;
  drogas.value = "value"; //
  drogas.fieldName = "drogas";
  drogas.maxFontSize = 10;
  doc.addField(drogas);

  const patologias9 = new RadioButton();
  patologias9.value = "value";
  patologias9.radio = false;
  doc.addField(patologias9);
  const refHaConsumido = patologias9.createOption("refHaConsumido");
  refHaConsumido.Rect = [109, 145, 4, 4];
  patologias9.setAppearance(Appearance.RadioButton.Cross);

  const convulsion = new TextField();
  doc.text("Convulsivos:", 16, 154);
  convulsion.Rect = [35, 150, 17, 5];
  // convulsion.multiline = true;
  convulsion.maxLength = 12;
  convulsion.value = "value"; //
  convulsion.fieldName = "convulsion";
  convulsion.maxFontSize = 10;
  doc.addField(convulsion);

  const patologias10 = new RadioButton();
  patologias10.radio = false;
  doc.addField(patologias10);
  const refConvulsiones = patologias10.createOption("refConvulsiones");
  refConvulsiones.Rect = [11, 151, 4, 4];
  patologias10.setAppearance(Appearance.RadioButton.Cross);

  const otrosA = new TextField();
  doc.text("Otros:", 61, 154);
  otrosA.Rect = [85, 150, 22, 5];
  // otrosA.multiline = true;
  otrosA.maxLength = 12;
  otrosA.value = "value"; //
  otrosA.fieldName = "otrosA";
  otrosA.maxFontSize = 10;
  doc.addField(otrosA);

  const patologias11 = new RadioButton();
  patologias11.value = "value";
  patologias11.radio = false;
  doc.addField(patologias11);
  const refOtrosA = patologias11.createOption("refOtrosA");
  refOtrosA.Rect = [55, 151, 4, 4];
  patologias11.setAppearance(Appearance.RadioButton.Cross);

  const otrosB = new TextField();
  doc.text("Otros", 114, 154);
  otrosB.Rect = [128, 150, 75, 5];
  // otrosB.multiline = true;
  otrosB.maxLength = 43;
  otrosB.value = "value"; //
  otrosB.fieldName = "otrosB";
  otrosB.maxFontSize = 10;
  doc.addField(otrosB);

  const patologias12 = new RadioButton();
  patologias12.value = "value";
  patologias12.radio = false;
  doc.addField(patologias12);
  const refOtrosB = patologias12.createOption("refOtrosB");
  refOtrosB.Rect = [109, 151, 4, 4];
  patologias12.setAppearance(Appearance.RadioButton.Cross);

  // Gestacion
  const gestion = new TextField();
  doc.text("Gestación:", 11, 170);
  gestion.Rect = [28, 166.6, 9, 5];
  // gestion.multiline = true;
  gestion.maxLength = 5;
  gestion.value = "val"; //
  gestion.fieldName = "gestion";
  gestion.maxFontSize = 10;
  doc.addField(gestion);

  const partos = new TextField();
  doc.text("Partos:", 38, 170);
  partos.Rect = [49, 166.6, 11, 5];
  // partos.multiline = true;
  partos.maxLength = 5;
  partos.value = "val"; //
  partos.fieldName = "partos";
  partos.maxFontSize = 10;
  doc.addField(partos);

  const abortos = new TextField();
  doc.text("Abortos:", 60, 170);
  abortos.Rect = [73, 166.6, 10, 5];
  // abortos.multiline = true;
  abortos.maxLength = 5;
  abortos.value = "val"; //
  abortos.fieldName = "abortos";
  abortos.maxFontSize = 10;
  doc.addField(abortos);

  const cesareas = new TextField();
  doc.text("Cesáreas:", 84, 170);
  cesareas.Rect = [100, 166.6, 8, 5];
  // cesareas.multiline = true;
  cesareas.maxLength = 5;
  cesareas.value = "val"; //
  cesareas.fieldName = "cesareas";
  cesareas.maxFontSize = 10;
  doc.addField(cesareas);

  // Antecedentes perinatales
  const antecedentesP = new TextField();
  antecedentesP.Rect = [109, 168, 94, 21];
  antecedentesP.multiline = true;
  antecedentesP.maxLength = 350;
  antecedentesP.value = "value"; //
  antecedentesP.fieldName = "antecedentesP";
  antecedentesP.maxFontSize = 10;
  doc.addField(antecedentesP);

  const mestruacion = new TextField();
  doc.text("Fecha de última", 11, 174);
  doc.text("menstruación:", 11, 177);
  doc.text("Dia", 58, 174);
  doc.text("Mes", 64, 174);
  doc.text("Año", 73, 174);
  mestruacion.Rect = [58, 174, 24, 5];
  // mestruacion.multiline = true;
  mestruacion.maxLength = 8;
  mestruacion.value = "v"; //
  mestruacion.fieldName = "mestruacion";
  mestruacion.maxFontSize = 10;
  mestruacion.height = 5;
  doc.addField(mestruacion);

  const recibio = new TextField();
  doc.text("Especificar si recibió", 11, 184);
  doc.text("tratamiento para infertilidad:", 11, 187);
  recibio.Rect = [55, 182, 52, 5];
  // recibio.multiline = true;
  recibio.maxLength = 34;
  recibio.value = "value"; //
  recibio.fieldName = "recibio";
  recibio.maxFontSize = 10;
  doc.addField(recibio);

  const evolucionA = new TextField();
  doc.text("Tiempo de evolución:", 11, 194);
  evolucionA.Rect = [45, 191, 62, 5];
  // evolucionA.multiline = true;
  evolucionA.maxLength = 41;
  evolucionA.value = "value"; //
  evolucionA.fieldName = "evolucionA";
  evolucionA.maxFontSize = 10;
  doc.addField(evolucionA);

  // Tiempo de evolución:
  const evolucionB = new TextField();
  doc.text("Tiempo de evolución:", 109, 194);
  evolucionB.Rect = [143, 191, 60, 5];
  // evolucionB.multiline = true;
  evolucionB.maxLength = 36;
  evolucionB.value = "value"; //
  evolucionB.fieldName = "evolucionB";
  evolucionB.maxFontSize = 10;
  doc.addField(evolucionB);

  // Referido por otro médico

  const referidoUd = new RadioButton();
  referidoUd.value = "value";
  doc.addField(referidoUd);

  doc.text("Referido por otro médico o unidad: ", 11, 200);
  doc.text("Sí", 70, 200);
  doc.text("No", 80, 200);

  const refOtrosMs = referidoUd.createOption("refOtrosMs");
  refOtrosMs.Rect = [65, 197, 4, 4];

  const refOtrosMn = referidoUd.createOption("refOtrosMn");
  refOtrosMn.Rect = [75, 197, 4, 4];

  referidoUd.setAppearance(Appearance.RadioButton.Cross);

  const referido = new TextField();
  doc.text("¿Cuál?", 90, 200);
  referido.Rect = [103, 196.5, 101, 5];
  // referido.multiline = true;
  referido.maxLength = 57;
  referido.value = "value"; //
  referido.fieldName = "referido";
  referido.maxFontSize = 10;
  doc.addField(referido);

  const padecimiento = new TextField();
  doc.text(
    "Padecimiento actual (principales signos, síntomas y detalles de evolución):",
    11,
    211
  );
  padecimiento.Rect = [11, 213, 192, 36];
  padecimiento.multiline = true;
  padecimiento.maxLength = 500;
  padecimiento.value = "value"; //
  padecimiento.fieldName = "padecimiento";
  padecimiento.maxFontSize = 10;
  doc.addField(padecimiento);

  const padecimientoF = new TextField();
  doc.text("Fecha de padecimiento:", 11, 253);
  doc.text("Dia", 58, 253);
  doc.text("Mes", 64, 253);
  doc.text("Año", 73, 253);
  padecimientoF.Rect = [58, 254, 24, 5];
  // padecimientoF.multiline = true;
  padecimientoF.maxLength = 8;
  padecimientoF.value = "v"; //
  padecimientoF.fieldName = "padecimientoF";
  padecimientoF.maxFontSize = 10;
  doc.addField(padecimientoF);

  const padecimientoD = new TextField();
  doc.text("Fecha de diagnóstico:", 110, 253);
  doc.text("Dia", 158, 253);
  doc.text("Mes", 164, 253);
  doc.text("Año", 173, 253);
  padecimientoD.Rect = [158, 254, 24, 5];
  // padecimientoD.multiline = true;
  padecimientoD.maxLength = 8;
  padecimientoD.value = "v"; //
  padecimientoD.fieldName = "padecimientoD";
  padecimientoD.maxFontSize = 10;
  doc.addField(padecimientoD);

  // doc.text("Dia    Mes    Año", 158, 253);

  const padecimientoT = new RadioButton();
  padecimientoT.value = "value";
  doc.addField(padecimientoT);

  doc.text("Tipo de padecimiento:", 11, 261);
  doc.text("Congénito", 16, 268);
  doc.text("Adquirido", 45, 268);
  doc.text("Agudo", 75, 268);
  doc.text("Crónico", 100, 268);

  const congenito = padecimientoT.createOption("congenito");
  congenito.Rect = [11, 265, 4, 4];

  const admirido = padecimientoT.createOption("admirido");
  admirido.Rect = [40, 265, 4, 4];

  const agudo = padecimientoT.createOption("agudo");
  agudo.Rect = [70, 265, 4, 4];

  const cronicoSevero = padecimientoT.createOption("cronicoSevero");
  cronicoSevero.Rect = [95, 265, 4, 4];

  padecimientoT.setAppearance(Appearance.RadioButton.Cross);

  const tiempoE = new TextField();
  doc.text("Tiempo de evolución:", 130, 268);
  tiempoE.Rect = [164, 264.5, 40, 5];
  // tiempoE.multiline = true;
  tiempoE.maxLength = 33;
  tiempoE.value = "value"; //
  tiempoE.fieldName = "tiempoE";
  tiempoE.maxFontSize = 10;
  doc.addField(tiempoE);

  return doc;
};
export const contentApi2 = (doc) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  // Causa o etiología del padecimiento
  const padecimientoE = new TextField();
  doc.text(
    "Causa o etiología del padecimiento (en caso de accidente, describa tiempo, modo y lugar donde ocurrió la lesión):",
    11,
    44
  );
  padecimientoE.Rect = [11, 45, 192, 24];
  padecimientoE.multiline = true;
  padecimientoE.maxLength = 12;
  padecimientoE.value = "value"; //
  padecimientoE.fieldName = "padecimientoE";
  padecimientoE.maxFontSize = 500;
  doc.addField(padecimientoE);

  // Tiene relación con otro padecimiento:

  const relacionT = new RadioButton();
  relacionT.value = "value";
  doc.addField(relacionT);

  doc.text("Tiene relación con otro padecimiento:", 11, 74);
  doc.text("Si", 75, 74);
  doc.text("No", 85, 74);

  const realacionS = relacionT.createOption("realacionS");
  realacionS.Rect = [70, 70.5, 4, 4];

  const relacionN = relacionT.createOption("relacionN");
  relacionN.Rect = [80, 70.5, 4, 4];

  relacionT.setAppearance(Appearance.RadioButton.Cross);

  const relacion = new TextField();
  doc.text("¿Cuál?", 11, 78);
  relacion.Rect = [25, 75, 90, 5];
  // relacion.multiline = true;
  relacion.maxLength = 100;
  relacion.value = "value"; //
  relacion.fieldName = "relacion";
  relacion.maxFontSize = 10;
  doc.addField(relacion);

  // El padecimiento ocasionó incapacidad:
  const desde = new TextField();
  doc.text("Desde:", 110, 88);
  desde.Rect = [122, 84.5, 32, 5];
  // desde.multiline = true;
  desde.maxLength = 18;
  desde.value = "value"; //
  desde.fieldName = "desde";
  desde.maxFontSize = 10;
  doc.addField(desde);

  const padecimientoO = new RadioButton();
  padecimientoO.value = "value";
  doc.addField(padecimientoO);

  doc.text("El padecimiento ocasionó incapacidad:", 11, 84);
  doc.text("Si", 20, 88);
  doc.text("No", 40, 88);

  const padecimientoS = padecimientoO.createOption("padecimientoS");
  padecimientoS.Rect = [15, 85, 4, 4];

  const padecimientoN = padecimientoO.createOption("padecimientoN");
  padecimientoN.Rect = [35, 85, 4, 4];

  padecimientoO.setAppearance(Appearance.RadioButton.Cross);

  const totalParcial = new RadioButton();
  totalParcial.value = "value";
  doc.addField(totalParcial);

  doc.text("Parcial", 58, 88);
  doc.text("Total", 80, 88);

  const parcial = totalParcial.createOption("parcial");
  parcial.Rect = [53, 85, 4, 4];

  const total = totalParcial.createOption("total");
  total.Rect = [75, 85, 4, 4];

  totalParcial.setAppearance(Appearance.RadioButton.Cross);

  const hasta = new TextField();
  doc.text("Hasta:", 155, 88);
  hasta.Rect = [167, 84.5, 32, 5];
  // hasta.multiline = true;
  hasta.maxLength = 24;
  hasta.value = "value"; //
  hasta.fieldName = "hasta";
  hasta.maxFontSize = 10;
  doc.addField(hasta);

  // Diagnóstico
  const diagnostico = new TextField();
  doc.text(
    "Diagnóstico (indicando si es unilateral o bilateral, derecho o izquierdo):",
    11,
    94
  );
  diagnostico.Rect = [11, 96, 192, 23];
  diagnostico.multiline = true;
  diagnostico.maxLength = 300;
  diagnostico.value = "value"; //
  diagnostico.fieldName = "diagnostico";
  diagnostico.maxFontSize = 10;
  doc.addField(diagnostico);

  // Código ICD:
  const codigo = new TextField();
  doc.text("Código ICD:", 11, 125);
  codigo.Rect = [30, 122, 76, 5];
  // codigo.multiline = true;
  codigo.maxLength = 50;
  codigo.value = "value"; //
  codigo.fieldName = "codigo";
  codigo.maxFontSize = 10;
  doc.addField(codigo);

  const escala = new TextField();
  doc.text("Escala TNM:", 160, 125);
  escala.Rect = [180, 122, 23, 5];
  // escala.multiline = true;
  escala.maxLength = 18;
  escala.value = "value"; //
  escala.fieldName = "escala";
  escala.maxFontSize = 10;
  doc.addField(escala);

  const esCancer = new RadioButton();
  esCancer.value = "value";
  doc.addField(esCancer);

  doc.text("Es cáncer:", 108, 125);
  doc.text("Sí", 130, 125);
  doc.text("No", 145, 125);

  const esCancerS = esCancer.createOption("esCancerS");
  esCancerS.Rect = [125, 122, 4, 4];

  const esCancerN = esCancer.createOption("esCancerN");
  esCancerN.Rect = [140, 122, 4, 4];

  esCancer.setAppearance(Appearance.RadioButton.Cross);

  // Señale los datos
  const senales = new TextField();
  doc.text("Señale los datos relevantes de exploración física:", 11, 132);
  senales.Rect = [11, 133, 192, 14];
  senales.multiline = true;
  senales.maxLength = 500;
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
  estudios.maxLength = 500;
  estudios.value = "value"; //
  estudios.fieldName = "estudios";
  estudios.maxFontSize = 10;
  doc.addField(estudios);

  //Tratamiento propuesto
  const propuesto = new TextField();
  doc.text("Tratamiento propuesto (quirúrgico, no quirúrgico):", 11, 186.5);
  propuesto.Rect = [11, 187.5, 128, 8];
  propuesto.multiline = true;
  propuesto.maxLength = 150;
  propuesto.value = "value"; //
  propuesto.fieldName = "propuesto";
  propuesto.maxFontSize = 10;
  doc.addField(propuesto);

  // Fecha de hospitalización:

  const fc = new TextField();
  doc.text("Fecha de cirugía:", 144, 186.5);
  doc.text("Dia", 144, 190.5);
  doc.text("Mes", 150, 190.5);
  doc.text("Año", 159, 190.5);
  fc.Rect = [144, 191, 24, 5];
  // fc.multiline = true;
  fc.maxLength = 8;
  fc.value = "v"; //
  fc.fieldName = "fc";
  fc.maxFontSize = 10;
  doc.addField(fc);

  const fh = new TextField();
  doc.text("Fecha de hospitalización:", 11, 200);
  doc.text("Dia", 70, 200);
  doc.text("Mes", 76, 200);
  doc.text("Año", 85, 200);
  fh.Rect = [70, 202, 24, 5];
  // fh.multiline = true;
  fh.maxLength = 8;
  fh.value = "v"; //
  fh.fieldName = "fh";
  fh.maxFontSize = 10;
  doc.addField(fh);

  const fa = new TextField();
  doc.text("Fecha de alta:", 109, 200);
  doc.text("Dia", 150, 200);
  doc.text("Mes", 156, 200);
  doc.text("Año", 165, 200);
  fa.Rect = [150, 202, 24, 5];
  // fa.multiline = true;
  fa.maxLength = 8;
  fa.value = "v"; //
  fa.fieldName = "fa";
  fa.maxFontSize = 10;
  doc.addField(fa);

  //Días que se brindó
  const brindo = new TextField();
  doc.text("Días que se brindó atención médica:", 11, 211);
  brindo.Rect = [70, 208, 133, 5];
  brindo.multiline = true;
  brindo.maxLength = 100;
  brindo.value = "value"; //
  brindo.fieldName = "brindo";
  brindo.maxFontSize = 10;
  doc.addField(brindo);

  const sitiosPro = new RadioButton();
  sitiosPro.value = "value";
  doc.addField(sitiosPro);

  doc.text("Sitio en el cual se realizará el procedimiento:", 11, 218);
  doc.text("Consultorio", 16, 222);
  doc.text("Hospital", 55, 222);
  doc.text("Gabinete", 88, 222);
  doc.text("Otro", 118, 222);

  const consultorio = sitiosPro.createOption("consultorio");
  consultorio.Rect = [11, 219, 4, 4];

  const hospitaln = sitiosPro.createOption("hospitaln");
  hospitaln.Rect = [50, 219, 4, 4];

  const gabinete = sitiosPro.createOption("gabinete");
  gabinete.Rect = [83, 219, 4, 4];

  const otrosSr = sitiosPro.createOption("otrosSr");
  otrosSr.Rect = [113, 219, 4, 4];

  sitiosPro.setAppearance(Appearance.RadioButton.Cross);

  //Sitio procedimiento:
  const especifique = new TextField();
  doc.text("Especifique:", 140, 222);
  especifique.Rect = [160, 218, 43, 5];
  // especifique.multiline = true;
  especifique.maxLength = 30;
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
  hospital.maxLength = 150;
  hospital.value = "value"; //
  hospital.fieldName = "hospital";
  hospital.maxFontSize = 10;
  doc.addField(hospital);

  //Describa el resultado
  const resultadoD = new TextField();
  doc.text("Describa el resultado del estudio histopatológico:", 11, 242);
  resultadoD.Rect = [11, 244, 192, 25];
  resultadoD.multiline = true;
  resultadoD.maxLength = 500;
  resultadoD.value = "value"; //
  resultadoD.fieldName = "resultadoD";
  resultadoD.maxFontSize = 10;
  doc.addField(resultadoD);

  const histopatologias = new RadioButton();
  histopatologias.value = "value";
  doc.addField(histopatologias);

  doc.text("Se realizó estudio histopatológico:", 11, 238);
  doc.text("Si", 70, 238);
  doc.text("No", 80, 238);

  const histopatologiaS = histopatologias.createOption("histopatologiaS");
  histopatologiaS.Rect = [65, 235, 4, 4];

  const histopatologiaN = histopatologias.createOption("histopatologiaN");
  histopatologiaN.Rect = [75, 235, 4, 4];

  histopatologias.setAppearance(Appearance.RadioButton.Cross);
};
export const contentApi3 = (doc) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  // Describa las complicaciones:
  const presentaronC = new RadioButton();
  presentaronC.value = "value";
  doc.addField(presentaronC);

  doc.text("Se presentaron complicaciones:", 11, 44);
  doc.text("Describa las complicaciones:", 11, 48);
  doc.text("Si", 70, 44);
  doc.text("No", 80, 44);

  const presentaronCs = presentaronC.createOption("presentaronCs");
  presentaronCs.Rect = [65, 41, 4, 4];

  const presentaronCn = presentaronC.createOption("presentaronCn");
  presentaronCn.Rect = [75, 41, 4, 4];

  presentaronC.setAppearance(Appearance.RadioButton.Cross);
  const complicaionD = new TextField();
  complicaionD.Rect = [11, 50, 192, 29];
  complicaionD.multiline = true;
  complicaionD.maxLength = 500;
  complicaionD.value = "value"; //
  complicaionD.fieldName = "complicaionD";
  complicaionD.maxFontSize = 10;
  doc.addField(complicaionD);

  // Continuará recibiendo

  const continuaraF = new RadioButton();
  continuaraF.value = "value";
  doc.addField(continuaraF);

  doc.text("Continuará recibiendo tratamiento en el futuro:", 11, 84);
  doc.text("Si", 90, 84);
  doc.text("No", 100, 84);
  doc.text("Describa el tratamiento:", 11, 88);

  const cuntinuaraFs = continuaraF.createOption("cuntinuaraFs");
  cuntinuaraFs.Rect = [85, 81, 4, 4];

  const continuaraFn = continuaraF.createOption("continuaraFn");
  continuaraFn.Rect = [95, 81, 4, 4];

  continuaraF.setAppearance(Appearance.RadioButton.Cross);

  const recibiendoT = new TextField();
  recibiendoT.Rect = [11, 90, 192, 29];
  recibiendoT.multiline = true;
  recibiendoT.maxLength = 500;
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
  especificarT.maxLength = 200;
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
  // unoA.multiline = true;
  unoA.maxLength = 40;
  unoA.value = "value"; //
  unoA.fieldName = "unoA";
  unoA.maxFontSize = 10;
  doc.addField(unoA);

  const unoB = new TextField();
  unoB.Rect = [91, 158.7, 28, 5];
  // unoB.multiline = true;
  unoB.maxLength = 20;
  unoB.value = "value"; //
  unoB.fieldName = "unoB";
  unoB.maxFontSize = 10;
  doc.addField(unoB);

  const unoC = new TextField();
  unoC.Rect = [121, 158.7, 38, 5];
  // unoC.multiline = true;
  unoC.maxLength = 30;
  unoC.value = "value"; //
  unoC.fieldName = "unoC";
  unoC.maxFontSize = 10;
  doc.addField(unoC);

  const unoD = new TextField();
  unoD.Rect = [161, 158.7, 42, 5];
  // unoD.multiline = true;
  unoD.maxLength = 30;
  unoD.value = "value"; //
  unoD.fieldName = "unoD";
  unoD.maxFontSize = 10;
  doc.addField(unoD);

  // .2
  doc.text(".2", 11, 168);
  const dosA = new TextField();
  dosA.Rect = [21, 164.7, 68, 5];
  // dosA.multiline = true;
  dosA.maxLength = 40;
  dosA.value = "value"; //
  dosA.fieldName = "dosA";
  dosA.maxFontSize = 10;
  doc.addField(dosA);

  const dosB = new TextField();
  dosB.Rect = [91, 164.7, 28, 5];
  // dosB.multiline = true;
  dosB.maxLength = 20;
  dosB.value = "value"; //
  dosB.fieldName = "dosB";
  dosB.maxFontSize = 10;
  doc.addField(dosB);

  const dosC = new TextField();
  dosC.Rect = [121, 164.7, 38, 5];
  // dosC.multiline = true;
  dosC.maxLength = 30;
  dosC.value = "value"; //
  dosC.fieldName = "dosC";
  dosC.maxFontSize = 10;
  doc.addField(dosC);

  const dosD = new TextField();
  dosD.Rect = [161, 164.7, 42, 5];
  // dosD.multiline = true;
  dosD.maxLength = 30;
  dosD.value = "value"; //
  dosD.fieldName = "dosD";
  dosD.maxFontSize = 10;
  doc.addField(dosD);

  // .3
  doc.text(".3", 11, 174);
  const tresA = new TextField();
  tresA.Rect = [21, 170.7, 68, 5];
  // tresA.multiline = true;
  tresA.maxLength = 40;
  tresA.value = "value"; //
  tresA.fieldName = "tresA";
  tresA.maxFontSize = 10;
  doc.addField(tresA);

  const tresB = new TextField();
  tresB.Rect = [91, 170.7, 28, 5];
  // tresB.multiline = true;
  tresB.maxLength = 20;
  tresB.value = "value"; //
  tresB.fieldName = "tresB";
  tresB.maxFontSize = 10;
  doc.addField(tresB);

  const tresC = new TextField();
  tresC.Rect = [121, 170.7, 38, 5];
  // tresC.multiline = true;
  tresC.maxLength = 30;
  tresC.value = "value"; //
  tresC.fieldName = "tresC";
  tresC.maxFontSize = 10;
  doc.addField(tresC);

  const tresD = new TextField();
  tresD.Rect = [161, 170.7, 42, 5];
  // tresD.multiline = true;
  tresD.maxLength = 30;
  tresD.value = "value"; //
  tresD.fieldName = "tresD";
  tresD.maxFontSize = 10;
  doc.addField(tresD);

  // .4
  doc.text(".4", 11, 180);
  const cuatroA = new TextField();
  cuatroA.Rect = [21, 176.7, 68, 5];
  // cuatroA.multiline = true;
  cuatroA.maxLength = 40;
  cuatroA.value = "value"; //
  cuatroA.fieldName = "cuatroA";
  cuatroA.maxFontSize = 10;
  doc.addField(cuatroA);

  const cuatroB = new TextField();
  cuatroB.Rect = [91, 176.7, 28, 5];
  // cuatroB.multiline = true;
  cuatroB.maxLength = 20;
  cuatroB.value = "value"; //
  cuatroB.fieldName = "cuatroB";
  cuatroB.maxFontSize = 10;
  doc.addField(cuatroB);

  const cuatroC = new TextField();
  cuatroC.Rect = [121, 176.7, 38, 5];
  // cuatroC.multiline = true;
  cuatroC.maxLength = 30;
  cuatroC.value = "value"; //
  cuatroC.fieldName = "cuatroC";
  cuatroC.maxFontSize = 10;
  doc.addField(cuatroC);

  const cuatroD = new TextField();
  cuatroD.Rect = [161, 176.7, 42, 5];
  // cuatroD.multiline = true;
  cuatroD.maxLength = 30;
  cuatroD.value = "value"; //
  cuatroD.fieldName = "cuatroD";
  cuatroD.maxFontSize = 10;
  doc.addField(cuatroD);

  // .5
  doc.text(".5", 11, 186);
  const cincoA = new TextField();
  cincoA.Rect = [21, 182.7, 68, 5];
  // cincoA.multiline = true;
  cincoA.maxLength = 40;
  cincoA.value = "value"; //
  cincoA.fieldName = "cincoA";
  cincoA.maxFontSize = 10;
  doc.addField(cincoA);

  const cincoB = new TextField();
  cincoB.Rect = [91, 182.7, 28, 5];
  // cincoB.multiline = true;
  cincoB.maxLength = 20;
  cincoB.value = "value"; //
  cincoB.fieldName = "cincoB";
  cincoB.maxFontSize = 10;
  doc.addField(cincoB);

  const cincoC = new TextField();
  cincoC.Rect = [121, 182.7, 38, 5];
  // cincoC.multiline = true;
  cincoC.maxLength = 30;
  cincoC.value = "value"; //
  cincoC.fieldName = "cincoC";
  cincoC.maxFontSize = 10;
  doc.addField(cincoC);

  const cincoD = new TextField();
  cincoD.Rect = [161, 182.7, 42, 5];
  // cincoD.multiline = true;
  cincoD.maxLength = 30;
  cincoD.value = "value"; //
  cincoD.fieldName = "cincoD";
  cincoD.maxFontSize = 10;
  doc.addField(cincoD);

  // .6
  doc.text(".6", 11, 192);
  const seisA = new TextField();
  seisA.Rect = [21, 188.7, 68, 5];
  // seisA.multiline = true;
  seisA.maxLength = 40;
  seisA.value = "value"; //
  seisA.fieldName = "seisA";
  seisA.maxFontSize = 10;
  doc.addField(seisA);

  const seisB = new TextField();
  seisB.Rect = [91, 188.7, 28, 5];
  // seisB.multiline = true;
  seisB.maxLength = 20;
  seisB.value = "value"; //
  seisB.fieldName = "seisB";
  seisB.maxFontSize = 10;
  doc.addField(seisB);

  const seisC = new TextField();
  seisC.Rect = [121, 188.7, 38, 5];
  // seisC.multiline = true;
  seisC.maxLength = 30;
  seisC.value = "value"; //
  seisC.fieldName = "seisC";
  seisC.maxFontSize = 10;
  doc.addField(seisC);

  const seisD = new TextField();
  seisD.Rect = [161, 188.7, 42, 5];
  // seisD.multiline = true;
  seisD.maxLength = 30;
  seisD.value = "value"; //
  seisD.fieldName = "seisD";
  seisD.maxFontSize = 10;
  doc.addField(seisD);

  // .7
  doc.text(".7", 11, 198);
  const sieteA = new TextField();
  sieteA.Rect = [21, 194.7, 68, 5];
  // sieteA.multiline = true;
  sieteA.maxLength = 40;
  sieteA.value = "value"; //
  sieteA.fieldName = "sieteA";
  sieteA.maxFontSize = 10;
  doc.addField(sieteA);

  const sieteB = new TextField();
  sieteB.Rect = [91, 194.7, 28, 5];
  // sieteB.multiline = true;
  sieteB.maxLength = 20;
  sieteB.value = "value"; //
  sieteB.fieldName = "sieteB";
  sieteB.maxFontSize = 10;
  doc.addField(sieteB);

  const sieteC = new TextField();
  sieteC.Rect = [121, 194.7, 38, 5];
  // sieteC.multiline = true;
  sieteC.maxLength = 30;
  sieteC.value = "value"; //
  sieteC.fieldName = "sieteC";
  sieteC.maxFontSize = 10;
  doc.addField(sieteC);

  const sieteD = new TextField();
  sieteD.Rect = [161, 194.7, 42, 5];
  // sieteD.multiline = true;
  sieteD.maxLength = 30;
  sieteD.value = "value"; //
  sieteD.fieldName = "sieteD";
  sieteD.maxFontSize = 10;
  doc.addField(sieteD);

  // .8
  doc.text(".8", 11, 204);
  const ochoA = new TextField();
  ochoA.Rect = [21, 200.7, 68, 5];
  // ochoA.multiline = true;
  ochoA.maxLength = 40;
  ochoA.value = "value"; //
  ochoA.fieldName = "ochoA";
  ochoA.maxFontSize = 10;
  doc.addField(ochoA);

  const ochoB = new TextField();
  ochoB.Rect = [91, 200.7, 28, 5];
  // ochoB.multiline = true;
  ochoB.maxLength = 20;
  ochoB.value = "value"; //
  ochoB.fieldName = "ochoB";
  ochoB.maxFontSize = 10;
  doc.addField(ochoB);

  const ochoC = new TextField();
  ochoC.Rect = [121, 200.7, 38, 5];
  // ochoC.multiline = true;
  ochoC.maxLength = 30;
  ochoC.value = "value"; //
  ochoC.fieldName = "ochoC";
  ochoC.maxFontSize = 10;
  doc.addField(ochoC);

  const ochoD = new TextField();
  ochoD.Rect = [161, 200.7, 42, 5];
  // ochoD.multiline = true;
  ochoD.maxLength = 30;
  ochoD.value = "value"; //
  ochoD.fieldName = "ochoD";
  ochoD.maxFontSize = 10;
  doc.addField(ochoD);

  // .9
  doc.text(".9", 11, 210);
  const nueveA = new TextField();
  nueveA.Rect = [21, 206.7, 68, 5];
  // nueveA.multiline = true;
  nueveA.maxLength = 40;
  nueveA.value = "value"; //
  nueveA.fieldName = "nueveA";
  nueveA.maxFontSize = 10;
  doc.addField(nueveA);

  const nueveB = new TextField();
  nueveB.Rect = [91, 206.7, 28, 5];
  // nueveB.multiline = true;
  nueveB.maxLength = 20;
  nueveB.value = "value"; //
  nueveB.fieldName = "nueveB";
  nueveB.maxFontSize = 10;
  doc.addField(nueveB);

  const nueveC = new TextField();
  nueveC.Rect = [121, 206.7, 38, 5];
  // nueveC.multiline = true;
  nueveC.maxLength = 30;
  nueveC.value = "value"; //
  nueveC.fieldName = "nueveC";
  nueveC.maxFontSize = 10;
  doc.addField(nueveC);

  const nueveD = new TextField();
  nueveD.Rect = [161, 206.7, 42, 5];
  // nueveD.multiline = true;
  nueveD.maxLength = 30;
  nueveD.value = "value"; //
  nueveD.fieldName = "nueveD";
  nueveD.maxFontSize = 10;
  doc.addField(nueveD);

  // .10
  doc.text(".10", 11, 216);
  const diezA = new TextField();
  diezA.Rect = [21, 212.7, 68, 5];
  // diezA.multiline = true;
  diezA.maxLength = 40;
  diezA.value = "value"; //
  diezA.fieldName = "diezA";
  diezA.maxFontSize = 10;
  doc.addField(diezA);

  const diezB = new TextField();
  diezB.Rect = [91, 212.7, 28, 5];
  // diezB.multiline = true;
  diezB.maxLength = 20;
  diezB.value = "value"; //
  diezB.fieldName = "diezB";
  diezB.maxFontSize = 10;
  doc.addField(diezB);

  const diezC = new TextField();
  diezC.Rect = [121, 212.7, 38, 5];
  // diezC.multiline = true;
  diezC.maxLength = 30;
  diezC.value = "value"; //
  diezC.fieldName = "diezC";
  diezC.maxFontSize = 10;
  doc.addField(diezC);

  const diezD = new TextField();
  diezD.Rect = [161, 212.7, 42, 5];
  // diezD.multiline = true;
  diezD.maxLength = 30;
  diezD.value = "value"; //
  diezD.fieldName = "diezD";
  diezD.maxFontSize = 10;
  doc.addField(diezD);

  // secciones
  const secionesA = new TextField();
  doc.text("Días:", 11, 226.5);
  secionesA.Rect = [20, 223.2, 42, 4.7];
  // secionesA.multiline = true;
  secionesA.maxLength = 30;
  secionesA.value = "value"; //
  secionesA.fieldName = "secionesA";
  secionesA.maxFontSize = 10;
  doc.addField(secionesA);

  const secionesB = new TextField();
  doc.text("No. de sesiones:", 70, 226.5);
  secionesB.Rect = [100, 223.2, 42, 4.7];
  // secionesB.multiline = true;
  secionesB.maxLength = 30;
  secionesB.value = "value"; //
  secionesB.fieldName = "secionesB";
  secionesB.maxFontSize = 10;
  doc.addField(secionesB);
  // Días requeridos:
  const diasR = new TextField();
  doc.text("Días requeridos:", 11, 236.5);
  diasR.Rect = [40, 233, 42, 5];
  // diasR.multiline = true;
  diasR.maxLength = 35;
  diasR.value = "value"; //
  diasR.fieldName = "diasR";
  diasR.maxFontSize = 10;
  doc.addField(diasR);

  const serviciosEn = new RadioButton();
  serviciosEn.value = "value";
  doc.addField(serviciosEn);

  doc.text("Matutino", 88, 236.5);
  doc.text("Vespertino", 115, 236.5);
  doc.text("Nocturno", 145, 236.5);
  doc.text("24 horas", 175, 236.5);

  const matutino = serviciosEn.createOption("matutino");
  matutino.Rect = [83, 233.5, 4, 4];

  const vespertino = serviciosEn.createOption("vespertino");
  vespertino.Rect = [110, 233.5, 4, 4];

  const nocturno = serviciosEn.createOption("nocturno");
  nocturno.Rect = [140, 233.5, 4, 4];

  const horaT = serviciosEn.createOption("horaT");
  horaT.Rect = [170, 233.5, 4, 4];

  serviciosEn.setAppearance(Appearance.RadioButton.Cross);

  const medicamentosT = new TextField();
  doc.text("Nombre de medicamentos:", 11, 242);
  medicamentosT.Rect = [11, 243, 192, 26];
  medicamentosT.multiline = true;
  medicamentosT.maxLength = 500;
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
  terapia.maxLength = 500;
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
  materiales.maxLength = 300;
  materiales.value = "value"; //
  materiales.fieldName = "materiales";
  materiales.maxFontSize = 10;
  doc.addField(materiales);

  // Tipo de terapia: Cédula de especialidad:
  const terapiaT = new TextField();
  doc.text("Tipo de terapia:", 11, 114);
  terapiaT.Rect = [11, 115, 108, 14];
  terapiaT.multiline = true;
  terapiaT.maxLength = 200;
  terapiaT.value = "value"; //
  terapiaT.fieldName = "terapiaT";
  terapiaT.maxFontSize = 10;
  doc.addField(terapiaT);

  const especialidad = new TextField();
  doc.text("Cédula de especialidad:", 121, 114);
  especialidad.Rect = [121, 115, 82, 14];
  especialidad.multiline = true;
  especialidad.maxLength = 100;
  especialidad.value = "value"; //
  especialidad.fieldName = "especialidad";
  especialidad.maxFontSize = 10;
  doc.addField(especialidad);

  // Detalle de evolución:
  const evolucion = new TextField();
  doc.text("Detalle de evolución:", 11, 134);
  evolucion.Rect = [11, 135, 192, 24];
  evolucion.multiline = true;
  evolucion.maxLength = 500;
  evolucion.value = "value"; //
  evolucion.fieldName = "evolucion";
  evolucion.maxFontSize = 10;
  doc.addField(evolucion);

  // Observaciones
  const observaciones = new TextField();
  observaciones.Rect = [11, 166, 192, 27];
  observaciones.multiline = true;
  observaciones.maxLength = 500;
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
  // participacionA.multiline = true;
  participacionA.maxLength = 35;
  participacionA.value = "value"; //
  participacionA.fieldName = "participacionA";
  participacionA.maxFontSize = 10;
  doc.addField(participacionA);

  const participacionB = new TextField();
  doc.text("Tipo de participación:", 109, 211);
  participacionB.Rect = [151, 208.5, 52, 5];
  // participacionB.multiline = true;
  participacionB.maxLength = 30;
  participacionB.value = "value"; //
  participacionB.fieldName = "participacionB";
  participacionB.maxFontSize = 10;
  doc.addField(participacionB);

  // Nombre:
  const nombreA = new TextField();
  doc.text("Nombre:", 11, 219);
  nombreA.Rect = [51, 215.5, 56, 5];
  // nombreA.multiline = true;
  nombreA.maxLength = 35;
  nombreA.value = "value"; //
  nombreA.fieldName = "nombreA";
  nombreA.maxFontSize = 10;
  doc.addField(nombreA);

  const nombreB = new TextField();
  doc.text("Nombre:", 109, 219);
  nombreB.Rect = [151, 215.5, 52, 5];
  // nombreB.multiline = true;
  nombreB.maxLength = 30;
  nombreB.value = "value"; //
  nombreB.fieldName = "nombreB";
  nombreB.maxFontSize = 10;
  doc.addField(nombreB);

  //Especialidad:
  const especialidadA = new TextField();
  doc.text("Especialidad:", 11, 227);
  especialidadA.Rect = [51, 223.5, 56, 5];
  // especialidadA.multiline = true;
  especialidadA.maxLength = 35;
  especialidadA.value = "value"; //
  especialidadA.fieldName = "especialidadA";
  especialidadA.maxFontSize = 10;
  doc.addField(especialidadA);

  const especialidadB = new TextField();
  doc.text("Especialidad:", 109, 227);
  especialidadB.Rect = [151, 223.5, 52, 5];
  // especialidadB.multiline = true;
  especialidadB.maxLength = 30;
  especialidadB.value = "value"; //
  especialidadB.fieldName = "especialidadB";
  especialidadB.maxFontSize = 10;
  doc.addField(especialidadB);

  //Cédula profesional:
  const cedulaA = new TextField();
  doc.text("Cédula profesional:", 11, 235);
  cedulaA.Rect = [51, 231.5, 56, 5];
  // cedulaA.multiline = true;
  cedulaA.maxLength = 35;
  cedulaA.value = "value"; //
  cedulaA.fieldName = "cedulaA";
  cedulaA.maxFontSize = 10;
  doc.addField(cedulaA);

  const cedulaB = new TextField();
  doc.text("Cédula profesional:", 109, 235);
  cedulaB.Rect = [151, 231.5, 52, 5];
  // cedulaB.multiline = true;
  cedulaB.maxLength = 30;
  cedulaB.value = "value"; //
  cedulaB.fieldName = "cedulaB";
  cedulaB.maxFontSize = 10;
  doc.addField(cedulaB);

  //Cédula de especialidad:
  const cedulaEspeA = new TextField();
  doc.text("Cédula de especialidad:", 11, 243);
  cedulaEspeA.Rect = [51, 239.5, 56, 5];
  // cedulaEspeA.multiline = true;
  cedulaEspeA.maxLength = 35;
  cedulaEspeA.value = "value"; //
  cedulaEspeA.fieldName = "cedulaEspeA";
  cedulaEspeA.maxFontSize = 10;
  doc.addField(cedulaEspeA);

  const cedulaEspeB = new TextField();
  doc.text("Cédula de especialidad:", 109, 243);
  cedulaEspeB.Rect = [151, 239.5, 52, 5];
  // cedulaEspeB.multiline = true;
  cedulaEspeB.maxLength = 30;
  cedulaEspeB.value = "value"; //
  cedulaEspeB.fieldName = "cedulaEspeB";
  cedulaEspeB.maxFontSize = 10;
  doc.addField(cedulaEspeB);

  //RFC:
  const rfcA = new TextField();
  doc.text("RFC:", 11, 251);
  rfcA.Rect = [51, 247.5, 56, 5];
  // rfcA.multiline = true;
  rfcA.maxLength = 35;
  rfcA.value = "value"; //
  rfcA.fieldName = "rfcA";
  rfcA.maxFontSize = 10;
  doc.addField(rfcA);

  const rfcB = new TextField();
  doc.text("RFC:", 109, 251);
  rfcB.Rect = [151, 247.5, 52, 5];
  // rfcB.multiline = true;
  rfcB.maxLength = 30;
  rfcB.value = "value"; //
  rfcB.fieldName = "rfcB";
  rfcB.maxFontSize = 10;
  doc.addField(rfcB);

  //Domicilio:
  const domicilioA = new TextField();
  doc.text("Domicilio:", 11, 259);
  domicilioA.Rect = [51, 255.5, 56, 5];
  // domicilioA.multiline = true;
  domicilioA.maxLength = 35;
  domicilioA.value = "value"; //
  domicilioA.fieldName = "domicilioA";
  domicilioA.maxFontSize = 10;
  doc.addField(domicilioA);

  const domicilioB = new TextField();
  doc.text("Domicilio:", 109, 259);
  domicilioB.Rect = [151, 255.5, 52, 5];
  // domicilioB.multiline = true;
  domicilioB.maxLength = 30;
  domicilioB.value = "value"; //
  domicilioB.fieldName = "domicilioB";
  domicilioB.maxFontSize = 10;
  doc.addField(domicilioB);

  //Teléfono:
  const telefonoA = new TextField();
  doc.text("Teléfono:", 11, 267);
  telefonoA.Rect = [51, 263.5, 56, 5];
  // telefonoA.multiline = true;
  telefonoA.maxLength = 35;
  telefonoA.value = "value"; //
  telefonoA.fieldName = "telefonoA";
  telefonoA.maxFontSize = 10;
  doc.addField(telefonoA);

  const telefonoB = new TextField();
  doc.text("Teléfono:", 109, 267);
  telefonoB.Rect = [151, 263.5, 52, 5];
  // telefonoB.multiline = true;
  telefonoB.maxLength = 30;
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
  // participacioA.multiline = true;
  participacioA.maxLength = 35;
  participacioA.value = "value"; //
  participacioA.fieldName = "participacioA";
  participacioA.maxFontSize = 10;
  doc.addField(participacioA);

  const participacioB = new TextField();
  doc.text("Tipo de participación:", 109, 53.5);
  participacioB.Rect = [151, 50, 52, 5];
  // participacioB.multiline = true;
  participacioB.maxLength = 34;
  participacioB.value = "value"; //
  participacioB.fieldName = "participacioB";
  participacioB.maxFontSize = 10;
  doc.addField(participacioB);

  //Nombre
  const nombresA = new TextField();
  doc.text("Nombre:", 11, 61.5);
  nombresA.Rect = [51, 57.5, 56, 5];
  // nombresA.multiline = true;
  nombresA.maxLength = 35;
  nombresA.value = "value"; //
  nombresA.fieldName = "nombresA";
  nombresA.maxFontSize = 10;
  doc.addField(nombresA);

  const nombresB = new TextField();
  doc.text("Nombre:", 109, 61.5);
  nombresB.Rect = [151, 57.5, 52, 5];
  // nombresB.multiline = true;
  nombresB.maxLength = 30;
  nombresB.value = "value"; //
  nombresB.fieldName = "nombresB";
  nombresB.maxFontSize = 10;
  doc.addField(nombresB);

  //médico
  const medico = new TextField();
  doc.text("Otros médicos:", 11, 68);
  medico.Rect = [12, 69, 190, 10];
  medico.multiline = true;
  medico.maxLength = 200;
  medico.value = "value";
  medico.fieldName = "medico";
  medico.maxFontSize = 10;
  doc.addField(medico);

  //Firma
  const firma = new TextField();
  doc.text("Firma del médico", 55, 85.5);
  firma.Rect = [11, 90, 118, 21];
  firma.multiline = true;
  firma.maxLength = 12;
  firma.value = "value";
  firma.fieldName = "firma";
  firma.maxFontSize = 300;
  doc.addField(firma);

  //lugar
  const lugarF = new TextField();
  doc.text("Lugar y fecha", 150, 85.5);
  lugarF.Rect = [131, 90, 72, 21];
  lugarF.multiline = true;
  lugarF.maxLength = 150;
  lugarF.value = "value";
  lugarF.fieldName = "lugarF";
  lugarF.maxFontSize = 10;
  doc.addField(lugarF);

  doc.text(
    "En caso de reembolso y/o programación de servicios, el asegurado deberá llenar el siguiente apartado:",
    11,
    117.5
  );
  // Datos personales
  doc.text(
    "AXA Seguros, S.A. de C.V. (AXA), con domicilio en Avenida Félix Cuevas número 366, piso 6, Colonia Tlacoquemécatl,",
    11,
    129.5
  );
  doc.text(
    "Delegación Benito Juárez, C.P. 03200, Ciudad de México, llevará a cabo el tratamiento de sus datos personales para el ",
    11,
    133.5
  );
  doc.text(
    "cumplimiento del Contrato de Seguro y demás finalidades previstas en el aviso de privacidad integral que puede consultar",
    11,
    137.5
  );
  doc.text("en axa.mx en la sección Aviso de Privacidad.", 11, 141.5);
  const autorizoE = new RadioButton();
  autorizoE.value = "value";
  doc.addField(autorizoE);

  doc.text(
    "Autorizo el tratamiento y transferencia de mis datos personales patrimoniales y financieros, para efectos del",
    22,
    146
  );

  const sAutorizo = autorizoE.createOption("sAutorizo");
  sAutorizo.Rect = [15, 142.5, 4, 4];

  autorizoE.setAppearance(Appearance.RadioButton.Cross);

  doc.text(
    "cumplimiento del Contrato de Seguro y demás finalidades contempladas en el Aviso de Privacidad.",
    11,
    149.5
  );

  // llevarnos
  doc.text(
    "Para ser llenado por el Asegurado afectado, o en su defecto los padres o tutores en caso de ser menor de edad.",
    11,
    160.5
  );
  doc.setFontSize(9.7);
  // Transferencia de datos a terceros
  doc.text(
    "Autorizo que AXA trate mis datos personales sensibles y los transfiera a médicos especialistas en México y/o en el extranjero,",
    11,
    166
  );
  doc.text(
    "así como a prestadores de servicios médicos con los que tenga convenio, para efectos del cumplimiento de las obligaciones",
    11,
    169
  );
  doc.text("derivadas del Contrato de Seguro.", 11, 172);

  const autorizoAxa = new RadioButton();
  autorizoAxa.value = "value";
  doc.addField(autorizoAxa);

  doc.text("Sí acepto", 20, 177);
  doc.text("No acepto", 20, 182);

  const autorizoAxaS = autorizoAxa.createOption("autorizoAxaS");
  autorizoAxaS.Rect = [15, 174, 4, 4];

  const autorizoAxaN = autorizoAxa.createOption("autorizoAxaN");
  autorizoAxaN.Rect = [15, 179, 4, 4];

  autorizoAxa.setAppearance(Appearance.RadioButton.Cross);

  // Datos personales
  const firmaA = new TextField();
  doc.text("Firma del Asegurado:", 60, 182);
  firmaA.Rect = [100, 178, 60, 5];
  // firmaA.multiline = true;
  firmaA.maxLength = 35;
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

  const tratamientoE = new RadioButton();
  tratamientoE.value = "value";
  doc.addField(tratamientoE);

  doc.text("Sí acepto", 20, 213);
  doc.text("No acepto", 20, 218);

  const tratamientoEs = tratamientoE.createOption("tratamientoEs");
  tratamientoEs.Rect = [15, 210, 4, 4];

  const tratamientoEn = tratamientoE.createOption("tratamientoEn");
  tratamientoEn.Rect = [15, 215, 4, 4];

  tratamientoE.setAppearance(Appearance.RadioButton.Cross);

  const firmaB = new TextField();
  doc.text("Firma del Asegurado:", 60, 218);
  firmaB.Rect = [100, 214, 60, 5];
  // firmaB.multiline = true;
  firmaB.maxLength = 35;
  firmaB.value = "value";
  firmaB.fieldName = "firmaB";
  firmaB.maxFontSize = 10;
  doc.addField(firmaB);

  return doc;
};
