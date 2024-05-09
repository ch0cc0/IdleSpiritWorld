export const getRandomSprite = (mob) => {
    const sprites = mob.sprites;
    const randomIndex = Math.floor(Math.random() * sprites.length);
    return sprites[randomIndex];
};