// CRIANDO A FUNÇÃO ADICIONAR
// A FUNÇÃO ADICIONAR CHAMA A FUNÇÃO ADICIONARJOGO E DIZ PRA ELA QUE É UM JOGO NOVO, NÃO UM JOGO QUE FOI LIDO DO LOCALSTORE DE UMA SESSÃO PASSADA
function adicionar(event) {
  event.preventDefault(); // PREVINE QUE AO ADICIONAR QUALQUER JOGO A PÁGINA DÊ REUNLOAD
  let nome = document.getElementById("nome_do_jogo").value; // PEGANDO O NOME DO JOGO
  let descricao = document.getElementById("descricao_do_jogo").value; // PEGANDO A DESCRIÇÃO DO JOGO
  let botoes_favorito = document.getElementsByName("favorito"); // PEGANDO OS BOTÕES QUE SIMBOLIZAM O ESTADO DE FAVORITO
  // Itere pelos botões de rádio para encontrar o selecionado
  let botao_checado = 0, resposta_selecionada = 0;
  for (botao_checado = 0; botao_checado < 2; botao_checado++) {
    if (botoes_favorito[botao_checado].checked) { // SE A CAIXA ESTIVER SELECIONADA
      botoes_favorito[botao_checado].checked = false; // DESMARQUE A CAIXA PARA O PRÓXIMO JOGO A SER ADICIONADO
      break; // SAIR DO LOOP CASO TENHA ENCONTRADO UM BOTÃO MARCADO
    }
  }
  if (botao_checado == 0) { // SE O BOTÃO CHECADO FOR O PRIMEIRO (o Sim) ADICIONE COMO FAVORITO
    if(nome !== "" && descricao !== "") { // CONFERINDO SE OS CAMPOS NOME E DESCRIÇÃO ESTÃO PREENCHIDOS
      adicionarJogo(nome, descricao, 1, 1);
      // ZERE OS VALORES DE NOME E DESCRIÇÃO PARA O PRÓXIMO JOGO
      document.getElementById("nome_do_jogo").value = "";
      document.getElementById("descricao_do_jogo").value = ""; 
    }
  }
  else if (botao_checado == 1) { // SENÃO SE O BOTÃO CHECADO FOR O SEGUNDO (o Não) ADICIONE COMO NÃO-FAVORITO
    if(nome !== "" && descricao !== "") { // CONFERINDO SE OS CAMPOS NOME E DESCRIÇÃO ESTÃO PREENCHIDOS
      adicionarJogo(nome, descricao, 0, 1);
      // ZERE OS VALORES DE NOME E DESCRIÇÃO PARA O PRÓXIMO JOGO
      document.getElementById("nome_do_jogo").value = "";
      document.getElementById("descricao_do_jogo").value = ""; 
    }
  }
  // POR LÓGICA, SE O USUÁRIO NÃO MARCOU "SIM" OU "NÃO" PRA FAVORITO, POR PADRÃO NÃO IREMOS ADICIONAR O JOGO
}
