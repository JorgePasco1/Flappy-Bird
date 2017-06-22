function Bird() {
    this.y = height/2;
    this.x = 40;
    this.gravity = 0.7;
    this.velocity = 0;
    this.lift = -20;

    this.show = function() {
        fill('rgb(255,255,0)');
        ellipse(this.x, this.y, 35, 35);
    }

    this.up = function() {
        this.velocity += this.lift;
        // console.log(this.velocity);
    }

    this.update = function() {
        if (this.velocity < -12) {
            this.velocity = -12;
        }else if (this.velocity > 15){
            this.velocity = 15;
        }
        this.velocity += this.gravity;
        // this.velocity *= 0.8;
        this.y += this.velocity;

        if (this.y > height ) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }

}
