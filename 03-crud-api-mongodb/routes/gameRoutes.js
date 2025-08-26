import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// A camada de routes será responsável por conter os ENDPOINTS da API
gameRoutes.get("/games", gameController.getAllgames);

// ENDPOINT para LISTAR
gameRoutes.post("/games", gameController.createGame);

export default gameRoutes;
