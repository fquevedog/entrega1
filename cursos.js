let curso1 = {
	id : 1,
	nombre : 'Fotografia e imagen digital',
	intensidad: '120 horas',
	horario: 'lunes, miercoles y jueves de 6 p.m. a 9 p.m. sabados de 9 a.m. a 12 m.',
	valor: 2781250,
};

let curso2 = {
	id : 2,
	nombre : 'Diseno de empaques',
	intensidad: '120 horas',
	horario: 'martes y jueves de 6 p.m. a 9 p.m. sabados de 10 a.m. a 12 m.',
	valor: 2400000,
};

let curso3 = {
	id : 3,
	nombre : 'Diseno Precolombino',
	intensidad: '100 horas',
	horario: 'Miercoles de 6:00 a 9:00 p.m. y sabados de 8:00 a.m. a 1:00 p.m. ',
	valor: 2400000,
};

	setTimeout(function(){
	console.log(curso1)
	}, 2000);


setTimeout(function(){
	console.log(curso2)
	}, 4000);

setTimeout(function(){
	console.log(curso3)
	}, 6000);




module.exports = {
	curso1,
	curso2,
	curso3
};


