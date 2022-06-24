const alunos =[
    {
        nome:'João',
        nota: 9.0,
        turma:'A',
    },
    {
        nome:'Maria',
        nota:7.8,
        turma:'B',
    },
    {
        nome:'Pedro',
        nota:6.9,
        turma: 'A',
    }
]; 

function aprovados(alunos,media_final=7.0){
    let lista_aprovados = [];
    for (let i = 0;i<alunos.length; i++){
        const {nome, nota} = alunos[i];

        if (nota>=media_final) {
            lista_aprovados.push(nome); 
        }
    }

    return lista_aprovados;
}

console.log(aprovados(alunos));