class SuperArray {
    constructor(n, m, options) {
      this.arr = Array.from({ length: n }, () =>
        Array.from({ length: m }, () =>
          Math.floor(Math.random() * (options.max - options.min) + options.min)
        )
      );
    }
  
    clear(direction, k) {
      if (direction === "row" && this.arr.length >= k) {
        for (let i = 0; i < this.arr[k - 1].length; i++) {
          this.arr[k - 1][i] = 0;
        }
  
        return this.arr;
      } else if (direction === "column" && this.arr[0].length >= k) {
        this.arr.map((el) => (el[k - 1] = 0));
        return this.arr;
      } else {
        console.log("не правильный тип или число");
        return;
      }
    }
  
    setMarker({ x, y }) {
      if (this.arr.length < x || this.arr[0].length < y) {
        console.log("х или y больше длины массива");
        return;
      }
  
      this.arr[x - 1][y - 1] = this.arr[x - 1][y - 1] + "&";
      return this.arr;
    }
  
    checkMarker() {
      return this.arr.reduce((acc, ar, i) => {
        const idxY = ar.findIndex((el) => el.toString().includes("&"));
  
        if (idxY !== -1) return { x: i + 1, y: idxY + 1 };
        return acc;
      }, "");
    }
  
    goTo({ x, y }) {
      if (this.checkMarker() === "") {
        console.log("Первая точка не задана. Двигать нечего.");
        return;
      }
  
      let newData = "";
      this.arr.forEach((ar) => {
        ar.forEach((el, i) => {
          if (el.toString().includes("&")) {
            newData = el.split("&").join("");
            ar[i] = Number(newData);
          }
        });
      });
  
      this.setMarker({ x: x, y: y });
      return this.arr;
    }
  
    shift(direction) {
      const point = this.checkMarker();
  
      if (point === "") {
        console.log("маркер не задан");
        return;
      }
  
      switch (direction) {
        case "left":
          point.y = point.y - 1;
          break;
  
        case "right":
          point.y = point.y + 1;
          break;
  
        case "top":
          point.x = point.x - 1;
          break;
  
        case "bottom":
          point.x = point.x + 1;
  
          break;
  
        default:
          console.log("нет такого напраления");
          return;
      }
  
      if (
        this.arr.length < point.x ||
        this.arr[0].length < point.y ||
        point.x < 1 ||
        point.y < 1
      ) {
        console.log("движение выходит за рамки массива");
        return;
      }
  
      this.goTo(point);
  
      return this.arr;
    }
  }
  
  SuperArray.prototype.render = function (separator) {
    const lineSegregaror = separator.repeat(this.arr[0].length);
    this.arr.forEach((ar) => {
      ar.forEach((el) => document.write(el + " "));
      document.write("<br>");
    });
    document.write(lineSegregaror, "<br>");
  };
  
  //////////////// проверки
  
  const superArray = new SuperArray(4, 10, { min: 10, max: 55 });
  
  superArray.render("-");
  
  superArray.clear("row", 4);
  superArray.render("-");
  
  superArray.clear("column", 5);
  superArray.render("-");
  
  superArray.clear("columnv", 4);
  superArray.render("-");
  
  superArray.setMarker({ x: 4, y: 5 });
  superArray.render("-");
  
  superArray.goTo({ x: 2, y: 4 });
  superArray.render("-");
  
  superArray.shift("left");
  superArray.render("-");
  
  superArray.shift("right");
  superArray.render("-");
  
  superArray.shift("top");
  superArray.render("-");
  
  superArray.shift("bottom");
  superArray.render("-");
  
  superArray.shift("left1");
  superArray.render("-");
  