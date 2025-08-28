import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

//Função para LISTAR jogos
const getAllgames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    //Cod. 200 (OK) - Requisição feita com sucesso
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

// Função para CADASTRAR jogos
const createGame = async (req, res) => {
  try {
    const { title, year, genre, platform, price } = req.body;
    await gameService.Create(title, year, genre, platform, price);
    res.sendStatus(201); // Cód. 201 (Created) : Recurso criado
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

//Função para DELETAR jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await gameService.Delete(id);
      res.sendStatus(204); // Código 204(NO CONTENT) - Requisição bem sucedida, mas não há conteúdo para retornar
    } else {
      // Se o id não for válido
      res.status(400).json({ error: "The ID sended is invalid." });
      // Código 400(BAD REQUEST) - Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });

    // res.status(500).json({}) -> Para enviar json junto

    // res.sendStatus(500) -> Somente código de status
  }
};

// Função para ALTERAR jogos
const updateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, year, genre, platform, price } = req.body;
      await gameService.Update(id, title, year, genre, platform, price);
      res.sendStatus(200); // Código 200 (OK)
    } else {
      res.sendStatus(400); // Código 400 (BAD REQUEST)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

export default { getAllgames, createGame, deleteGame, updateGame };
