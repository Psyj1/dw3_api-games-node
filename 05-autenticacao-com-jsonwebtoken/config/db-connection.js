// Importando o mongoose
import mongoose from "mongoose";

// Usuário e senha do banco de dados
const dbUser = "paulojunior_db_user";
const dbPassword = "K3mbHQ43FpLe8MUG";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.exv1vif.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Error to connect mongoDB.");
  });
  connection.on("open", () => {
    console.log("mongoDB connection was succesful!");
  });
};
connect();
export default connect;