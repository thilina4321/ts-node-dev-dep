import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/app", (req: Request, res: Response) => {
  res.send({ data: "this is the res" });
});

app.listen(3000, () => {
  console.log("server listern in port 3000");
});
