class PlayerChar {
    constructor() {
        this._name;
        this._level = 0;
        this._maxHP;
        this._curHP;
        this._curDefense;
        this._curAttack;
        this._weaponLvl;
        this._armourLvl;
        this._curWeapon;
        this._curArmour;
    }

    updateStats() {
        this._curAttack = this._attack[this._level];
        this._curDefense = this._defense[this._level];
        this._maxHP = this._health[this._level];
        this._curWeapon = this._weapon[this._weaponLvl];
        this._curArmour = this._armour[this._armourLvl];
    }

    attackL() {
        return this.rollHit(100) ? Math.floor(this._curAttack * .8) : -1;
    }

    attackM() {
        return this.rollHit(80) ? this._curAttack : -1;
    }

    attackH() {
        return this.rollHit(50) ? Math.floor(this._curAttack * 1.5) : -1;
    }

    rollHit(hitChance) {
        return Math.random() * 100 < hitChance ? true : false;
    }

    takeDamage(damageTaken) {
        // Logic for Miss vs Hit
        let finalDamage = 0;
        if (damageTaken === -1) {
            $('#player-damage').html('Miss!')
        } else {
            finalDamage = damageTaken - this._curDefense > 0 ? damageTaken - this._curDefense : 1;
            $('#player-damage').html(parseInt('-' + finalDamage));
            // Shakes player sprite
            $("#player-sprite").effect("shake", { times: 3, distance: 5 }, 200);
        }

        // Floating damage Text
        $('#player-damage').animate({
            opacity: 0,
            top: "-=65",
        }, 1000, function () {
            $(this).text('');
            $(this).removeAttr('style');
        });

        this.curHP = this._curHP - finalDamage;
    }

    isDead() {
        return this._curHP === 0 ? true : false;
    }

    set level(lvl) {
        this._level = lvl;
        this.updateStats();
    }

    set weapon(level) {
        this._weaponLvl = level;
        this.updateStats();
    }

    set armour(level) {
        this._armourLvl = level;
        this.updateStats();
    }

    set curHP(hp) {
        if (hp > this._maxHP) this._curHP = this._maxHP;
        else if (hp < 0) this._curHP = 0;
        else this._curHP = hp;
    }
}

class Knight extends PlayerChar {
    constructor() {
        super();
        this.charID = 1;
        this._name = 'Knight';
        this._health = [50, 65, 80];
        this._attack = [5, 7, 9];
        this._defense = [3, 5, 7];
        this._weapon = [0, 3, 6];
        this._armour = [0, 2, 4];
        super._curHP = this._health[0];
        super.updateStats();
    }

    getImage() {
        return 'http://via.placeholder.com/300x300';
    }
}

class Barbarian extends PlayerChar {
    constructor() {
        super();
        this.charID = 2;
        this._name = 'Beserker';
        this._health = [60, 75, 90];
        this._attack = [6, 8, 10];
        this._defense = [3, 4, 5];
        this._weapon = [0, 4, 8];
        this._armour = [0, 2, 4];
        super._curHP = this._health[0];
        super.updateStats();
    }

    getImage() {
        return 'http://via.placeholder.com/300x300';
    }
}

class Rogue extends PlayerChar {
    constructor() {
        super();
        this.charID = 3;
        this._name = 'Rogue';
        this._health = [40, 55, 70];
        this._attack = [7, 9, 11];
        this._defense = [2, 3, 4];
        this._weapon = [0, 5, 10];
        this._armour = [0, 2, 4];
        super._curHP = this._health[0];
        super.updateStats();
    }

    getImage() {
        return 'http://via.placeholder.com/300x300';
    }
}

class Enemy {
    constructor() {
        this._enemyID;
        this._name;
        this._maxHP;
        this._curHP;
        this._curDefense;
        this._curAttack;
    }

    setMonster(enemyID) {
        switch (enemyID) {
            case 1:
                this._enemyID = 1
                this._name = 'bat'
                this._maxHP = 10
                this._curHP = 10
                this._curDefense = 0
                this._curAttack = 2
                break;
        }

    }

    attack() {
        return this.rollHit(80) ? this._curAttack : -1;
    }

    rollHit(hitChance) {
        return Math.random() * 100 < hitChance ? true : false;
    }

    takeDamage(damageTaken) {
        // Logic for Miss vs Hit
        let finalDamage = 0;
        if (damageTaken === -1) {
            $('#enemy-damage').html('Miss!')
        } else {
            finalDamage = damageTaken - this._curDefense > 0 ? damageTaken - this._curDefense : 1;
            $('#enemy-damage').html(parseInt('-' + finalDamage));
            // Shakes enemy sprite
            $("#enemy-sprite").effect("shake", { times: 3, distance: 5 }, 200);
        }

        // Floating damage Text
        $('#enemy-damage').animate({
            opacity: 0,
            top: "-=65",
        }, 1000, function () {
            $(this).text('');
            $(this).removeAttr('style');
        });

        this.curHP = this._curHP - finalDamage;
    }

    getImage(ID) {
        switch (ID) {
            case 1: return 'http://via.placeholder.com/300x300'; break;
        }
    }

    isDead() {
        return this._curHP === 0 ? true : false;
    }

    set curHP(hp) {
        if (hp > this._maxHP) this._curHP = this._maxHP;
        else if (hp < 0) this._curHP = 0;
        else this._curHP = hp;
    }
}

function genPlayer(charID) {
    switch (charID) {
        case 1: return new Knight(); break;
        case 2: return new Barbarian(); break;
        case 3: return new Rogue(); break;
    }
}

function genEnemy(enemyID) {
    let enemy = new Enemy();
    enemy.setMonster(enemyID);
    return enemy;
}

function startGame() {
    // Some event listener thing that waits for you to choose a character. Do some weird thing where you like click a character and it changes it to an active state. and once you "CONFIRM" it goes on... Maybe have it display that characters stats while you have it "active"    
    // Some function that sets your character to your choice
    // Some 
    // Some thing that randomizes enemy character
    // startCombat();

    function startCombat() {

    }

    function chooseCharacter() {

    }

    function setPlayerCharacter() {

    }

    function setEnemyCharacter() {

    }
}

function loadPlayer(charID) {
    $("#player").data("character", genPlayer(charID));
    $("#player-sprite img").attr("src", player().getImage());
}

function loadEnemy(enemyID) {
    $("#enemy").data("character", genEnemy());
    enemy().setMonster(enemyID);
    $("#enemy-sprite img").attr("src", enemy().getImage(enemyID));

}

function player() {
    return $("#player").data("character");
}

function enemy() {
    return $('#enemy').data('character');
}