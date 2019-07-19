import { Negociacao} from './Negociacao';
// import { Imprimivel } from './Imprimivel';
import { MeuObjeto } from './MeuObjeto'

export class Negociacoes implements MeuObjeto<Negociacao> {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void{
        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }
}
