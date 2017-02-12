import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
//import '../../css/pedmobilemulti.css';

class Comissions extends Component {

    constructor() {
        super();

        this.state = {
            message: "Sistema disponivel para a emissao das notas fiscais referente ao periodo de 20/12/2016 a 31/12/2016. Dados para preenchimento da Nota Fiscal: DSM PRODUTOS NUTRICIONAIS BRASIL S/A Avenida Alberto Cocozza, 3000 - Bairro Goiana - Mairinque - SP - CEP: 18120-000 CNPJ: 56.992.951/0019-78 - Inscricao Estadual: 432.007.955.114. Enviar notas fiscais para o e-mail nfcomissoes.brasil@dsm.com Discriminar no corpo da nota fiscal: a)         O codigo de representante e de fornecedor; b)         Os valores das comissoes sobre venda e cobranca separadamente; c)         O valor do IR e se a empresa e optante do simples nacional. Nao serao aceitas notas fiscais rasuradas e com valores divergentes ao que consta no relatorio. Apos o envio da nota fiscal, aguardar o periodo de dois dias uteis para o pagamento. Empresas optantes pelo simples nacional nao sofrerao retencao de IR desde que encaminhem no mesmo e-mail da nota fiscal a Declaracao de Opcao do Simples Nacional nos termos do Artigo 6° da IN RFB 1.234/12, devidamente assinada pelo representante legal da empresa e com data atual. Caso contrario o IR sera retido. Notas fiscais de bloco: a via original deve ser enviada para o endereco abaixo, via correio; o nao envio acarretara o bloqueio do proximo pagamento. Avenida Brigadeiro Faria Lima, 2066 - 14o andar - Bairro: Jardim Paulistano - Sao Paulo - SP - CEP: 01451-905 - A/C: Aline ou Sybelle - Depto. Fiscal (11) 3728-7149."
        };
    }

    setupDates() {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = dd + '/' + mm + '/' + yyyy;

        var lastDay = new Date(yyyy, mm, 0);

        var ddLast = lastDay.getDate();
        var mmLast = lastDay.getMonth() + 1; //January is 0!
        var yyyyLast = lastDay.getFullYear();

        if (ddLast < 10) {
            ddLast = '0' + ddLast
        }

        if (mmLast < 10) {
            mmLast = '0' + mmLast
        }

        ddLast = lastDay.getDate();

        this.setState({
            initialDate: '01/' + mm + '/' + yyyy,
            finalDate: ddLast + '/' + mmLast + '/' + yyyyLast
        })
    }

    componentWillMount(){
        this.setupDates();
    }

    render() {                

        return (

            <div className="container-fluid content">

                <form>

                    <div className="row">

                        <div className="form-group col-xs-12 col-sm-3 col-sm-offset-4">
                            <label htmlFor="initialDate">Data inicial:</label>
                            <input type="text" className="form-control" id="initialDate" placeholder="Data inicial" defaultValue={this.state.initialDate}/>
                        </div>

                        <div className="form-group col-xs-12 col-sm-3 col-sm-offset-4">
                            <label htmlFor="finalDate">Data final:</label>
                            <input type="text" className="form-control" id="finalDate" placeholder="Data final" defaultValue={this.state.finalDate}/>
                        </div>

                    </div>

                    <div className="row">
                        <div className="form-group col-xs-12 col-sm-8 col-sm-offset-2">
                            <textarea disabled className="form-control" rows="10" id="comment" value={this.state.message}></textarea>
                        </div>
                    </div>

                    <div className="row">
                        <button type="submit" className="btn btn-default col-xs-12 col-sm-2 col-sm-offset-5">Executar</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default Comissions;