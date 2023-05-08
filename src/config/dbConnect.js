import mongoose, { mongo } from "mongoose"

mongoose.connect("mongodb+srv://applivraria:passlivraria@cluster-webapp-livraria.ygplyo8.mongodb.net")

let db = mongoose.connection;

export default db;
