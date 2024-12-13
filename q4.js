(function() {
  var dados, qtd;

  require('./stdlib');

  dados = [];

  dados = load_yaml('users.yaml');

  qtd = len(dados);

  print(dados[random(0, qtd - 1)].login + " ganhou o sorteio");

}).call(this);


//# sourceMappingURL=q4.js.map
//# sourceURL=coffeescript