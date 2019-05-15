class pixel {
    
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.lux=x-5;
      this.luy=y-5;
      this.ldx=x-5;
      this.ldy=y+5;
      this.rux=x+5;
      this.ruy=y-5;
      this.rdx=x+5;
      this.rdy=y+5;
    } 
    square(){
      rect(this.x-5, this.y-5, 10, 10);
    }
    fill(){
      push();
      fill(255, 0, 0);
      rect(this.x-5, this.y-5, 10, 10);
      pop();
    }
    fillBlue(){
      push();
      fill(0, 0, 255);
      rect(this.x-5, this.y-5, 10, 10);
      pop();
    }
    left(){
      this.x = this.x-10;
    }
    right(){
      this.x = this.x+10;
    }
    up(){
      this.y = this.y-10;
    }
    down(){
      this.y = this.y+10;
    }
  }