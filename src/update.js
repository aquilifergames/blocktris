function update() {

    game.physics.arcade.collide(movingBar, ball);
    game.physics.arcade.collide(barLeft, ball);
    game.physics.arcade.collide(barRight, ball);
    game.physics.arcade.collide(barTop, ball);
    game.physics.arcade.collide(square, ball);

    cursors = game.input.keyboard.createCursorKeys();

    movingBar.body.velocity.x = 0;

    if (cursors.left.isDown) {
        lastArrow = "left";
        movingBar.body.velocity.x = -400;
    }

    if (cursors.right.isDown) {
        lastArrow = "right";
        movingBar.body.velocity.x = 400;
    }

    if (ball.body.touching.down) {
        ball.body.velocity.y = -ballVelocity;

        if (lastArrow == "right") {
            ball.body.velocity.x = ballVelocity;

        }

        if (lastArrow == "left") {
            ball.body.velocity.x = -ballVelocity;
        }
    }

    if (ball.body.touching.left) {
        ball.body.velocity.x = ballVelocity;
    }

    if (ball.body.touching.right) {
        ball.body.velocity.x = -ballVelocity;
    }

}