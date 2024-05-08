export const getRandomSprite = (mob) => {
    const sprites = mob.Sprite;
    const randomIndex = Math.floor(Math.random() * sprites.length);
    return sprites[randomIndex];
};