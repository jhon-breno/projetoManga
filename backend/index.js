const express = require("express");
const app = express();
const { sequelize } = require("./models");
const mercadopago = require("mercadopago");

require("dotenv").config();

mercadopago.configurations.setAccessToken(
  process.env.MERCADO_PAGO_ACCESS_TOKEN
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API da Associação dos Moradores de Manga");
});

app.post("/payment", async (req, res) => {
  const { transactionAmount, description, paymentMethodId, payer } = req.body;
  try {
    const payment = await mercadopago.payment.create({
      transaction_amount: transactionAmount,
      description,
      payment_method_id: paymentMethodId,
      payer,
    });
    res.status(201).send(payment);
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  await sequelize.authenticate();
  console.log("Conexão com o banco de dados estabelecida.");
});
