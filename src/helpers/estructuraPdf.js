export const estructuraPdf1 = (doc) => {
  doc.setDrawColor("#00008f");
  doc.setLineWidth(0.2);
  //   cuadro1
  doc.line(10, 67, 204, 67); // horizontal line
  doc.line(10, 72, 204, 72); // horizontal line
  doc.line(10, 67, 10, 72); // vertical line
  doc.line(204, 67, 204, 72); // vertical line
  doc.line(108, 67, 108, 72); // vertical line
  //   cuadro2
  doc.setDrawColor("#FF5252");
  doc.line(10, 77, 204, 77); // horizontal line
  doc.setDrawColor("#00008f");
  doc.line(10, 82, 204, 82); // horizontal line
  doc.line(10, 77, 10, 82); // vertical line
  doc.line(204, 77, 204, 82); // vertical line
  //   cuadro3
  doc.line(10, 82, 204, 82); // horizontal line
  doc.line(10, 90, 204, 90); // horizontal line
  doc.line(10, 82, 10, 90); // vertical line
  doc.line(70, 82, 70, 90); // vertical line
  doc.line(135, 82, 135, 90); // vertical line
  doc.line(204, 82, 204, 90); // vertical line
  //   cuadro4
  doc.line(10, 90, 204, 90); // horizontal line
  doc.line(10, 98, 204, 98); // horizontal line
  doc.line(10, 90, 10, 98); // vertical line
  doc.line(20, 90, 20, 98); // vertical line
  doc.line(50, 94, 50, 98); // vertical line
  doc.line(86, 90, 86, 98); // vertical line
  doc.line(140, 90, 140, 98); // vertical line
  doc.line(160, 90, 160, 98); // vertical line
  doc.line(175, 90, 175, 98); // vertical line
  doc.line(204, 90, 204, 98); // vertical line
  //   cuadro5
  doc.line(10, 98, 204, 98); // horizontal line
  doc.line(10, 108, 204, 108); // horizontal line
  doc.line(10, 98, 10, 108); // vertical line
  doc.line(204, 98, 204, 108); // vertical line
  //   cuadro6
  doc.line(10, 108, 204, 108); // horizontal line
  doc.line(10, 118, 204, 118); // horizontal line
  doc.line(10, 118, 10, 108); // vertical line
  doc.line(204, 118, 204, 108); // vertical line
  //   cuadro7
  doc.line(10, 118, 204, 118); // horizontal line
  doc.line(10, 130, 204, 130); // horizontal line
  doc.line(10, 118, 10, 130); // vertical line
  doc.line(108, 118, 108, 130); // vertical line
  doc.line(204, 118, 204, 130); // vertical line
  //   cuadro8
  doc.line(10, 130, 204, 130); // horizontal line
  doc.line(10, 159, 204, 159); // horizontal line
  doc.line(10, 159, 10, 130); // vertical line
  doc.line(108, 159, 108, 130); // vertical line
  doc.line(204, 159, 204, 130); // vertical line
  //   cuadro9
  doc.line(10, 159, 204, 159); // horizontal line
  doc.line(10, 166, 204, 166); // horizontal line
  doc.line(10, 159, 10, 166); // vertical line
  doc.line(108, 159, 108, 166); // vertical line
  doc.line(204, 159, 204, 166); // vertical line
  //   cuadro10
  doc.line(10, 166, 204, 166); // horizontal line
  doc.line(10, 170, 108, 170); // horizontal line
  doc.line(10, 196, 204, 196); // horizontal line
  doc.line(10, 196, 10, 166); // vertical line
  doc.line(108, 196, 108, 166); // vertical line
  doc.line(204, 196, 204, 166); // vertical line
  //   cuadro11
  doc.line(10, 196, 204, 196); // horizontal line
  doc.line(10, 202, 204, 202); // horizontal line
  doc.line(10, 196, 10, 202); // vertical line
  doc.line(204, 196, 204, 202); // vertical line
  //   cuadro12
  doc.line(10, 196, 204, 196); // horizontal line
  doc.line(10, 202, 204, 202); // horizontal line
  doc.line(10, 196, 10, 202); // vertical line
  doc.line(204, 196, 204, 202); // vertical line
  //   cuadro13
  doc.line(10, 202, 204, 202); // horizontal line
  doc.line(10, 232, 204, 232); // horizontal line
  doc.line(10, 232, 10, 202); // vertical line
  doc.line(204, 232, 204, 202); // vertical line
  //   cuadro14
  doc.line(10, 232, 204, 232); // horizontal line
  doc.line(10, 240, 204, 240); // horizontal line
  doc.line(10, 232, 10, 240); // vertical line
  doc.line(204, 232, 204, 240); // vertical line
  doc.line(108, 232, 108, 240); // vertical line
  //   cuadro15
  doc.line(10, 240, 204, 240); // horizontal line
  doc.line(10, 252, 204, 252); // horizontal line
  doc.line(10, 252, 10, 240); // vertical line
  doc.line(204, 252, 204, 240); // vertical line

  return doc;
};

export const estructuraPdf2 = (doc) => {
  doc.setDrawColor("#00008f");
  doc.setLineWidth(0.2);
  // cuadro1
  doc.line(10, 40, 204, 40); // horizontal line
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 40, 10, 80); // vertical line
  doc.line(204, 40, 204, 80); // vertical line
  // cuadro2
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 90, 204, 90); // horizontal line
  doc.line(10, 90, 10, 80); // vertical line
  doc.line(204, 90, 204, 80); // vertical line
  // cuadro3
  doc.line(10, 90, 204, 90); // horizontal line
  doc.line(10, 100, 204, 100); // horizontal line
  doc.line(10, 90, 10, 100); // vertical line
  doc.line(204, 90, 204, 100); // vertical line
  // cuadro4
  doc.line(10, 100, 204, 100); // horizontal line
  doc.line(10, 140, 204, 140); // horizontal line
  doc.line(10, 140, 10, 100); // vertical line
  doc.line(204, 140, 204, 100); // vertical line
  // cuadro5
  doc.line(10, 140, 204, 140); // horizontal line
  doc.line(10, 148, 204, 148); // horizontal line
  doc.line(10, 140, 10, 148); // vertical line
  doc.line(204, 140, 204, 148); // vertical line
  // cuadro6
  doc.line(10, 148, 204, 148); // horizontal line
  doc.line(10, 168, 204, 168); // horizontal line
  doc.line(10, 168, 10, 148); // vertical line
  doc.line(204, 168, 204, 148); // vertical line
  // cuadro7
  doc.line(10, 168, 204, 168); // horizontal line
  doc.line(10, 198, 204, 198); // horizontal line
  doc.line(10, 168, 10, 198); // vertical line
  doc.line(204, 168, 204, 198); // vertical line
  // cuadro8
  doc.line(10, 202, 204, 202); // horizontal line
  doc.line(10, 216, 204, 216); // horizontal line
  doc.line(10, 216, 10, 202); // vertical line
  doc.line(204, 216, 204, 202); // vertical line
  doc.line(140, 216, 140, 202); // vertical line
  // cuadro9
  doc.line(10, 216, 204, 216); // horizontal line
  doc.line(10, 226, 204, 226); // horizontal line
  doc.line(10, 216, 10, 226); // vertical line
  doc.line(204, 216, 204, 226); // vertical line
  doc.line(108, 216, 108, 226); // vertical line
  // cuadro10
  doc.line(10, 226, 204, 226); // horizontal line
  doc.line(10, 234, 204, 234); // horizontal line
  doc.line(10, 234, 10, 226); // vertical line
  doc.line(204, 234, 204, 226); // vertical line
  // cuadro11
  doc.line(10, 234, 204, 234); // horizontal line
  doc.line(10, 244, 204, 244); // horizontal line
  doc.line(10, 234, 10, 244); // vertical line
  doc.line(204, 234, 204, 244); // vertical line
  // cuadro12
  doc.line(10, 244, 204, 244); // horizontal line
  doc.line(10, 254, 204, 254); // horizontal line
  doc.line(10, 254, 10, 244); // vertical line
  doc.line(204, 254, 204, 244); // vertical line
  // cuadro13
  doc.line(10, 254, 204, 254); // horizontal line
  doc.line(10, 270, 204, 270); // horizontal line
  doc.line(10, 254, 10, 270); // vertical line
  doc.line(204, 254, 204, 270); // vertical line

  return doc;
};

export const estructuraPdf3 = (doc) => {
  doc.setDrawColor("#00008f");
  doc.setLineWidth(0.2);
  // cuadro1
  doc.line(10, 40, 204, 40); // horizontal line
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 40, 10, 80); // vertical line
  doc.line(204, 40, 204, 80); // vertical line
  // cuadro2
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 120, 204, 120); // horizontal line
  doc.line(10, 120, 10, 80); // vertical line
  doc.line(204, 120, 204, 80); // vertical line
  // cuadro3
  doc.line(10, 124, 204, 124); // horizontal line
  doc.line(10, 144, 204, 144); // horizontal line
  doc.line(10, 124, 10, 144); // vertical line
  doc.line(204, 124, 204, 144); // vertical line
  // cuadro4
  doc.line(10, 149, 204, 149); // horizontal line
  doc.line(10, 158, 204, 158); // horizontal line
  doc.line(10, 158, 10, 149); // vertical line
  doc.line(204, 158, 204, 149); // vertical line
  doc.line(20, 158, 20, 149); // vertical line
  doc.line(90, 158, 90, 149); // vertical line
  doc.line(120, 158, 120, 149); // vertical line
  doc.line(160, 158, 160, 149); // vertical line
  // cuadro5
  doc.line(10, 158, 204, 158); // horizontal line
  doc.line(10, 164, 204, 164); // horizontal line
  doc.line(10, 158, 10, 164); // vertical line
  doc.line(204, 158, 204, 164); // vertical line
  doc.line(20, 164, 20, 149); // vertical line
  doc.line(90, 164, 90, 149); // vertical line
  doc.line(120, 164, 120, 149); // vertical line
  doc.line(160, 164, 160, 149); // vertical line
  // cuadro6--
  doc.line(10, 170, 204, 170); // horizontal line
  doc.line(10, 164, 204, 164); // horizontal line
  doc.line(10, 170, 10, 164); // vertical line
  doc.line(204, 170, 204, 164); // vertical line
  doc.line(20, 170, 20, 149); // vertical line
  doc.line(90, 170, 90, 149); // vertical line
  doc.line(120, 170, 120, 149); // vertical line
  doc.line(160, 170, 160, 149); // vertical line
  // cuadro7
  doc.line(10, 176, 204, 176); // horizontal line
  doc.line(10, 170, 204, 170); // horizontal line
  doc.line(10, 170, 10, 176); // vertical line
  doc.line(204, 170, 204, 176); // vertical line
  doc.line(20, 176, 20, 149); // vertical line
  doc.line(90, 176, 90, 149); // vertical line
  doc.line(120, 176, 120, 149); // vertical line
  doc.line(160, 176, 160, 149); // vertical line

  // cuadro8
  doc.line(10, 182, 204, 182); // horizontal line
  doc.line(10, 176, 204, 176); // horizontal line
  doc.line(10, 182, 10, 176); // vertical line
  doc.line(204, 182, 204, 176); // vertical line
  doc.line(20, 182, 20, 149); // vertical line
  doc.line(90, 182, 90, 149); // vertical line
  doc.line(120, 182, 120, 149); // vertical line
  doc.line(160, 182, 160, 149); // vertical line
  // cuadro9
  doc.line(10, 188, 204, 188); // horizontal line
  doc.line(10, 182, 204, 182); // horizontal line
  doc.line(10, 182, 10, 188); // vertical line
  doc.line(204, 182, 204, 188); // vertical line
  doc.line(20, 188, 20, 149); // vertical line
  doc.line(90, 188, 90, 149); // vertical line
  doc.line(120, 188, 120, 149); // vertical line
  doc.line(160, 188, 160, 149); // vertical line
  // cuadro10
  doc.line(10, 194, 204, 194); // horizontal line
  doc.line(10, 188, 204, 188); // horizontal line
  doc.line(10, 194, 10, 188); // vertical line
  doc.line(204, 194, 204, 188); // vertical line
  doc.line(20, 194, 20, 149); // vertical line
  doc.line(90, 194, 90, 149); // vertical line
  doc.line(120, 194, 120, 149); // vertical line
  doc.line(160, 194, 160, 149); // vertical line
  // cuadro11
  doc.line(10, 200, 204, 200); // horizontal line
  doc.line(10, 194, 204, 194); // horizontal line
  doc.line(10, 194, 10, 200); // vertical line
  doc.line(204, 194, 204, 200); // vertical line
  doc.line(20, 200, 20, 149); // vertical line
  doc.line(90, 200, 90, 149); // vertical line
  doc.line(120, 200, 120, 149); // vertical line
  doc.line(160, 200, 160, 149); // vertical line
  // cuadro12
  doc.line(10, 206, 204, 206); // horizontal line
  doc.line(10, 200, 204, 200); // horizontal line
  doc.line(10, 206, 10, 200); // vertical line
  doc.line(204, 206, 204, 200); // vertical line
  doc.line(20, 206, 20, 149); // vertical line
  doc.line(90, 206, 90, 149); // vertical line
  doc.line(120, 206, 120, 149); // vertical line
  doc.line(160, 206, 160, 149); // vertical line
  // cuadro13
  doc.line(10, 212, 204, 212); // horizontal line
  doc.line(10, 206, 204, 206); // horizontal line
  doc.line(10, 206, 10, 212); // vertical line
  doc.line(204, 206, 204, 212); // vertical line
  doc.line(20, 212, 20, 149); // vertical line
  doc.line(90, 212, 90, 149); // vertical line
  doc.line(120, 212, 120, 149); // vertical line
  doc.line(160, 212, 160, 149); // vertical line
  // cuadro14
  doc.line(10, 218, 204, 218); // horizontal line
  doc.line(10, 212, 204, 212); // horizontal line
  doc.line(10, 218, 10, 212); // vertical line
  doc.line(204, 218, 204, 212); // vertical line
  doc.line(20, 218, 20, 149); // vertical line
  doc.line(90, 218, 90, 149); // vertical line
  doc.line(120, 218, 120, 149); // vertical line
  doc.line(160, 218, 160, 149); // vertical line
  // cuadro15
  doc.line(10, 228, 204, 228); // horizontal line
  doc.line(10, 222, 204, 222); // horizontal line
  doc.line(10, 222, 10, 228); // vertical line
  doc.line(204, 222, 204, 228); // vertical line
  // cuadro16
  doc.line(10, 232, 204, 232); // horizontal line
  doc.line(10, 238, 204, 238); // horizontal line
  doc.line(10, 238, 10, 232); // vertical line
  doc.line(204, 238, 204, 232); // vertical line
  // cuadro17
  doc.line(10, 238, 204, 238); // horizontal line
  doc.line(10, 270, 204, 270); // horizontal line
  doc.line(10, 238, 10, 270); // vertical line
  doc.line(204, 238, 204, 270); // vertical line

  return doc;
};

export const estructuraPdf4 = (doc) => {
  doc.setDrawColor("#00008f");
  doc.setLineWidth(0.2);
  // cuadro1
  doc.line(10, 40, 204, 40); // horizontal line
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 40, 10, 80); // vertical line
  doc.line(204, 40, 204, 80); // vertical line
  // cuadro2
  doc.line(10, 80, 204, 80); // horizontal line
  doc.line(10, 110, 204, 110); // horizontal line
  doc.line(10, 110, 10, 80); // vertical line
  doc.line(204, 110, 204, 80); // vertical line
  // cuadro3
  doc.line(10, 110, 204, 110); // horizontal line
  doc.line(10, 130, 204, 130); // horizontal line
  doc.line(10, 110, 10, 130); // vertical line
  doc.line(204, 110, 204, 130); // vertical line
  doc.line(120, 110, 120, 130); // vertical line
  // cuadro4
  doc.line(10, 130, 204, 130); // horizontal line
  doc.line(10, 160, 204, 160); // horizontal line
  doc.line(10, 160, 10, 130); // vertical line
  doc.line(204, 160, 204, 130); // vertical line
  // cuadro5
  doc.line(10, 165, 204, 165); // horizontal line
  doc.line(10, 194, 204, 194); // horizontal line
  doc.line(10, 165, 10, 194); // vertical line
  doc.line(204, 165, 204, 194); // vertical line
  // cuadro6
  doc.line(10, 198, 204, 198); // horizontal line
  doc.line(10, 270, 204, 270); // horizontal line
  doc.line(10, 270, 10, 198); // vertical line
  doc.line(204, 270, 204, 198); // vertical line

  return doc;
};
