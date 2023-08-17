var valor = prompt("Ingrese valor del presupuesto")
var derma 
var trauma
var pedia

derma = valor*0.4
trauma = valor*0.3
pedia = valor*0.25
 
document.write("<header><h1>Presupuesto para Dermatología: $ " + derma + "</h1></header>")
document.write("<header><h1>Presupuesto para Traumatología: $ " + trauma + "</h1></header>")
document.write("<header><h1>Presupuesto para Pediatría: $" + pedia + "</h1></header>")