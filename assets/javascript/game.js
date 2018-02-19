class PlayerChar {
    constructor() {
        this._classID;
        this._className;
        this._level = 0;
        this._curHP;
        this._curDefense;
        this._curAttack;
        this._curWeapon;
        this._curArmour;
    }

    setLevel(level) {        
        this._level = level;
        this._curAttack = this._weapon[level];        
    }

    attackL() {

    }

    attackM() {

    }

    attackH() {

    }

    takeDamage(damageTaken) {
        // Logic for Miss vs Hit
        if (damageTaken < 1) {
            $('#player-damage').html('Miss!')
        } else {
            $('#player-damage').html(parseInt('-' + damageTaken));
            // Shakes player sprite
            $("#player-sprite").effect("shake", { times: 3, distance: 5 }, 200);
        }

        // Floating damage Text
        $('#player-damage').animate({
            opacity: 0,
            top: "-=50"
        }, 1000, function () {
            $(this).text('');
            $(this).removeAttr('style');
        });
    }

    printStats() {

    }

    get health() {
        return this._health;
    }


}

class Knight extends PlayerChar {
    constructor() {
        super();
        this.charID = 1;
        this._className = 'Knight';
        this._level = 1;
        this._health = [50, 65, 80];
        this._attack = [2, 4, 6];
        this._defense = [3, 5, 7];
        this._weapon = [0, 2, 4];
        this._armour = [0, 2, 5];
    }

    getImage() {
        return '<img src="http://via.placeholder.com/200x200" />';
    }
}

class Barbarian extends PlayerChar {
    constructor() {
        this.charID = 2;
        this._className = 'Beserker';
        this._level = 1;
        this._health = [60, 75, 90];
        this._attack = [3, 5, 7];
        this._defense = [2, 4, 6];
        this._weapon = [0, 2, 5];
        this._armour = [0, 2, 4];
    }

    getImage() {
        return '<img src="http://via.placeholder.com/200x200" />'
    }
}

class Rogue extends PlayerChar {
    constructor() {
        this.charID = 3;
        this._className = 'Rogue';
        this._level = 1;
        this._health = [40, 55, 70];
        this._attack = [4, 7, 10];
        this._defense = [1, 3, 5];
        this._weapon = [0, 3, 6];
        this._armour = [0, 2, 4];
    }

    getImage() {
        return '<img src="http://via.placeholder.com/200x200" />'
    }
}

function genCharacter(charID) {
    switch (charID) {
        case 1: return new Knight(); break;
        case 2: return new Barbarian(); break;
        case 3: return new Rogue(); break;
    }
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

//Test Stuff here
function loadPlayer(charID) {
    $("#player").data("character", genCharacter(charID));
    $("#player-sprite").html(player().getImage());
}

function player() {
    return $("#player").data("character");
}

loadPlayer(1);
player().takeDamage(100);