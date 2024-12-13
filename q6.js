(function() {
  var arquivo, dados, i, j, k, l, maior, qtdarq, ref, ref1, tam;

  require('./stdlib');

  dados = [];

  dados = load_yaml('hd.yaml');

  tam = len(dados);

  for (i = k = 0, ref = tam; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
    qtdarq = len(dados[i].tamanho);
    maior = dados[i].tamanho[0];
    for (j = l = 0, ref1 = qtdarq; (0 <= ref1 ? l < ref1 : l > ref1); j = 0 <= ref1 ? ++l : --l) {
      if (dados[i].tamanho[j] > maior) {
        maior = dados[i].tamanho[j];
        arquivo = dados[i].arquivo[j];
      }
    }
    print('o maior arquivo de ' + dados[i].usuario + ' é ' + arquivo + ' com ' + maior + ' de tamanho.');
  }

}).call(this);


//# sourceMappingURL=q6.js.map
//# sourceURL=coffeescript