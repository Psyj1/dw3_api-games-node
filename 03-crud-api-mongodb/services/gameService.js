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
  async Create(title, year, genre, platform, price) {
    try {
      const newGame = new Game({
        title,
        year,
        genre,
        platform,
        price,
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
  async Update(id, title, year, genre, platform, price) {
    try {
      await Game.findByIdAndUpdate(id, {
        title,
        year,
        genre,
        platform,
        price,
      });
      console.log(`Data games with id: ${id} updated with success.`);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new gameService();
