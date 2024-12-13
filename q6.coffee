require './stdlib'

dados=[]
dados = load_yaml 'hd.yaml'
tam = len(dados)

for i in [0...tam]
    qtdarq = len(dados[i].tamanho)
    maior = dados[i].tamanho[0]
    for j in [0...qtdarq]
        if dados[i].tamanho[j]>maior
            maior = dados[i].tamanho[j]
            arquivo=dados[i].arquivo[j]
    print 'o maior arquivo de '+dados[i].usuario+' é '+arquivo+' com '+maior+' de tamanho.'