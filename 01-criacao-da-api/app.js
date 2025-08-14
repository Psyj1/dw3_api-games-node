import express from "express";
const app = express();

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Criando um retorno da API
app.get("/", (req, res) => {
  const games = [
    {
      title: "Delta",
      year: "2024",
      genre: "FPS",
      plataform: "PC(Windows)",
      price: 0,
    },
    {
      title: "Diablo III",
      year: "2009",
      genre: "RPG",
      plataform: "PC(Windows)",
      price: 150,
    },
    {
      title: "Tibia",
      year: "1997",
      genre: "MMORPG",
      plataform: "PC(Windows)",
      price: 0,
    },
    //Me recuso a colocar LOL
  ];
  res.json(games);
});

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}
`);
});
