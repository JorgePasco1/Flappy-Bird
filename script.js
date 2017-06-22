var bird;
var pipes = [];
var score = 0;


function setup(){
    createCanvas(400,600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background('rgb(135,206,250)');

    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (bird.x == pipes[i].x && !pipes[i].hits(bird)){
            score++;
        }else if (pipes[i].hits(bird)) {
            pipes = [];
            bird.y = height/2;
            bird.velocity = 0;
            score = 0;
        }else{
            if (pipes[i].offscreen()) {
                pipes.splice(i,1);
            }
        }
    }

    bird.update();
    bird.show();

    textSize(32);
    fill(0);
    text("Score: "+score, 10, 30);

    if (frameCount % 150 == 0) {
        pipes.push(new Pipe());
    }

}

function keyPressed() {
    if (key == ' ') {
        bird.up();
        // console.log("up");
    }
}
