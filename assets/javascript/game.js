class PlayerChar {
    constructor() {
        this._name;
        this._level = 0;
        this._gold = 0;
        this._maxHP;
        this._curHP;
        this._curDefense;
        this._curAttack;
        this._weaponLvl = 0;
        this._armourLvl = 0;
        this._curWeapon;
        this._curArmour;
        this._clearedDungeons = [];
    }

    updateStats() {
        console.log("This happened");
        this._maxHP = this._health[this._level];
        this._curWeapon = this._weapon[this._weaponLvl];
        this._curArmour = this._armour[this._armourLvl];
        this._curAttack = this._attack[this._level];
        this._curDefense = this._defense[this._level];
    }

    attackL() {
        enemy().takeDamage(this.rollHit(100) ? Math.floor(this.getDamage() * .8) : -1);
    }

    attackM() {
        enemy().takeDamage(this.rollHit(80) ? this.getDamage() : -1);
    }

    attackH() {
        enemy().takeDamage(this.rollHit(50) ? Math.floor(this.getDamage() * 1.5) : -1);
    }

    rollHit(hitChance) {
        return Math.random() * 100 < hitChance ? true : false;
    }

    takeDamage(damageTaken) {
        $("#player-damage").finish();
        $("#player-sprite").finish();
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
        }, 500, function () {
            $(this).text('');
            $(this).removeAttr('style');
        });

        this.curHP = this._curHP - finalDamage;
    }

    getDamage() {
        return this._curAttack + this._curWeapon;
    }

    getArmour() {
        return this._curDefense + this._curArmour;
    }

    isDead() {
        return this._curHP === 0 ? true : false;
    }

    set level(lvl) {
        this._level = lvl;
        this.updateStats();
    }

    upgradeWeapon(level) {
        this._weaponLvl = level;
        this.updateStats();
    }

    upgradeArmour(level) {
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
        return './assets/images/knight-1.png';
    }
}

class Barbarian extends PlayerChar {
    constructor() {
        super();
        this.charID = 2;
        this._name = 'Barbarian';
        this._health = [60, 75, 90];
        this._attack = [6, 8, 10];
        this._defense = [3, 4, 5];
        this._weapon = [0, 4, 8];
        this._armour = [0, 2, 4];
        super._curHP = this._health[0];
        super.updateStats();
    }

    getImage() {
        return './assets/images/dwarf-1.png';
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
        return './assets/images/rogue-1.png';
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
                this._enemyID = 1;;
                this._name = 'bat';;
                this._maxHP = 10;;
                this._curHP = 10;;
                this._curDefense = 2;;
                this._curAttack = 2;;
                break;
            case 2:
                this._enemyID = 1;;
                this._name = 'Dark Sorcerer';;
                this._maxHP = 10;;
                this._curHP = 10;;
                this._curDefense = 0;;
                this._curAttack = 2;;
                break;
            case 3:
                this._enemyID = 1;;
                this._name = 'Dark Knight';;
                this._maxHP = 10;;
                this._curHP = 10;;
                this._curDefense = 0;;
                this._curAttack = 2;;
                break;
            case 4:
                this._enemyID = 1;;
                this._name = 'Orc Grunt';;
                this._maxHP = 10;;
                this._curHP = 10;;
                this._curDefense = 0;;
                this._curAttack = 2;;
                break;
            case 5:
                this._enemyID = 1;;
                this._name = 'Orc Veteran';;
                this._maxHP = 10;;
                this._curHP = 10;;
                this._curDefense = 0;;
                this._curAttack = 2;;
                break;
            case 6:
                this._enemyID = 1;;
                this._name = 'Orc Big Guy';;
                this._maxHP = 10;;;
                this._curHP = 10;
                this._curDefense = 0;;
                this._curAttack = 2;;
                break;
            case 7:
                this._enemyID = 1;
                this._name = 'Dark Knight';
                this._maxHP = 10;
                this._curHP = 10;
                this._curDefense = 0;
                this._curAttack = 2;
                break;
            case 8:
                this._enemyID = 1;
                this._name = 'Dark Knight';
                this._maxHP = 10;
                this._curHP = 10;
                this._curDefense = 0;
                this._curAttack = 2;
                break;
            case 9:
                this._enemyID = 1;
                this._name = 'Dark Knight';
                this._maxHP = 10;
                this._curHP = 10;
                this._curDefense = 0;
                this._curAttack = 2;
                break;
            case 10:
                this._enemyID = 10;
                this._name = 'Shop Keeper';
                this._maxHP = 999;
                this._curHP = 999;
                this._curDefense = 99;
                this._curAttack = 99;
                break;
        }

    }

    attack() {
        player().takeDamage(this.rollHit(80) ? this._curAttack : -1);
    }

    rollHit(hitChance) {
        return Math.random() * 100 < hitChance ? true : false;
    }

    takeDamage(damageTaken) {
        $("#enemy-damage").finish();
        $("#enemy-sprite").finish();
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
        }, 500, function () {
            $(this).text('');
            $(this).removeAttr('style');
        });

        this.curHP = this._curHP - finalDamage;
    }

    getImage(ID) {
        switch (ID) {
            case 1: return './assets/images/bat.png'; break;
            case 2: return './assets/images/darkSoc.png'; break;
            case 3: return './assets/images/darkKnight.png'; break;
            case 4: return './assets/images/orc1.png'; break;
            case 5: return './assets/images/orc2.png'; break;
            case 6: return './assets/images/orc3.png'; break;
            case 7: return './assets/images/ele1.png'; break;
            case 8: return './assets/images/ele2.png'; break;
            case 9: return './assets/images/ele3.png'; break;
            case 10: return 'http://via.placeholder.com/300x300'; break;
        }
    }

    isDead() {
        return this._curHP === 0 ? true : false;
    }

    set curHP(hp) {
        if (hp > this._maxHP) this._curHP = this._maxHP;
        else if (hp < 1) this._curHP = 0;
        else this._curHP = hp;
    }
}

class Dungeon {
    constructor(dungeonID) {
        this._dungeonID = dungeonID;
        switch (dungeonID) {
            case 1:
                this._dungeonName = 'Dark Dungeon';
                this._monsterArray = [1, 2, 3];
                $('#right-section').css('background', 'url("./assets/images/bg-1.jpg")')
                break;
            case 2:
                this._dungeonName = 'Orc Camp';
                this._monsterArray = [4, 5, 6];
                $('#right-section').css('background', 'url("./assets/images/bg-2.jpg")')
                break;
            case 3:
                this._dungeonName = 'Elemental Plane';
                this._monsterArray = [7, 8, 9];
                $('#right-section').css('background', 'url("./assets/images/bg-3.jpg")')
                break;
        }

    }
}

function startGame() {
    loadEnemy(10);
    $('#right-section').css('background', 'url("./assets/images/bg-4.png")')

    let updateUI = {
        loadCharSelect: function () {
            $(".menu-button").unbind('click');
            // Sets display for buttons
            $(".menu-button").css('display', 'initial');
            $('#info-text').text('Choose your Character!');
            $('#selection-1').html('Knight');
            $('#selection-2').html('Barbarian');
            $('#selection-3').html('Rogue');
            $('#selection-4').html('Confirm');

            // Sets event listeners for buttons
            $("#selection-1").on("click", function () {
                loadPlayer(1);
            });

            $("#selection-2").on("click", function () {
                loadPlayer(2);
            });

            $("#selection-3").on("click", function () {
                loadPlayer(3);
            });

            $("#selection-4").on("click", function () {
                if ($('#player').data().hasOwnProperty('character')) {
                    updateUI.loadDungeonSelect();
                } else {
                    helpText("Please choose a character before hitting confirm");
                }
            });
        },

        loadDungeonSelect: function () {
            $(".menu-button").unbind('click');
            // Sets display for buttons
            $(".menu-button").css('display', 'initial');
            $('#info-text').text('Select an Adventure!');
            $(".menu-button").css('display', 'initial');
            $('#selection-1').html('Dark Dungeon </br> Easy');
            $('#selection-2').html('Orc Camp </br> Medium');
            $('#selection-3').html('Elemental Plane </br> Hard');
            $('#selection-4').html('Confirm');
            //This doesn't makes it not display the dungeons that have already been cleared
            for (let i = 1; i < 4; i++) {
                if (player()._clearedDungeons.includes(i)) $('#selection-' + i).css('display', 'none');
            };

            // Sets event listeners for buttons
            $("#selection-1").on("click", function () {
                $('#dungeon').text('Dark Dungeon');
                loadDungeon(1);
            });

            $("#selection-2").on("click", function () {
                $('#dungeon').text('Orc Camp');
                loadDungeon(2);
            });

            $("#selection-3").on("click", function () {
                $('#dungeon').text('Elemental Plane');
                loadDungeon(3);
            });

            $("#selection-4").on("click", function () {
                if (typeof dungeon() !== 'undefined' && dungeon()._monsterArray.length === 3) {
                    updateUI.loadAttackSelect();
                    loadEnemy(dungeon()._monsterArray[0]);
                } else {
                    helpText("Please choose a dungeon before hitting confirm!")
                }
            });
        },

        loadAttackSelect: function () {
            $(".menu-button").unbind('click');
            // Sets display for buttons
            $(".menu-button").css('display', 'initial');
            $('#info-text').text('Choose an Attack');
            $('#selection-1').html('Light Attack');
            $('#selection-2').html('Medium Attack');
            $('#selection-3').html('Heavy Attack');
            $('#selection-4').css('display', 'none');

            // Sets event listeners for buttons
            $("#selection-1").on("click", function () {
                player().attackL();
                enemy().attack();
                if (player().isDead()) {
                } else {
                    checkEnemyStatus();
                }
            });

            $("#selection-2").on("click", function () {
                player().attackM();
                enemy().attack();
                if (player().isDead()) {
                } else {
                    checkEnemyStatus();
                }
            });

            $("#selection-3").on("click", function () {
                player().attackH();
                enemy().attack();
                if (player().isDead()) {
                } else {
                    checkEnemyStatus();
                }
            });

            function checkEnemyStatus() {
                if (enemy().isDead()) {
                    // Removed enemy from monster queue
                    dungeon()._monsterArray.shift();
                    // If more enemies loads the next enemy
                    if (dungeon()._monsterArray.length > 0) {
                        loadEnemy(dungeon()._monsterArray[0]);
                    } else {
                        player()._gold += 200;
                        player()._clearedDungeons.push(dungeon()._dungeonID);
                        // Win message stuff here!
                        if (player()._clearedDungeons.length === 3) {
                            alert('Umm you beat the game...? Like you killed all the enemies and cleared the dungeons but I haven\'t made anything fancy yet like a Victory screen so... yay you\'re cool');
                            // If no more enemies lvl up and goes back to dungeon select screen
                        } else {
                            player().level = player()._level + 1;
                            //This makes the LEVEL text pop up
                            helpText("You Leveled up to Level " + player()._level);
                            $('#player-damage').html('LEVEL UP!');
                            $('#player-damage').animate({
                                opacity: 0,
                                top: "-=65",
                            }, 500, function () {
                                $(this).text('');
                                $(this).removeAttr('style');
                            });

                            updateUI.loadUpgradeSelect();
                        }
                    }
                }
            }
        },

        loadUpgradeSelect: function () {
            $(".menu-button").unbind('click');
            // Sets display for buttons
            $(".menu-button").css('display', 'initial');
            $('#info-text').text('Choose an Attack');
            $('#selection-1').html('Upgrade Weapon <br/> 100g');
            $('#selection-2').html('Upgrade Armour <br/> 100g');
            $('#selection-3').html('Finished');
            $('#selection-4').css('display', 'none');

            // Load shop keeper?
            loadEnemy(10);
            $('#right-section').css('background', 'url("./assets/images/bg-4.png")')

            $("#selection-1").on("click", function () {
                // Upgrades Weapon
                if (player()._gold >= 100) {
                    if (player()._weaponLvl === 3) {
                        helpText("Weapon is already max LVL!")
                    }
                    else {
                        player().upgradeWeapon(player()._weaponLvl + 1);
                        player()._gold -= 100;
                        helpText("Weapon upgraded to Level " + player()._weaponLvl);
                        $('#player-damage').html('UPGRADED WEAPON!');
                        $('#player-damage').animate({
                            opacity: 0,
                            top: "-=65",
                        }, 500, function () {
                            $(this).text('');
                            $(this).removeAttr('style');
                        });

                    }
                } else {
                    helpText("You don't have enough money to buy that!")
                }
            });

            $("#selection-2").on("click", function () {
                // Upgrades Armour
                if (player()._gold >= 100) {
                    if (player()._armourLvl === 2) {
                        helpText("Armour is already max LVL!");
                    } else {
                        player().upgradeArmour(player()._armourLvl + 1);
                        player()._gold -= 100;
                        helpText("Armour upgraded to Level " + player()._armourLvl);
                        $('#player-damage').html('UPGRADED ARMOUR!');
                        $('#player-damage').animate({
                            opacity: 0,
                            top: "-=65",
                        }, 500, function () {
                            $(this).text('');
                            $(this).removeAttr('style');
                        });
                    }
                } else {
                    helpText("You don't have enough money to buy that!")
                }
            });

            $("#selection-3").on("click", function () {
                updateUI.loadDungeonSelect();
            });
        }
    }

    function helpText(text) {
        $("#help-text").finish();
        $('#help-text').text(text);
        $('#help-text').delay(1000).animate({ opacity: 0 }, 500, function () {
            $(this).text('');
            $(this).removeAttr('style');
        });
    }

    // Game flow starts here    
    updateUI.loadCharSelect();
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

function loadPlayer(charID) {
    $("#player").data("character", genPlayer(charID));
    $("#player-sprite img").attr("src", player().getImage());
    $("#player-sprite").finish();
    $("#player-sprite").effect("bounce", { times: 3, distance: 125 }, 500);
}

function loadEnemy(enemyID) {
    $("#enemy").data("character", genEnemy());
    enemy().setMonster(enemyID);
    $("#enemy-sprite img").attr("src", enemy().getImage(enemyID));
    $("#enemy-sprite").finish();
    $("#enemy-sprite").effect("bounce", { times: 3, distance: 125 }, 500);
}

function loadDungeon(dungeonID) {
    $("#dungeon").data("dungeons", new Dungeon(dungeonID));
}

function player() {
    return $("#player").data("character");
}

function enemy() {
    return $('#enemy').data('character');
}

function dungeon() {
    return $('#dungeon').data('dungeons');
}

startGame();