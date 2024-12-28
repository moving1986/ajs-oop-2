import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';


test('check name', () => {
    const names = "Alex";
    const obj = new Bowman(names);

    expect(obj.name).toBe(names);
});

test('check name', () => {
    const names = "Diana";
    const obj = new Zombie(names);

    expect(obj.name).toBe(names);
});

test('check type', () => {
    const obj = new Swordsman("Arthur");

    expect(obj.type).toBe('Swordsman');
});

test('check type', () => {
    const obj = new Daemon("Dima");

    expect(obj.type).toBe('Daemon');
});

test('check defence', () => {
    const obj = new Undead("Jora");

    expect(obj.defence).toBe(25);
});

test('check default health and level', () => {
    const obj = new Magician("Merlin");

    expect(obj.health).toBe(100);
    expect(obj.level).toBe(1);
});

test('check attack and defence for Bowman', () => {
    const obj = new Bowman("Robin");

    expect(obj.attack).toBe(25);
    expect(obj.defence).toBe(25);
});

test('check invalid name', () => {
    expect(() => new Bowman("A")).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
});

test('check invalid type', () => {
    expect(() => new Character("ValidName", "Warrior")).toThrow('Тип должен быть строкой одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
});

test('check levelUp', () => {
    const obj = new Undead("Igor");
    obj.levelUp();

    expect(obj.level).toBe(2);
    expect(obj.health).toBe(100);
    expect(obj.attack).toBe(30);
    expect(obj.defence).toBe(30);
});

test('check levelUp error', () => {
    const obj = new Undead("Igor");
    obj.health = 0;

    expect(() => obj.levelUp()).toThrow('Нельзя повысить левел умершего');
});


test('damage method does not allow negative health', () => {
    const hero = new Bowman("Robin");
    hero.damage(150);

    expect(hero.health).toBe(0);
});

test('damage method throws error for negative damage points', () => {
    const hero = new Bowman("Robin");

    expect(() => hero.damage(-10)).toThrow('Нельзя нанести отрицательный урон');
});



