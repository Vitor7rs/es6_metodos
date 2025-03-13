const alunos = [
	{
		nome: "João Silva",
		nota: 7.5,
	},
	{
		nome: "Maria Silva",
		nota: 8.0,
	},
	{
		nome: "João Santos",
		nota: 4.5,
	},
	{
		nome: "Maria Santos",
		nota: 5.0,
	},
	{
		nome: "Anderson Silva",
		nota: 8.5,
	},
];

function notaMaiorQue6() {
	return console.log(
		alunos.filter((aluno) => aluno.nota > 6).map((aluno) => aluno.nome)
	);
}

notaMaiorQue6();
