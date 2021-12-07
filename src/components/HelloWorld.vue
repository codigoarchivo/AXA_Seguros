<template>
  <nav class="p-5">
    <button class="btn btn-primary" @click="save">guardar</button>
  </nav>
  <div id="factura" class="col-11 p-5">
    <h2>Factura</h2>

    <!-- <div class="row my-3">
      <div class="col-10">
        <h1>Mil Pasos</h1>
        <p>Av. Winston Churchill</p>
        <p>Plaza Orleans 3er. nivel</p>
        <p>local 312</p>
      </div>
      <div class="col-2">
        <img
          width="59"
          height="35"
          src="https://marcas-logos.net/wp-content/uploads/2020/01/Batman-Logo.png"
        />
      </div>
    </div>

    <hr />

    <div class="row fact-info mt-3">
      <div class="col-3">
        <h5>Facturar a</h5>
        <p>Arian Manuel Garcia Reynoso</p>
      </div>
      <div class="col-3">
        <h5>Enviar a</h5>
        <p>Cotui, Sanchez Ramirez Santa Fe, #19 arianmanuel75@gmail.com</p>
      </div>
      <div class="col-3">
        <h5>N° de factura</h5>
        <h5>Fecha</h5>
        <h5>Fecha de vencimiento</h5>
      </div>
      <div class="col-3">
        <h5>103</h5>
        <p>09/05/2019</p>
        <p>09/05/2019</p>
      </div>
    </div>

    <div class="row my-5">
      <table class="table table-borderless factura">
        <thead>
          <tr>
            <th>Cant.</th>
            <th>Descripcion</th>
            <th>Precio Unitario</th>
            <th>Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Clases de Cha-Cha-Cha</td>
            <td>3,000.00</td>
            <td>3,000.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Clases de Salsa</td>
            <td>4,000.00</td>
            <td>12,000.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th>Total Factura</th>
            <th>RD$15,000.00</th>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="cond row">
      <div class="col-12 mt-3">
        <h4>Condiciones y formas de pago</h4>
        <p>El pago se debe realizar en un plazo de 15 dias.</p>
        <p>
          Banco Banreserva
          <br />
          IBAN: DO XX 0075 XXXX XX XX XXXX XXXX
          <br />
          Código SWIFT: BPDODOSXXXX
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default {
  name: "HelloWorld",

  methods: {
    save() {
      html2canvas(document.getElementById("factura")).then((canvas) => {
        let imgData = canvas.toDataURL("image/png"),
          doc = new jsPDF("p", "mm", "a4"),
          imgHeight = (canvas.height * 210) / canvas.width,
          heightLeft = imgHeight;

        doc.addImage(imgData, "PNG", 0, 0, 210, imgHeight);
        heightLeft -= 295;

        while (heightLeft >= 0) {
          let position = 0;
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, "PNG", 0, position, 210, imgHeight);
          heightLeft -= 295;
        }

        let {
          ComboBox,
          ListBox,
          TextField,
          PasswordField,
          RadioButton,
          Appearance,
        } = jsPDF.AcroForm;

        doc.setFontSize(12);
        doc.text("ComboBox:", 10, 40);
        let comboBox = new ComboBox();
        comboBox.fieldName = "ChoiceField1";
        comboBox.topIndex = 1;
        comboBox.Rect = [50, 35, 30, 10];
        comboBox.setOptions(["a", "b", "c"]);
        comboBox.value = "b";
        comboBox.defaultValue = "b";
        doc.addField(comboBox);

        doc.text("ListBox:", 10, 115);
        let listbox = new ListBox();
        listbox.edit = false;
        listbox.fieldName = "ChoiceField2";
        listbox.topIndex = 2;
        listbox.Rect = [50, 110, 30, 10];
        listbox.setOptions(["c", "a", "d", "f", "b", "s"]);
        listbox.value = "s";
        doc.addField(listbox);

        doc.text("TextField:", 10, 145);
        let textField = new TextField();
        textField.Rect = [50, 140, 30, 10];
        textField.multiline = true;
        textField.value =
          "The quick brown fox ate the lazy mouse The quick brown fox ate the lazy mouse The quick brown fox ate the lazy mouse"; //
        textField.fieldName = "TestTextBox";
        doc.addField(textField);

        doc.text("Password:", 10, 155);
        let passwordField = new PasswordField();
        passwordField.Rect = [50, 150, 30, 10];
        doc.addField(passwordField);

        doc.text("RadioGroup:", 50, 165);
        let radioGroup = new RadioButton();
        radioGroup.value = "Test";
        // radioGroup.Subtype = "Form";

        doc.addField(radioGroup);

        let radioButton1 = radioGroup.createOption("Test");
        radioButton1.Rect = [50, 170, 30, 10];
        radioButton1.AS = "/Test";

        let radioButton2 = radioGroup.createOption("Test2");
        radioButton2.Rect = [50, 180, 30, 10];

        let radioButton3 = radioGroup.createOption("Test3");
        radioButton3.Rect = [50, 190, 20, 10];

        radioGroup.setAppearance(Appearance.RadioButton.Cross);

        doc.save("Venta.pdf");
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.factura {
  table-layout: fixed;
}

.fact-info > div > h5 {
  font-weight: bold;
}

.factura > thead {
  border-top: solid 3px #000;
  border-bottom: 3px solid #000;
}

.factura > thead > tr > th:nth-child(2),
.factura > tbod > tr > td:nth-child(2) {
  width: 300px;
}

.factura > thead > tr > th:nth-child(n + 3) {
  text-align: right;
}

.factura > tbody > tr > td:nth-child(n + 3) {
  text-align: right;
}

.factura > tfoot > tr > th,
.factura > tfoot > tr > th:nth-child(n + 3) {
  font-size: 24px;
  text-align: right;
}

.cond {
  border-top: solid 2px #000;
}
</style>
