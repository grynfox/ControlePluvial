var tab2Clicado = false;
var tab3Clicado = false;
var donutEmpty = "{label:'a' value:'0'},{label:'b' value:'0'},{label:'c' value:'0'}";
//Função de inserir a máscara de data
function mascaraData(campo, e) {
    var kC = (document.all) ? event.keyCode : e.keyCode;
    var data = campo.value;

    if (kC != 8 && kC != 46) {
        if (data.length == 2) {
            campo.value = data += '/';
        }
    }
}

function mascaraData2(campo, e) {
    var kC = (document.all) ? event.keyCode : e.keyCode;
    var data = campo.value;

    if (kC != 8 && kC != 46) {
        if (data.length == 2) {
            campo.value = data += '/';
        }
        if (data.length == 5) {
            campo.value = data += '/';
        }
    }
}

//Busca dados de preenchimento do gráfico
function Graph(numtab, callback) {
    var url, data;
    if (numtab == 1) {
        if ($('#DateFrom').val() == "") {
            Q.alert("Data inicial preenchimento obrigatório!");
            return;
        } else if ($('#DateFrom2').val() == "") {
            Q.alert("Data final preenchimento obrigatório!");
            return;
        }
        url = Q.resolveUrl('~/AdminLTE/Charts/Filtro/GetDateChart');
        data = { DataInicial: $('#DateFrom').val(), DataFinal: $('#DateFrom2').val() };

    }
    else if (numtab == 2) {
        if ($('#DateFrom3').val() == "") {
            Q.alert("Data preenchimento obrigatório!");
            return;
        }
        url = Q.resolveUrl('~/AdminLTE/Charts/Filtro/GetDateChart2');
        data = { DataReferencia: $('#DateFrom3').val() };
    }
    else if (numtab == 3) {
        var stringArray = new Array();
        var i = -1;
        var conteudo = "";
        conteudo = $('#DateFrom5').val();
        if (conteudo != "") {
            i++;
            stringArray[i] = conteudo;
        }
        conteudo = $('#DateFrom6').val()
        if (conteudo != "") {
            i++;
            stringArray[i] = conteudo;
        }
        conteudo = $('#DateFrom7').val();
        if (conteudo != "") {
            i++;
            stringArray[i] = conteudo;
        }
        if (i == -1) {
            Q.alert("Preencha alguma das Datas de Comparação.");
            return;
        }

        url = Q.resolveUrl('~/AdminLTE/Charts/Filtro/GetDateChart3');
        data = { DataReferencia: $('#DateFrom4').val(), DataComparacao: stringArray };
    }

    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        traditional: true,
        success: function (result) {
            let a = $.parseJSON(JSON.stringify(result));
            if (a[0].erro != null) {
                alert(a[0].erro);
                callback("");
            }
            callback(a);
        },
        error: function (xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}

function AtualizaLegenda2(numtab, grafico) {
    if (numtab == 2) {
        var legenda2 = $('#Acompanhamento-legend');
        legenda2.empty();
        var indice2 = 1;
        for (var i = 0; i < grafico.options.barColors.length;i++){
            var legendItem2 = $('<span></span>').text(grafico.options.labels[i]).prepend('&nbsp;&nbsp;&nbsp;<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>&nbsp;&nbsp;');
            legendItem2.find('i').css('backgroundColor', grafico.options.barColors[i]);
            legenda2.append(legendItem2)
            indice2++;
        }
    }
}

function AtualizaLegenda3(numtab, grafico)
{
    if (numtab == 1) {
        if (grafico.data == donutEmpty)
            return;
        var legenda3 = $('#Potencial-legend2');
        legenda3.empty();
        grafico.data.forEach(function (label, i) {
            var legendItem3 = $('<span></span>').text(label['label'] + ' (' + label['value'] + '%)').prepend('&nbsp;&nbsp;&nbsp;<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>&nbsp;&nbsp;');
            legendItem3.find('i').css('backgroundColor', grafico.options.colors[i]);
            legenda3.append(legendItem3);
        });
    }
}
function AtualizaLegenda(numtab, grafico)  {
    if (numtab == 1) {
        if (grafico.data == donutEmpty)
            return;
        var legenda = $('#Potencial-legend');
        legenda.empty();
        grafico.data.forEach(function (label, i) {
            var legendItem = $('<span></span>').text(label['label'] + ' (' + label['value'] + '%)').prepend('&nbsp;&nbsp;&nbsp;<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>&nbsp;&nbsp;');
            legendItem.find('i').css('backgroundColor', grafico.options.colors[i]);
            legenda.append(legendItem);
        });
    }
    else if (numtab == 2) {
        var legenda = $('#ColaboradorSemanal-legend');
        legenda.empty();
        var indice = 1;
        grafico.options.barColors.forEach(function (e) {
            var legendItem = $('<span></span>').text('Semana ' + indice).prepend('&nbsp;&nbsp;&nbsp;<i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>&nbsp;&nbsp;');
            legendItem.find('i').css('backgroundColor', e);
            legenda.append(legendItem)
            indice++;
        });
    }
}

function AtualizaTabela(dados,label) {
    var metaTotal = 0;
    var racsTotal = 0;

    for (var i = 1; i <= dados.length; i++) {
        $('#tab_nome_sem' + i).text(dados[i - 1].nomeSemana);
        $('#tab_meta_sem' + i).text(dados[i - 1].metaSemana);
        $('#tab_realizado_sem' + i).text(dados[i - 1].racsSemana);
        $('#tab_percentual_sem' + i).text(dados[i - 1].percentualSemana.toFixed(2) + '%');

        metaTotal += dados[i - 1].metaSemana;
        racsTotal += dados[i - 1].racsSemana;
    }

    $('#tab_meta_total').text(metaTotal);
    $('#tab_realizado_total').text(racsTotal);
    $('#tab_percentual_total').text((metaTotal != 0 ? racsTotal / metaTotal * 100 : 0).toFixed(2) + '%');

    //Atualizar label Acompanhamento Mensal--------------------
    $('#acompanhamento-mes').text(label);
    //---------------------------------------------------------
}

function Tab2_Click() {
    if (!tab2Clicado) {
        tab2Clicado = true;
        Graph(2, function (graph) {;
            //Gráficos da Tab 2 ------------------------------------------------------------------------------
            //Por Dia-------------------------------------
            var graficoPorDiaSemana1 = new Morris.Bar({
                element: 'Semana01PorDia-chart',
                resize: true,
                data: graph[0].graficoPorDiaSemana1,
                barColors: ['#3C8DBC'],
                xkey: 'Dia',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 60,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorDiaSemana2 = new Morris.Bar({
                element: 'Semana02PorDia-chart',
                resize: true,
                data: graph[0].graficoPorDiaSemana2,
                barColors: ['#3C8DBC'],
                xkey: 'Dia',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 60,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorDiaSemana3 = new Morris.Bar({
                element: 'Semana03PorDia-chart',
                resize: true,
                data: graph[0].graficoPorDiaSemana3,
                barColors: ['#3C8DBC'],
                xkey: 'Dia',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 60,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorDiaSemana4 = new Morris.Bar({
                element: 'Semana04PorDia-chart',
                resize: true,
                data: graph[0].graficoPorDiaSemana4,
                barColors: ['#3C8DBC'],
                xkey: 'Dia',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 60,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            //Por Dia-------------------------------------
            //Acompanhamento Mensal--------------------------------
            var graficoPorAcompanhamentoMensal = new Morris.Bar({
                element: 'AcompanhamentoMensal-chart',
                resize: true,
                data: graph[0].graficoPorAcompanhamentoMensal,
                barColors: ['#CC6600', '#006600'],
                xkey: 'Semana',
                ykeys: ['Nracs', 'Nmeta'],
                labels: ['Número de Racs', 'Meta'],
                hideHover: true,
                xLabelAngle: 60,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            //Acompanhamento Mensal--------------------------------
            //Por Área------------------------------------
            var graficoPorAreaSemana1 = new Morris.Bar({
                element: 'Semana01PorArea-chart',
                resize: true,
                data: graph[0].graficoPorAreaSemana1,
                barColors: ['#009966'],
                xkey: 'Descricao',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 82,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorAreaSemana2 = new Morris.Bar({
                element: 'Semana02PorArea-chart',
                resize: true,
                data: graph[0].graficoPorAreaSemana2,
                barColors: ['#009966'],
                xkey: 'Descricao',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 82,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorAreaSemana3 = new Morris.Bar({
                element: 'Semana03PorArea-chart',
                resize: true,
                data: graph[0].graficoPorAreaSemana3,
                barColors: ['#009966'],
                xkey: 'Descricao',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 82,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorAreaSemana4 = new Morris.Bar({
                element: 'Semana04PorArea-chart',
                resize: true,
                data: graph[0].graficoPorAreaSemana4,
                barColors: ['#009966'],
                xkey: 'Descricao',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 82,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            //Por Área------------------------------------
            //Por Colaborador--------------------------------------------
            var graficoPorColaboradorSemanal = new Morris.Bar({
                element: 'ColaboradorSemanal-chart',
                resize: true,
                data: graph[0].graficoPorColaboradorSemanal,
                barColors: ['#3C8DBC', 'red', 'green', '#750ad8'],
                xkey: 'Descricao',
                ykeys: ['Semana1', 'Semana2', 'Semana3', 'Semana4'],
                labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
                hideHover: true,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10,
                xLabelAngle: 60,
            });

            //Por Colaborador--------------------------------------------
            //Por Tipo-----------------------------------------
            var graficoPorTipoSemana1 = new Morris.Bar({
                element: 'Semana01PorTipo-chart',
                resize: true,
                data: graph[0].graficoPorTipoSemana1,
                barColors: ['#009966'],
                xkey: 'TipoOcorrencia',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 70,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorTipoSemana2 = new Morris.Bar({
                element: 'Semana02PorTipo-chart',
                resize: true,
                data: graph[0].graficoPorTipoSemana2,
                barColors: ['#009966'],
                xkey: 'TipoOcorrencia',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 70,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorTipoSemana3 = new Morris.Bar({
                element: 'Semana03PorTipo-chart',
                resize: true,
                data: graph[0].graficoPorTipoSemana3,
                barColors: ['#009966'],
                xkey: 'TipoOcorrencia',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 70,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorTipoSemana4 = new Morris.Bar({
                element: 'Semana04PorTipo-chart',
                resize: true,
                data: graph[0].graficoPorTipoSemana4,
                barColors: ['#009966'],
                xkey: 'TipoOcorrencia',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                xLabelAngle: 70,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            //Por Tipo-----------------------------------------
            //Por Status-----------------------------------------
            var graficoPorStatusSemana1 = new Morris.Bar({
                element: 'Semana01PorStatus-chart',
                resize: true,
                data: graph[0].graficoPorStatusSemana1,
                barColors: ['#0066CC'],
                xkey: 'Status',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorStatusSemana2 = new Morris.Bar({
                element: 'Semana02PorStatus-chart',
                resize: true,
                data: graph[0].graficoPorStatusSemana2,
                barColors: ['#0066CC'],
                xkey: 'Status',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorStatusSemana3 = new Morris.Bar({
                element: 'Semana03PorStatus-chart',
                resize: true,
                data: graph[0].graficoPorStatusSemana3,
                barColors: ['#0066CC'],
                xkey: 'Status',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorStatusSemana4 = new Morris.Bar({
                element: 'Semana04PorStatus-chart',
                resize: true,
                data: graph[0].graficoPorStatusSemana4,
                barColors: ['#0066CC'],
                xkey: 'Status',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            //Por Status-----------------------------------------
            //Por Potencial---------------------------------------
            var graficoPorPotencialSemana1 = new Morris.Bar({
                element: 'Semana01PorPotencial-chart',
                resize: true,
                data: graph[0].graficoPorPotencialSemana1,
                barColors: ['#FF6633'],
                xkey: 'Status',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorPotencialSemana2 = new Morris.Bar({
                element: 'Semana02PorPotencial-chart',
                resize: true,
                data: graph[0].graficoPorPotencialSemana2,
                barColors: ['#FF6633'],
                xkey: 'Status',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorPotencialSemana3 = new Morris.Bar({
                element: 'Semana03PorPotencial-chart',
                resize: true,
                data: graph[0].graficoPorPotencialSemana3,
                barColors: ['#FF6633'],
                xkey: 'Status',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            var graficoPorPotencialSemana4 = new Morris.Bar({
                element: 'Semana04PorPotencial-chart',
                resize: true,
                data: graph[0].graficoPorPotencialSemana4,
                barColors: ['#FF6633'],
                xkey: 'Status',
                ykeys: ['Nracs'],
                labels: ['Número de Racs'],
                hideHover: true,
                inBarValue: true,
                inBarValueTextColor: 'black',
                inBarValueMinTopMargin: 0,
                inBarValueRightMargin: 10
            });
            //Por Status-----------------------------------------
            AtualizaLegenda(2, graficoPorColaboradorSemanal);
            AtualizaLegenda2(2, graficoPorAcompanhamentoMensal,graph[0].tabelaRac);
            AtualizaTabela(graph[0].tabelaRac, graph[0].mesAnoReferencia);
            
            //------------------------------------------------------------------------------------------------
            //Definindo evento para o clique do filtrar Tab2
            $('#filtro2').on('click', function (e) {
                Graph(2, function (graph) {;
                    graficoPorDiaSemana1.setData(graph[0].graficoPorDiaSemana1, true);
                    graficoPorDiaSemana2.setData(graph[0].graficoPorDiaSemana2, true);
                    graficoPorDiaSemana3.setData(graph[0].graficoPorDiaSemana3, true);
                    graficoPorDiaSemana4.setData(graph[0].graficoPorDiaSemana4, true);
                    graficoPorAcompanhamentoMensal.setData(graph[0].graficoPorAcompanhamentoMensal, true);
                    graficoPorAreaSemana1.setData(graph[0].graficoPorAreaSemana1, true);
                    graficoPorAreaSemana2.setData(graph[0].graficoPorAreaSemana2, true);
                    graficoPorAreaSemana3.setData(graph[0].graficoPorAreaSemana3, true);
                    graficoPorAreaSemana4.setData(graph[0].graficoPorAreaSemana4, true);
                    graficoPorColaboradorSemanal.setData(graph[0].graficoPorColaboradorSemanal, true);
                    graficoPorTipoSemana1.setData(graph[0].graficoPorTipoSemana1, true);
                    graficoPorTipoSemana2.setData(graph[0].graficoPorTipoSemana2, true);
                    graficoPorTipoSemana3.setData(graph[0].graficoPorTipoSemana3, true);
                    graficoPorTipoSemana4.setData(graph[0].graficoPorTipoSemana4, true);
                    graficoPorStatusSemana1.setData(graph[0].graficoPorStatusSemana1, true);
                    graficoPorStatusSemana2.setData(graph[0].graficoPorStatusSemana2, true);
                    graficoPorStatusSemana3.setData(graph[0].graficoPorStatusSemana3, true);
                    graficoPorStatusSemana4.setData(graph[0].graficoPorStatusSemana4, true);
                    graficoPorPotencialSemana1.setData(graph[0].graficoPorPotencialSemana1, true);
                    graficoPorPotencialSemana2.setData(graph[0].graficoPorPotencialSemana2, true);
                    graficoPorPotencialSemana3.setData(graph[0].graficoPorPotencialSemana3, true);
                    graficoPorPotencialSemana4.setData(graph[0].graficoPorPotencialSemana4, true);
                    AtualizaTabela(graph[0].tabelaRac, graph[0].mesAnoReferencia);
                    AtualizaLegenda(2, graficoPorColaboradorSemanal);
                    AtualizaLegenda2(2, graficoPorAcompanhamentoMensal);
                });
            });

            //Evento de redesenhar o gráfico no momento da exibição para que não seja degradado
            //Tab Principal (
            $('#TabPrincipal2').on('shown.bs.tab', function (e) {
                graficoPorDiaSemana1.redraw();
                graficoPorAcompanhamentoMensal.redraw();
                graficoPorAreaSemana1.redraw();
                graficoPorColaboradorSemanal.redraw();
                graficoPorTipoSemana1.redraw();
                graficoPorStatusSemana1.redraw();
                graficoPorPotencialSemana1.redraw();
            });

            //Graficos por Dia da Semana
            $('#TabGraficoDiaPorSemana1').on('shown.bs.tab', function (e) {
                graficoPorDiaSemana1.redraw();
            });

            $('#TabGraficoDiaPorSemana2').on('shown.bs.tab', function (e) {
                graficoPorDiaSemana2.redraw();
            });

            $('#TabGraficoDiaPorSemana3').on('shown.bs.tab', function (e) {
                graficoPorDiaSemana3.redraw();
            });

            $('#TabGraficoDiaPorSemana4').on('shown.bs.tab', function (e) {
                graficoPorDiaSemana4.redraw();
            });

            //Graficos por Dia da Semana (Área)
            $('#TabGraficoAreaPorSemana1').on('shown.bs.tab', function (e) {
                graficoPorAreaSemana1.redraw();
            });

            $('#TabGraficoAreaPorSemana2').on('shown.bs.tab', function (e) {
                graficoPorAreaSemana2.redraw();
            });

            $('#TabGraficoAreaPorSemana3').on('shown.bs.tab', function (e) {
                graficoPorAreaSemana3.redraw();
            });

            $('#TabGraficoAreaPorSemana4').on('shown.bs.tab', function (e) {
                graficoPorAreaSemana4.redraw();
            });

            //Graficos por Tipo (Semanal)
            $('#TabGraficoTipoPorSemana1').on('shown.bs.tab', function (e) {
                graficoPorTipoSemana1.redraw();
            });

            $('#TabGraficoTipoPorSemana2').on('shown.bs.tab', function (e) {
                graficoPorTipoSemana2.redraw();
            });

            $('#TabGraficoTipoPorSemana3').on('shown.bs.tab', function (e) {
                graficoPorTipoSemana3.redraw();
            });

            $('#TabGraficoTipoPorSemana4').on('shown.bs.tab', function (e) {
                graficoPorTipoSemana4.redraw();
            });
            //Graficos por Status (Semanal)
            $('#TabGraficoStatusPorSemana1').on('shown.bs.tab', function (e) {
                graficoPorStatusSemana1.redraw();
            });

            $('#TabGraficoStatusPorSemana2').on('shown.bs.tab', function (e) {
                graficoPorStatusSemana2.redraw();
            });

            $('#TabGraficoStatusPorSemana3').on('shown.bs.tab', function (e) {
                graficoPorStatusSemana3.redraw();
            });

            $('#TabGraficoStatusPorSemana4').on('shown.bs.tab', function (e) {
                graficoPorStatusSemana4.redraw();
            });
            //Graficos por Potencial (Semanal)
            $('#TabGraficoPotencialPorSemana1').on('shown.bs.tab', function (e) {
                graficoPorPotencialSemana1.redraw();
            });

            $('#TabGraficoPotencialPorSemana2').on('shown.bs.tab', function (e) {
                graficoPorPotencialSemana2.redraw();
            });

            $('#TabGraficoPotencialPorSemana3').on('shown.bs.tab', function (e) {
                graficoPorPotencialSemana3.redraw();
            });

            $('#TabGraficoPotencialPorSemana4').on('shown.bs.tab', function (e) {
                graficoPorPotencialSemana4.redraw();
            });
        });
    }
}

function Tab3_Click() {
    if (!tab3Clicado) {
        tab3Clicado = true;
        //var graph = Graph(3);
        Graph(3, function (graph) {
            var labelsComparativo = new Array();
            var nRacsComparativo = new Array();
            var nMetaComparativo = new Array();
            var desempenhoComparativo = new Array();
            for (var i = 0; i < graph[0].graficoPorRacsComparativo.length; i++) {
                desempenhoComparativo[i] = graph[0].graficoPorRacsComparativo[i].Desempenho;
                labelsComparativo[i] = graph[0].graficoPorRacsComparativo[i].Mes;
                nMetaComparativo[i] = graph[0].graficoPorRacsComparativo[i].Nmeta;
                nRacsComparativo[i] = graph[0].graficoPorRacsComparativo[i].Nracs;
                
            }
            var comparativoMensalData = {
                labels: labelsComparativo,
                datasets: [{
                        type: 'line',
                        label: "Percentual",
                        data: desempenhoComparativo,
                        fill: false,
                        borderColor: '#f1260d',
                        backgroundColor: '#f1260d',
                        pointBorderColor: '#f1260d',
                        pointBackgroundColor: '#f1260d',
                        pointHoverBackgroundColor: '#f1260d',
                        pointHoverBorderColor: '#f1260d',
                        yAxisID: 'y-axis-2',
                        steppedLine: true,
                },
                {
                    type: 'bar',
                    label: "Meta",
                    data: nMetaComparativo,
                    fill: false,
                    backgroundColor: '#a7acef',
                    borderColor: '#a7acef',
                    hoverBackgroundColor: '#a7acef',
                    hoverBorderColor: '#a7acef',
                    yAxisID: 'y-axis-1',
                },
                {
                    type: 'bar',
                    label: "Realizado",
                    data: nRacsComparativo,
                    fill: false,
                    backgroundColor: '#99efdb',
                    borderColor: '#99efdb',
                    hoverBackgroundColor: '#99efdb',
                    hoverBorderColor: '#99efdb',
                    yAxisID: 'y-axis-1',

                }
                ]
            };

            var ctx = document.getElementById("ComparativoRacMensal-chart").getContext("2d");
            var graficoPorComparativoMensal = new Chart(ctx, {
                type: 'bar',
                data: comparativoMensalData,
                options: {
                    animation: {
                        onProgress: drawBarValues,
                        onComplete: drawBarValues
                    },
                    hover: { animationDuration: 0 },
                    responsive: true,
                    tooltips: {
                        mode: 'label'
                    },
                    elements: {
                        line: {
                            fill: false
                        }
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: true,
                            },
                            labels: {
                                show: true,
                            }
                        }],
                        yAxes: [{
                            type: "linear",
                            display: true,
                            position: "left",
                            id: "y-axis-1",
                            gridLines: {
                                display: true,
                            },
                            labels: {
                                show: true,

                            }
                        }, {
                            type: "linear",
                            display: true,
                            position: "right",
                            id: "y-axis-2",
                            gridLines: {
                                display: true,
                            },
                            labels: {
                                show: true,

                            }
                        }]
                    }
                },

                onAnimationComplete: function () {

                var ctx = this.chart.ctx;
                ctx.font = this.scale.font;
                ctx.fillStyle = this.scale.textColor;
                ctx.textAlign = "center";
                ctx.textBaseline = "bottom";

                this.datasets.forEach(function (dataset) {
                    dataset.bars.forEach(function (bar) {
                        ctx.fillText(bar.value, bar.x, bar.y - 5);
                    });
                })
            },
            });

            function drawBarValues() {
                // render the value of the chart above the bar
                var ctx = this.chart.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'bold', Chart.defaults.global.defaultFontFamily);
                ctx.fillStyle = this.chart.config.options.defaultFontColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                this.data.datasets.forEach(function (dataset) {
                    for (var i = 0; i < dataset.data.length; i++) {
                        if (dataset.hidden === true && dataset._meta[Object.keys(dataset._meta)[0]].hidden !== false) { continue; }
                        var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
                        if (dataset.data[i] !== null) {
                            ctx.fillText(dataset.data[i], model.x - 1, model.y - 5);
                        }
                    }
                });
            }

            //Por Colaborador--------------------------------------------
            var Cores = ['#3c8dbc', '#f50b0b', '#fcc718', '#FFCC00'];
            var labelsColaboradorComparativo = new Array();
            var labelsColaboradorComparativo2 = new Array();
            var nRacsColaboradorComparativo = new Array(graph[0].graficoPorColaboradoresComparativo[0].MesNracs.length);
            var labelInternaColaborador = new Array();
            for (i = 0; i < graph[0].graficoPorColaboradoresComparativo.length; i++) {
                labelsColaboradorComparativo[i] = graph[0].graficoPorColaboradoresComparativo[i].Colaborador;
            }
            for (var l = 0 ; l < graph[0].graficoPorColaboradoresComparativo[0].MesNracs.length; l++) {
                labelInternaColaborador[l] = graph[0].graficoPorColaboradoresComparativo[0].MesNracs[l].Mes;
                nRacsColaboradorComparativo[l] = new Array(graph[0].graficoPorColaboradoresComparativo.length);
                for (i = 0; i < graph[0].graficoPorColaboradoresComparativo.length; i++) {
                    nRacsColaboradorComparativo[l][i] = graph[0].graficoPorColaboradoresComparativo[i].MesNracs[l].Nracs;
                }
            }
            var comparativoColaboradorMensalData = {
                labels: labelsColaboradorComparativo,
                datasets: [{
                    type: 'bar',
                    label: labelInternaColaborador[0],
                    data: nRacsColaboradorComparativo[0],
                    fill: false,
                    backgroundColor: Cores[0],
                    borderColor: Cores[0],
                    hoverBackgroundColor: Cores[0],
                    hoverBorderColor: Cores[0],
                    yAxisID: 'y-axis-1'
                },
                {
                    type: 'bar',
                    label: labelInternaColaborador[1],
                    data: nRacsColaboradorComparativo[1],
                    fill: false,
                    backgroundColor: Cores[1],
                    borderColor: Cores[1],
                    hoverBackgroundColor: Cores[1],
                    hoverBorderColor: Cores[1],
                    yAxisID: 'y-axis-1'
                },
                {
                    type: 'bar',
                    label: labelInternaColaborador[2],
                    data: nRacsColaboradorComparativo[2],
                    fill: false,
                    backgroundColor: Cores[2],
                    borderColor: Cores[2],
                    hoverBackgroundColor: Cores[2],
                    hoverBorderColor: Cores[2],
                    yAxisID: 'y-axis-1'
                }]
            };

            var ctx2 = document.getElementById("ComparativoColaboradorMensal-chart").getContext("2d");
            var graficoPorComparativoColaboradorMensal = new Chart(ctx2, {
                type: 'bar',
                data: comparativoColaboradorMensalData,                
                options: {
                    animation: {
                        onProgress: drawBarValues,
                        onComplete: drawBarValues
                    },
                    hover: { animationDuration: 0 },
                    responsive: true,
                    tooltips: {
                        mode: 'label'
                    },
                    elements: {
                        line: {
                            fill: false
                        }
                    },                    
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                            },
                            labels: {
                                show: true,
                            },
                            ticks: {
                                beginAtZero: true,
                                fontSize: 10,
                                fontStyle: 'bold'
                            },
                        }],
                        yAxes: [{                            
                            scaleLabel: { display: true, },
                            type: "linear",
                            display: true,
                            position: "left",
                            id: "y-axis-1",
                            
                            gridLines: {
                                display: true,
                            },
                            ticks: {
                                beginAtZero: true,
                            },
                            labels: {
                                show: true,
                            },
                        }],
                    },
                }
            });

            function formatLabel(str, maxwidth) {
                var sections = [];
                var words = str.split(" ");
                var temp = "";

                words.forEach(function (item, index) {
                    if (temp.length > 0) {
                        var concat = temp + ' ' + item;

                        if (concat.length > maxwidth) {
                            sections.push(temp);
                            temp = "";
                        }
                        else {
                            if (index == (words.length - 1)) {
                                sections.push(concat);
                                return;
                            }
                            else {
                                temp = concat;
                                return;
                            }
                        }
                    }

                    if (index == (words.length - 1)) {
                        sections.push(item);
                        return;
                    }

                    if (item.length < maxwidth) {
                        temp = item;
                    }
                    else {
                        sections.push(item);
                    }

                });

                return sections;
            }

            //Definindo evento para o clique do filtrar Tab2
            $('#filtro3').on('click', function (e) {
                Graph(3, function (graph) {

                    //Comparativo Mensal de Racs e Meta-------------------------------------------------
                    labelsComparativo = new Array();
                    nMetaComparativo = new Array();
                    nRacsComparativo = new Array();
                    desempenhoComparativo = new Array();
                    for (var i = 0; i < graph[0].graficoPorRacsComparativo.length; i++) {
                        labelsComparativo[i] = graph[0].graficoPorRacsComparativo[i].Mes;
                        nMetaComparativo[i] = graph[0].graficoPorRacsComparativo[i].Nmeta;
                        nRacsComparativo[i] = graph[0].graficoPorRacsComparativo[i].Nracs;
                        desempenhoComparativo[i] = graph[0].graficoPorRacsComparativo[i].Desempenho;
                    }
                    graficoPorComparativoMensal.config.data.labels = labelsComparativo;
                    graficoPorComparativoMensal.config.data.datasets[1].data = nMetaComparativo;
                    graficoPorComparativoMensal.config.data.datasets[2].data = nRacsComparativo;
                    graficoPorComparativoMensal.config.data.datasets[0].data = desempenhoComparativo;
                    graficoPorComparativoMensal.update();
                    //-----------------------------------------------------------------------------------
                    //Top 5 Colaboradores - Comparativo Mensal-------------------------------------------
                    labelsColaboradorComparativo = new Array();
                    nRacsColaboradorComparativo = new Array(graph[0].graficoPorColaboradoresComparativo[0].MesNracs.length);
                    labelInternaColaborador = new Array();
                    for (i = 0; i < graph[0].graficoPorColaboradoresComparativo.length; i++) {
                        labelsColaboradorComparativo[i] = formatLabel(graph[0].graficoPorColaboradoresComparativo[i].Colaborador, 13);
                    }
          
                    for (var l = 0 ; l < graph[0].graficoPorColaboradoresComparativo[0].MesNracs.length; l++) {
                        labelInternaColaborador[l] = graph[0].graficoPorColaboradoresComparativo[0].MesNracs[l].Mes;
                        nRacsColaboradorComparativo[l] = new Array(graph[0].graficoPorColaboradoresComparativo.length);
                        for (i = 0; i < graph[0].graficoPorColaboradoresComparativo.length; i++) {
                            nRacsColaboradorComparativo[l][i] = graph[0].graficoPorColaboradoresComparativo[i].MesNracs[l].Nracs;
                        }
                    }
                    graficoPorComparativoColaboradorMensal.config.data.labels = labelsColaboradorComparativo;

                    //Construindo Novo DataSets--------------------------------------------------------------------------------------
                    var newDataSets = new Array();
                    for (i = 0; i < labelInternaColaborador.length; i++) {
                        {
                            newDataSets[i] = {
                                type: 'bar',
                                label: labelInternaColaborador[i],
                                data: nRacsColaboradorComparativo[i],
                                fill: false,
                                backgroundColor: Cores[i],
                                borderColor: Cores[i],
                                hoverBackgroundColor: Cores[i],
                                hoverBorderColor: Cores[i],
                                yAxisID: 'y-axis-1'
                            }
                        }
                    }
                    //---------------------------------------------------------------------------------------------------------------
                    graficoPorComparativoColaboradorMensal.config.data.datasets = newDataSets;
                    graficoPorComparativoColaboradorMensal.update();
                });
            });
        });

    }
}

//Morris Chart --------------------------------------------------------------------------------------------------------------------------------
//Inicialização do filtros
var date = new Date();
$(function () {
    $("#DateFrom").datepicker();
    $("#DateFrom2").datepicker();
    $("#DateFrom3").datepicker();
    $("#DateFrom4").datepicker();
    $("#DateFrom5").datepicker();
    $("#DateFrom6").datepicker();
    //$("#DateFrom7").datepicker();
});
$("#DateFrom").val(Q.formatDate(new Date(date.getFullYear(), date.getMonth(), 1), "dd/MM/yyyy"));
$("#DateFrom2").val(Q.formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0), "dd/MM/yyyy"));
$("#DateFrom3").val(Q.formatDate(new Date(date.getFullYear(), date.getMonth(), 1), "MM/yyyy"));
$("#DateFrom4").val(Q.formatDate(new Date(date.getFullYear(), date.getMonth(), 1), "MM/yyyy"));
$("#DateFrom5").val(Q.formatDate(new Date(date.getFullYear(), date.getMonth() - 2, 1), "MM/yyyy"));
$("#DateFrom6").val(Q.formatDate(new Date(date.getFullYear(), date.getMonth() - 1, 1), "MM/yyyy"));
//$("#DateFrom7").val(Q.formatDate(new Date(date.getFullYear(), date.getMonth() - 3, 1), "MM/yyyy"));

//Cria o gráfico com os valores de acordo com o filtro
$(function () {
    "use strict";

    //Preenche o gráfico ao iniciar a tela
    Graph(1, function (graph) {

        //Gráficos da Tab 1-------------------------------------------------------------------------------
        var graficoPorData = new Morris.Bar({
            element: 'bar-chart',
            resize: true,
            data: graph[0].graficoPorData,
            barColors: ['#3C8DBC'],
            xkey: 'Dia',
            ykeys: ['Nracs'],
            labels: ['Número de Racs'],
            hideHover: 'auto',
            xLabelAngle: 60,
            inBarValue: true,
            inBarValueTextColor: 'black',
            inBarValueMinTopMargin: 0,
            inBarValueRightMargin: 10,
        });

        var graficoPorPotencial = new Morris.Donut({
            element: 'Potencial-chart',
            resize: true,
            colors: ["#3c8dbc", "#f56954", "#00a65a"],
            data: graph[0].graficoPorPotencial,
            hideHover: 'auto',
            percentage: true
        });

        var graficoPorArea = new Morris.Bar({
            element: 'area-chart',
            resize: true,
            data: graph[0].graficoPorArea,
            barColors: ['#009966'],
            xkey: 'Descricao',
            ykeys: ['Nracs'],
            labels: ['Número de Racs'],
            hideHover: true,
            xLabelAngle: 82,
            inBarValue: true,
            inBarValueTextColor: 'black',
            inBarValueMinTopMargin: 0
        });

        var graficoPorColaborador = new Morris.Bar({
            element: 'colaborador-chart',
            resize: true,
            data: graph[0].graficoPorColaborador,
            barColors: ['#CC3333'],
            xkey: 'Colaborador',
            ykeys: ['Nracs'],
            labels: ['Número de Racs'],
            hideHover: true,
            inBarValue: true,
            inBarValueTextColor: 'black',
            inBarValueMinTopMargin: 0,
            inBarValueRightMargin: 10,
            xLabelAngle: 60,
        });


        var graficoPorTipo = new Morris.Bar({
            element: 'Tipo-chart',
            resize: true,
            data: graph[0].graficoPorTipo,
            barColors: ['#E17100'],
            xkey: 'TipoOcorrencia',
            ykeys: ['Nracs'],
            labels: ['Número de Racs'],
            hideHover: true,
            inBarValue: true,
            inBarValueTextColor: 'black',
            inBarValueMinTopMargin: 0,
            inBarValueRightMargin: 10,
            xLabelAngle: 70
        });

        var graficoPorStatus = new Morris.Bar({
            element: 'Status-chart',
            resize: true,
            data: graph[0].graficoPorStatus,
            barColors: ['#004080'],
            xkey: 'Status',
            ykeys: ['Nracs'],
            labels: ['Número de Racs'],
            hideHover: true,
            inBarValue: true,
            inBarValueTextColor: 'black',
            inBarValueMinTopMargin: 0,
            inBarValueRightMargin: 10
        });

        var graficoPorPotencialQtd = new Morris.Bar({
            element: 'PotencialFatalQtd-chart',
            resize: true,
            data: graph[0].graficoPorPotencialQtd,
            barColors: ['#004080'],
            xkey: 'TipoOcorrencia',
            ykeys: ['Nracs'],
            labels: ['Número de Racs'],
            hideHover: true,
            inBarValue: true,
            inBarValueTextColor: 'black',
            inBarValueMinTopMargin: 0,
            inBarValueRightMargin: 10
        });

        var graficoPorStatusDonut = new Morris.Donut({
            element: 'StatusDonut-chart',
            resize: true,
            colors: ["#3c8dbc", "#f56954", "#00a65a"],
            data: graph[0].graficoPorStatusDonut,
            hideHover: 'auto',
            percentage: true
        });
        //------------------------------------------------------------------------------------------------
        AtualizaLegenda(1, graficoPorPotencial);
        AtualizaLegenda3(1, graficoPorStatusDonut);

        //Função de evento do Filtro
        $("#filtro").click(function () {
            Graph(1, function (graph) {
                var tam = graph[0].graficoPorData.length;
                if (tam < 31)
                    tam = 31;
                tam = tam * 3.225;
                $('#bar-chart').css('width', tam + '%');
                graficoPorData.setData(graph[0].graficoPorData, true);
                graficoPorArea.setData(graph[0].graficoPorArea, true);
                graficoPorColaborador.setData(graph[0].graficoPorColaborador, true);
                graficoPorTipo.setData(graph[0].graficoPorTipo, true);
                graficoPorStatus.setData(graph[0].graficoPorStatus, true);
                graficoPorStatusDonut.setData(graph[0].graficoPorStatusDonut, true);
                graficoPorPotencial.setData(graph[0].graficoPorPotencial, true);
                graficoPorPotencialQtd.setData(graph[0].graficoPorPotencialQtd, true);
                AtualizaLegenda(1, graficoPorPotencial);
                AtualizaLegenda3(1, graficoPorStatusDonut);
            });
            
            graficoPorData.redraw();
        })
    });

});
//---------------------------------------------------------------------------------------------------------------------------------------------