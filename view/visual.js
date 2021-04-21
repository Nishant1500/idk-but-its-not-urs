const express = require("express");
const app = express()
module.exports = {
  app: app,
  async visual(id, song) {
    const fs = require("fs");
    const path = require("path");
    const ffmpeg = require("ffmpeg");

    const data = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>${song.title} Audio Visuals</title>
  </head>
  <body>
    <canvas id="output" height="500" width="500"></canvas>
</body>
<script src="${id}.js"></script>
</html>`;

    fs.writeFile(path.join(__dirname, `${id}.html`), data, (err) => {
      if (err) {
        console.log(JSON.stringify(err));
      }
      console.log('Made A Web Server')
        const path = require("path");
        const ytdl = require("ytdl-core");
      
      ytdl(`${song.url}`)
        
        app.get("/" + id, (req, res) => {
          res.sendFile(path.join(__dirname, `${id}.html`));
          console.log(`${id}` + ' Is Enabled And Started Generating Visuals')
        });
      });
      const JSdata = `
      const Wave = require(@foobar404/wave);
      let wave = new Wave()
    
    wave.fromFile('${id}.mp3', "output", {
        type: "flower",
        colors: ["red", "white", "blue"]
    });
})
.catch(function (err) {
    console.log(err.message)
});`
      
    fs.writeFile(path.join(__dirname, `${id}.js`), JSdata, (err) => {
      if (err) {
        console.log(JSON.stringify(err));
      }
      console.log('Made A JS')
    })
  }
};
