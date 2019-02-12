import { Core } from "./core";

export class View {
    private core: Core;

    constructor() {
        this.core = new Core();
    }

    createTCView(count: number, offset: number) {
        for(let x = 0; x < count; x++)
        {
            for(let y = 0; y < count; y++)
            {
                this.core.createBox(new BABYLON.Vector3(-12 + (x * offset), 0, -12 + (y * offset)), Math.random() * 10, 'assets/gridLOD.png');
            }
        }
    }

    createSprites() {
        let spriteManager = this.core.initSpriteManager("lodSM", 'assets/gridLOD.png', 64, 64);
        return this.core.createSprite("lod", spriteManager);
    }

    createHolder(position: BABYLON.Vector3) {
    }

    createIsoView() {
    }
}