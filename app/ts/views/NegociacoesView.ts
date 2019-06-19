import { View } from './View';  
import { Negociacoes } from '../models/Negociacoes';

 export class NegociacoesView  extends  View<Negociacoes>{

    template(model: Negociacoes): string {
      return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${model.paraArray().map(Negociacao => `
            <tr>
               <td>${Negociacao.data.getDate()}/${Negociacao.data.getMonth() + 1}/${Negociacao.data.getFullYear()}</td>
               <td>${Negociacao.quantidade}</td>
               <td>${Negociacao.valor}</td>
               <td>${Negociacao.volume}</td>
               `).join('')}
            </tr>
            </tbody>

            <tfoot>
            </tfoot>
        </table>               
        `
    }
  }