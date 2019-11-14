import app from './app';

app.listen({ port: 4000 }).then(() => {
  console.log('Server is runnig on http://localhost:4000');
});