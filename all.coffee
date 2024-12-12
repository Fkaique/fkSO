require './stdlib'

dados =[]
dados = load_yaml "users.yaml"
logado=false;
print 'login [0] cadastrar [1]'
entrada=input()
while 1
    if logado==false
        if entrada=='1'
            print "digite seu login:"
            user = input()

            print "digite sua senha:"
            password = input_password '😀'
            hash_password = hash_md5(password)

            newuser = {login:user, senha:hash_password}
            dados.add(newuser)
            save_yaml "users.yaml", dados
            logado=true
            entrada=-1
        else if entrada=='0'
            qtd = len(dados)
            print "----------LOGIN----------"
            print "digite seu login: "
            user = input()
            print "digite sua senha: "
            password = input_password '*'
            password_hash = hash_md5(password)
            check = false
            for i in [0...qtd]
                if user == dados[i].login
                    check = true
                    if password_hash == dados[i].senha
                        print "bem vindo"
                        logado=true
                    else
                        print color('r',"bandido detectado!")
                        logado=false
                
            if check == false
                print "usuario nao existe"
                logado=false

            entrada=-1
    if logado==true
        print 'sorteio[1] delete[2] sair[0]'
        entrada=input()
        if entrada=='1'
            qtd = len(dados)
            print dados[random 0,qtd-1].login+" ganhou o sorteio"
            entrada=-1
        else if entrada=='2'
            matchL = false
            print "digite o login: "
            login = input()
            i = 0
            for contas in dados
                if contas.login is login
                    matchL = true
                    dados.delete(i)
                    print "removido"
                    break
                i = i + 1
            unless matchL
                print 'usuário não existe'
            save_yaml 'users.yaml', dados
            entrada=-1
        else if entrada=='0'
            break
