
      const Wave = require(@foobar404/wave);
      let wave = new Wave()
    
    wave.fromFile('677813783523098624.mp3', "output", {
        type: "flower",
        colors: ["red", "white", "blue"]
    });
})
.catch(function (err) {
    console.log(err.message)
});