document.write("<table>");
for (let i = 1; i < 10; i++) {
  document.write("<tr>");
  for (let j = 1; j <= i; j++) {
    //console.log(`${i}  x ${j}= ` + i * j);
    // document.write(i + "x " +j +"=" + i*j);
    document.write("<td>" + `${i} x ${j} =` + i * j + "</td>");
  }
  document.write("<br />");
  document.write("</tr>");
  //document is not defined; if open in browser it is ok; if the codes run in Node.js , then will have "document is not defined " issue
}

document.write("</ table>");

/* document.write("<table>");
for (let row =1; row<10; row++){
    document.write('<tr>')
    for(let column =10-row; column>0; column--){
        document.write("<td>" + row + "x" + column +"=" + row*column + "</td>")
    }
    document.write("<br />");
    document.write("</tr>")
}

document.write("</table>") */

document.write("<table>");
for (let row = 1; row < 10; row++) {
  document.write("<tr>");
  for (let blank = 9 - row; blank > 0; blank--) {
    document.write("<td></td>")
  }
  for(let column=row; column>0; column --){
    document.write("<td>" + row + "x" + column + "=" + row * column + "</td>");
  }
  
  document.write("</tr>");
}

document.write("</table>");
