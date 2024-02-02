#! /usr/bin/env bun

class Mandelbrot {
    static MAX_ITERATIONS = 50;
    static WIDTH = 80;
    static HEIGHT = 24;
  
    static generateMandelbrot(x: number, y: number, zoom: number): number {
      let zx = x / Mandelbrot.WIDTH * 3.5 - 2.5;
      let zy = y / Mandelbrot.HEIGHT * 2 - 1;
  
      zx /= zoom;
      zy /= zoom;
  
      let cx = zx;
      let cy = zy;
  
      let iteration = 0;
  
      while (iteration < Mandelbrot.MAX_ITERATIONS) {
        let zxTemp = zx * zx - zy * zy + cx;
        let zyTemp = 2 * zx * zy + cy;
  
        zx = zxTemp;
        zy = zyTemp;
  
        if (zx * zx + zy * zy > 4) {
          break;
        }
        iteration++;
      }
      return iteration;
    }
  
    static renderMandelbrot(zoom: number): void {
      for (let y = 0; y < Mandelbrot.HEIGHT; y++) {
        let line = '';
  
        for (let x = 0; x < Mandelbrot.WIDTH; x++) {
          const iteration = Mandelbrot.generateMandelbrot(x, y, zoom);
          const char = iteration === Mandelbrot.MAX_ITERATIONS ? '*' : ' ';
          line += char;
        }
        console.log(line);
      }
    }
  }
  const initialZoom = 1.0;
  Mandelbrot.renderMandelbrot(initialZoom);
  
