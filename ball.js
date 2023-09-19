class Ball {
  constructor() {
    this.node = document.createElement("div");
    backGroundNode.append(this.node);

    this.x = Math.random() * window.screen.width;
    this.y = window.screen.height + 300;
    this.w = Math.random() * 300;

    this.h = this.w;
    this.r = this.w;
    this.ballSpeed = Math.random() * 4;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.borderRadius = `${this.r}px`;
    // this.node.style.transition="1s"

    this.color1 =
      "rgb(" +
      (Math.floor(Math.random() * 255) + 1) +
      "," +
      (Math.floor(Math.random() * 255) + 1) +
      "," +
      (Math.floor(Math.random() * 255) + 1) +
      ")";
    this.color2 =
      "rgb(" +
      (Math.floor(Math.random() * 255) + 1) +
      "," +
      (Math.floor(Math.random() * 255) + 1) +
      "," +
      (Math.floor(Math.random() * 255) + 1) +
      ")";

    this.node.style.background = `radial-gradient(circle, ${this.color1}, ${this.color2})`;
  }

  ballMove = (mouseX,mouseY) => {
    
   
   if(mouseY-(this.w/2)<this.y){

    if(mouseX-(this.w/2)<this.x){

      this.x-= 1;

    }else if(mouseX-(this.w/2)>this.x){

      this.x+= 1;

    }



    
   }
   
   
   this.y -= this.ballSpeed;
    this.node.style.top = `${this.y}px`;
     this.node.style.left = `${this.x}px`;
  };
}
