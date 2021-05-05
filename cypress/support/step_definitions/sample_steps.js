import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import {add} from '../../../src'

When('I test s site', () => {
    cy.visit('/', {
        onBeforeLoad (win) {
            cy.spy(win.console, 'log').as('console.log')
        }
    })
    cy.contains('Hello world').should('be.visible')
    //cy.get('@console.log').should('have.been.calledWith', 'index.js')

    expect(add).to.be.a('function')
    expect(add(2, 3)).to.equal(5)
});
