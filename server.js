import app from './src/app.js'; //importa o express de onde ele vai ser utilizado
import 'dotenv/config';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`O Servidor está escutando na url: http://localhost:${port}`);
});

934184;
