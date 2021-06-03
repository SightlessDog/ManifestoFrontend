import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import { v1 as uuid } from "uuid";

const App = () => {
  const [canvas, setCanvas] = useState("");

  const initCanvas = () =>
    new fabric.Canvas("canv", {
      height: 500,
      width: 500,
      backgroundColor: "white",
    });

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const addShape = (e) => {
    let object;

    object = new fabric.Circle({
      radius: 50,
    });

    object.set({ id: uuid() });
    canvas.add(object);
    canvas.renderAll();
  };

  return (
    <div className="App">
      <div>
        <div>
          <button type="button" name="circle" onClick={addShape}>
            Add a Circle
          </button>
        </div>

        <div>
          <canvas id="canv" />
        </div>
      </div>
    </div>
  );
};

export default App;
