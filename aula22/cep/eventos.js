function buscarCEP() {

    fetch (`https://viacep.com.br/ws/${cep.value}/json`) // forma 1 de fazer
        .then(res => res.json())
        .then(conteudo => {
            logradouro.value = conteudo.logradouro;
            bairro.value = conteudo.bairro;
            cidade.value = conteudo.localidade;
            uf.value = conteudo.uf;
        });


    // forma 2 de fazer
    // fetch(`https://viacep.com.br/ws/${cep.value}/json`)              // vai buscar o endereço
    //     .then(function (resposta){                                   // volta com o endereço
    //         return resposta.json();
    //     }) 
    //     .then(function (conteudo){                                    // usa o endereço aqui
    //         logradouro.value = conteudo.logradouro;
    //         bairro.value = conteudo.bairro;
    //         cidade.value = conteudo.localidade;
    //         uf.value = conteudo.uf;
    //     });                                            

    
}