import fs from 'fs';
import PDFDocument from "pdfkit";
import { genQRcode } from './qrCode.js';


export const generatePdfLab1 = async (data, path) => {
  let doc = new PDFDocument({ size: "A1", margin: 10 });
  const qrcode = await genQRcode(path);
  
  let qrresult = data.result==1?"POSITIVE":"NEGATIVE";
  let detect = data.result==1?"Detected":"Not Detected";
  doc
    .image('public/assets/img/lab1/background.png',0, 0) 
    .fillColor("#0000ff")
    .fontSize(35)
    .text("Name", 55, 270)
    .text("Sex", 55, 310)
    .text("Date Of  Birth", 55, 350)
    .text("Referred by", 55, 390)
    .text("Receiving Date", 55, 445)
    .text("Insurance",55,500)
    .text("Company",55,540)
    .text("indication", 55, 580)

    .text("Clinic File  No.", 800, 270)
    .text("Lab File  No.", 800, 310)
    .text("Lab. Case  No.", 800, 350)
    .text("Clinic  Name", 800, 390)
    .text("Reporting", 800, 430)
    .text("Date",800, 470 )
    .text("Insurance No.",800, 540 )
    .text("ID No",800, 580 )

    .fillColor("#000")
    .fontSize(35)
    .text(": "+data.name, 320, 270)
    .text(": "+data.gender, 320, 310)
    .text(": "+data.birth, 320, 350)
    .text(": ", 320, 390)
    .text(": "+data.createAt, 320, 445)
    .text(": ", 320, 540)

    .text(": ", 1070, 270)
    .text(": ", 1070, 310)
    .text(": DAH201635xxx", 1070, 350)
    .text(": Dar Alhekma", 1070, 390)
    .text(": "+data.resultAt, 1070, 450)
    .text(": Al54543xx",1070, 560 )
    
    .image(qrcode,500, 2000)

    .text( detect,570, 750)
    .text( "("+qrresult+")", 570, 790)

  doc.end();
  return await doc.pipe(fs.createWriteStream(path));
}
