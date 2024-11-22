import express, { Application, Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(JSON.stringify(helpFunction()));
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.get("/json", (req: Request, res: Response) => {
  res.send(JSON.stringify({ ping: "pong" }));
});

function helpFunction() {
  return { paths: ["/", "/ping", "/json"] };
}

app.listen(8000, () => {
  console.log("App listening at port 8000");
});
