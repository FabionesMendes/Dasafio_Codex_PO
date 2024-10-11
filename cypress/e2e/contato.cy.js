import contatoPage from "../support/pages/ContatoPage";



describe('Testes de Contato', () => {
  //const contatoPage = new ContatoPage();

  it('Deve preencher o formulário de contato e submeter', () => {
    contatoPage.visit();
    contatoPage.preencherNome('Fabio Henrique da Silva Mendes');
    contatoPage.preencherEmail('fabiohmendes01@gmail.com');
    contatoPage.preencherMensagem('Teste_codex');
    contatoPage.submeterFormulario();
  });
});
