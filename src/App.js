import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import { v1 as uuid } from "uuid";
import axios from "axios";

const App = () => {
  let object = null;
  let modifiedObj;
  const [canvas, setCanvas] = useState("");
  const [submit, setSubmit] = useState(false);

  const initCanvas = () =>
    new fabric.Canvas("canv", {
      height: 500,
      width: 500,
      backgroundColor: "white",
    });

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  useEffect(() => {
    if (canvas) {
      canvas.on("object:modified", function (options) {
        if (options.target) {
          console.log(options);
          console.log();
          console.log(object.getRadiusX());
          modifiedObj = {
            aoi: {
              center: object.getCenterPoint(),
              radius: object.getRadiusX(),
            },
            id: options.target.id,
          };
        }
      });
    }
  }, [canvas]);

  const addShape = (e) => {
    let type = e.target.name;

    if (type === "circle") {
      object = new fabric.Circle({
        radius: 50,
      });
    }

    object.set({ id: uuid() });
    canvas.add(object);
    canvas.renderAll();
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080", modifiedObj)
      .then(() => console.log("aoi created"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div>
        <button type="button" name="circle" onClick={addShape}>
          Add a Circle
        </button>
      </div>
      <div>
        <canvas id="canv" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default App;
