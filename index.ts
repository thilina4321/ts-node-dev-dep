import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/app", (req: Request, res: Response) => {
  res.send({ data: "this is the response" });
});

const PORT = process.env.PORT || 80

app.listen(PORT, () => {
  console.log("server listern in port 3000");
});
