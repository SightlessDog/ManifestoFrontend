import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import { v1 as uuid } from "uuid";
import axios from "axios";
import styled from "styled-components";

const Canvas = () => {
  let object = null;
  let object2 = null;
  let [modifiedObject, setModifiedObject] = useState("");
  let [secmodifiedObject, secsetModifiedObject] = useState("");
  const [canvas, setCanvas] = useState("");
  const [canAdd, setCanAdd] = useState(true);

  const ButtonsContainer = styled.div`
    width: 100vw;
    display: flex;
    align-content: space-between;
    justify-content: center;
    margin-bottom: -5%;
  `;

  const StyledButton = styled.button`
    -moz-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    background-color: #050e24;
    color: #ede9e2;
    transition: all 0.4s ease-in;
    padding: 12px 24px;
    font-size: 1.2rem;
    font-family: "Roboto";
    width: 150px;
    height: 75px;
    cursor: pointer;
  `;

  const initCanvas = () =>
    new fabric.Canvas("canv", {
      width: 700,
      height: 500,
      backgroundColor: "#050e24",
    });

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  useEffect(() => {
    if (canvas) {
      canvas.on("object:modified", function (options) {
        if (options.target) {
          setModifiedObject({
            aoi: {
              center: object.getCenterPoint(),
              radius: object.getRadiusX(),
            },
            id: options.target.id,
          });
          secsetModifiedObject({
            aoi: {
              center: object2.getCenterPoint(),
              radius: object2.getRadiusX(),
            },
            id: options.target.id,
          });
        }
      });
    }
  }, [canvas]);

  const addShape = (e) => {
    let type = e.target.name;
    if (canAdd) {
      if (type === "circle") {
        object = new fabric.Circle({
          fill: "#ede9e2",
          radius: 50,
        });
        object.set({ id: uuid() });
        canvas.add(object);

        object2 = new fabric.Circle({
          fill: "#ede9e2",
          radius: 50,
        });
        object2.set({ id: uuid() });
        canvas.add(object2);
      }

      canvas.renderAll();
      setCanAdd(false);
    }
  };

  const handleSubmit = () => {
    let newObject = { modifiedObject, secmodifiedObject };
    console.log(newObject);
    axios
      .post("http://localhost:8080", newObject)
      .then(() => console.log("aoi created"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <ButtonsContainer>
        <StyledButton type="button" name="circle" onClick={addShape}>
          Add a Circle
        </StyledButton>
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      </ButtonsContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
          marginBottom: "5%",
        }}
      >
        <canvas id="canv" />
      </div>
    </div>
  );
};

export default Canvas;
