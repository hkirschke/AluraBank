import { MensagemView, NegociacoesView} from '../views/index';
import { Negociacoes, Negociacao} from '../models/index'; 
import { logarTempoDeExecucao } from '../helpers/Decorators/index';
import { domInject } from "../helpers/Decorators/index";

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView',true);
    private _mensagemView = new MensagemView('#mensagemView',true);

    constructor() {
        // this._inputData = $('#data');
        // this._inputQuantidade = $('#quantidade');
        // this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    @logarTempoDeExecucao()
    adiciona(event: Event) {

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g,','));

        if (!this.validaDiaUtil(data))
        {
            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return;
        }

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private validaDiaUtil(data: Date): boolean{
        return data.getDay() != DiasDaSemana.Domingo && data.getDay() != DiasDaSemana.Sabado;
    }

    importaDados(){
    
    }
}

enum DiasDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}