import React, { useState } from "react";
import api from "../services/api";

function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [numeroMedidor, setNumeroMedidor] = useState("");
  const [dataInstalacao, setDataInstalacao] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoCliente = {
      nome,
      cpf,
      endereco,
      telefone,
      email,
      numero_medidor: numeroMedidor,
      data_instalacao: dataInstalacao,
      status,
    };
    await api.post("/clientes", novoCliente);
    alert("Cliente cadastrado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Endereço"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Número do Medidor"
        value={numeroMedidor}
        onChange={(e) => setNumeroMedidor(e.target.value)}
        required
      />
      <input
        type="date"
        value={dataInstalacao}
        onChange={(e) => setDataInstalacao(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      >
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
      </select>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroCliente;
