# koa-use-router

use router middleware for koa. this is koa-router

## Installation

```bash
# npm
$ npm install koa-use-router
# yarn
$ yarn add koa-use-router
```

## Example

```js
import Koa from "koa";
import useRouter from "koa-use-router";
// const userRouter = require("koa-use-router").default
const koa = new Koa();

const { createRouter, mount, group } = useRouter();
const rootRouter = createRouter({ prefix: "/api" });

const authRouter = createRouter();
authRouter.use(async () => {}); //中间件
authRouter.get("/auth", async () => {}); /// /api/auth

const v1Router = createRouter({ prefix: "/v1" });
v1Router.use(async () => {}); // /v1 作用于v1及以下中间件

const v2Router = createRouter({ prefix: "/v2" });
v1Router.use(async () => {}); // /v2 作用于v2及以下中间件

const userRouter = createRouter();
userRouter.use(async () => {}); // 作用于user中间件
userRouter.get("/user", async () => {}); // /api/v1/user or /api/v2/user

group(v1Router, [userRouter]);
group(v2Router, [userRouter]);
group(rootRouter, [authRouter, v1Router, v2Router]);

function routes() {
  return mount(rootRouter);
}

koa.use(routes());
```

## License

[MIT](LICENSE)


