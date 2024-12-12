require './stdlib'
content =[]
content = load_yaml "users.yaml"
loop
    print "digite seu login:"
    user = input()

    print "digite sua senha:"
    password = input_password '😀'
    if user == '0' and password == '0'
        break
    hash_password = hash_md5(password)

    newuser = {login:user, senha:hash_password}
    content.add(newuser)
    save_yaml "users.yaml", content




