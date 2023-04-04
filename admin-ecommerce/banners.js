fetch('http://localhost:8000/banners')
    .then(res => res.json())
    .then(dados => {
        dados.map(cada => {
            tabela_banners.innerHTML += `
                <tr>
                    <td>${cada.id}</td>
                    <td>${cada.titulo}</td>
                    <td>${cada.descricao}</td>
                    <td><img width="100px" src="${cada.imagem}"></td>
                    <td>
                        <button>Editar</button>
                        <button>Excluir</button>
                    </td>                    
                </tr>
            `;
        })
    });