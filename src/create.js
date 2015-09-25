function create() {
    //SQUARE
    square = createRombo();

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

function createRombo(){
    var rombo = game.add.group();

    var s1 = rombo.create(200,100, "square");
    var s2 = rombo.create(s1.x + s1.width - 12, s1.y + s1.height - 12, "square");
  //  var s3 = rombo.create(s1.x - s1.width / 2 ,s1.y - s1.height / 2, "square");

    rombo.enableBody = true;
    
    rombo.forEach(function(item) {
        item.angle = 45;
        game.physics.arcade.enable(item);
        item.body.velocity.x = 20;
        item.anchor.setTo(0.5, 0.5);
        item.body.immovable = true;
    }, this);

    return rombo;
}