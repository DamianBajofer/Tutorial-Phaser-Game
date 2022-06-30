class Nivel1{

    // Preload //
    // · Encargado de precargar las assets
    preload(){
        this.load.image("background", "images/bg.png")
        this.load.image("bones", "images/bones001.png")
        this.load.image("box", "images/box001.png")
        this.load.image("cross", "images/cross001.png")
        this.load.image("tree", "images/tree001.png")
        this.load.image("item", "images/Item006.png")
        this.load.spritesheet("player", "images/player.png", 80, 80, 22)
        this.load.spritesheet("firebolt", "images/firebolt.png", 32, 17, 8)
    }

    // Create //
    // · Crear todo el contenido en el juego
    create(){

        // Sistema de Fisica //
        this.physics.startSystem(Phaser.Physics.ARCADE)

        // Gravedad del Juego //
        this.physics.arcade.gravity.y = 1300

        // Fondo del Juego //
        this.bg = this.add.tileSprite(0, 0, 800, 640, "background")

        // Plataformas //
        this.Platforms = this.add.group()
        this.physics.arcade.enable(this.Platforms)
        for(let i = 0; i < 16; i++){
            let box = this.Platforms.create((i*50), this.game.height-50, "box")
            
            this.physics.arcade.enable(box)
            box.body.immovable = true
            box.body.moves = false
        }

    }

    // Update //
    // · Mantener actualizado en tiempo real el juego
    update(){

    }

}