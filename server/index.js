require("babel-register");
require("dotenv").config();

const fs = require("await-fs");
const path = require("path");
const axios = require("axios");

const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const serve = require("koa-static");
const mount = require("koa-mount");

const loader = require("./loader").default;

const app = new Koa();
const router = new Router();

let TEMPLATE;
const getTemplate = async () => {
  if (TEMPLATE) {
    return TEMPLATE;
  }
  const filePath = path.resolve(__dirname, "..", "build", "index.html");
  const template = await fs.readFile(filePath, "utf8");
  TEMPLATE = template;
  return template;
};

const catchAllRoute = async ctx => {
  let initialState = {};
  let template = await getTemplate();

  const users = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => response.data);

  initialState.fetchData = {};
  initialState.fetchData.data = users;

  initialState.counter = 3;

  const { markup, state } = loader(initialState, ctx.request.url, {});
  template = template.replace("{{ SSR }}", markup);
  template = template.replace(
    "{{ SSR_STATE }}",
    JSON.stringify(state).replace(/</g, "\\u003c")
  );
  ctx.body = template;
};

router.get("/", catchAllRoute);

app.use(router.routes()).use(router.allowedMethods());
app.use(serve("build"));
app.use(catchAllRoute);

app.use(logger());

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`app is listening on http://localhost:${PORT}`);
