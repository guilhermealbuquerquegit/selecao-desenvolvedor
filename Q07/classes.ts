class Cliente {
  private _nome: string
  private _dataNascimento: Date
  private _endereco: Endereco

  constructor(nome: string, dataNascimento: Date, endereco: Endereco) {
    this._nome = nome
    this._dataNascimento = dataNascimento
    this._endereco = endereco
  }

  getNome(): string {
    return this._nome
  }

  getIdade(): number {
    return this.calcularIdade()
  }

  private calcularIdade(): number {
    const anoAtual = new Date().getFullYear()
    let anoNascimento = this._dataNascimento.getFullYear()
    return anoAtual - anoNascimento
  }
}

class Endereco {
  private _logradouro: string
  private _complemento: Date

  constructor(logradouro: string, complemento: Date) {
    this._logradouro = logradouro
    this._complemento = complemento
  }

  getLogradouro(): string {
    return this._logradouro
  }

  getComplemento(): string {
    return this._complemento.toDateString()
  }

  getEnderecoComplemento(): string {
    return `${this._logradouro} ${this._complemento}`
  }
}
