import orcamentoPage from "../support/pages/Orcamento";



describe('Testes de Orçamento', () => {
  //const orcamentoPage = new OrcamentoPage();

  it('Deve preencher o formulário de orçamento corretamente e validar o resultado', () => {
    orcamentoPage.visit('http://192.168.0.111:8080/index.html');
    orcamentoPage.preencherValorPassagem('200');
    orcamentoPage.preencherNumeroPessoas('2');
    orcamentoPage.preencherDiasHospedagem('4');
    orcamentoPage.preencherDataNascimento('1990-11-10');
    orcamentoPage.submeterFormulario();
    orcamentoPage.validarResultadoVisivel();
  });

  it('Deve preencher o formulário de orçamento com valor de passagem maior e validar o resultado', () => {
    orcamentoPage.visit('http://192.168.0.111:8080/index.html');
    orcamentoPage.preencherValorPassagem('400');
    orcamentoPage.preencherNumeroPessoas('2');
    orcamentoPage.preencherDiasHospedagem('4');
    orcamentoPage.preencherDataNascimento('1990-111-10');
    orcamentoPage.submeterFormulario();
    orcamentoPage.validarResultadoVisivel();
  });
});
