(function() {
  var content, hash_password, newuser, password, user;

  require('./stdlib');

  content = [];

  content = load_yaml("users.yaml");

  while (true) {
    print("digite seu login:");
    user = input();
    print("digite sua senha:");
    password = input_password('😀');
    if (user === '0' && password === '0') {
      break;
    }
    hash_password = hash_md5(password);
    newuser = {
      login: user,
      senha: hash_password
    };
    content.add(newuser);
    save_yaml("users.yaml", content);
  }

}).call(this);


//# sourceMappingURL=q1.js.map
//# sourceURL=coffeescript