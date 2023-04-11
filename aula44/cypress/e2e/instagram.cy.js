describe('Testar página de Login', () => {
    beforeEach(() => {  // antes de fazer qualquer coisa
        cy.visit('https://www.instagram.com/');
    });  
    it('testar se o login retorna senha incorreta', () => {
        // garantindo que tem um "button" com o texto "Entrar"
        cy.get('button').contains('Log In').click();

        //garantindo que tem um "button" com o texto "Login"
        cy.get('button').contains('Log in');

        cy.contains('Forgot password');

        cy.get('[name="username"]').type("rebe@gmail.com");
        cy.get('[name="password"]').type("123456")

        //
        cy.get('[type="submit"]').click();

        cy.wait(2000);

        cy.contains('Sua senha está incorreta');
    });
  });


