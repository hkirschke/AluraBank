
export class Negociacao {

  constructor(private _data: Date, private _quantidade: number, private _valor: number) { }

  get data() {

    return this._data;
  }

  get quantidade() {

    return this._quantidade;
  }

  get valor() {

    return this._valor;
  }

  get volume() {

    return this._quantidade * this._valor;
  }
}


// export class Negociacao {

//   constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

//   get volume() {

//     return this.quantidade * this.valor;
//   }
// }