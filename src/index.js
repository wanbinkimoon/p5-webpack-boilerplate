import './styles.css';
import p5 from 'p5';

function sketch(p) {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(125);
  };

  p.draw = () => {
    p.background(125);
    p.rect(p.mouseX, p.mouseY, 50, 50);
  };
}

new p5(sketch);
