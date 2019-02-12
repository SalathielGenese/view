import { Core } from './core';
import { View } from './view';
import { Utils } from './utils';

class Main {
    private _core: any;
    private _scene: BABYLON.Scene;
    private _engine: BABYLON.Engine;

    constructor() {
        this._core = new Core();
        this._scene = this._core.getScene();
        this._engine = this._core.getEngine();
    }

    get scene(): BABYLON.Scene {
        return this._scene;
    }

    get engine(): BABYLON.Engine {
        return this._engine;
    }

    setup() {
        Utils.log("setupScene");
    
        this._core.initCamera(this._scene);
        this._core.initLight();
    
        this._core.createGround(new BABYLON.Vector3(0,-0.5,0));
    
        var tcView = new View();
        // tcView.createIsoView();
    
        // var sprite = tcView.createSprites(this.scene);
        // sprite.stopAnimation(); 
        // sprite.cellIndex = 0;
        // sprite.position.x = 0;
        // sprite.position.y = 0;
        
        tcView.createTCView(16, 2);
        // createHolder(scene, new BABYLON.Vector3(0,0,0), 100);
    }

    run() {
        this.engine.runRenderLoop(function () { 
            main.scene.render();
            // stats.update();
        });
        
        window.addEventListener("resize", function () { 
            // new TcCore().getEngine().resize();
            main.engine.resize();
        });
    }
}

// let stats = Utils.initStats();
let main = new Main();
main.setup();
main.run();