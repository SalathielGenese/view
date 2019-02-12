import '../ts/babylon'

export class Core {
    private canvas: any;
    private engine: BABYLON.Engine;
    private scene: BABYLON.Scene;

    constructor() {
        this.canvas = document.getElementById("renderCanvas"); // Get the canvas element
        this.engine = new BABYLON.Engine(this.canvas, true); // Generate the BABYLON 3D engine 
        this.scene = new BABYLON.Scene(this.engine);
    }
    
    private initScene() {
        // Create the scene space
        this.scene = new BABYLON.Scene(this.engine);;
    }

    getEngine(): BABYLON.Engine {
        return this.engine;
    }

    getScene(): BABYLON.Scene {
        if(this.scene == null)
            this.scene = new BABYLON.Scene(this.engine);;

        return this.scene;
    }
    
    initCamera(): BABYLON.Camera {
        var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(5,20,30), this.scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        
        // camera.mode = BABYLON.Camera.ORTHOGRAPIC_CAMERA;
        // camera.orthoTop = 45;
        // camera.orthoBottom = -45;
        // camera.orthoLeft = -90;
        // camera.orthoRight = 90;
        
        camera.attachControl(this.canvas, true);
        return camera;
    }
    
    initLight (): BABYLON.Light {
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 0, 1), this.scene);
        light.intensity = 0.7;
        // light.diffuse = new BABYLON.Color3(1,1,1);
        // light.specular = new BABYLON.Color3(1,1,0);
        return light;
    }
    
    setMaterial (filename: string, materialName: string): BABYLON.StandardMaterial {
        var material = new BABYLON.StandardMaterial(materialName, this.scene);
        material.diffuseTexture =  new BABYLON.Texture(filename, this.scene);
        material.specularTexture = new BABYLON.Texture(filename, this.scene);
        material.emissiveTexture = new BABYLON.Texture(filename, this.scene);
        material.ambientTexture =  new BABYLON.Texture(filename, this.scene);
        return material;
    }
    
    createSphere (): BABYLON.Mesh {
        return BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, this.scene);
    }
    
    createGround(position: BABYLON.Vector3): BABYLON.Mesh  {
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 200, height: 200}, this.scene);
        ground.position = position;
        ground.material = this.setMaterial('assets/grid.png', "gridMat");
        return ground;
    }
    
    createHolder(position: BABYLON.Vector3, size: number): BABYLON.Mesh {
        // Utils.log("createHolder");
        var holder = BABYLON.MeshBuilder.CreatePlane("holder", { size }, this.scene);
        holder.position = position;
        return holder;
    }
    
    createBox(position: BABYLON.Vector3, height: number, textureFilename: string): BABYLON.Mesh {
        var box = BABYLON.MeshBuilder.CreateBox("boxxy", {height:height, width:1, depth:1}, this.scene);
        box.position = position;
        box.material = this.setMaterial(textureFilename, "boxxyMat");
        return box;
    }
    
    initSpriteManager(name: string, filename: string, width: number, height: number): BABYLON.SpriteManager {
        return new BABYLON.SpriteManager(name, filename, 1, {width: width, height: height}, this.scene);
    }
    
    createSprite(name: string, spriteManager: BABYLON.ISpriteManager): BABYLON.Sprite {
        return new BABYLON.Sprite(name, spriteManager);
    }
}