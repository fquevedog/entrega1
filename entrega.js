const curso = require ('./cursos');
const argv = require('yargs').argv
const fs = require('fs');

console.log('\n'+'Ingrese ID del curso deseado: ' + argv.id);
console.log('Su nombre: ' + argv.name);
console.log('Su numero de identificacion: ' + argv.di);

//let cursoescogido= curso.find(function (cursoesc){return cursoesc.nombre == nombre});


if (argv.id==1){console.log(curso.curso1);
		texto = 'Su nombre es: '+ argv.name + '\n'+ 'Su identificacion es: '+ argv.di + '\n'+'Eligio el siguiente curso:'+ '\n' + JSON.stringify(curso.curso1);
}
if (argv.id==2){console.log(curso.curso2);
		texto = 'Su nombre es: '+ argv.name + '\n'+ 'Su identificacion es: '+ argv.di + '\n'+'Eligio el siguiente curso:'+ '\n' + JSON.stringify(curso.curso2);
}
if (argv.id==3){console.log(curso.curso3);
		texto = 'Su nombre es: '+ argv.name + '\n'+ 'Su identificacion es: '+ argv.di +'\n'+ 'Eligio el siguiente curso:'+ '\n' + JSON.stringify(curso.curso3);
}



fs.writeFile('mensaje.txt', texto, (err) => {
  if (err) throw err;
  console.log('El archivo se ha guardado!');
});
