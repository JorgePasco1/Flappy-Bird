function Pipe() {
    this.x = width;
    this.w = 90;
    this.length = 30 + Math.random() * 400;
    this.speed = 2;
    this.spaceBetween = 150;

    this.show = function () {
        fill('rgb(0,128,0)');
        rect(this.x, 0 , this.w, this.length);
        rect(this.x, this.length + this.spaceBetween, this.w, height-(this.length + this.spaceBetween));
    }

    this.update = function () {
        this.x -= this.speed;
    }

    this.offscreen = function () {
        return (this.x < - this.w);
    }

    this.hits = function (bird) {
        if (bird.y - 15 < this.length || bird.y + 15> this.length + this.spaceBetween) {
            if (bird.x > this.x && bird.x < this.x+this.w) {
                return true
            }
        }
        return false;
    }
}
