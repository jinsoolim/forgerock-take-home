describe("The Home Page", () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})

describe("The bubble chart", () => {
  it('successfully loads', () => {
    cy.get('svg')
      .children('g')
      .should('have.length', 13)

    cy.get('.title')
      .should('contain', 'Age by Height and Weight')

    cy.get('.chart-axis')
      .should('contain', 'Weight')

    cy.get('.chart-axis')
      .should('contain', 'Height')

    cy.get('.circles')
      .should('have.length', 9)
  })
})

// describe("The side bars", () => {
//   it("Opens right bar", () => {
//     cy.get('g')
//       .filter('contain', 'Phyllis Vance')

//   })
// })
