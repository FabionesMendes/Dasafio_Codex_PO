class OrcamentoPage {
    visit() {
      cy.visit('http://192.168.0.111:8080/index.html');
    }
  
    preencherValorPassagem(valor) {
      cy.get('#valorPassagem').type(valor);
    }
  
    preencherNumeroPessoas(numero) {
      cy.get('#numeroPessoas').type(numero);
    }
  
    preencherDiasHospedagem(dias) {
      cy.get('#diasHospedagem').type(dias);
    }
  
    preencherDataNascimento(data) {
      cy.get('#dataNascimento').type(data);
    }
  
    submeterFormulario() {
      cy.get('#orcamentoForm > button').click();
    }
  
    validarResultadoVisivel() {
      cy.get('#resultadoOrcamento').should('be.visible');
    }
  }

  export default new OrcamentoPage();
  
  
  