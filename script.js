function mostrarNome() {
    // gera uma constante que recebe pelo id nome e trasforma em valor (value)
    const nome = document.getElementById("nome").value; // Obtém o valor do input
    let mensagem = ''; //declarando mensagem para reprodução
    let a = 1;
    let b = 0;
    let m = 0;
    
    for(let x = 0;x <= nome;x++) //estrutura de repetição fibonacci
         {
        mensagem += ` ${m} `; // acumulo de mensagem por repetição
        m = a + b;
        a = b;
        b = m;      

}

    // transformando o conteudo de mensagem em resultado para o HTML 
    document.getElementById("resultado").innerText = mensagem; // expondo a mensagem
}
