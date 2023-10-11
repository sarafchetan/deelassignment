import '../../support/index'

describe('Launch Deel web application test cases', () => {

    it('QA enginner details cases from Canada country ', () => {
        cy.visit("http://growth.deel.training/dev/salary-insights", { failOnStatusCode: false })
        cy.contains('salary-insights')
        cy.get("[placeholder='Select a role']").click()
        cy.get("[placeholder='Select a role']").type('QA Engineer')
        cy.get('#mui-2').click({ force: true })
        cy.get('#mui-2-option-0').click()


        cy.get("[placeholder='Select a country']")
        cy.get("[placeholder='Select a country']").type('Canada')
        cy.get('#mui-4').click({ force: true })
        cy.get('#mui-4-option-0').click()

        cy.get("[type='submit']").click()

        cy.get('.css-9n847e > .MuiTypography-root')
            .should('be.visible')
            .and('contain', 'Canada')
            .and('have.length', 1)
    })

})

