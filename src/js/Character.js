export default class Character {
    constructor(name, type) {
        this.name = this.checkName(name);
        this.type = this.checkType(type);
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }

    checkName(name) {
        if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
        }
        return name;
    }

    checkType(type) {
        const valTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (typeof (type) !== 'string' || !valTypes.includes(type)) {
            throw new Error('Тип должен быть строкой одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
        }
        return type;
    }

    levelUp() {
        if(this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        } else {
            this.level++;
            this.attack = Math.floor(this.attack * 1.2);
            this.defence = Math.floor(this.defence * 1.2);
            this.health = 100;
        }
    }

    damage(points) {
        if (points < 0) {
            throw new Error('Нельзя нанести отрицательный урон');
        }
        if (this.health > 0) {
            const damageTaken = points * (1 - this.defence / 100);
            this.health = Math.max(this.health - damageTaken, 0);
        }
    }
}