import mongoose from "mongoose"

mongoose.connect("mongodb+srv://applivraria:passlivraria@cluster-webapp-livraria.ygplyo8.mongodb.net/db_livraria")

let db = mongoose.connection;

export default db;
