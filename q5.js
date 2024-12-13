(function() {
  var arquivo, dados, escolha, i, j, k, l, m, newarq, qtd, qtdarq, ref, ref1, ref2, tam, tamanho, tamarq, tamarqs, usuario;

  require('./stdlib');

  dados = [];

  dados = load_yaml('hd.yaml');

  tam = len(dados);

  arquivo = [];

  tamanho = [];

  print('deseja adicionar novos arquivos?');

  escolha = input();

  if (escolha === 'sim') {
    print('digite o nome de usuario: ');
    usuario = input();
    print('quantos arquivos você deseja? ');
    int(qtd = input());
    for (i = k = 0, ref = qtd; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
      print('digite o nome do arquivo ' + i);
      arquivo[i] = input();
      print('digite o tamanho do arquivo ' + i);
      tamanho[i] = int(input());
    }
    newarq = {
      usuario: usuario,
      arquivo: arquivo,
      tamanho: tamanho
    };
    dados.add(newarq);
    save_yaml('hd.yaml', dados);
    escolha = -1;
  }

  dados = load_yaml('hd.yaml');

  tam = len(dados);

  print('deseja ver o total de arquivos? ');

  escolha = input();

  if (escolha === 'sim') {
    print('digite o nome de usuario: ');
    usuario = input();
    tamarq = 0;
    for (i = l = 0, ref1 = tam; (0 <= ref1 ? l < ref1 : l > ref1); i = 0 <= ref1 ? ++l : --l) {
      if (usuario === dados[i].usuario) {
        qtdarq = len(dados[i].tamanho);
        tamarqs = dados[i].tamanho;
        for (j = m = 0, ref2 = qtdarq; (0 <= ref2 ? m < ref2 : m > ref2); j = 0 <= ref2 ? ++m : --m) {
          tamarq += tamarqs[j];
        }
      }
    }
    print('o espaço ocupado pelo usuario é ' + tamarq);
  }

}).call(this);


//# sourceMappingURL=q5.js.map
//# sourceURL=coffeescript