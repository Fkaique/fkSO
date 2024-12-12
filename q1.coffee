require './stdlib'
content =[]
content = load_yaml "users.yaml"
print "digite seu login:"
user = input()

print "digite sua senha:"
password = input_password '😀'
hash_password = hash_md5(password)

newuser = {login:user, senha:hash_password}
content.add(newuser)
save_yaml "users.yaml", content




