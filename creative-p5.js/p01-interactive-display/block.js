class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.c = 70;
    }

    display() {
        stroke(this.c);
        noFill();

        push();
        translate(this.x, this.y);
        rotate(this.angle);

        if(this.angle > 30 && this.angle < 70) {
            this.drawRect();
        }
        else {
            this.drawX();
        }

        pop();
    }

    move() {
        let distance;

        // if mouse is moving
        if (pmouseX - mouseX != 0 && pmouseY - mouseY != 0) {
            distance = dist(mouseX, mouseY, this.x, this.y);
    
            if (distance < mouseDist) {
                this.angle += 2;
                this.c = 240;
            }
        } 
        
        // checks angles if they are already rotating
        if (this.angle > 0 && this.angle < 90) {
            this.angle += 2;
            
            if (this.c > 70) {
                this.c -= 3;
            }
        }
        else {
            this.angle = 0;
            this.c = 70;
        }
    }

    drawRect() {
        rect(0, 0, size - offset, size - offset);
    }

    drawX() {
        let margin = -size / 2;
        line(margin + (offset / 2), margin + (offset / 2), margin + size - (offset / 2), margin + size - (offset / 2));

        line(margin + size - (offset / 2), margin + (offset / 2), margin + (offset / 2), margin + size - (offset / 2))
    }
}