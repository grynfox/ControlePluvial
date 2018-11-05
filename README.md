# Controle Pluvial e Reuso Hidrico

Utilizado neste projeto
* ASP.NET MVC 
* Angular 5
* SQL Express 2017

##  Funcionamento do Projeto
Para informações mais detalhadas verifique a [Wiki](https://github.com/grynfox/ControlePluvial/wiki)
### Dica: Verifique o caminho do BD antes de iniciar o projeto no arquivo web.config
O campo connectionstring deve apontar para o caminho do SQL do servidor, o catalog deve ser substituido pelo nome do Banco ataxado no servidor e sugerrimos que use o usuario SA com a senha cadastrada durante o momento de configuração da instancia do SQL.
![Alt Text](https://i.imgur.com/JmpD5ji.jpg)

### Abaixo seguem alguns exemplos de funções presentes no projeto.
Home Page
![Alt Text](https://i.imgur.com/4u3m8Kw.jpg)

Home Page responsiva

![Alt Text](https://i.imgur.com/QlGb0rF.jpg)

### Funcionalidade do menu Gráficos

![Alt Text](https://i.imgur.com/1UAey8v.jpg)

No menu de graficos é possivel ver uma media mensal, ajustar um periodo a qual deseja montar o grafico, visualizar o percentual medio de consumo diario por meio do PieChart, e tambem para facilitar a visualização do usuario temos um gráfico no formato de barras.


### Funcionamento do menu Dispositivos

![Alt Text](https://i.imgur.com/Ka2gv5P.jpg)

No menu de dispositivos é diponibilizado ao usuario os dispositivos que se encontram ativos, alem de poder cadastrar um novo dispositivo, alterar o nome de um dispositivo existe ou excluir um que não é mais utilizado.

### Funcionamento do menu Pulsos

![Alt Text](https://i.imgur.com/YVbnR2K.jpg)

Para controle do usuario é apresentado os pulsos recebidos, a data que foi recebido e qual o codigo do dispositivo que enviou o pulso.

### Tabelas da nossa DataBase.

![Alt Text](https://i.imgur.com/agKU2KJ.jpg)
