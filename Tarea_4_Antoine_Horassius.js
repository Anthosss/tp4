const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();
const PORT = 3000;

router.get('/ayuda',async ctx => {
    ctx.body = `
    /ayuda : mensaje de ayuda
    /nombre : saludo con mi nombre
    /nombre/numero : mi numero de alumno
    /acogida/:nombre : saludo personalizado con nombre`;
});

router.get('/nombre', async ctx =>{
    ctx.body = 'Hola, me llamo Antoine';
});

router.get('/nombre/numero', async ctx =>{
    ctx.body = `Mi numero de alumno es 1234`;
});

router.get('/acogida/:nombre', async ctx =>{
    console.log(ctx.params);
    const nombre = ctx.params.nombre;
    ctx.body = `Hola ${nombre}, bienvenido`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('El servor funciona sobre http://localhost:3000');
  });

