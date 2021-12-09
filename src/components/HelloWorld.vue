<template>
  <nav class="p-5">
    <button class="btn btn-primary" @click="save">guardar</button>
  </nav>
</template>

<script>
import jsPDF from "jspdf";
import { logo, pdf1 } from "../helpers/logoNombreNpdf";
import { infoInportante } from "../helpers/infoInportante";
import { infoPdf1 } from "../helpers/infoPdf";
import { contentApi } from "../helpers/contentApi";
import { acroforms } from "../helpers/acroforms";
import { contentStatico, bordesStaticos } from "../helpers/contentStatico";

export default {
  name: "HelloWorld",

  methods: {
    save() {
      //*215x280
      let doc = new jsPDF("p", "mm", [280, 215]);
      pdf1(doc);
      logo(doc);
      infoInportante(doc);
      infoPdf1(doc);
      contentApi(doc);
      acroforms(doc);
      contentStatico(doc);
      bordesStaticos(doc);
      //TODO crear informacion general
      doc.save("Venta.pdf");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.factura {
  table-layout: fixed;
  /* left: ; */
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
