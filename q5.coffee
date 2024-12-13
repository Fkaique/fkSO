require './stdlib'

dados=[]
dados = load_yaml 'hd.yaml'
tam = len(dados)
arquivo=[]
tamanho=[]
print 'deseja adicionar novos arquivos?'
escolha=input()
if escolha=='sim'
    print 'digite o nome de usuario: '
    usuario=input()
    print 'quantos arquivos você deseja? '
    int qtd=input()
    
    for i in [0...qtd]
        print 'digite o nome do arquivo '+i
        arquivo[i]=input()
        print 'digite o tamanho do arquivo '+i
        tamanho[i]=int(input())
    newarq={usuario:usuario, arquivo:arquivo, tamanho:tamanho}
    dados.add(newarq)
    save_yaml 'hd.yaml', dados
    escolha=-1
dados = load_yaml 'hd.yaml'
tam = len(dados)
print 'deseja ver o total de arquivos? '
escolha=input()
if escolha=='sim'
    print 'digite o nome de usuario: '
    usuario=input()
    tamarq=0;
    for i in [0...tam]
        if usuario == dados[i].usuario
            qtdarq=len(dados[i].tamanho)
            tamarqs = dados[i].tamanho
            for j in [0...qtdarq]
                tamarq+=tamarqs[j]
    print 'o espaço ocupado pelo usuario é '+tamarq
    
    