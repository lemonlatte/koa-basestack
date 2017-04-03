import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koaRouter from 'koa-router'

const app = new Koa()
const router = koaRouter()

router.get('test', '/time', async function (ctx, next) {
  let v = await new Promise((resolve, reject ) => {
    setTimeout(() => {
      resolve(Date())
    }, 0)
  })
  console.log(v)
  ctx.body = v
})

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
console.log("Starting web server...")
app.listen(8080)
