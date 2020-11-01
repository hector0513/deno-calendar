
import { Application ,send ,Router,  React,ReactDOMServer } from "./deps.ts";


  const app =new  Application();
const [_,js]=await Deno.bundle(
  "./src/client.tsx",
  undefined,
  { lib: ["dom", "dom.iterable", "esnext"] },
)

  
  import {App} from "./src/app.tsx";
const html =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div class="root">
    ${(ReactDOMServer as any).renderToString(< App />)}
    </div>
<script src="index.js" type="module"></script>
    
</body>
</html>`;
  app.use(async (context:any,next:any) => {
    await next()
      console.log(context.request.url.pathname)
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/dist`,
    });
  });
  const router = new Router();
router
  .get("/", (context:any) => {
    context.response.body = html;
  }).get("/index.js", (context:any) => {
    console.log(context.request.url)
    context.response.body = js;
  })
  app.use(router.routes());
app.use(router.allowedMethods());
 app.addEventListener("listen",function(){
     console.log("escuchando en el puero http://localhost")
 })
  await app.listen({ port: 80 });