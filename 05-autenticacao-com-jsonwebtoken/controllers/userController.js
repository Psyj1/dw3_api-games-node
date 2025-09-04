// Importando o service
import userService from "../services/userService.js";

// Função para CADASTRAR um Usuário
const createUser = async (req, res) => {
  try {
    // Coletando os dados do corpo da requisição
    const { name, email, password } = req.body;
    await userService.Create(name, email, password);
    res.status(201).json({ success: "User registered with success" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// FUNÇÃO para realizar o LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getOne(email);
    if (user != undefined) {
      res.status(200).json({ success: "Login effectued with success!" });
    } else {
      res.status(404).json({ error: "User not found!" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
export default { createUser, loginUser };
