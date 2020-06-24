class Divisions{
    constructor(x,y,w,h){
      var options = {
        isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      w = w;
      h = h;
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(186, 144, 213);
        rect(pos.x, pos.y, this.w, this.h);
    }
}
