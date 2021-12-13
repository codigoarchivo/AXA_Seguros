<template>
  <nav class="p-5">
    <button class="btn btn-primary" @click="save">guardar</button>
  </nav>
</template>

<script>
import jsPDF from "jspdf";
//data
import { getInfoById } from "../selectors/getInfoById";
//helper
import {
  estructuraPdf1,
  estructuraPdf2,
  estructuraPdf3,
  estructuraPdf4,
  estructuraPdf5,
} from "../helpers/estructuraPdf";

import {
  contentApi,
  contentApi2,
  contentApi3,
  contentApi4,
  contentApi5
} from "../helpers/contentApi";

import {
  logoInfoStaticos,
  nPdfStatico1,
  nPdfStatico2,
  nPdfStatico3,
  nPdfStatico4,
  nPdfStatico5,
  contentStatico1,
  contentStatico2,
  contentStatico3,
  contentStatico4,
  contentStatico5,
  bordeStaticos,
  infoStaticos,
} from "../helpers/contentStatico";

export default {
  name: "HelloWorld",

  methods: {
    save() {
      //? Obtener los datos información personal de la api
      const data = getInfoById(1);
      console.log(data);

      //*215x280
      const doc = new jsPDF("p", "mm", [280, 215]);
      //pdf 1
      nPdfStatico1(doc);
      logoInfoStaticos(doc);
      infoStaticos(doc);
      estructuraPdf1(doc);

      //api
      contentApi(doc, data);

      contentStatico1(doc);
      bordeStaticos(doc);
      //pdf 2
      doc.addPage();
      nPdfStatico2(doc);
      logoInfoStaticos(doc);
      estructuraPdf2(doc);
      contentApi2(doc);
      contentStatico2(doc);
      bordeStaticos(doc);
      //pdf 3
      doc.addPage();
      nPdfStatico3(doc);
      logoInfoStaticos(doc);
      estructuraPdf3(doc);
      contentApi3(doc);
      contentStatico3(doc);
      bordeStaticos(doc);
      //pdf 4
      doc.addPage();
      nPdfStatico4(doc);
      logoInfoStaticos(doc);
      estructuraPdf4(doc);
      contentApi4(doc);
      contentStatico4(doc);
      bordeStaticos(doc);
      //pdf 5
      doc.addPage();
      nPdfStatico5(doc);
      logoInfoStaticos(doc);
      estructuraPdf5(doc);
      contentApi5(doc);
      contentStatico5(doc);
      bordeStaticos(doc);

      doc.save("test.pdf");
    },
  },
};
</script>

