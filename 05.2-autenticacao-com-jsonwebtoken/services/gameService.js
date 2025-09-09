import Game from "../models/Games.js";

// O service será responsável por conter os métodos de manipulação do banco

class gameService {
  // Buscando os registros do banco
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }
  // Cadastrando registros no banco
  async Create(title, year, price, description) {
    try {
      const newGame = new Game({
        title,
        year,
        price,
        description,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  // Deletando registros no banco
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game with id: ${id} was deleted with success.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Alterando registros no banco
  async Update(id, title, year, price, description) {
    try {
      const game = await Game.findByIdAndUpdate(
        id,
        {
          title,
          year,
          price,
          description,
        },
        { new: true }
      );
      console.log(`Data games with id: ${id} updated with success.`);
      return game;
    } catch (error) {
      console.log(error);
    }
  }

  //Listando um registro único
  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id });
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();
