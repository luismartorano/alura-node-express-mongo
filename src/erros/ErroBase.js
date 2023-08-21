class ErroBase extends Error {
  //herda da classe Error nativa do JS
  constructor(mensagem = 'Erro interno do servidor', status = 500) {
    super();
    this.message = mensagem;
    this.status = status;
  }

  //método para enviar a resposta
  enviarResposta(res) {
    res.status(this.status).send({
      mensagem: this.message,
      status: this.status,
    });
  }
}

export default ErroBase;
