function create() {
    //SQUARE
    square = game.add.sprite(game.width - 200, game.width / 2, "square");
    game.physics.arcade.enable(square);
    square.body.immovable = true;

    //MOVING BAR
    movingBar = game.add.sprite(game.width / 2, game.height / 1.09, "movingBar");
    game.physics.arcade.enable(movingBar);
    movingBar.body.immovable = true;

    //BALL
    ball = game.add.sprite(movingBar.x + movingBar.width / 2, 100, "ball");
    game.physics.arcade.enable(ball);
    ball.body.gravity.y = 200;
    ball.body.collideWorldBounds = true;

    //LEFT BAR
    barLeft = game.add.sprite(0, 0, "barLeft");
    barLeft.scale.setTo(0.5, 1.5);
    game.physics.arcade.enable(barLeft);
    barLeft.body.immovable = true;

    //RIGHT BAR
    barRight = game.add.sprite(game.width - 16, 0, "barRight");
    barRight.scale.setTo(0.5, 1.5);
    game.physics.arcade.enable(barRight);
    barRight.body.immovable = true;

    //TOP BAR
    barTop = game.add.sprite(0, 0, "barTop");
    barTop.scale.setTo(2.5, 0.5);
    game.physics.arcade.enable(barTop);
    barTop.body.immovable = true;
}
