(function() {
  var check, content, i, j, password, password_hash, qtd, ref, user;

  require('./stdlib');

  content = load_yaml("users.yaml");

  qtd = len(content);

  print("----------LOGIN----------");

  print("digite seu login: ");

  user = input();

  print("digite sua senha: ");

  password = input_password('*');

  password_hash = hash_md5(password);

  check = false;

  for (i = j = 0, ref = qtd; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
    if (user === content[i].login) {
      check = true;
      if (password_hash === content[i].senha) {
        print("bem vindo");
      } else {
        print(color('r', "bandido detectado!"));
        play_sound('./audio/banido.mp3');
      }
    }
  }

  if (check === false) {
    print("usuario nao existe");
  }

}).call(this);


//# sourceMappingURL=q2.js.map
//# sourceURL=coffeescript