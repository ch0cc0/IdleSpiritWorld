import { Class } from './classCardObjects';

const { rollStat, rollD8 } = require('./helper_funcs');

export class CharacterModel {
    constructor() {
        this.str = rollStat();
        this.dex = rollStat();
        this.con = rollStat();
        this.int = rollStat();
        this.wis = rollStat();
        this.cha = rollStat();
        this.hp = 8;
        this.xp = 0;
        this.lvl = 1;
        this.activeClass = null;
        this.classes = {
            peasant: new Class(
                'Peasant', 'None', 'None', 
                'You uhm... can still click. That\'s it',
                'None',
                ''),
            fighter: new Class(
                'Fighter', 'Str', 'Str-9', 
                'A fighter is good for one thing. Hitting stuff. Really hard.',
                'More damage to hit.',
                'Scales with Str'),
            mage: new Class(
                'Mage', 'Int', 'Int-12', 
                'You have been scouted and taught the ways of magic. Summon familiars to aid in battle.',
                'Familiars hit for you.',
                'Scales with Int'),
            hunter: new Class(
                'Hunter', 'Dex', 'Dex-9', 
                'You can fire off shots quicker than someone can blink. At least that\'s what you want people to think.',
                'Can trigger multiple hits with each click.',
                'Scales with Dex'),
            pickpocket: new Class(
                'Pickpocket', 'Dex', 'Dex-9, Cha-9', 
                'Take exp and gold with every hit.',
                'More damage to hit.',
                'Scales with Dex and Cha'),
        };
    }

    conHpModifier() {
        switch (this.con) {
            case 3:
                return -3;
            case 4:
            case 5:
                return -2;
            case 6:
            case 7:
            case 8:
                return -1;
            case 9:
            case 10:
            case 11:
            case 12:
                return 0;
            case 13:
            case 14:
            case 15:
                return 1;
            case 16:
            case 17:
                return 2;
            case 18:
                return 3;
            default:
                return 0;
        }
    }

    hpRoll() {
        this.hp += rollD8() + this.conHpModifier()
    }

    lvlUp() {
        this.hpRoll()
    }
}