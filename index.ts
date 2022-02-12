import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/app", (req: Request, res: Response) => {
  res.send({ data: "this is the res" });
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("server listern in port 3000");
});
