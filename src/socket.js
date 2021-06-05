import io from "socket.io-client";
import { fabric } from "fabric";

const socket = io(window.location.origin);

// emitters
export const emitAdd = (obj) => {
  socket.emit("object-added", obj);
};

export const emitModify = (obj) => {
  socket.emit("object-modified", obj);
};

// listeners
export const addObj = (canvas) => {
  socket.off("new-add");
  socket.on("new-add", (data) => {
    const { obj, id } = data;
    let object;

    if (obj.type === "rect") {
      object = new fabric.Rect({
        height: obj.height,
        width: obj.width,
      });
    } else if (obj.type === "circle") {
      object = new fabric.Circle({
        radius: obj.radius,
      });
    } else if (obj.type === "triangle") {
      object = new fabric.Triangle({
        width: obj.width,
        height: obj.height,
      });
    }

    object.set({ id: id });
    canvas.add(object);
    canvas.renderAll();
  });
};

export const modifyObj = (canvas) => {
  socket.on("new-modification", (data) => {
    const { obj, id } = data;
    canvas.getObjects().forEach((object) => {
      if (object.id === id) {
        object.set(obj);
        object.setCoords();
        canvas.renderAll();
      }
    });
  });
};

export default socket;
