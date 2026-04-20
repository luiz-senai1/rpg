const MONSTERS = [
    {
        id: 1,
        name: 'Verme de Fogo',
        level: 1,
        hp: 40,
        hpMax: 40,
        mana: 100,
        manaMax: 100,
        damage: 3,
        x: window.innerWidth - 150,
        size: 90,
        speed: 2,
        element: 'enemy',
        delayAttack: .5,
        cooldownAttack: 2,
        attackCountMax: 1,
        dyingTime: 500,
        yCustomOffset: -20,
        delayTakeHit: .3,
        hitboxCustomOffsetY: 10,
        spriteConfig: {
            idle: {
                src: '/static/img/sprites/fire_worm/idle.png',
                frame: 1,
                frames: 9,
                width: 90,
                height: 90
            },
            attack1: {
                src: '/static/img/sprites/fire_worm/attack1.png',
                frame: 1,
                frames: 16,
                width: 90,
                height: 90
            },
            die: {
                src: '/static/img/sprites/fire_worm/death.png',
                frame: 1,
                frames: 8,
                width: 90,
                height: 90
            },
            takehit: {
                src: '/static/img/sprites/fire_worm/takehit.png',
                frame: 1,
                frames: 3,
                width: 90,
                height: 90
            },
            run: {
                src: '/static/img/sprites/fire_worm/run.png',
                frame: 1,
                frames: 9,
                width: 90,
                height: 90
            }
        }
    },
    {
        id: 2,
        name: 'Hero Knight',
        level: 3,
        hp: 90,
        hpMax: 90,
        mana: 100,
        manaMax: 100,
        damage: 4,
        x: window.innerWidth - 150,
        size: 140,
        speed: 1.8,
        element: 'enemy',
        delayAttack: .4,
        cooldownAttack: 2,
        attackCountMax: 1,
        dyingTime: 500,
        yCustomOffset: 0,
        delayTakeHit: .4,
        hitboxCustomOffsetY: 10,
        spriteConfig: {
            idle: {
                src: '/static/img/sprites/hero_knight/idle.png',
                frame: 1,
                frames: 11,
                width: 140,
                height: 140
            },
            attack1: {
                src: '/static/img/sprites/hero_knight/attack1.png',
                frame: 1,
                frames: 6,
                width: 140,
                height: 140
            },
            die: {
                src: '/static/img/sprites/hero_knight/death.png',
                frame: 1,
                frames: 9,
                width: 140,
                height: 140
            },
            takehit: {
                src: '/static/img/sprites/hero_knight/takehit.png',
                frame: 1,
                frames: 4,
                width: 140,
                height: 140
            },
            run: {
                src: '/static/img/sprites/hero_knight/run.png',
                frame: 1,
                frames: 8,
                width: 140,
                height: 140
            }
        }
    },
    {
        id: 3,
        name: 'Hero Martial',
        level: 4,
        hp: 70,
        hpMax: 70,
        mana: 100,
        manaMax: 100,
        damage: 5,
        x: window.innerWidth - 150,
        size: 126,
        speed: 2.8,
        element: 'enemy',
        delayAttack: .5,
        cooldownAttack: 1.2,
        attackCountMax: 1,
        dyingTime: 500,
        yCustomOffset: 0,
        delayTakeHit: .8,
        hitboxCustomOffsetY: 10,
        spriteConfig: {
            idle: {
                src: '/static/img/sprites/martial_hero/idle.png',
                frame: 1,
                frames: 10,
                width: 126,
                height: 126
            },
            attack1: {
                src: '/static/img/sprites/martial_hero/attack1.png',
                frame: 1,
                frames: 7,
                width: 126,
                height: 126
            },
            die: {
                src: '/static/img/sprites/martial_hero/death.png',
                frame: 1,
                frames: 11,
                width: 126,
                height: 126
            },
            takehit: {
                src: '/static/img/sprites/martial_hero/takehit.png',
                frame: 1,
                frames: 3,
                width: 126,
                height: 126
            },
            run: {
                src: '/static/img/sprites/martial_hero/run.png',
                frame: 1,
                frames: 8,
                width: 126,
                height: 126
            }
        }
    },
    {
        id: 4,
        name: 'Hunterss',
        level: 5,
        hp: 110,
        hpMax: 110,
        mana: 100,
        manaMax: 100,
        damage: 6,
        x: window.innerWidth - 150,
        size: 150,
        speed: 3.2,
        element: 'enemy',
        delayAttack: .8,
        cooldownAttack: .5,
        attackCountMax: 1,
        dyingTime: 500,
        yCustomOffset: 0,
        delayTakeHit: .9,
        hitboxCustomOffsetY: 10,
        spriteConfig: {
            idle: {
                src: '/static/img/sprites/hunterss/idle.png',
                frame: 1,
                frames: 8,
                width: 150,
                height: 150
            },
            attack1: {
                src: '/static/img/sprites/hunterss/attack1.png',
                frame: 1,
                frames: 5,
                width: 150,
                height: 150
            },
            die: {
                src: '/static/img/sprites/hunterss/death.png',
                frame: 1,
                frames: 8,
                width: 150,
                height: 150
            },
            takehit: {
                src: '/static/img/sprites/hunterss/takehit.png',
                frame: 1,
                frames: 3,
                width: 150,
                height: 150
            },
            run: {
                src: '/static/img/sprites/hunterss/run.png',
                frame: 1,
                frames: 8,
                width: 150,
                height: 150
            }
        }
    },
    {
        id: 5,
        name: 'Wizard',
        level: 6,
        hp: 120,
        hpMax: 120,
        mana: 100,
        manaMax: 100,
        damage: 8,
        x: window.innerWidth - 150,
        size: 231,
        speed: 2.2,
        element: 'enemy',
        delayAttack: 1.2,
        cooldownAttack: .5,
        attackCountMax: 1,
        dyingTime: 500,
        yCustomOffset: 0,
        delayTakeHit: 1,
        hitboxCustomOffsetY: 10,
        spriteConfig: {
            idle: {
                src: '/static/img/sprites/wizard/idle.png',
                frame: 1,
                frames: 6,
                width: 231,
                height: 190
            },
            attack1: {
                src: '/static/img/sprites/wizard/attack1.png',
                frame: 1,
                frames: 8,
                width: 231,
                height: 190
            },
            die: {
                src: '/static/img/sprites/wizard/death.png',
                frame: 1,
                frames: 7,
                width: 231,
                height: 190
            },
            takehit: {
                src: '/static/img/sprites/wizard/takehit.png',
                frame: 1,
                frames: 4,
                width: 231,
                height: 190
            },
            run: {
                src: '/static/img/sprites/wizard/run.png',
                frame: 1,
                frames: 8,
                width: 231,
                height: 190
            }
        }
    },
    {
        id: 6,
        name: 'Evil Wizard',
        level: 10,
        hp: 400,
        hpMax: 400,
        mana: 100,
        manaMax: 100,
        damage: 10,
        x: window.innerWidth - 150,
        size: 150,
        speed: 3,
        element: 'enemy',
        delayAttack: 1.5,
        cooldownAttack: 3,
        attackCountMax: 1,
        dyingTime: 500,
        yCustomOffset: 0,
        delayTakeHit: 1,
        hitboxCustomOffsetY: 7,
        spriteConfig: {
            idle: {
                src: '/static/img/sprites/evil_wizard/idle.png',
                frame: 1,
                frames: 11,
                width: 150,
                height: 150
            },
            attack1: {
                src: '/static/img/sprites/evil_wizard/attack1.png',
                frame: 1,
                frames: 6,
                width: 150,
                height: 150
            },
            die: {
                src: '/static/img/sprites/evil_wizard/death.png',
                frame: 1,
                frames: 9,
                width: 150,
                height: 150
            },
            takehit: {
                src: '/static/img/sprites/evil_wizard/takehit.png',
                frame: 1,
                frames: 4,
                width: 150,
                height: 150
            },
            run: {
                src: '/static/img/sprites/evil_wizard/run.png',
                frame: 1,
                frames: 8,
                width: 150,
                height: 150
            }
        }
    },
]