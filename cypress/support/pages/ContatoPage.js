class ContatoPage {
    visit() {
      cy.visit('http://192.168.0.111:8080/index.html');
      
    }
  
    preencherNome(nome) {
      cy.get('#nome').type(nome);
    }
  
    preencherEmail(email) {
      cy.get('#email').type(email);
    }
  
    preencherMensagem(mensagem) {
      cy.get('#mensagem').type(mensagem);
    }
  
    submeterFormulario() {
      cy.get('#contatoForm > button').click();
    }
  }
  
  export default new ContatoPage();
  