(function() {
  var contas, dados, i, j, len, login, matchL;

  require('./stdlib');

  matchL = false;

  dados = [];

  dados = load_yaml('users.yaml');

  print("digite o login: ");

  login = input();

  i = 0;

  for (j = 0, len = dados.length; j < len; j++) {
    contas = dados[j];
    if (contas.login === login) {
      matchL = true;
      dados.delete(i);
      print("removido");
      break;
    }
    i = i + 1;
  }

  if (!matchL) {
    print('usuário não existe');
  }

  save_yaml('users.yaml', dados);

}).call(this);


//# sourceMappingURL=q3.js.map
//# sourceURL=coffeescript