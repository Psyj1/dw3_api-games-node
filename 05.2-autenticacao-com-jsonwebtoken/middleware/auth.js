import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

// Função de autenticação para verificar se o usuário está enviando o token e se ele é válido
const Authorization = (req, res, next) => {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    next();
  } else {
    res.status(401).json({ error: "Invalid Token" });
  }
};

export default { Authorization };
