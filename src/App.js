import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import { v1 as uuid } from "uuid";
import axios from "axios";
import styled from "styled-components";
import { blue } from "chalk";

const App = () => {
  let object = null;
  const [modidiedObject, setModidiedObject] = useState("");
  const [canvas, setCanvas] = useState("");
  const [canAdd, setCanAdd] = useState(true);

  const ButtonsContainer = styled.div`
    display: flex;
    position: absolute;
    width: 40%;
    top: 90%;
    left: 43%;
    z-index: 99;
    align-content: space-around;
  `;

  const StyledButton = styled.button`
    -moz-transition: all 0.4s ease-in;
    -o-transition: all 0.4s ease-in;
    -webkit-transition: all 0.4s ease-in;
    background-color: #deb866;
    transition: all 0.4s ease-in;
    padding: 12px 24px;
    font-size: 1.2rem;
    font-family: "Roboto";
    border-radius: 6px;
    width: 150px;
    cursor: pointer;
    transition: background-color 0.2 linear, color 0.2 linear;
    &:hover {
      background-color: #ca9b46;
      color: #dbd9db;
    }
    &:active {
      background-color: #b68438;
      color: #dbd9db;
    }
  `;

  const initCanvas = () =>
    new fabric.Canvas("canv", {
      width: 700,
      height: 500,
      backgroundColor: "red",
    });

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  useEffect(() => {
    if (canvas) {
      canvas.on("object:modified", function (options) {
        if (options.target) {
          console.log(object.getCenterPoint());
          console.log(object.getRadiusX());
          setModidiedObject({
            aoi: {
              center: object.getCenterPoint(),
              radius: object.getRadiusX(),
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
          borderColor: blue,
          radius: 50,
        });
      }

      object.set({ id: uuid() });
      canvas.add(object);
      canvas.renderAll();
      setCanAdd(false);
    }
  };

  const handleSubmit = () => {
    console.log(modidiedObject);
    axios
      .post("http://localhost:8080", modidiedObject)
      .then(() => console.log("aoi created"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <div>position your area of interest and click on submit</div>
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
        }}
      >
        <canvas id="canv" />
      </div>
    </div>
  );
};

export default App;
