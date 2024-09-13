import { config } from "dotenv"
config();

// variables de entorno para diferentes configuraciones 
export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbpassword: process.env.DB_PASSWORD || '',
    dbServer: process.env.DB_SERVER || '',
    dbDatabase: process.env.DB_DATABASE || ''
};

