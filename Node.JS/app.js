//Primeira linha está incluindo uma biblioteca, no caso, http
const http = require('http');
const url = require('url');
const queryString = require('query-string');

//Segunda e terceira linha, define o IP e a porta onde o código vai rodar
const hostname = '127.0.0.1';
const port = 3000;

//Bloco de implementação da regra de negócio
const server = http.createServer((req, res) => {
  //Pegar a pergunta na URL
  const params = queryString.parse(url.parse(req.url, true).search)
  // console.log(params);
  let resposta;
  if(params.pergunta == 'melhor-filme'){
    resposta = 'star wars';
  }
  else if(params.pergunta == 'melhor-tecnologia-backend'){
    resposta = 'nodejs';
  }
  else{
    resposta = 'não sei, desculpe!';
  }
  //Verificar a pergunta e escolher uma resposta

  //Retornar a resposta escolhida
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

//Bloco de execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// localhost:3000/?pergunta=melhor-filme