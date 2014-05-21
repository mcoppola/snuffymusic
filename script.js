utils.setCanvas(window);
window.onload = function () {

    // ------------------ INITS ---------------------------------------------------------- //

    var canvas = document.getElementById('canvas');
    var top = document.getElementById('top');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mouse = utils.captureMouse(canvas);

    envi = new Envi(canvas, window);


    // --------------- MAKE ASSETS ------------------------------------------------------- //
    

    var grid = new Asset(envi.models.grid2D(100, 100, "$", "#441"), -canvas.width,-5*canvas.height, -4000, 60);
    grid.modelAttributes[0] = new move(-canvas.width - 1000, canvas.height, -4000, 0.5);

    
    

    // --------------- LOAD ASSETS ------------------------------------------------------- //

    var assets = [];
    
    assets[0] = grid;


    // --------------- MAKE SCENE ------------------------------------------------------- //

    scene = new Scene(envi, assets);
  
    // --------------  DRAW FRAME ------------------------------------------------------- /

    utils.getAnimationFrame();
  (function drawFrame () {
    window.requestAnimationFrame(drawFrame, canvas);

    scene.play();
  }());
};