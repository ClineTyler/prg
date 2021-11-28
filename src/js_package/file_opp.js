/////////////////////////////////////////////////////////////
//  Make lists
//  assign lists
//  file opperations
/////////////////////////////////////////////////////////////
import { saveAs } from "file-saver";
import path from "path";
import fs from "fs";

//import * as FileSaver from "file-saver";

class file_opp {
  // constructor() {
  //   //const reader = readableStream.getReader();
  //   //let fs = require("fs");
  // }
  write(data) {
    //   let data = "text content";
    //   let filepath = path.join("../data/test.txt");
    //   let filename = "test.txt";
    //   const file_type = "text/plain;charset=utf-8";
    //   fs.writeFileSync(filepath, data, { encoding: file_type });
    const obj = JSON.parse(data);
  }
} //end

module.exports.file_opp = file_opp;
