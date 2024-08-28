# express-pretty-listen

A simple Express server runner that automatically prints the port and current package name to the terminal once the server starts.

## List of parameters

- `port` - Port number where the app will run
- `host` (optional) - Option to overwrite the default value `http://localhost`
- `server` - Your Express server

## Getting started

### Install

```
npm install express-pretty-listen
```

### Use to start server

Do not use `listen()` method from express. Use `serveExpressServer` instead.

```typescript
import cors from "cors";
import express from "express";
import { serveExpressServer } from "express-pretty-listen";

export const server = express() //
  .use(cors())
  .use(express.json());

serveExpressServer({ server, port: 4000 });
```

### Output

Once you start a server script will automatically detect package name and will output table with package name and link with port to the app.

Example output when server starts:

```
┌─────────┬────────────────────────────┐
│ Package │ @steadysass/server-express │
├─────────┼────────────────────────────┤
│ Server  │ http://localhost:4000      │
└─────────┴────────────────────────────┘
```
