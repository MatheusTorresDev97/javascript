//Date Object

//NEW DATE()
//O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

const agora = new Date();
agora;
// Semana Mês Dia Ano HH:MM:SS GMT

agora.getDate(); // Dia
agora.getDay(); // Dia da Semana ex: 5 = Fri
agora.getMonth(); // Número dia mês
agora.getFullYear(); // Ano
agora.getHours(); // Hora
agora.getMinutes(); // Minutos
//O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.
agora.getTime(); // ms desde 1970
agora.getUTCHours() - 3; // Brasília

//DIAS ATÉ
//Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.
function contarDiasAteHoje(data) {
    // Criar objetos Date para a data fornecida e para a data de hoje
    const dataFornecida = new Date(data);
    const hoje = new Date();
  
    // Verificar se a data fornecida é válida
    if (isNaN(dataFornecida)) {
      return "Data inválida. Certifique-se de fornecer uma data no formato 'YYYY-MM-DD'.";
    }
  
    // Definir o tempo em milissegundos entre as duas datas
    const diferencaTempo = hoje.getTime() - dataFornecida.getTime();
  
    // Calcular o número de dias
    const dias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
  
    // Formatar a data fornecida
    const diaFornecido = dataFornecida.getDate();
    const mesFornecido = dataFornecida.getMonth() + 1; // Lembrando que os meses são baseados em zero
    const anoFornecido = dataFornecida.getFullYear();
    const dataFormatada = `${diaFornecido}/${mesFornecido}/${anoFornecido}`;
  
    return `Dias desde ${dataFormatada} até hoje: ${dias}`;
  }
  
  // Exemplo de uso:
  const dataFornecida = '2023-06-25';
  console.log(contarDiasAteHoje(dataFornecida));