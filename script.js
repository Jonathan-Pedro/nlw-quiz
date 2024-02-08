const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "var myVar;",
      "let myVar;",
      "const myVar;"
    ],
    correta: 2 // Índice da resposta correta, neste caso, const myVar;
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "shift()",
      "splice()"
    ],
    correta: 0 // Índice da resposta correta, neste caso, pop();
  },
  {
    pergunta: "O que o método 'charAt()' faz em JavaScript?",
    respostas: [
      "Retorna o último caractere de uma string.",
      "Retorna o caractere em uma posição específica de uma string.",
      "Remove o último caractere de uma string."
    ],
    correta: 1 // Índice da resposta correta, neste caso, Retorna o caractere em uma posição específica de uma string.
  },
  {
    pergunta: "Qual dessas opções é um método de um objeto String que retorna o índice da primeira ocorrência de um valor especificado?",
    respostas: [
      "indexOf()",
      "search()",
      "startsWith()"
    ],
    correta: 0 // Índice da resposta correta, neste caso, indexOf();
  },
  {
    pergunta: "Qual desses métodos é usado para concatenar duas ou mais strings em JavaScript?",
    respostas: [
      "join()",
      "concat()",
      "split()"
    ],
    correta: 1 // Índice da resposta correta, neste caso, concat();
  },
  {
    pergunta: "Qual é o operador de comparação estrita em JavaScript?",
    respostas: [
      "===",
      "==",
      "="
    ],
    correta: 0 // Índice da resposta correta, neste caso, ===;
  },
  {
    pergunta: "Como você pode declarar um objeto em JavaScript?",
    respostas: [
      "{ }",
      "[ ]",
      "( )"
    ],
    correta: 0 // Índice da resposta correta, neste caso, { };
  },
  {
    pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
    respostas: [
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5)"
    ],
    correta: 0 // Índice da resposta correta, neste caso, for (i = 0; i <= 5; i++);
  },
  {
    pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
    respostas: [
      "Retorna o número com uma quantidade especificada de casas decimais.",
      "Converte um número em uma string representando o número em notação exponencial.",
      "Arredonda um número para o inteiro mais próximo."
    ],
    correta: 0 // Índice da resposta correta, neste caso, Retorna o número com uma quantidade especificada de casas decimais.
  },
  {
    pergunta: "O que o método 'push()' faz em JavaScript?",
    respostas: [
      "Remove o último elemento de um array.",
      "Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.",
      "Inverte a ordem dos elementos de um array."
    ],
    correta: 1 // Índice da resposta correta, neste caso, Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
  }
];

const quiz = document.querySelector('#quiz')
// pesquisa o conteudo pelo seletor no caso o template. A variavel recebe o conteudo do seletor.
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length 
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


// loop ou laço de repetição 
for(const item of perguntas) {
  // clona o conteudo de dentro da variavel template e salva na varialvel quizItem. cloneNode e utilizado para clonar o conteudo. 
  const quizItem = template.content.cloneNode(true)
  // usa o querySelector para pesquisar o conteudo e depois substitui um valor com o textContent.
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    // setAttribute e utilizado para dar um novo valor. indexOf pega o indice de um objeto.
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()
  
  // coloca o item na tela
  quiz.appendChild(quizItem)
}