require("babel-register");
require("dotenv").config();

const fs = require("await-fs");
const path = require("path");
const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const serve = require("koa-static");
const mount = require("koa-mount");
const loader = require("./loader").default;

const app = new Koa();
const router = new Router();

const getTemplate = async () => {
  const filePath = path.resolve(__dirname, "..", "build", "index.html");
  return await fs.readFile(filePath, "utf8");
};

router.get("/", async (ctx, next) => {
  const template = await getTemplate();
  const markup = loader();
  ctx.body = template.replace("{{SSR}}", markup);
});

app.use(logger());
app.use(router.routes()).use(router.allowedMethods());
app.use(serve("build"));

app.listen(8080);
console.log("app is listening");
