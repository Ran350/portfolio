/* eslint-disable @typescript-eslint/no-explicit-any */

import { P5CanvasInstance, type Sketch } from "@p5-wrapper/react";

export const sketch: Sketch = (p5: P5CanvasInstance) => {
  const parentX = document.getElementById("next-p5-wrapper")?.clientWidth || 0;
  const canvasSize = {
    x: parentX,
    y: parentX / 2,
  };

  p5.setup = () => {
    p5.createCanvas(canvasSize.x, canvasSize.y);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(canvasSize.x, canvasSize.y);
  };

  p5.draw = () => {
    p5.background("#004C71");

    const logoList = [
      new LogoRSquare(),
      new LogoRSemicircle(),
      new LogoRTriangle(),
      new LogoA(),
      new LogoNTriangle(),
      new LogoNSquare(),
    ];
    logoList.forEach((logo) =>
      logo.displayShadow({ x: p5.mouseX, y: p5.mouseY })
    );
    logoList.forEach((logo) => logo.display());
  };

  class LogoBase {
    centerPos: { x: number; y: number };
    light: Light;
    polygonVerts: any[];
    color: string;
    walls: Wall[];

    constructor() {
      this.centerPos = { x: canvasSize.x / 2, y: canvasSize.y / 2 };
      this.light = new Light("POINT");
      this.polygonVerts = [];
      this.walls = [];
      this.color = "#fff";
    }
    init(verts: { x: number; y: number }[]) {
      this.polygonVerts = verts.map(({ x, y }) => p5.createVector(x, y));
      this.walls = verts.map(
        (_, i) =>
          new Wall(
            verts.at(i - 1)?.x || 0,
            verts.at(i - 1)?.y || 0,
            verts[i].x,
            verts[i].y
          )
      );
    }
    displayShadow(lightPos: { x: number; y: number }) {
      this.light.setPos(lightPos.x, lightPos.y);
      this.light.scanWalls(this.walls);
      // this.light.display(p5.color(255));
      this.light.castShadow(p5.color("#0C3B58"));
    }
    display() {
      p5.beginShape();
      p5.fill(this.color);
      this.polygonVerts.forEach(({ x, y }) => p5.vertex(x, y));
      p5.endShape(p5.CLOSE);
    }
  }

  class LogoRSquare extends LogoBase {
    constructor() {
      super();
      const verts = [
        { x: this.centerPos.x - 150, y: this.centerPos.y - 50 },
        { x: this.centerPos.x - 100 + 1, y: this.centerPos.y - 50 },
        { x: this.centerPos.x - 100 + 1, y: this.centerPos.y + 50 },
        { x: this.centerPos.x - 150, y: this.centerPos.y + 50 },
      ];
      this.init(verts);
      this.color = "#bfd2dc";
    }
  }

  class LogoRSemicircle extends LogoBase {
    constructor() {
      super();
      const verts: { x: number; y: number }[] = [];
      const numVertices = 16;
      for (let i = 0; i <= numVertices; i++) {
        const radius = 35;
        const startAngle = -p5.PI / 2;
        const endAngle = p5.PI / 2;
        const angle = p5.map(i, 0, numVertices, startAngle, endAngle);
        verts.push({
          x: p5.cos(angle) * radius + this.centerPos.x - 100,
          y: p5.sin(angle) * radius + this.centerPos.y - 50 + radius,
        });
      }
      this.init(verts);
      this.color = "#ebeeef";
    }
  }

  class LogoRTriangle extends LogoBase {
    constructor() {
      super();
      const verts = [
        { x: this.centerPos.x - 100, y: this.centerPos.y + 15 },
        { x: this.centerPos.x - 100, y: this.centerPos.y + 50 },
        { x: this.centerPos.x - 65, y: this.centerPos.y + 50 },
      ];
      this.init(verts);
      this.color = "#ebeeef";
    }
  }

  class LogoA extends LogoBase {
    constructor() {
      super();
      const verts = [
        { x: this.centerPos.x, y: this.centerPos.y - 50 },
        { x: this.centerPos.x - 50, y: this.centerPos.y + 50 },
        { x: this.centerPos.x + 50, y: this.centerPos.y + 50 },
      ];
      this.init(verts);
      this.color = "#ebeeef";
    }
  }

  class LogoNTriangle extends LogoBase {
    constructor() {
      super();
      const verts = [
        { x: this.centerPos.x + 50 + 15, y: this.centerPos.y + 50 },
        { x: this.centerPos.x + 50 + 15, y: this.centerPos.y - 50 },
        { x: this.centerPos.x + 140 + 15, y: this.centerPos.y + 50 },
      ];
      this.init(verts);
      this.color = "#ebeeef";
    }
  }

  class LogoNSquare extends LogoBase {
    constructor() {
      super();
      const verts = [
        { x: this.centerPos.x + 140 + 15, y: this.centerPos.y - 50 },
        { x: this.centerPos.x + 95 + 15, y: this.centerPos.y - 50 },
        { x: this.centerPos.x + 95 + 15, y: this.centerPos.y + 50 },
        { x: this.centerPos.x + 140 + 15, y: this.centerPos.y + 50 },
      ];
      this.init(verts);
      this.color = "#bfd2dc";
    }
  }

  class Wall {
    point0: any;
    point1: any;
    constructor(x0: number, y0: number, x1: number, y1: number) {
      this.point0 = p5.createVector(x0, y0);
      this.point1 = p5.createVector(x1, y1);
    }
  }

  class Light {
    typ: string;
    angle: number;
    pos: any;
    shadows: any[][];
    maxDist: number;
    constructor(typ = "POINT") {
      this.typ = typ; // 0 point | 1 sun
      this.angle = 0; // If type 0 (point)
      this.pos = p5.createVector(100, 100);
      this.shadows = [[]];
      this.maxDist = p5.sqrt(p5.width * p5.width + p5.height * p5.height);
    }
    setPos(x: number, y: number) {
      this.pos.set(x, y);
    }
    scanWalls(walls: Wall[]) {
      for (let i = 0; i < walls.length; i++) {
        this.shadows[i] = [];

        this.shadows[i][0] = walls[i].point0;
        this.shadows[i][1] = walls[i].point1;

        if (this.typ == "POINT") {
          const relPos0 = p5.createVector(
            walls[i].point0.x - this.pos.x,
            walls[i].point0.y - this.pos.y
          );
          const relPos1 = p5.createVector(
            walls[i].point1.x - this.pos.x,
            walls[i].point1.y - this.pos.y
          );
          this.shadows[i][2] = relPos1.mult(this.maxDist).add(this.pos);
          this.shadows[i][3] = relPos0.mult(this.maxDist).add(this.pos);
        } else if (this.typ == "SUN") {
          //   let relPos = p5.Vector.sub(
          //     p5.createVector(p5.width / 2, p5.height / 2),
          //     this.pos
          //   ).normalize();
          //   this.shadows[i][2] = p5.Vector.mult(relPos, this.maxDist).add(
          //     walls[i].point1
          //   );
          //   this.shadows[i][3] = p5.Vector.mult(relPos, this.maxDist).add(
          //     walls[i].point0
          //   );
        }
      }
    }
    display(col: any) {
      p5.fill(col);
      p5.ellipse(this.pos.x, this.pos.y, 20, 20);
    }
    castShadow(col: any) {
      p5.fill(col);
      p5.noStroke();
      for (let i = 0; i < this.shadows.length; i++) {
        p5.beginShape();
        for (let j = 0; j < this.shadows[i].length; j++) {
          p5.vertex(this.shadows[i][j].x, this.shadows[i][j].y);
        }
        p5.endShape(p5.CLOSE);
      }
    }
  }
};
