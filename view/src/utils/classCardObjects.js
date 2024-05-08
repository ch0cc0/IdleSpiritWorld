export class Class {
    constructor(name, primaryStat, requirements, description, effects, scales) {
        this.name = name;
        this.primaryStat = primaryStat;
        this.requirements = requirements;
        this.description = description;
        this.effects = effects;
        this.scales = scales;
        this.lvl = 0;
        this.xp = 0;
        this.xpMilestonePoints = [200, 400, 800, 1600, 3200, 6400, 12800, 25600];
    }

    addXP(amount) {
        this.xp += amount;
        this.checkLevelUp();
    }

    
    checkLevelUp() {
        const nextLevelXP = this.milestonePoints[this.level - 1];
        if (this.xp >= nextLevelXP) {
            this.level++;
            this.xp = 0;
            console.log(`${this.name} leveled up to level ${this.level}`);
        }
    }
}

export const fighter = new Class(
    'Fighter', 'Str', 'Str-9', 
    'A fighter is good for one thing. Hitting stuff. Really hard.',
    'More damage to hit.',
    'Scales with Str');

export const mage = new Class(
    'Mage', 'Int', 'Int-12', 
    'You have been scouted and taught the ways of magic. Summon familiars to aid in battle.',
    'Familiars hit for you.',
    'Scales with Int');

export const hunter = new Class(
    'Hunter', 'Dex', 'Dex-9', 
    'You can fire off shots quicker than someone can blink. At least that\'s what you want people to think.',
    'Can trigger multiple hits with each click.',
    'Scales with Dex');

export const pickpocket = new Class(
    'Pickpocket', 'Dex', 'Dex-9, Cha-9', 
    'Take exp and gold with every hit.',
    'More damage to hit.',
    'Scales with Dex and Cha');

export const peasant = new Class(
    'Peasant', 'None', 'None', 
    'You uhm... can still click. That\'s it',
    'None',
    '');