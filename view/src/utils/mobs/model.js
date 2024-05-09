export default class Mob {
    constructor(name, sprites, xp, hp) {
        this.name = name;
        this.sprites = sprites;
        this.xp = xp;
        this.hp = hp;
    }
    
    serialize() {
        return {
            name: this.name,
            sprites: this.sprites,
            xp: this.xp,
            hp: this.hp
        };
    }
};