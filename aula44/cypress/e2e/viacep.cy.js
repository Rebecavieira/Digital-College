describe('Testar página de Cep', () => {
    beforeEach(() => {  // antes de fazer qualquer coisa
        cy.visit('https://alessandrofeitoza.github.io/endereco-via-cep/');
    });  
    it('buscar o cep', () => {
       cy.get('#cep').type("60331790").blur()
       cy.wait(2000)
       cy.get('#logradouro').should('have.value', 'Rua Seis Companheiros')
       cy.get('#bairro').should('have.value', 'Barra do Ceará')
       cy.get('#cidade').should('have.value', 'Fortaleza')
       cy.get('#uf').should('have.value', 'CE')
       cy.get('button').click();
    });
   
  });
