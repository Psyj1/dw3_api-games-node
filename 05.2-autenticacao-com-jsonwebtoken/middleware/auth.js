import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

// Função de autenticação para verificar se o usuário está enviando o token e se ele é válido
const Authorization = (req, res, next) => {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    // Dividindo a string do token (para eliminar a palavra Bearer)
    const bearer = authToken.split(" ");
    const token = bearer[1];
    // Validando o token
    jwt.verify(token, userController.JWTSecret, (error, data) => {
      if (error) {
        res.status(401).json({ error: "Invalid Token" });
        // TOKEN VÁLIDO
      } else {
        req.token = token;
        req.loggedUser = {
          id: data.id,
          email: data.email,
        };
        next();
      }
    });
    
  } else {
    res.status(401).json({ error: "Invalid Token" });
  }
};

export default { Authorization };
