import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css';

class BankSlips extends Component {

    constructor() {
        super();

        this.state = {
            initialCustomer: 0,
            finalCustomer: 999999
        }
    }

    render() {

        return (

            <div className="container-fluid content">

                <form className="form-horizontal">

                    <div className="row">
                        <div className="col-sm-3 col-sm-offset-3">
                            <label htmlFor="initialCustomer">Cliente:</label>
                            <input type="text" className="form-control" id="initialCustomer" placeholder="Cliente inicial" defaultValue={this.state.initialCustomer} />
                        </div>

                        <div className="col-sm-3">
                            <label htmlFor="finalCustomer">até</label>
                            <input type="text" className="form-control" id="finalCustomer" placeholder="Cliente final" defaultValue={this.state.finalCustomer} />
                        </div>
                    </div>

                    <div className="checkbox">
                        <label><input type="checkbox" value="on" />Aberto</label>
                    </div>

                    <div className="checkbox">
                        <label><input type="checkbox" value="" />Baixados</label>
                    </div>

                    <div className="row">
                        <div className="checkbox col-sm-3">
                            <label><input type="checkbox" value="" />Vencidos a mais de</label>                            
                        </div>
                        <input type="text" className="form-control col-sm-3" id="overdueDays" placeholder="dias" />
                    </div>

                    <div className="row">
                        <button type="submit" className="btn btn-default col-xs-12 col-sm-2 col-sm-offset-5">Executar</button>
                    </div>

                </form>                

                <div className="table-responsive">

                    <table className="table table-bordered">

                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Razão Social</th>
                                <th>Estabelecimento</th>
                                <th>Espécie</th>
                                <th>Docto</th>
                                <th>Parcela</th>
                                <th>Portador</th>
                                <th>Emissão</th>
                                <th>Vencimento</th>
                                <th>Saldo(R$)</th>
                                <th>Dias</th>
                                <th>Hist.Negoc</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>999999</td>
                                <td>Jose da Silva</td>
                                <td>19</td>
                                <td>DP</td>
                                <td>00000001</td>
                                <td>03/01</td>
                                <td>113</td>
                                <td>04/02/2017</td>
                                <td>04/02/2017</td>
                                <td>1.500,00</td>
                                <td>30</td>
                                <td>Sim</td>
                            </tr>

                            <tr>
                                <td>999999</td>
                                <td>Jose da Silva</td>
                                <td>19</td>
                                <td>DP</td>
                                <td>00000001</td>
                                <td>03/01</td>
                                <td>113</td>
                                <td>04/02/2017</td>
                                <td>04/02/2017</td>
                                <td>1.500,00</td>
                                <td>30</td>
                                <td>Sim</td>
                            </tr>
                            <tr>
                                <td>999999</td>
                                <td>Jose da Silva</td>
                                <td>19</td>
                                <td>DP</td>
                                <td>00000001</td>
                                <td>03/01</td>
                                <td>113</td>
                                <td>04/02/2017</td>
                                <td>04/02/2017</td>
                                <td>1.500,00</td>
                                <td>30</td>
                                <td>Sim</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default BankSlips;