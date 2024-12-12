require './stdlib'

matchL = false
dados = []
dados = load_yaml 'users.yaml'

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