import dotenv from "dotenv";
import path from "path";


dotenv.config({ path: path.join(__dirname, '../../.env') });

  export default {
    NODE_ENV: process.env.NODE_ENV || 'development', // Checks if the environment type (e.g., 'production' or 'development') is set; if not, it uses 'development' as default.
    logDir: 'logs', // Specifies the folder where log files will be saved.
    fileLogsDir: process.env.LOGS_DIR || './logs',
    isDev: process.env.NODE_ENV === 'development',
    cakeOrdersPath: process.env.CAKE_ORDERS_PATH || 'src/data/cake orders.csv',
    petOrdersPath: process.env.PET_ORDERS_PATH || 'src/data/pet orders.json',
    toyOrdersPath: process.env.TOY_ORDERS_PATH || 'src/data/toy orders.xml',
    furnitureOrdersPath: process.env.FURNITURE_ORDERS_PATH || 'src/data/furniture orders.xml',
    bookOrdersPath: process.env.BOOK_ORDERS_PATH || 'src/data/book orders.json',
    clothingOrdersPath: process.env.CLOTHING_ORDERS_PATH || 'src/data/clothing orders.csv',
  };