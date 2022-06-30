let Game = new Phaser.Game(800, 640, Phaser.Canvas)
Game.state.add("PrimerEstado", Nivel1)
Game.state.start("PrimerEstado")