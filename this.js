function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Ana', 
    idade: 60,
};

const pessoa2 = {
    nome: 'Pedro',
    idade: 22,
};

const animal = {
    nome: 'Pipoca',
    idade: 1,
    raca: 'Pug',
};

console.log(calculaIdade.call(animal,6));
