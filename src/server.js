import express from "express";

const app = express();

app.get('/',(req,res) => {
    console.log("LANDING PAGE");
    res.send("LANDING PAGE");
});

app.get('/api',(req,res) => {
    console.log("API LANDING PAGE");
    res.send("API LANDING PAGE");
})

export const startServer = async () => {
    try {
      // await connect();
      const port = process.env.PORT || 5555;
      app.listen(port, () => {
        console.log(
          `Server is live and listening on ${process.env.HOST}:${port}`
        );
      });
    } catch (error) {
      console.log(e);
    }
  };
