// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://google.com')
//     cy.get(".gLFyf").type("digital college")
//     cy.get('.gNO89b').click({multiple: true})

//   })
// })

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://pt-br.facebook.com/login/')
//     cy.get("#email").type("rebeca@gmail.com")
//     cy.get('#pass').type("123456")
//     cy.get("#loginbutton").click({multiple: true})
//   })
// })

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/produtos')
    cy.get("#email").type("rebeca@gmail.com")
    cy.get('#pass').type("123456")
    cy.get("#loginbutton").click({multiple: true})
  })
})


