function status(request, response) {
  response.status(200).json({ chave: "É nada!" });
}

export default status;
