// Array Assignment 
var fruits=['Mango','Banana','Apple','Pinapple','Orange','Grape', 103];
var firstFruit=(fruits[0]);
var lastItem='Cherry';
console.log(firstFruit + lastItem + fruits);


// prompt Table 


document.write('Table of Six'+ "<br>");
document.write("<br>");
var table=prompt('Which table do you want to learn');
document.write(table +'X1=' + " " + table*1 + "<br>")
document.write(table +'X2=' + " " + table*2 + "<br>")
document.write(table +'X3=' + " " + table*3 + "<br>")
document.write(table +'X4=' + " " + table*4 + "<br>")
document.write(table +'X5=' + " " + table*5 + "<br>")
document.write(table +'X6=' + " " + table*6 + "<br>")
document.write(table +'X7=' + " " + table*7 + "<br>")
document.write(table +'X8=' + " " + table*8 + "<br>")
document.write(table +'X9=' + " " + table*9 + "<br>")
document.write(table +'X10=' + " " + table*10 + "<br>")


// function 
document.write("<br>");
function juicewala(juicetype) {
document.write('Bro' + ' ' + juicetype + 'ko slices krdo')
document.write("<br>");
document.write('phir' + ' ' + juicetype + 'ki slices ko machine ma daal do')
document.write("<br>");
document.write('jub' + ' ' + juicetype + 'ki slices liquid me hojye')
document.write("<br>");
document.write('tu' + ' ' + juicetype + 'juice ko glass me daal do')
document.write("<br>");
document.write('or' +' ' + juicetype + 'juice sy bhara glass mujhy dydo.')

}

juicewala(prompt('bhai ap ny knsa juice peena hy ap oreder karain'))