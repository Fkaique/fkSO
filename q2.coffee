require './stdlib'
content = load_yaml "users.yaml"
qtd = len(content)

print "----------LOGIN----------"
print "digite seu login: "
user = input()
print "digite sua senha: "
password = input_password '*'
password_hash = hash_md5(password)
check = false
for i in [0...qtd]
    if user == content[i].login
        check = true
        if password_hash == content[i].senha
            print "bem vindo"
        else
            print color('r',"bandido detectado!")
            play_sound './audio/banido.mp3'
    
if check == false
    print "usuario nao existe"

