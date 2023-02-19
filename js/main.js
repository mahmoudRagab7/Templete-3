// start login form
let chkeckBox = document.getElementById("exampleCheck1");
chkeckBox.onclick = function () {
  chkeckBox.style.backgroundColor = "#4a4e69";
  //   chkeckBox.style.outlineColor = "#0080005c";
  chkeckBox.style.boxShadow = "rgb(74 78 105 / 36%) 0px 0px 0px 3px";
};
// end login form

// start copy
let text1 = document.getElementById("mypython");
let text2 = document.getElementById("myjava");
let text3 = document.getElementById("myjavascrpt");

function copyText1() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText(`${text1.textContent}`);
}
function copyText2() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText(`${text2.textContent}`);
}
function copyText3() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText(`${text3.textContent}`);
}
// end copy
