export interface IMonster {
    Name: string;
    AC: number;
    HP: number;
    CR: number;
    Speed: string;
    Type: string;
    Str: number;
    Dex: number;
    Con: number;
    Int: number;
    Wis: number;
    Cha: number;
    Actions?: IAction[];
    LegendaryActions?: IAction[];
    Amount?: number;
}

export interface IAction {
    name: string;
    description: string;
}

export const DefaultMonsters: IMonster[] = [
    {
        Name: 'Aboleth', AC: 17, HP: 135, CR: 10, Speed: '10 ft., swim 40 ft.', Type: 'aberration', Str: 21, Dex: 9, Con: 15, Int: 18, Wis: 15, Cha: 10, Actions: [
            { name: 'Multiattack', description: 'The aboleth makes three tentacle attacks.' },
            { name: 'Tentacle', description: 'Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature\'s skin becomes translucent and slimy, the creature can\'t regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.' },
            { name: 'Enslave (3/day)', description: 'The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth\'s control and can\'t take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.' }], LegendaryActions: [
                { name: 'Detect', description: 'The aboleth makes a Wisdom (Perception) check.' },
                { name: 'Tail Swipe', description: 'The aboleth makes one tail attack.' },
                { name: 'Psychic Drain (Costs 2 Actions)', description: 'One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.' }]
    },
    {
        Name: 'Acolyte', AC: 10, HP: 9, CR: 0.25, Speed: '30 ft.', Type: 'humanoid', Str: 10, Dex: 10, Con: 10, Int: 10, Wis: 14, Cha: 11, Actions: [
            { name: 'Club', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.' }]
    },
    {
        Name: 'Adult Black Dragon', AC: 19, HP: 195, CR: 14, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 23, Dex: 14, Con: 21, Int: 14, Wis: 13, Cha: 17, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Acid Breath (Recharge 5-6)', description: 'The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Adult Blue Dracolich', AC: 19, HP: 225, CR: 17, Speed: '40 ft., burrow 30 ft., fly 80 ft.', Type: 'undead', Str: 25, Dex: 10, Con: 23, Int: 16, Wis: 15, Cha: 19, Actions: [
            { name: 'Multiattack', description: 'The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dracolich\'s choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dracolich\'s Frightful Presence for the next 24 hours.' },
            { name: 'Lightning Breath (Recharge 5-6)', description: 'The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dracolich makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dracolich makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dracolich beats its tattered wings. Each creature within 10 ft. of the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed.' }]
    },
    {
        Name: 'Adult Blue Dragon', AC: 19, HP: 225, CR: 16, Speed: '40 ft., burrow 30 ft., fly 80 ft.', Type: 'dragon', Str: 25, Dex: 10, Con: 23, Int: 16, Wis: 15, Cha: 19, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Lightning Breath (Recharge 5-6)', description: 'The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Adult Brass Dragon', AC: 18, HP: 172, CR: 13, Speed: '40 ft., burrow 40 ft., fly 80 ft.', Type: 'dragon', Str: 23, Dex: 10, Con: 21, Int: 14, Wis: 13, Cha: 17, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +11 to hit, reach,.0 ft., one target. Hit: 17 (2d10 + 6) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.' }]
    },
    {
        Name: 'Adult Bronze Dragon', AC: 19, HP: 212, CR: 15, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 25, Dex: 10, Con: 23, Int: 16, Wis: 15, Cha: 19, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Adult Copper Dragon', AC: 18, HP: 184, CR: 14, Speed: '40 ft., climb 40 ft., fly 80 ft.', Type: 'dragon', Str: 23, Dex: 12, Con: 21, Int: 18, Wis: 15, Cha: 17, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can\'t use reactions, its speed is halved, and it can\'t make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Adult Gold Dragon', AC: 19, HP: 256, CR: 17, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 27, Dex: 14, Con: 25, Int: 16, Wis: 15, Cha: 24, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Adult Green Dragon', AC: 19, HP: 207, CR: 15, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 23, Dex: 12, Con: 21, Int: 18, Wis: 15, Cha: 17, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours .' },
            { name: 'Poison Breath (Recharge 5-6)', description: 'The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Adult Red Dragon', AC: 19, HP: 256, CR: 17, Speed: '40 ft., climb 40 ft., fly 80 ft.', Type: 'dragon', Str: 27, Dex: 10, Con: 25, Int: 16, Wis: 13, Cha: 21, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Fire Breath (Recharge 5-6)', description: 'The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.' },
            { name: 'Lair Actions', description: 'On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: the dragon can\'t use the same effect two rounds in a row:\n• Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser\'s area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.\n• A tremor shakes the lair in a 60-foot-radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone.\n• Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Adult Silver Dragon', AC: 19, HP: 243, CR: 16, Speed: '40 ft., fly 80 ft.', Type: 'dragon', Str: 27, Dex: 10, Con: 25, Int: 16, Wis: 13, Cha: 21, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Adult White Dragon', AC: 18, HP: 200, CR: 13, Speed: '40 ft., burrow 30 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 22, Dex: 10, Con: 22, Int: 8, Wis: 12, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Cold Breath (Recharge 5-6)', description: 'The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Air Elemental', AC: 15, HP: 90, CR: 5, Speed: 'fly 90 ft. (hover)', Type: 'elemental', Str: 14, Dex: 20, Con: 14, Int: 6, Wis: 10, Cha: 6, Actions: [
            { name: 'Multiattack', description: 'The elemental makes two slam attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.' },
            { name: 'Whirlwind (Recharge 4-6)', description: 'Each creature in the elemental\'s space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.\nIf the saving throw is successful, the target takes half the bludgeoning damage and isn\'t flung away or knocked prone.' }]
    },
    {
        Name: 'Ancient Black Dragon', AC: 22, HP: 367, CR: 21, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 27, Dex: 14, Con: 25, Int: 16, Wis: 15, Cha: 19, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack:+ 15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +15 to hit, reach 20 ft ., one target. Hit: 17 (2d8 + 8) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Acid Breath (Recharge 5-6)', description: 'The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Ancient Blue Dragon', AC: 22, HP: 481, CR: 23, Speed: '40 ft., burrow 40 ft., fly 80 ft.', Type: 'dragon', Str: 29, Dex: 10, Con: 27, Int: 18, Wis: 17, Cha: 21, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Lightning Breath (Recharge 5-6)', description: 'The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Ancient Brass Dragon', AC: 20, HP: 297, CR: 20, Speed: '40 ft., burrow 40 ft., fly 80 ft.', Type: 'dragon', Str: 27, Dex: 10, Con: 25, Int: 16, Wis: 15, Cha: 19, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.' },
            { name: 'Change Shape', description: 'The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon\'s choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Ancient Bronze Dragon', AC: 22, HP: 444, CR: 22, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 29, Dex: 10, Con: 27, Int: 18, Wis: 17, Cha: 21, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.' },
            { name: 'Change Shape', description: 'The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon\'s choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Ancient Copper Dragon', AC: 21, HP: 350, CR: 21, Speed: '40 ft., climb 40 ft., fly 80 ft.', Type: 'dragon', Str: 27, Dex: 12, Con: 25, Int: 20, Wis: 17, Cha: 19, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can\'t use reactions, its speed is halved, and it can\'t make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.' },
            { name: 'Change Shape', description: 'The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon\'s choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Ancient Gold Dragon', AC: 22, HP: 546, CR: 24, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 30, Dex: 14, Con: 29, Int: 18, Wis: 17, Cha: 28, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' },
            { name: 'Change Shape', description: 'The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon\'s choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Ancient Green Dragon', AC: 21, HP: 385, CR: 22, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 27, Dex: 12, Con: 25, Int: 20, Wis: 17, Cha: 19, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6 + 8) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Poison Breath (Recharge 5-6)', description: 'The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Ancient Red Dragon', AC: 22, HP: 546, CR: 24, Speed: '40 ft., climb 40 ft., fly 80 ft.', Type: 'dragon', Str: 30, Dex: 10, Con: 29, Int: 18, Wis: 15, Cha: 23, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Fire Breath (Recharge 5-6)', description: 'The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Ancient Silver Dragon', AC: 22, HP: 487, CR: 23, Speed: '40 ft., fly 80 ft.', Type: 'dragon', Str: 30, Dex: 10, Con: 29, Int: 18, Wis: 15, Cha: 23, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 90- foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' },
            { name: 'Change Shape', description: 'The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon\'s choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.' }], LegendaryActions: [
                { name: 'Detect', description: 'The dragon makes a Wisdom (Perception) check.' },
                { name: 'Tail Attack', description: 'The dragon makes a tail attack.' },
                { name: 'Wing Attack (Costs 2 Actions)', description: 'The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.' }]
    },
    {
        Name: 'Ancient White Dragon', AC: 20, HP: 333, CR: 20, Speed: '40 ft., burrow 40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 26, Dex: 10, Con: 26, Int: 10, Wis: 13, Cha: 14, Actions: [
            { name: 'Multiattack', description: 'The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.' },
            { name: 'Frightful Presence', description: 'Each creature of the dragon\'s choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the dragon\'s Frightful Presence for the next 24 hours .' },
            { name: 'Cold Breath (Recharge 5-6)', description: 'The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) cold damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Androsphinx', AC: 17, HP: 199, CR: 17, Speed: '40 ft., fly 60 ft.', Type: 'monstrosity', Str: 22, Dex: 10, Con: 20, Int: 16, Wis: 18, Cha: 23, Actions: [
            { name: 'Multiattack', description: 'The sphinx makes two claw attacks.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage.' },
            { name: 'Roar (3/Day)', description: 'The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.\n\nFirst Roar. Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nSecond Roar. Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nThird Roar. Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn\'t knocked prone.' }], LegendaryActions: [
                { name: 'Claw Attack', description: 'The sphinx makes one claw attack.' },
                { name: 'Teleport (Costs 2 Actions)', description: 'The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.' },
                { name: 'Cast a Spell (Costs 3 Actions)', description: 'The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.' }]
    },
    {
        Name: 'Animated Armor', AC: 18, HP: 33, CR: 1, Speed: '25 ft.', Type: 'construct', Str: 14, Dex: 11, Con: 13, Int: 1, Wis: 3, Cha: 1, Actions: [
            { name: 'Multiattack', description: 'The armor makes two melee attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.' }]
    },
    {
        Name: 'Ankheg', AC: 14, HP: 39, CR: 2, Speed: '30 ft., burrow 10 ft.', Type: 'monstrosity', Str: 17, Dex: 11, Con: 13, Int: 1, Wis: 13, Cha: 6, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.' },
            { name: 'Acid Spray (Recharge 6)', description: 'The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Ape', AC: 12, HP: 19, CR: 0.5, Speed: '30 ft., climb 30 ft.', Type: 'beast', Str: 16, Dex: 14, Con: 14, Int: 6, Wis: 12, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The ape makes two fist attacks.' },
            { name: 'Fist', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.' }]
    },
    {
        Name: 'Archmage', AC: 12, HP: 99, CR: 12, Speed: '30 ft.', Type: 'humanoid', Str: 10, Dex: 14, Con: 12, Int: 20, Wis: 15, Cha: 16, Actions: [
            { name: 'Dagger', description: 'Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.' }]
    },
    {
        Name: 'Assassin', AC: 15, HP: 78, CR: 8, Speed: '30 ft.', Type: 'humanoid', Str: 11, Dex: 16, Con: 14, Int: 13, Wis: 11, Cha: 10, Actions: [
            { name: 'Multiattack', description: 'The assassin makes two shortsword attacks.' },
            { name: 'Shortsword', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.' },
            { name: 'Light Crossbow', description: 'Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Awakened Shrub', AC: 9, HP: 10, CR: 0, Speed: '20 ft.', Type: 'plant', Str: 3, Dex: 8, Con: 11, Int: 10, Wis: 10, Cha: 6, Actions: [
            { name: 'Rake', description: 'Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) slashing damage.' }]
    },
    {
        Name: 'Awakened Tree', AC: 13, HP: 59, CR: 2, Speed: '20 ft.', Type: 'plant', Str: 19, Dex: 6, Con: 15, Int: 10, Wis: 10, Cha: 7, Actions: [
            { name: 'Slam', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage.' }]
    },
    {
        Name: 'Axe Beak', AC: 11, HP: 19, CR: 0.25, Speed: '50 ft.', Type: 'beast', Str: 14, Dex: 12, Con: 12, Int: 2, Wis: 10, Cha: 5, Actions: [
            { name: 'Beak', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage.' }]
    },
    {
        Name: 'Azer', AC: 17, HP: 39, CR: 2, Speed: '30 ft.', Type: 'elemental', Str: 17, Dex: 12, Con: 15, Int: 12, Wis: 13, Cha: 10, Actions: [
            { name: 'Warhammer', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.' }]
    },
    {
        Name: 'Baboon', AC: 12, HP: 3, CR: 0, Speed: '30 ft., climb 30 ft.', Type: 'beast', Str: 8, Dex: 14, Con: 11, Int: 4, Wis: 12, Cha: 6, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) piercing damage.' }]
    },
    {
        Name: 'Badger', AC: 10, HP: 3, CR: 0, Speed: '20 ft., burrow 5 ft.', Type: 'beast', Str: 4, Dex: 11, Con: 12, Int: 2, Wis: 12, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage.' }]
    },
    {
        Name: 'Balor', AC: 19, HP: 262, CR: 19, Speed: '40 ft., fly 80 ft.', Type: 'fiend', Str: 26, Dex: 15, Con: 22, Int: 20, Wis: 16, Cha: 22, Actions: [
            { name: 'Multiattack', description: 'The balor makes two attacks: one with its longsword and one with its whip.' },
            { name: 'Longsword', description: 'Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.' },
            { name: 'Whip', description: 'Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor.' },
            { name: 'Teleport', description: 'The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.' },
            { name: 'Variant: Summon Demon (1/Day)', description: 'The demon chooses what to summon and attempts a magical summoning.\nA balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Bandit', AC: 12, HP: 11, CR: 0.125, Speed: '30 ft.', Type: 'humanoid', Str: 11, Dex: 12, Con: 12, Int: 10, Wis: 10, Cha: 10, Actions: [
            { name: 'Scimitar', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.' },
            { name: 'Light Crossbow', description: 'Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.' }]
    },
    {
        Name: 'Bandit Captain', AC: 15, HP: 65, CR: 2, Speed: '30 ft.', Type: 'humanoid', Str: 15, Dex: 16, Con: 14, Int: 14, Wis: 11, Cha: 14, Actions: [
            { name: 'Multiattack', description: 'The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.' },
            { name: 'Scimitar', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.' },
            { name: 'Dagger', description: 'Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage.' }]
    },
    {
        Name: 'Barbed Devil', AC: 15, HP: 110, CR: 5, Speed: '30 ft.', Type: 'fiend', Str: 16, Dex: 17, Con: 18, Int: 12, Wis: 14, Cha: 14, Actions: [
            { name: 'Multiattack', description: 'The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft ., one target. Hit: 6 (1d6 + 3) piercing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.' },
            { name: 'Hurl Flame', description: 'Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn\'t being worn or carried, it also catches fire.' }]
    },
    {
        Name: 'Basilisk', AC: 12, HP: 52, CR: 3, Speed: '20 ft.', Type: 'monstrosity', Str: 16, Dex: 8, Con: 15, Int: 2, Wis: 8, Cha: 7, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.' }]
    },
    {
        Name: 'Bat', AC: 12, HP: 1, CR: 0, Speed: '5 ft., fly 30 ft.', Type: 'beast', Str: 2, Dex: 15, Con: 8, Int: 2, Wis: 12, Cha: 4, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.' }]
    },
    {
        Name: 'Bearded Devil', AC: 13, HP: 52, CR: 3, Speed: '30 ft.', Type: 'fiend', Str: 16, Dex: 15, Con: 15, Int: 9, Wis: 11, Cha: 11, Actions: [
            { name: 'Multiattack', description: 'The devil makes two attacks: one with its beard and one with its glaive.' },
            { name: 'Beard', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can\'t regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' },
            { name: 'Glaive', description: 'Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.' }]
    },
    {
        Name: 'Behir', AC: 17, HP: 168, CR: 11, Speed: '50 ft., climb 40 ft.', Type: 'monstrosity', Str: 23, Dex: 16, Con: 18, Int: 7, Wis: 14, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The behir makes two attacks: one with its bite and one to constrict.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage.' },
            { name: 'Constrict', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn\'t already constricting a creature, and the target is restrained until this grapple ends.' },
            { name: 'Lightning Breath (Recharge 5-6)', description: 'The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.' },
            { name: 'Swallow', description: 'The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir\'s turns. A behir can have only one creature swallowed at a time.\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone.' }]
    },
    {
        Name: 'Berserker', AC: 13, HP: 67, CR: 2, Speed: '30 ft.', Type: 'humanoid', Str: 16, Dex: 12, Con: 17, Int: 9, Wis: 11, Cha: 9, Actions: [
            { name: 'Greataxe', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.' }]
    },
    {
        Name: 'Black Bear', AC: 11, HP: 19, CR: 0.5, Speed: '40 ft., climb 30 ft.', Type: 'beast', Str: 15, Dex: 10, Con: 14, Int: 2, Wis: 12, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The bear makes two attacks: one with its bite and one with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.' }]
    },
    {
        Name: 'Black Dragon Wyrmling', AC: 17, HP: 33, CR: 2, Speed: '30 ft., fly 60 ft., swim 30 ft.', Type: 'dragon', Str: 15, Dex: 14, Con: 13, Int: 10, Wis: 11, Cha: 13, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage.' },
            { name: 'Acid Breath (Recharge 5-6)', description: 'The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (Sd8) acid damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Black Pudding', AC: 7, HP: 85, CR: 4, Speed: '20 ft., climb 20 ft.', Type: 'ooze', Str: 16, Dex: 5, Con: 16, Int: 1, Wis: 6, Cha: 1, Actions: [
            { name: 'Pseudopod', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.' }]
    },
    {
        Name: 'Blink Dog', AC: 13, HP: 22, CR: 0.25, Speed: '40 ft.', Type: 'fey', Str: 12, Dex: 17, Con: 12, Int: 10, Wis: 13, Cha: 11, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.' },
            { name: 'Teleport (Recharge 4-6)', description: 'The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.' }]
    },
    {
        Name: 'Blood Hawk', AC: 12, HP: 7, CR: 0.125, Speed: '10 ft., fly 60 ft.', Type: 'beast', Str: 6, Dex: 14, Con: 10, Int: 3, Wis: 14, Cha: 5, Actions: [
            { name: 'Beak', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.' }]
    },
    {
        Name: 'Blue Dragon Wyrmling', AC: 17, HP: 52, CR: 3, Speed: '30 ft., burrow 15 ft., fly 60 ft.', Type: 'dragon', Str: 17, Dex: 10, Con: 15, Int: 12, Wis: 11, Cha: 15, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage.' },
            { name: 'Lightning Breath (Recharge 5-6)', description: 'The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Boar', AC: 11, HP: 11, CR: 0.25, Speed: '40 ft.', Type: 'beast', Str: 13, Dex: 11, Con: 12, Int: 2, Wis: 9, Cha: 5, Actions: [
            { name: 'Tusk', description: 'Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.' }]
    },
    {
        Name: 'Bone Devil', AC: 19, HP: 142, CR: 12, Speed: '40 ft., fly 40 ft.', Type: 'fiend', Str: 18, Dex: 16, Con: 18, Int: 13, Wis: 14, Cha: 16, Actions: [
            { name: 'Multiattack', description: 'The devil makes three attacks: two with its claws and one with its sting.' },
            { name: 'Multiattack', description: 'The devil makes three attacks: two with its claws and one with its sting.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage.' },
            { name: 'Sting', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success .' },
            { name: 'Sting', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success .' }]
    },
    {
        Name: 'Brass Dragon Wyrmling', AC: 16, HP: 16, CR: 1, Speed: '30 ft., burrow 15 ft., fly 60 ft.', Type: 'dragon', Str: 15, Dex: 10, Con: 13, Int: 10, Wis: 11, Cha: 13, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.' }]
    },
    {
        Name: 'Bronze Dragon Wyrmling', AC: 17, HP: 32, CR: 2, Speed: '30 ft., fly 60 ft., swim 30 ft.', Type: 'dragon', Str: 17, Dex: 10, Con: 15, Int: 12, Wis: 11, Cha: 15, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon.' }]
    },
    {
        Name: 'Brown Bear', AC: 11, HP: 34, CR: 1, Speed: '40 ft., climb 30 ft.', Type: 'beast', Str: 19, Dex: 10, Con: 16, Int: 2, Wis: 13, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The bear makes two attacks: one with its bite and one with its claws.' },
            { name: 'Bite', description: 'Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' }]
    },
    {
        Name: 'Bugbear', AC: 16, HP: 27, CR: 1, Speed: '30 ft.', Type: 'humanoid', Str: 15, Dex: 14, Con: 13, Int: 8, Wis: 11, Cha: 9, Actions: [
            { name: 'Morningstar', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage.' },
            { name: 'Javelin', description: 'Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range.' }]
    },
    {
        Name: 'Bulette', AC: 17, HP: 94, CR: 5, Speed: '40 ft., burrow 40 ft.', Type: 'monstrosity', Str: 19, Dex: 11, Con: 21, Int: 2, Wis: 10, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage.' },
            { name: 'Deadly Leap', description: 'If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its ft. in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target\'s choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn\'t knocked prone, and is pushed 5 ft. out of the bulette\'s space into an unoccupied space of the creature\'s choice. If no unoccupied space is within range, the creature instead falls prone in the bulette\'s space.' }]
    },
    {
        Name: 'Camel', AC: 9, HP: 15, CR: 0.125, Speed: '50 ft.', Type: 'beast', Str: 16, Dex: 8, Con: 14, Int: 2, Wis: 8, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.' }]
    },
    {
        Name: 'Carrion Crawler', AC: 13, HP: 51, CR: 2, Speed: '30 ft., climb 30 ft.', Type: 'monstrosity', Str: 14, Dex: 13, Con: 16, Int: 1, Wis: 12, Cha: 5, Actions: [
            { name: 'Multiattack', description: 'The carrion crawler makes two attacks: one with its tentacles and one with its bite.' },
            { name: 'Tentacles', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4 + 2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.' }]
    },
    {
        Name: 'Cat', AC: 12, HP: 2, CR: 0, Speed: '40 ft., climb 30 ft.', Type: 'beast', Str: 3, Dex: 15, Con: 10, Int: 3, Wis: 12, Cha: 7, Actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.' }]
    },
    {
        Name: 'Cave Bear', AC: 12, HP: 42, CR: 2, Speed: '40 ft., swim 30 ft.', Type: 'beast', Str: 20, Dex: 10, Con: 16, Int: 2, Wis: 13, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The bear makes two attacks: one with its bite and one with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.' }]
    },
    {
        Name: 'Centaur', AC: 12, HP: 45, CR: 2, Speed: '50 ft.', Type: 'monstrosity', Str: 18, Dex: 14, Con: 14, Int: 9, Wis: 13, Cha: 11, Actions: [
            { name: 'Multiattack', description: 'The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.' },
            { name: 'Pike', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) piercing damage.' },
            { name: 'Hooves', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.' },
            { name: 'Longbow', description: 'Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.' }]
    },
    {
        Name: 'Chain Devil', AC: 16, HP: 85, CR: 11, Speed: '30 ft.', Type: 'fiend', Str: 18, Dex: 15, Con: 18, Int: 11, Wis: 12, Cha: 14, Actions: [
            { name: 'Multiattack', description: 'The devil makes two attacks with its chains.' },
            { name: 'Chain', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn\'t already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns.' },
            { name: 'Animate Chains (Recharges after a Short or Long Rest)', description: 'Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil\'s control, provided that the chains aren\'t being worn or carried.\nEach animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can\'t make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies.' }]
    },
    {
        Name: 'Chimera', AC: 14, HP: 114, CR: 6, Speed: '30 ft., fly 60 ft.', Type: 'monstrosity', Str: 19, Dex: 11, Con: 19, Int: 3, Wis: 14, Cha: 10, Actions: [
            { name: 'Multiattack', description: 'The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.' },
            { name: 'Horns', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' },
            { name: 'Fire Breath (Recharge 5-6)', description: 'The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Chuul', AC: 16, HP: 93, CR: 4, Speed: '30 ft., swim 30 ft.', Type: 'aberration', Str: 19, Dex: 10, Con: 16, Int: 5, Wis: 11, Cha: 5, Actions: [
            { name: 'Multiattack', description: 'The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.' },
            { name: 'Pincer', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn\'t have two other creatures grappled.' },
            { name: 'Tentacles', description: 'One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }]
    },
    {
        Name: 'Clay Golem', AC: 14, HP: 133, CR: 9, Speed: '20 ft.', Type: 'construct', Str: 20, Dex: 9, Con: 18, Int: 3, Wis: 8, Cha: 1, Actions: [
            { name: 'Multiattack', description: 'The golem makes two slam attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic.' },
            { name: 'Haste (Recharge 5-6)', description: 'Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action.' }]
    },
    {
        Name: 'Cloaker', AC: 14, HP: 78, CR: 8, Speed: '10 ft., fly 40 ft.', Type: 'aberration', Str: 17, Dex: 15, Con: 12, Int: 13, Wis: 12, Cha: 14, Actions: [
            { name: 'Multiattack', description: 'The cloaker makes two attacks: one with its bite and one with its tail.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target\'s head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage.' },
            { name: 'Moan', description: 'Each creature within 60 feet of the cloaker that can hear its moan and that isn\'t an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker\'s next turn. If a creature\'s saving throw is successful, the creature is immune to the cloaker\'s moan for the next 24 hours.' },
            { name: 'Phantasms (Recharges after a Short or Long Rest)', description: 'The cloaker magically creates three illusory duplicates of itself if it isn\'t in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can\'t see or if it relies on senses other than sight.\nA duplicate has the cloaker\'s AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.' }]
    },
    {
        Name: 'Cloud Giant', AC: 14, HP: 200, CR: 9, Speed: '40 ft.', Type: 'giant', Str: 27, Dex: 10, Con: 22, Int: 12, Wis: 16, Cha: 16, Actions: [
            { name: 'Multiattack', description: 'The giant makes two morningstar attacks.' },
            { name: 'Morningstar', description: 'Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) piercing damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10 + 8) bludgeoning damage.' }]
    },
    {
        Name: 'Cockatrice', AC: 11, HP: 27, CR: 0.5, Speed: '20 ft., fly 40 ft.', Type: 'monstrosity', Str: 6, Dex: 12, Con: 12, Int: 2, Wis: 13, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.' }]
    },
    {
        Name: 'Commoner', AC: 10, HP: 4, CR: 0, Speed: '30 ft.', Type: 'humanoid', Str: 10, Dex: 10, Con: 10, Int: 10, Wis: 10, Cha: 10, Actions: [
            { name: 'Club', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.' }]
    },
    {
        Name: 'Constrictor Snake', AC: 12, HP: 13, CR: 0.25, Speed: '30 ft., swim 30 ft.', Type: 'beast', Str: 15, Dex: 14, Con: 12, Int: 1, Wis: 10, Cha: 3, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Constrict', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can\'t constrict another target.' }]
    },
    {
        Name: 'Copper Dragon Wyrmling', AC: 16, HP: 22, CR: 1, Speed: '30 ft., climb 30 ft., fly 60 ft.', Type: 'dragon', Str: 15, Dex: 12, Con: 13, Int: 14, Wis: 11, Cha: 13, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 1 5-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can\'t use reactions, its speed is halved, and it can\'t make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.' }]
    },
    {
        Name: 'Couatl', AC: 19, HP: 97, CR: 4, Speed: '30 ft., fly 90 ft.', Type: 'celestial', Str: 16, Dex: 20, Con: 17, Int: 18, Wis: 20, Cha: 18, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.' },
            { name: 'Constrict', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can\'t constrict another target.' },
            { name: 'Change Shape', description: 'The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl\'s choice).\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.' }]
    },
    {
        Name: 'Crab', AC: 11, HP: 2, CR: 0, Speed: '20 ft., swim 20 ft.', Type: 'beast', Str: 2, Dex: 11, Con: 10, Int: 1, Wis: 8, Cha: 2, Actions: [
            { name: 'Claw', description: 'Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage.' }]
    },
    {
        Name: 'Crocodile', AC: 12, HP: 19, CR: 0.5, Speed: '20 ft., swim 20 ft.', Type: 'beast', Str: 15, Dex: 10, Con: 13, Int: 2, Wis: 10, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can\'t bite another target' }]
    },
    {
        Name: 'Cult Fanatic', AC: 13, HP: 22, CR: 2, Speed: '30 ft.', Type: 'humanoid', Str: 11, Dex: 14, Con: 12, Int: 10, Wis: 13, Cha: 14, Actions: [
            { name: 'Multiattack', description: 'The fanatic makes two melee attacks.' },
            { name: 'Dagger', description: 'Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.' }]
    },
    {
        Name: 'Cultist', AC: 12, HP: 9, CR: 0.125, Speed: '30 ft.', Type: 'humanoid', Str: 11, Dex: 12, Con: 10, Int: 10, Wis: 11, Cha: 10, Actions: [
            { name: 'Scimitar', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage.' }]
    },
    {
        Name: 'Darkmantle', AC: 11, HP: 22, CR: 0.5, Speed: '10 ft., fly 30 ft.', Type: 'monstrosity', Str: 16, Dex: 12, Con: 13, Int: 2, Wis: 10, Cha: 5, Actions: [
            { name: 'Crush', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target\'s head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.\nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle\'s speed also becomes 0, it can\'t benefit from any bonus to its speed, and it moves with the target.\nA creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement.' },
            { name: 'Darkness Aura (1/day)', description: 'A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can\'t penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.' }]
    },
    {
        Name: 'Death Dog', AC: 12, HP: 39, CR: 1, Speed: '40 ft.', Type: 'monstrosity', Str: 15, Dex: 14, Con: 14, Int: 3, Wis: 13, Cha: 6, Actions: [
            { name: 'Multiattack', description: 'The dog makes two bite attacks.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.' }]
    },
    {
        Name: 'Deep Gnome (Svirfneblin)', AC: 15, HP: 16, CR: 0.5, Speed: '20 ft.', Type: 'humanoid', Str: 15, Dex: 14, Con: 14, Int: 12, Wis: 10, Cha: 9, Actions: [
            { name: 'War Pick', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.' },
            { name: 'Poisoned Dart', description: 'Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success' }]
    },
    {
        Name: 'Deer', AC: 13, HP: 4, CR: 0, Speed: '50 ft.', Type: 'beast', Str: 11, Dex: 16, Con: 11, Int: 2, Wis: 14, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.' }]
    },
    {
        Name: 'Deva', AC: 17, HP: 136, CR: 10, Speed: '30 ft., fly 90 ft.', Type: 'celestial', Str: 18, Dex: 18, Con: 18, Int: 17, Wis: 20, Cha: 20, Actions: [
            { name: 'Multiattack', description: 'The deva makes two melee attacks.' },
            { name: 'Mace', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage.' },
            { name: 'Healing Touch (3/Day)', description: 'The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.' },
            { name: 'Change Shape', description: 'The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva\'s choice).\nIn a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.' }]
    },
    {
        Name: 'Dire Wolf', AC: 14, HP: 37, CR: 1, Speed: '50 ft.', Type: 'beast', Str: 17, Dex: 15, Con: 15, Int: 3, Wis: 12, Cha: 7, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.' }]
    },
    {
        Name: 'Djinni', AC: 17, HP: 161, CR: 11, Speed: '30 ft., fly 90 ft.', Type: 'elemental', Str: 21, Dex: 15, Con: 22, Int: 15, Wis: 16, Cha: 20, Actions: [
            { name: 'Multiattack', description: 'The djinni makes three scimitar attacks.' },
            { name: 'Scimitar', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni\'s choice).' },
            { name: 'Create Whirlwind', description: 'A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.\nA creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind.' }]
    },
    {
        Name: 'Doppelganger', AC: 14, HP: 52, CR: 3, Speed: '30 ft.', Type: 'monstrosity', Str: 11, Dex: 18, Con: 14, Int: 11, Wis: 12, Cha: 14, Actions: [
            { name: 'Multiattack', description: 'The doppelganger makes two melee attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage.' },
            { name: 'Read Thoughts', description: 'The doppelganger magically reads the surface thoughts of one creature within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger\'s concentration isn\'t broken (as if concentrating on a spell). While reading the target\'s mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target.' }]
    },
    {
        Name: 'Draft Horse', AC: 10, HP: 19, CR: 0.25, Speed: '40 ft.', Type: 'beast', Str: 18, Dex: 10, Con: 12, Int: 2, Wis: 11, Cha: 7, Actions: [
            { name: 'Hooves', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.' }]
    },
    {
        Name: 'Dragon Turtle', AC: 20, HP: 341, CR: 17, Speed: '20 ft., swim 40 ft.', Type: 'dragon', Str: 25, Dex: 10, Con: 20, Int: 10, Wis: 12, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8 + 7) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone.' },
            { name: 'Steam Breath (Recharge 5-6)', description: 'The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn\'t grant resistance against this damage.' }]
    },
    {
        Name: 'Dretch', AC: 11, HP: 18, CR: 0.25, Speed: '20 ft.', Type: 'fiend', Str: 11, Dex: 11, Con: 12, Int: 5, Wis: 8, Cha: 3, Actions: [
            { name: 'Multiattack', description: 'The dretch makes two attacks: one with its bite and one with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage.' },
            { name: 'Fetid Cloud (1/Day)', description: 'A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can\'t take reactions.' }]
    },
    {
        Name: 'Drider', AC: 19, HP: 123, CR: 6, Speed: '30 ft., climb 30 ft.', Type: 'monstrosity', Str: 16, Dex: 16, Con: 18, Int: 13, Wis: 14, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage.' },
            { name: 'Longsword', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.' },
            { name: 'Longbow', description: 'Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.' }]
    },
    {
        Name: 'Drow', AC: 15, HP: 13, CR: 0.25, Speed: '30 ft.', Type: 'humanoid', Str: 10, Dex: 14, Con: 10, Int: 11, Wis: 11, Cha: 12, Actions: [
            { name: 'Shortsword', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Hand Crossbow', description: 'Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.' }]
    },
    {
        Name: 'Druid', AC: 11, HP: 27, CR: 2, Speed: '30 ft.', Type: 'humanoid', Str: 10, Dex: 12, Con: 13, Int: 12, Wis: 15, Cha: 11, Actions: [
            { name: 'Quarterstaff', description: 'Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage with shillelagh or if wielded with two hands.' }]
    },
    {
        Name: 'Dryad', AC: 11, HP: 22, CR: 1, Speed: '30 ft.', Type: 'fey', Str: 10, Dex: 12, Con: 11, Int: 14, Wis: 15, Cha: 18, Actions: [
            { name: 'Club', description: 'Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1 d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh.' },
            { name: 'Fey Charm', description: 'The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn\'t under the dryad\'s control, it takes the dryad\'s requests or actions in the most favorable way it can.\nEach time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target\'s saving throw is successful, the target is immune to the dryad\'s Fey Charm for the next 24 hours.\nThe dryad can have no more than one humanoid and up to three beasts charmed at a time.' }]
    },
    {
        Name: 'Duergar', AC: 16, HP: 26, CR: 1, Speed: '25 ft.', Type: 'humanoid', Str: 14, Dex: 11, Con: 14, Int: 11, Wis: 10, Cha: 9, Actions: [
            { name: 'Enlarge (Recharges after a Short or Long Rest)', description: 'For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.' },
            { name: 'War Pick', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged.' },
            { name: 'Javelin', description: 'Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged.' },
            { name: 'Invisibility (Recharges after a Short or Long Rest)', description: 'The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it .' }]
    },
    {
        Name: 'Dust Mephit', AC: 12, HP: 17, CR: 0.5, Speed: '30 ft., fly 30 ft.', Type: 'elemental', Str: 5, Dex: 14, Con: 10, Int: 9, Wis: 11, Cha: 10, Actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage.' },
            { name: 'Blinding Breath (Recharge 6)', description: 'The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' },
            { name: 'Variant: Summon Mephits (1/Day)', description: 'The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Eagle', AC: 12, HP: 3, CR: 0, Speed: '10 ft., fly 60 ft.', Type: 'beast', Str: 6, Dex: 15, Con: 10, Int: 2, Wis: 14, Cha: 7, Actions: [
            { name: 'Talons', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.' }]
    },
    {
        Name: 'Earth Elemental', AC: 17, HP: 126, CR: 5, Speed: '30 ft., burrow 30 ft.', Type: 'elemental', Str: 20, Dex: 8, Con: 20, Int: 5, Wis: 10, Cha: 5, Actions: [
            { name: 'Multiattack', description: 'The elemental makes two slam attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.' }]
    },
    {
        Name: 'Efreeti', AC: 17, HP: 200, CR: 11, Speed: '40 ft., fly 60 ft.', Type: 'elemental', Str: 22, Dex: 12, Con: 24, Int: 16, Wis: 15, Cha: 16, Actions: [
            { name: 'Multiattack', description: 'The efreeti makes two scimitar attacks or uses its Hurl Flame twice.' },
            { name: 'Scimitar', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage.' },
            { name: 'Hurl Flame', description: 'Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6) fire damage.' }]
    },
    {
        Name: 'Elephant', AC: 12, HP: 76, CR: 4, Speed: '40 ft.', Type: 'beast', Str: 22, Dex: 9, Con: 17, Int: 3, Wis: 11, Cha: 6, Actions: [
            { name: 'Gore', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage.' },
            { name: 'Stomp', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage.' }]
    },
    {
        Name: 'Elk', AC: 10, HP: 13, CR: 0.25, Speed: '50 ft.', Type: 'beast', Str: 16, Dex: 10, Con: 12, Int: 2, Wis: 10, Cha: 6, Actions: [
            { name: 'Ram', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.' },
            { name: 'Hooves', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage.' }]
    },
    {
        Name: 'Erinyes', AC: 18, HP: 153, CR: 12, Speed: '30 ft., fly 60 ft.', Type: 'fiend', Str: 18, Dex: 16, Con: 18, Int: 14, Wis: 14, Cha: 18, Actions: [
            { name: 'Multiattack', description: 'The erinyes makes three attacks' },
            { name: 'Longsword', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage.' },
            { name: 'Longbow', description: 'Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.' },
            { name: 'Variant: Rope of Entanglement', description: 'Some erinyes carry a rope of entanglement (detailed in the Dungeon Master\'s Guide). When such an erinyes uses its Multiattack, the erinyes can use the rope in place of two of the attacks.' }]
    },
    {
        Name: 'Ettercap', AC: 13, HP: 44, CR: 2, Speed: '30 ft., climb 30 ft.', Type: 'monstrosity', Str: 14, Dex: 15, Con: 13, Int: 7, Wis: 12, Cha: 8, Actions: [
            { name: 'Multiattack', description: 'The ettercap makes two attacks: one with its bite and one with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.' },
            { name: 'Web (Recharge 5-6)', description: 'Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to fire damage and immune to bludgeoning damage.' },
            { name: 'Variant: Web Garrote', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one Medium or Small creature against which the ettercap has advantage on the attack roll. Hit: 4 (1d4 + 2) bludgeoning damage, and the target is grappled (escape DC 12). Until this grapple ends, the target can\'t breathe, and the ettercap has advantage on attack rolls against it.' }]
    },
    {
        Name: 'Ettin', AC: 12, HP: 85, CR: 4, Speed: '40 ft.', Type: 'giant', Str: 21, Dex: 8, Con: 17, Int: 6, Wis: 10, Cha: 8, Actions: [
            { name: 'Multiattack', description: 'The ettin makes two attacks: one with its battleaxe and one with its morningstar.' },
            { name: 'Battleaxe', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.' },
            { name: 'Morningstar', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage.' }]
    },
    {
        Name: 'Fire Elemental', AC: 13, HP: 102, CR: 5, Speed: '50 ft.', Type: 'elemental', Str: 10, Dex: 17, Con: 16, Int: 6, Wis: 10, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The elemental makes two touch attacks.' },
            { name: 'Touch', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns.' }]
    },
    {
        Name: 'Fire Giant', AC: 18, HP: 162, CR: 9, Speed: '30 ft.', Type: 'giant', Str: 25, Dex: 9, Con: 23, Int: 10, Wis: 14, Cha: 13, Actions: [
            { name: 'Multiattack', description: 'The giant makes two greatsword attacks.' },
            { name: 'Greatsword', description: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage.' }]
    },
    {
        Name: 'Flesh Golem', AC: 9, HP: 93, CR: 5, Speed: '30 ft.', Type: 'construct', Str: 19, Dex: 9, Con: 18, Int: 6, Wis: 10, Cha: 5, Actions: [
            { name: 'Multiattack', description: 'The golem makes two slam attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.' }]
    },
    {
        Name: 'Flying Snake', AC: 14, HP: 5, CR: 0.125, Speed: '30 ft., fly 60 ft., swim 30 ft.', Type: 'beast', Str: 4, Dex: 18, Con: 11, Int: 2, Wis: 12, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage.' }]
    },
    {
        Name: 'Flying Sword', AC: 17, HP: 17, CR: 0.25, Speed: '0 ft., fly 50 ft. It can hover.', Type: 'construct', Str: 12, Dex: 15, Con: 11, Int: 1, Wis: 5, Cha: 1, Actions: [
            { name: 'Longsword', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage.' }]
    },
    { Name: 'Frog', AC: 11, HP: 1, CR: 0, Speed: '20 ft., swim 20 ft.', Type: 'beast', Str: 1, Dex: 13, Con: 8, Int: 1, Wis: 8, Cha: 3 },
    {
        Name: 'Frost Giant', AC: 15, HP: 138, CR: 8, Speed: '40 ft.', Type: 'giant', Str: 23, Dex: 9, Con: 21, Int: 9, Wis: 10, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The giant makes two greataxe attacks.' },
            { name: 'Greataxe', description: 'Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.' }]
    },
    {
        Name: 'Gargoyle', AC: 15, HP: 52, CR: 2, Speed: '30 ft., fly 60 ft.', Type: 'elemental', Str: 15, Dex: 11, Con: 16, Int: 6, Wis: 11, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The gargoyle makes two attacks: one with its bite and one with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.' }]
    },
    {
        Name: 'Gelatinous Cube', AC: 6, HP: 84, CR: 2, Speed: '15 ft.', Type: 'ooze', Str: 14, Dex: 3, Con: 20, Int: 1, Wis: 6, Cha: 1, Actions: [
            { name: 'Pseudopod', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage.' },
            { name: 'Engulf', description: 'The cube moves up to its speed. While doing so, it can enter Large or smaller creatures\' spaces. Whenever the cube enters a creature\'s space, the creature must make a DC 12 Dexterity saving throw.\nOn a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.\nOn a failed save, the cube enters the creature\'s space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can\'t breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube\'s turns. When the cube moves, the engulfed creature moves with it.\nAn engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.' }]
    },
    {
        Name: 'Ghast', AC: 13, HP: 36, CR: 2, Speed: '30 ft.', Type: 'undead', Str: 16, Dex: 17, Con: 10, Int: 11, Wis: 10, Cha: 8, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }]
    },
    {
        Name: 'Ghost', AC: 11, HP: 45, CR: 4, Speed: '0 ft., fly 40 ft. It can hover.', Type: 'undead', Str: 7, Dex: 13, Con: 10, Int: 10, Wis: 12, Cha: 17, Actions: [
            { name: 'Withering Touch', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage.' },
            { name: 'Etherealness', description: 'The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can\'t affect or be affected by anything on the other plane.' },
            { name: 'Horrifying Visage', description: 'Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 _ 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target\'s saving throw is successful or the effect ends for it, the target is immune to this ghost\'s Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring.' },
            { name: 'Possession (Recharge 6)', description: 'One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn\'t deprive the target of awareness. The ghost can\'t be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target\'s statistics, but doesn\'t gain access to the target\'s knowledge, class features, or proficiencies.\nThe possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost\'s Possession for 24 hours after succeeding on the saving throw or after the possession ends.' }]
    },
    {
        Name: 'Ghoul', AC: 12, HP: 22, CR: 1, Speed: '30 ft.', Type: 'undead', Str: 13, Dex: 15, Con: 10, Int: 7, Wis: 10, Cha: 6, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }]
    },
    {
        Name: 'Giant Ape', AC: 12, HP: 157, CR: 7, Speed: '40 ft., climb 40 ft.', Type: 'beast', Str: 23, Dex: 14, Con: 18, Int: 7, Wis: 12, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The ape makes two fist attacks.' },
            { name: 'Fist', description: 'Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) bludgeoning damage.' }]
    },
    {
        Name: 'Giant Badger', AC: 10, HP: 13, CR: 0.25, Speed: '30 ft., burrow 10 ft.', Type: 'beast', Str: 13, Dex: 10, Con: 15, Int: 2, Wis: 12, Cha: 5, Actions: [
            { name: 'Multiattack', description: 'The badger makes two attacks: one with its bite and one with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.' }]
    },
    {
        Name: 'Giant Bat', AC: 13, HP: 22, CR: 0.25, Speed: '10 ft., fly 60 ft.', Type: 'beast', Str: 15, Dex: 16, Con: 11, Int: 2, Wis: 12, Cha: 6, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.' }]
    },
    {
        Name: 'Giant Boar', AC: 12, HP: 42, CR: 2, Speed: '40 ft.', Type: 'beast', Str: 17, Dex: 10, Con: 16, Int: 2, Wis: 7, Cha: 5, Actions: [
            { name: 'Tusk', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.' }]
    },
    {
        Name: 'Giant Centipede', AC: 13, HP: 4, CR: 0.25, Speed: '30 ft., climb 30 ft.', Type: 'beast', Str: 5, Dex: 14, Con: 12, Int: 1, Wis: 7, Cha: 3, Actions: [
            { name: 'Bite', description: 'Bite. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.' }]
    },
    {
        Name: 'Giant Constrictor Snake', AC: 12, HP: 60, CR: 2, Speed: '30 ft., swim 30 ft.', Type: 'beast', Str: 19, Dex: 14, Con: 12, Int: 1, Wis: 10, Cha: 3, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.' },
            { name: 'Constrict', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can\'t constrict another target.' }]
    },
    {
        Name: 'Giant Crab', AC: 15, HP: 13, CR: 0.125, Speed: '30 ft., swim 30 ft.', Type: 'beast', Str: 13, Dex: 15, Con: 11, Int: 1, Wis: 9, Cha: 3, Actions: [
            { name: 'Claw', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.' }]
    },
    {
        Name: 'Giant Crocodile', AC: 14, HP: 85, CR: 5, Speed: '30 ft., swim 50 ft.', Type: 'beast', Str: 21, Dex: 9, Con: 17, Int: 2, Wis: 10, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The crocodile makes two attacks: one with its bite and one with its tail.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can\'t bite another target.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.' }]
    },
    {
        Name: 'Giant Eagle', AC: 13, HP: 26, CR: 1, Speed: '10 ft., fly 80 ft.', Type: 'beast', Str: 16, Dex: 17, Con: 13, Int: 8, Wis: 14, Cha: 10, Actions: [
            { name: 'Multiattack', description: 'The eagle makes two attacks: one with its beak and one with its talons.' },
            { name: 'Beak', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.' },
            { name: 'Talons', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.' }]
    },
    {
        Name: 'Giant Elk', AC: 15, HP: 42, CR: 2, Speed: '60 ft.', Type: 'beast', Str: 19, Dex: 16, Con: 14, Int: 7, Wis: 14, Cha: 10, Actions: [
            { name: 'Ram', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.' },
            { name: 'Hooves', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage.' }]
    },
    {
        Name: 'Giant Fire Beetle', AC: 13, HP: 4, CR: 0, Speed: '30 ft.', Type: 'beast', Str: 8, Dex: 10, Con: 12, Int: 1, Wis: 7, Cha: 3, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 — 1) slashing damage.' }]
    },
    {
        Name: 'Giant Frog', AC: 11, HP: 18, CR: 0.25, Speed: '30 ft., swim 30 ft.', Type: 'beast', Str: 12, Dex: 13, Con: 11, Int: 2, Wis: 10, Cha: 3, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can\'t bite another target.' },
            { name: 'Swallow', description: 'The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog\'s turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone.' }]
    },
    {
        Name: 'Giant Goat', AC: 11, HP: 19, CR: 0.5, Speed: '40 ft.', Type: 'beast', Str: 17, Dex: 11, Con: 12, Int: 3, Wis: 12, Cha: 6, Actions: [
            { name: 'Ram', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.' }]
    },
    {
        Name: 'Giant Hyena', AC: 12, HP: 45, CR: 1, Speed: '50 ft.', Type: 'beast', Str: 16, Dex: 14, Con: 14, Int: 2, Wis: 12, Cha: 7, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.' }]
    },
    {
        Name: 'Giant Lizard', AC: 12, HP: 19, CR: 0.25, Speed: '30 ft., climb 30 ft.', Type: 'beast', Str: 15, Dex: 12, Con: 13, Int: 2, Wis: 10, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.' }]
    },
    {
        Name: 'Giant Octopus', AC: 11, HP: 52, CR: 1, Speed: '10 ft., swim 60 ft.', Type: 'beast', Str: 17, Dex: 13, Con: 13, Int: 4, Wis: 10, Cha: 4, Actions: [
            { name: 'Tentacles', description: 'Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can\'t use its tentacles on another target.' },
            { name: 'Ink Cloud (Recharges after a Short or Long Rest)', description: 'A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.' }]
    },
    {
        Name: 'Giant Owl', AC: 12, HP: 19, CR: 0.25, Speed: '5 ft., fly 60 ft.', Type: 'beast', Str: 13, Dex: 15, Con: 12, Int: 8, Wis: 13, Cha: 10, Actions: [
            { name: 'Talons', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage.' }]
    },
    {
        Name: 'Giant Poisonous Snake', AC: 14, HP: 11, CR: 0.25, Speed: '30 ft., swim 30 ft.', Type: 'beast', Str: 10, Dex: 18, Con: 13, Int: 2, Wis: 10, Cha: 3, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Giant Rat', AC: 12, HP: 7, CR: 0.125, Speed: '30 ft.', Type: 'beast', Str: 7, Dex: 15, Con: 11, Int: 2, Wis: 10, Cha: 4, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.' }]
    },
    {
        Name: 'Giant Rat (Diseased)', AC: 12, HP: 7, CR: 0.125, Speed: '30 ft.', Type: 'beast', Str: 7, Dex: 15, Con: 11, Int: 2, Wis: 10, Cha: 4, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can\'t regain hit points except by magical means, and the target\'s hit point maximum decreases by 3 (1d6) every 24 hours. If the target\'s hit point maximum drops to 0 as a result of this disease, the target dies.' }]
    },
    {
        Name: 'Giant Scorpion', AC: 15, HP: 52, CR: 3, Speed: '40 ft.', Type: 'beast', Str: 15, Dex: 13, Con: 15, Int: 1, Wis: 9, Cha: 3, Actions: [
            { name: 'Claw', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.' },
            { name: 'Multiattack', description: 'The scorpion makes three attacks: two with its claws and one with its sting.' },
            { name: 'Sting', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Giant Sea Horse', AC: 13, HP: 16, CR: 0.5, Speed: '0 ft., swim 40 ft.', Type: 'beast', Str: 12, Dex: 15, Con: 11, Int: 2, Wis: 12, Cha: 5, Actions: [
            { name: 'Ram', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.' }]
    },
    {
        Name: 'Giant Shark', AC: 13, HP: 126, CR: 5, Speed: 'swim 50 ft.', Type: 'beast', Str: 23, Dex: 11, Con: 21, Int: 1, Wis: 10, Cha: 5, Actions: [
            { name: 'Bite', description: 'Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage.' }]
    },
    {
        Name: 'Giant Spider', AC: 14, HP: 26, CR: 1, Speed: '30 ft., climb 30 ft.', Type: 'beast', Str: 14, Dex: 16, Con: 12, Int: 2, Wis: 11, Cha: 4, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.' },
            { name: 'Web (Recharge 5-6)', description: 'Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).' }]
    },
    {
        Name: 'Giant Toad', AC: 11, HP: 39, CR: 1, Speed: '20 ft., swim 40 ft.', Type: 'beast', Str: 15, Dex: 13, Con: 13, Int: 2, Wis: 10, Cha: 3, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can\'t bite another target.' },
            { name: 'Swallow', description: 'The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad\'s turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.' }]
    },
    {
        Name: 'Giant Vulture', AC: 10, HP: 22, CR: 1, Speed: '10 ft., fly 60 ft.', Type: 'beast', Str: 15, Dex: 10, Con: 15, Int: 6, Wis: 12, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The vulture makes two attacks: one with its beak and one with its talons.' },
            { name: 'Beak', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.' },
            { name: 'Talons', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.' }]
    },
    {
        Name: 'Giant Wasp', AC: 12, HP: 13, CR: 0.5, Speed: '10 ft., fly 50 ft., swim 50 ft.', Type: 'beast', Str: 10, Dex: 14, Con: 10, Int: 1, Wis: 10, Cha: 3, Actions: [
            { name: 'Sting', description: 'Sting. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.' }]
    },
    {
        Name: 'Giant Weasel', AC: 13, HP: 9, CR: 0.125, Speed: '40 ft.', Type: 'beast', Str: 11, Dex: 16, Con: 10, Int: 4, Wis: 12, Cha: 5, Actions: [
            { name: 'Bite', description: 'Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.' }]
    },
    {
        Name: 'Giant Wolf Spider', AC: 13, HP: 11, CR: 0.25, Speed: '40 ft., climb 40 ft.', Type: 'beast', Str: 12, Dex: 16, Con: 13, Int: 3, Wis: 12, Cha: 4, Actions: [
            { name: 'Bite', description: 'Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.' }]
    },
    {
        Name: 'Gibbering Mouther', AC: 9, HP: 67, CR: 2, Speed: '10 ft., swim 10 ft.', Type: 'aberration', Str: 10, Dex: 8, Con: 16, Int: 3, Wis: 10, Cha: 6, Actions: [
            { name: 'Multiattack', description: 'The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle.' },
            { name: 'Bites', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther.' },
            { name: 'Blinding Spittle (Recharge 5-6)', description: 'The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther\'s next turn.' }]
    },
    {
        Name: 'Glabrezu', AC: 17, HP: 157, CR: 9, Speed: '40 ft.', Type: 'fiend', Str: 20, Dex: 15, Con: 21, Int: 19, Wis: 17, Cha: 16, Actions: [
            { name: 'Multiattack', description: 'The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell.' },
            { name: 'Pincer', description: 'Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target.' },
            { name: 'Fist', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.' },
            { name: 'Variant: Summon Demon (1/Day)', description: 'The demon chooses what to summon and attempts a magical summoning.\nA glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Gladiator', AC: 16, HP: 112, CR: 5, Speed: '30 ft.', Type: 'humanoid', Str: 18, Dex: 15, Con: 16, Int: 10, Wis: 12, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The gladiator makes three melee attacks or two ranged attacks.' },
            { name: 'Spear', description: 'Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack.' },
            { name: 'Shield Bash', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.' }]
    },
    {
        Name: 'Gnoll', AC: 15, HP: 22, CR: 0.5, Speed: '30 ft.', Type: 'humanoid', Str: 14, Dex: 12, Con: 11, Int: 6, Wis: 10, Cha: 7, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.' },
            { name: 'Spear', description: 'Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.' },
            { name: 'Longbow', description: 'Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.' }]
    },
    {
        Name: 'Goat', AC: 10, HP: 4, CR: 0, Speed: '40 ft.', Type: 'beast', Str: 12, Dex: 10, Con: 11, Int: 2, Wis: 10, Cha: 5, Actions: [
            { name: 'Ram', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.' }]
    },
    {
        Name: 'Goblin', AC: 15, HP: 7, CR: 0.25, Speed: '30 ft.', Type: 'humanoid', Str: 8, Dex: 14, Con: 10, Int: 10, Wis: 8, Cha: 8, Actions: [
            { name: 'Scimitar', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.' },
            { name: 'Shortbow', description: 'Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' }]
    },
    {
        Name: 'Gold Dragon Wyrmling', AC: 17, HP: 60, CR: 3, Speed: '30 ft., fly 60 ft., swim 30 ft.', Type: 'dragon', Str: 19, Dex: 14, Con: 17, Int: 14, Wis: 11, Cha: 16, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }]
    },
    {
        Name: 'Gorgon', AC: 19, HP: 114, CR: 5, Speed: '40 ft.', Type: 'monstrosity', Str: 20, Dex: 11, Con: 18, Int: 2, Wis: 12, Cha: 7, Actions: [
            { name: 'Gore', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) piercing damage.' },
            { name: 'Hooves', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage.' },
            { name: 'Petrifying Breath (Recharge 5-6)', description: 'The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic.' }]
    },
    {
        Name: 'Gray Ooze', AC: 8, HP: 22, CR: 0.5, Speed: '10 ft., climb 10 ft.', Type: 'ooze', Str: 12, Dex: 6, Con: 16, Int: 1, Wis: 6, Cha: 2, Actions: [
            { name: 'Pseudopod', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.' }]
    },
    {
        Name: 'Green Dragon Wyrmling', AC: 17, HP: 38, CR: 2, Speed: '30 ft., fly 60 ft., swim 30 ft.', Type: 'dragon', Str: 15, Dex: 12, Con: 13, Int: 14, Wis: 11, Cha: 13, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage.' },
            { name: 'Poison Breath (Recharge 5-6)', description: 'The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Green Hag', AC: 17, HP: 82, CR: 3, Speed: '30 ft.', Type: 'fey', Str: 18, Dex: 12, Con: 16, Int: 13, Wis: 14, Cha: 14, Actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.' },
            { name: 'Illusory Appearance', description: 'The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised.' },
            { name: 'Invisible Passage', description: 'The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her.' }]
    },
    {
        Name: 'Grick', AC: 14, HP: 27, CR: 2, Speed: '30 ft., climb 30 ft.', Type: 'monstrosity', Str: 14, Dex: 14, Con: 11, Int: 3, Wis: 14, Cha: 5, Actions: [
            { name: 'Multiattack', description: 'The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target.' },
            { name: 'Tentacles', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.' },
            { name: 'Beak', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' }]
    },
    {
        Name: 'Griffon', AC: 12, HP: 59, CR: 2, Speed: '30 ft., fly 80 ft.', Type: 'monstrosity', Str: 18, Dex: 15, Con: 16, Int: 2, Wis: 13, Cha: 8, Actions: [
            { name: 'Multiattack', description: 'The griffon makes two attacks: one with its beak and one with its claws.' },
            { name: 'Beak', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' }]
    },
    {
        Name: 'Grimlock', AC: 11, HP: 11, CR: 0.25, Speed: '30 ft.', Type: 'humanoid', Str: 16, Dex: 12, Con: 12, Int: 9, Wis: 8, Cha: 6, Actions: [
            { name: 'Spiked Bone Club', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage.' }]
    },
    {
        Name: 'Guard', AC: 16, HP: 11, CR: 0.125, Speed: '30 ft.', Type: 'humanoid', Str: 13, Dex: 12, Con: 12, Int: 10, Wis: 11, Cha: 10, Actions: [
            { name: 'Spear', description: 'Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.' }]
    },
    {
        Name: 'Guardian Naga', AC: 18, HP: 127, CR: 10, Speed: '40 ft.', Type: 'monstrosity', Str: 19, Dex: 18, Con: 16, Int: 16, Wis: 19, Cha: 18, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.' },
            { name: 'Spit Poison', description: 'Ranged Weapon Attack: +8 to hit, range 15/30 ft., one creature. Hit: The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Gynosphinx', AC: 17, HP: 136, CR: 11, Speed: '40 ft., fly 60 ft.', Type: 'monstrosity', Str: 18, Dex: 15, Con: 16, Int: 18, Wis: 18, Cha: 18, Actions: [
            { name: 'Multiattack', description: 'The sphinx makes two claw attacks.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.' }], LegendaryActions: [
                { name: 'Claw Attack', description: 'The sphinx makes one claw attack.' },
                { name: 'Teleport (Costs 2 Actions)', description: 'The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.' },
                { name: 'Cast a Spell (Costs 3 Actions)', description: 'The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.' }]
    },
    {
        Name: 'Half-Red Dragon Veteran', AC: 18, HP: 65, CR: 5, Speed: '30 ft.', Type: 'humanoid', Str: 16, Dex: 13, Con: 14, Int: 10, Wis: 11, Cha: 10, Actions: [
            { name: 'Multiattack', description: 'The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.' },
            { name: 'Longsword', description: 'Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.' },
            { name: 'Shortsword', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.' },
            { name: 'Heavy Crossbow', description: 'Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage.' },
            { name: 'Fire Breath (Recharge 5-6)', description: 'The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Harpy', AC: 11, HP: 38, CR: 1, Speed: '20 ft., fly 40 ft.', Type: 'monstrosity', Str: 12, Dex: 13, Con: 12, Int: 7, Wis: 10, Cha: 13, Actions: [
            { name: 'Multiattack', description: 'The harpy makes two attacks: one with its claws and one with its club.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.' },
            { name: 'Club', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.' },
            { name: 'Luring Song', description: 'The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.\nWhile charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn\'t avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature\'s saving throw is successful, the effect ends on it.\nA target that successfully saves is immune to this harpy\'s song for the next 24 hours.' }]
    },
    {
        Name: 'Hawk', AC: 13, HP: 1, CR: 0, Speed: '10 ft., fly 60 ft.', Type: 'beast', Str: 5, Dex: 16, Con: 8, Int: 2, Wis: 14, Cha: 6, Actions: [
            { name: 'Talons', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage.' }]
    },
    {
        Name: 'Hell Hound', AC: 15, HP: 45, CR: 3, Speed: '50 ft.', Type: 'fiend', Str: 17, Dex: 12, Con: 14, Int: 6, Wis: 13, Cha: 6, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage.' },
            { name: 'Fire Breath (Recharge 5-6)', description: 'The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Hezrou', AC: 16, HP: 136, CR: 8, Speed: '30 ft.', Type: 'fiend', Str: 19, Dex: 17, Con: 20, Int: 5, Wis: 12, Cha: 13, Actions: [
            { name: 'Multiattack', description: 'The hezrou makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' },
            { name: 'Variant: Summon Demon (1/Day)', description: 'The demon chooses what to summon and attempts a magical summoning.\nA hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Hill Giant', AC: 13, HP: 105, CR: 5, Speed: '40 ft.', Type: 'giant', Str: 21, Dex: 8, Con: 19, Int: 5, Wis: 9, Cha: 6, Actions: [
            { name: 'Multiattack', description: 'The giant makes two greatclub attacks.' },
            { name: 'Greatclub', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8 + 5) bludgeoning damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21 (3d10 + 5) bludgeoning damage.' }]
    },
    {
        Name: 'Hippogriff', AC: 11, HP: 19, CR: 1, Speed: '40 ft, fly 60 ft.', Type: 'monstrosity', Str: 17, Dex: 13, Con: 13, Int: 2, Wis: 12, Cha: 8, Actions: [
            { name: 'Multiattack', description: 'The hippogriff makes two attacks: one with its beak and one with its claws.' },
            { name: 'Beak', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.' }]
    },
    {
        Name: 'Hobgoblin', AC: 18, HP: 11, CR: 0.5, Speed: '30 ft.', Type: 'humanoid', Str: 13, Dex: 12, Con: 12, Int: 10, Wis: 10, Cha: 9, Actions: [
            { name: 'Longsword', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands.' },
            { name: 'Longbow', description: 'Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.' }]
    },
    {
        Name: 'Homunculus', AC: 13, HP: 5, CR: 0, Speed: '20 ft., fly 40 ft.', Type: 'construct', Str: 4, Dex: 15, Con: 11, Int: 10, Wis: 10, Cha: 7, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way.' }]
    },
    {
        Name: 'Horned Devil', AC: 18, HP: 148, CR: 11, Speed: '20 ft., fly 60 ft.', Type: 'fiend', Str: 22, Dex: 17, Con: 21, Int: 12, Wis: 16, Cha: 17, Actions: [
            { name: 'Multiattack', description: 'The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack.' },
            { name: 'Fork', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.' },
            { name: 'Hurl Flame', description: 'Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn\'t being worn or carried, it also catches fire.' }]
    },
    {
        Name: 'Hunter Shark', AC: 12, HP: 45, CR: 2, Speed: 'swim 40 ft.', Type: 'beast', Str: 18, Dex: 13, Con: 15, Int: 1, Wis: 10, Cha: 4, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.' }]
    },
    {
        Name: 'Hydra', AC: 15, HP: 172, CR: 8, Speed: '30 ft., swim 30 ft.', Type: 'monstrosity', Str: 20, Dex: 12, Con: 20, Int: 2, Wis: 10, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The hydra makes as many bite attacks as it has heads.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) piercing damage.' }]
    },
    {
        Name: 'Hyena', AC: 11, HP: 5, CR: 0, Speed: '50 ft.', Type: 'beast', Str: 11, Dex: 13, Con: 12, Int: 2, Wis: 12, Cha: 5, Actions: [
            { name: 'Bite', description: 'Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.' }]
    },
    {
        Name: 'Ice Devil', AC: 18, HP: 180, CR: 14, Speed: '40 ft.', Type: 'fiend', Str: 21, Dex: 14, Con: 18, Int: 18, Wis: 15, Cha: 18, Actions: [
            { name: 'Multiattack', description: 'The devil makes three attacks: one with its bite, one with its claws, and one with its tail.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack:+10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage.' },
            { name: 'Wall of Ice', description: 'The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it\'s a hemispherical dome up to 20 feet in diameter.\nWhen the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.\nThe wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.' }]
    },
    {
        Name: 'Ice Mephit', AC: 11, HP: 21, CR: 0.5, Speed: '30 ft., fly 30 ft.', Type: 'elemental', Str: 7, Dex: 13, Con: 10, Int: 9, Wis: 11, Cha: 12, Actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage.' },
            { name: 'Frost Breath (Recharge 6)', description: 'The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one.' },
            { name: 'Variant: Summon Mephits (1/Day)', description: 'The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Imp', AC: 13, HP: 10, CR: 1, Speed: '20 ft., fly 40 ft.', Type: 'fiend', Str: 6, Dex: 17, Con: 13, Int: 11, Wis: 12, Cha: 14, Actions: [
            { name: 'Sting (Bite in Beast Form)', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft ., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.' },
            { name: 'Invisibility', description: 'The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.' }]
    },
    {
        Name: 'Invisible Stalker', AC: 14, HP: 104, CR: 6, Speed: '50 ft., fly 50 ft. (hover)', Type: 'elemental', Str: 16, Dex: 19, Con: 14, Int: 10, Wis: 15, Cha: 11, Actions: [
            { name: 'Multiattack', description: 'The stalker makes two slam attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.' }]
    },
    {
        Name: 'Iron Golem', AC: 20, HP: 210, CR: 16, Speed: '30 ft.', Type: 'construct', Str: 24, Dex: 9, Con: 20, Int: 3, Wis: 11, Cha: 1, Actions: [
            { name: 'Multiattack', description: 'The golem makes two melee attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.' },
            { name: 'Sword', description: 'Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10 + 7) slashing damage.' },
            { name: 'Poison Breath (Recharge 5-6)', description: 'The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (l0d8) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Jackal', AC: 12, HP: 3, CR: 0, Speed: '40 ft.', Type: 'beast', Str: 8, Dex: 15, Con: 11, Int: 3, Wis: 12, Cha: 6, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) piercing damage.' }]
    },
    {
        Name: 'Killer Whale', AC: 12, HP: 90, CR: 3, Speed: 'swim 60 ft.', Type: 'beast', Str: 19, Dex: 10, Con: 13, Int: 3, Wis: 12, Cha: 7, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage.' }]
    },
    {
        Name: 'Knight', AC: 18, HP: 52, CR: 3, Speed: '30 ft.', Type: 'humanoid', Str: 16, Dex: 11, Con: 14, Int: 11, Wis: 11, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The knight makes two melee attacks.' },
            { name: 'Greatsword', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.' },
            { name: 'Heavy Crossbow', description: 'Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.' },
            { name: 'Leadership (Recharges after a Short or Long Rest)', description: 'For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.' }]
    },
    {
        Name: 'Kobold', AC: 12, HP: 5, CR: 0.125, Speed: '30 ft.', Type: 'humanoid', Str: 7, Dex: 15, Con: 9, Int: 8, Wis: 7, Cha: 8, Actions: [
            { name: 'Dagger', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.' },
            { name: 'Sling', description: 'Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.' }]
    },
    {
        Name: 'Kraken', AC: 18, HP: 472, CR: 23, Speed: '20 ft., swim 60 ft.', Type: 'monstrosity', Str: 30, Dex: 11, Con: 25, Int: 22, Wis: 18, Cha: 20, Actions: [
            { name: 'Multiattack', description: 'The kraken makes three tentacle attacks, each of which it can replace with one use of Fling.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken\'s turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.' },
            { name: 'Tentacle', description: 'Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target.' },
            { name: 'Fling', description: 'One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone.' },
            { name: 'Lightning Storm', description: 'The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.' }], LegendaryActions: [
                { name: 'Tentacle Attack or Fling', description: 'The kraken makes one tentacle attack or uses its Fling.' },
                { name: 'Lightning Storm (Costs 2 Actions)', description: 'The kraken uses Lightning Storm.' },
                { name: 'Ink Cloud (Costs 3 Actions)', description: 'While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken\'s next turn.' }]
    },
    {
        Name: 'Lamia', AC: 13, HP: 97, CR: 4, Speed: '30 ft.', Type: 'monstrosity', Str: 16, Dex: 13, Con: 15, Int: 14, Wis: 15, Cha: 16, Actions: [
            { name: 'Multiattack', description: 'The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage.' },
            { name: 'Dagger', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.' },
            { name: 'Intoxicating Touch', description: 'Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks.' }]
    },
    {
        Name: 'Lemure', AC: 7, HP: 13, CR: 0, Speed: '15 ft.', Type: 'fiend', Str: 10, Dex: 5, Con: 11, Int: 1, Wis: 11, Cha: 3, Actions: [
            { name: 'Fist', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage' }]
    },
    {
        Name: 'Lich', AC: 17, HP: 135, CR: 21, Speed: '30 ft.', Type: 'undead', Str: 11, Dex: 16, Con: 16, Int: 20, Wis: 14, Cha: 16, Actions: [
            { name: 'Paralyzing Touch', description: 'Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }], LegendaryActions: [
                { name: 'Cantrip', description: 'The lich casts a cantrip.' },
                { name: 'Paralyzing Touch (Costs 2 Actions)', description: 'The lich uses its Paralyzing Touch.' },
                { name: 'Frightening Gaze (Costs 2 Actions)', description: 'The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target\'s saving throw is successful or the effect ends for it, the target is immune to the lich\'s gaze for the next 24 hours.' },
                { name: 'Disrupt Life (Costs 3 Actions)', description: 'Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Lion', AC: 12, HP: 26, CR: 1, Speed: '50 ft.', Type: 'beast', Str: 17, Dex: 15, Con: 13, Int: 3, Wis: 12, Cha: 8, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.' }]
    },
    {
        Name: 'Lizard', AC: 10, HP: 2, CR: 0, Speed: '20 ft., climb 20 ft.', Type: 'beast', Str: 2, Dex: 11, Con: 10, Int: 1, Wis: 8, Cha: 3, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.' }]
    },
    {
        Name: 'Lizardfolk', AC: 15, HP: 22, CR: 0.5, Speed: '30 ft., swim 30 ft.', Type: 'humanoid', Str: 15, Dex: 10, Con: 13, Int: 7, Wis: 12, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The lizardfolk makes two melee attacks, each one with a different weapon.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Heavy Club', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.' },
            { name: 'Javelin', description: 'Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Spiked Shield', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' }]
    },
    {
        Name: 'Mage', AC: 12, HP: 40, CR: 6, Speed: '30 ft.', Type: 'humanoid', Str: 9, Dex: 14, Con: 11, Int: 17, Wis: 12, Cha: 11, Actions: [
            { name: 'Dagger', description: 'Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.' }]
    },
    {
        Name: 'Magma Mephit', AC: 11, HP: 22, CR: 0.5, Speed: '30 ft., fly 30 ft.', Type: 'elemental', Str: 8, Dex: 12, Con: 12, Int: 7, Wis: 10, Cha: 10, Actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft ., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage.' },
            { name: 'Fire Breath (Recharge 6)', description: 'The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.' },
            { name: 'Variant: Summon Mephits (1/Day)', description: 'The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Magmin', AC: 14, HP: 9, CR: 0.5, Speed: '30 ft.', Type: 'elemental', Str: 7, Dex: 15, Con: 12, Int: 8, Wis: 11, Cha: 10, Actions: [
            { name: 'Touch', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a target takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns.' }]
    },
    {
        Name: 'Mammoth', AC: 13, HP: 126, CR: 6, Speed: '40 ft.', Type: 'beast', Str: 24, Dex: 9, Con: 21, Int: 3, Wis: 11, Cha: 6, Actions: [
            { name: 'Gore', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage.' },
            { name: 'Stomp', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage.' }]
    },
    {
        Name: 'Manticore', AC: 14, HP: 68, CR: 3, Speed: '30 ft., fly 50 ft.', Type: 'monstrosity', Str: 17, Dex: 16, Con: 17, Int: 7, Wis: 12, Cha: 8, Actions: [
            { name: 'Multiattack', description: 'The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.' },
            { name: 'Tail Spike', description: 'Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8 + 3) piercing damage.' }]
    },
    {
        Name: 'Marilith', AC: 18, HP: 189, CR: 16, Speed: '40 ft.', Type: 'fiend', Str: 18, Dex: 20, Con: 20, Int: 18, Wis: 16, Cha: 20, Actions: [
            { name: 'Multiattack', description: 'The marilith can make seven attacks: six with its longswords and one with its tail.' },
            { name: 'Longsword', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can\'t make tail attacks against other targets.' },
            { name: 'Teleport', description: 'The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.' },
            { name: 'Variant: Summon Demon (1/Day)', description: 'The demon chooses what to summon and attempts a magical summoning.\nA marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Mastiff', AC: 12, HP: 5, CR: 0.125, Speed: '40 ft.', Type: 'beast', Str: 13, Dex: 14, Con: 12, Int: 3, Wis: 12, Cha: 7, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.' }]
    },
    {
        Name: 'Medusa', AC: 15, HP: 127, CR: 6, Speed: '30 ft.', Type: 'monstrosity', Str: 10, Dex: 15, Con: 16, Int: 12, Wis: 13, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The medusa makes either three melee attacks —  one with its snake hair and two with its shortsword — or two ranged attacks with its longbow.' },
            { name: 'Snake Hair', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage.' },
            { name: 'Shortsword', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Longbow', description: 'Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage.' }]
    },
    {
        Name: 'Merfolk', AC: 11, HP: 11, CR: 0.125, Speed: '10 ft., swim 40 ft.', Type: 'humanoid', Str: 10, Dex: 13, Con: 12, Int: 11, Wis: 11, Cha: 12, Actions: [
            { name: 'Spear', description: 'Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack.' }]
    },
    {
        Name: 'Merrow', AC: 13, HP: 45, CR: 2, Speed: '10 ft., swim 40 ft.', Type: 'monstrosity', Str: 18, Dex: 10, Con: 15, Int: 8, Wis: 10, Cha: 9, Actions: [
            { name: 'Multiattack', description: 'The merrow makes two attacks: one with its bite and one with its claws or harpoon.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage.' },
            { name: 'Harpoon', description: 'Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow.' }]
    },
    {
        Name: 'Mimic', AC: 12, HP: 58, CR: 2, Speed: '15 ft.', Type: 'monstrosity', Str: 17, Dex: 12, Con: 15, Int: 5, Wis: 13, Cha: 8, Actions: [
            { name: 'Pseudopod', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage.' }]
    },
    {
        Name: 'Minotaur', AC: 14, HP: 76, CR: 3, Speed: '40 ft.', Type: 'monstrosity', Str: 18, Dex: 11, Con: 16, Int: 6, Wis: 16, Cha: 9, Actions: [
            { name: 'Greataxe', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.' },
            { name: 'Gore', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.' }]
    },
    {
        Name: 'Minotaur Skeleton', AC: 12, HP: 67, CR: 2, Speed: '40 ft.', Type: 'undead', Str: 18, Dex: 11, Con: 15, Int: 6, Wis: 8, Cha: 5, Actions: [
            { name: 'Greataxe', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.' },
            { name: 'Gore', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.' }]
    },
    {
        Name: 'Mule', AC: 10, HP: 11, CR: 0.125, Speed: '40 ft.', Type: 'beast', Str: 14, Dex: 10, Con: 13, Int: 2, Wis: 10, Cha: 5, Actions: [
            { name: 'Hooves', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.' }]
    },
    {
        Name: 'Mummy', AC: 11, HP: 58, CR: 3, Speed: '20 ft.', Type: 'undead', Str: 16, Dex: 8, Con: 15, Int: 6, Wis: 10, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The mummy can use its Dreadful Glare and makes one attack with its rotting fist.' },
            { name: 'Rotting Fist', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can\'t regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target\'s hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.' },
            { name: 'Dreadful Glare', description: 'The mummy targets one creature it can see within 60 ft. of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy\'s next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours.' }]
    },
    {
        Name: 'Mummy Lord', AC: 17, HP: 97, CR: 15, Speed: '20 ft.', Type: 'undead', Str: 18, Dex: 10, Con: 17, Int: 11, Wis: 18, Cha: 16, Actions: [
            { name: 'Multiattack', description: 'The mummy can use its Dreadful Glare and makes one attack with its rotting fist.' },
            { name: 'Rotting Fist', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can\'t regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target\'s hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.' },
            { name: 'Dreadful Glare', description: 'The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy\'s next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours.' }], LegendaryActions: [
                { name: 'Attack', description: 'The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare.' },
                { name: 'Blinding Dust', description: 'Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature\'s next turn.' },
                { name: 'Blasphemous Word (Costs 2 Actions)', description: 'The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord\'s next turn.' },
                { name: 'Channel Negative Energy (Costs 2 Actions)', description: 'The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can\'t regain hit points until the end of the mummy lord\'s next turn.' },
                { name: 'Whirlwind of Sand (Costs 2 Actions)', description: 'The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can\'t be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession.' }]
    },
    {
        Name: 'Nalfeshnee', AC: 18, HP: 184, CR: 13, Speed: '20 ft., fly 30 ft.', Type: 'fiend', Str: 21, Dex: 10, Con: 22, Int: 19, Wis: 12, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The nalfeshnee uses Horror Nimbus if it can.  It then makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) slashing damage.' },
            { name: 'Horror Nimbus (Recharge 5-6)', description: 'The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee\'s Horror Nimbus for the next 24 hours.' },
            { name: 'Teleport', description: 'The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.' },
            { name: 'Variant: Summon Demon (1/Day)', description: 'The demon chooses what to summon and attempts a magical summoning.\nA nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Night Hag', AC: 17, HP: 112, CR: 5, Speed: '30 ft.', Type: 'fiend', Str: 18, Dex: 15, Con: 16, Int: 16, Wis: 14, Cha: 16, Actions: [
            { name: 'Claws (Hag Form Only)', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.' },
            { name: 'Change Shape', description: 'The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn\'t transformed. She reverts to her true form if she dies.' },
            { name: 'Etherealness', description: 'The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession.' },
            { name: 'Nightmare Haunting (1/Day)', description: 'While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target\'s hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag\'s soul bag. The reduction to the target\'s hit point maximum lasts until removed by the greater restoration spell or similar magic.' }]
    },
    {
        Name: 'Nightmare', AC: 13, HP: 68, CR: 3, Speed: '60 ft., fly 90 ft.', Type: 'fiend', Str: 18, Dex: 15, Con: 16, Int: 10, Wis: 13, Cha: 15, Actions: [
            { name: 'Hooves', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage.' },
            { name: 'Ethereal Stride', description: 'The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa.' }]
    },
    {
        Name: 'Noble', AC: 15, HP: 9, CR: 0.125, Speed: '30 ft.', Type: 'humanoid', Str: 11, Dex: 12, Con: 11, Int: 12, Wis: 14, Cha: 16, Actions: [
            { name: 'Rapier', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage.' }]
    },
    {
        Name: 'Ochre Jelly', AC: 8, HP: 45, CR: 2, Speed: '10 ft., climb 10 ft.', Type: 'ooze', Str: 15, Dex: 6, Con: 14, Int: 2, Wis: 6, Cha: 1, Actions: [
            { name: 'Pseudopod', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage.' }]
    },
    {
        Name: 'Octopus', AC: 12, HP: 3, CR: 0, Speed: '5 ft., swim 30 ft.', Type: 'beast', Str: 4, Dex: 15, Con: 11, Int: 3, Wis: 10, Cha: 4, Actions: [
            { name: 'Tentacles', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can\'t use its tentacles on another target.' },
            { name: 'Ink Cloud (Recharges after a Short or Long Rest)', description: 'A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.' }]
    },
    {
        Name: 'Ogre', AC: 11, HP: 59, CR: 2, Speed: '40 ft.', Type: 'giant', Str: 19, Dex: 8, Con: 16, Int: 5, Wis: 7, Cha: 7, Actions: [
            { name: 'Greatclub', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.' },
            { name: 'Javelin', description: 'Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) piercing damage.' }]
    },
    {
        Name: 'Ogre Zombie', AC: 8, HP: 85, CR: 2, Speed: '30 ft.', Type: 'undead', Str: 19, Dex: 6, Con: 18, Int: 3, Wis: 6, Cha: 5, Actions: [
            { name: 'Morningstar', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.' }]
    },
    {
        Name: 'Oni', AC: 16, HP: 110, CR: 7, Speed: '30 ft., fly 30 ft.', Type: 'giant', Str: 19, Dex: 11, Con: 16, Int: 14, Wis: 12, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The oni makes two attacks, either with its claws or its glaive.' },
            { name: 'Claw (Oni Form Only)', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage.' },
            { name: 'Glaive', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form.' },
            { name: 'Change Shape', description: 'The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size.' }]
    },
    {
        Name: 'Orc', AC: 13, HP: 15, CR: 0.5, Speed: '30 ft.', Type: 'humanoid', Str: 16, Dex: 12, Con: 16, Int: 7, Wis: 11, Cha: 10, Actions: [
            { name: 'Greataxe', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.' },
            { name: 'Javelin', description: 'Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage.' }]
    },
    {
        Name: 'Otyugh', AC: 14, HP: 114, CR: 5, Speed: '30 ft.', Type: 'aberration', Str: 16, Dex: 11, Con: 19, Int: 6, Wis: 13, Cha: 6, Actions: [
            { name: 'Multiattack', description: 'The otyugh makes three attacks: one with its bite and two with its tentacles.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target\'s hit point maximum lasts until the disease is cured.' },
            { name: 'Tentacle', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target.' },
            { name: 'Tentacle Slam', description: 'The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh\'s next turn. On a successful save, the target takes half the bludgeoning damage and isn\'t stunned.' }]
    },
    {
        Name: 'Owl', AC: 11, HP: 1, CR: 0, Speed: '5 ft., fly 60 ft.', Type: 'beast', Str: 3, Dex: 13, Con: 8, Int: 2, Wis: 12, Cha: 7, Actions: [
            { name: 'Talons', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage.' }]
    },
    {
        Name: 'Owlbear', AC: 13, HP: 59, CR: 3, Speed: '40 ft.', Type: 'monstrosity', Str: 20, Dex: 12, Con: 17, Int: 3, Wis: 12, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The owlbear makes two attacks: one with its beak and one with its claws.' },
            { name: 'Beak', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.' }]
    },
    {
        Name: 'Panther', AC: 12, HP: 13, CR: 0.25, Speed: '50 ft., climb 40 ft.', Type: 'beast', Str: 14, Dex: 15, Con: 10, Int: 3, Wis: 14, Cha: 7, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.' }]
    },
    {
        Name: 'Pegasus', AC: 12, HP: 59, CR: 2, Speed: '60 ft., fly 90 ft.', Type: 'celestial', Str: 18, Dex: 15, Con: 16, Int: 10, Wis: 15, Cha: 13, Actions: [
            { name: 'Hooves', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.' }]
    },
    {
        Name: 'Phase Spider', AC: 13, HP: 32, CR: 3, Speed: '30 ft., climb 30 ft.', Type: 'monstrosity', Str: 15, Dex: 15, Con: 12, Int: 6, Wis: 10, Cha: 6, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.' }]
    },
    {
        Name: 'Pit Fiend', AC: 19, HP: 300, CR: 20, Speed: '30 ft., fly 60 ft.', Type: 'fiend', Str: 26, Dex: 14, Con: 24, Int: 22, Wis: 18, Cha: 24, Actions: [
            { name: 'Multiattack', description: 'The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can\'t regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +14 to hit, reach 10 ft. , one target. Hit: 17 (2d8 + 8) slashing damage.' },
            { name: 'Mace', description: 'Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 24 (3d1O + 8) bludgeoning damage.' }]
    },
    {
        Name: 'Planetar', AC: 19, HP: 200, CR: 16, Speed: '40 ft., fly 120 ft.', Type: 'celestial', Str: 24, Dex: 20, Con: 24, Int: 19, Wis: 22, Cha: 25, Actions: [
            { name: 'Multiattack', description: 'The planetar makes two melee attacks.' },
            { name: 'Greatsword', description: 'Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage.' },
            { name: 'Healing Touch (4/Day)', description: 'The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness.' }]
    },
    {
        Name: 'Plesiosaurus', AC: 13, HP: 68, CR: 2, Speed: '20 ft., swim 40 ft.', Type: 'beast', Str: 18, Dex: 15, Con: 16, Int: 2, Wis: 12, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage.' }]
    },
    {
        Name: 'Poisonous Snake', AC: 13, HP: 2, CR: 0.125, Speed: '30 ft., swim 30 ft.', Type: 'beast', Str: 2, Dex: 16, Con: 11, Int: 1, Wis: 10, Cha: 3, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Polar Bear', AC: 12, HP: 42, CR: 2, Speed: '40 ft., swim 30 ft.', Type: 'beast', Str: 20, Dex: 10, Con: 16, Int: 2, Wis: 13, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The bear makes two attacks: one with its bite and one with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.' }]
    },
    {
        Name: 'Pony', AC: 10, HP: 11, CR: 0.125, Speed: '40 ft.', Type: 'beast', Str: 15, Dex: 10, Con: 13, Int: 2, Wis: 11, Cha: 7, Actions: [
            { name: 'Hooves', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.' }]
    },
    {
        Name: 'Priest', AC: 13, HP: 27, CR: 2, Speed: '25 ft.', Type: 'humanoid', Str: 10, Dex: 10, Con: 12, Int: 13, Wis: 16, Cha: 13, Actions: [
            { name: 'Mace', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage.' }]
    },
    {
        Name: 'Pseudodragon', AC: 13, HP: 7, CR: 0.25, Speed: '15 ft., fly 60 ft.', Type: 'dragon', Str: 6, Dex: 15, Con: 13, Int: 10, Wis: 12, Cha: 10, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.' },
            { name: 'Sting', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.' }]
    },
    {
        Name: 'Purple Worm', AC: 18, HP: 247, CR: 15, Speed: '50 ft., burrow 30 ft.', Type: 'monstrosity', Str: 28, Dex: 7, Con: 22, Int: 1, Wis: 8, Cha: 4, Actions: [
            { name: 'Multiattack', description: 'The worm makes two attacks: one with its bite and one with its stinger.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm\'s turns.\nIf the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone.' },
            { name: 'Tail Stinger', description: 'Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Quasit', AC: 13, HP: 7, CR: 1, Speed: '40 ft.', Type: 'fiend', Str: 5, Dex: 17, Con: 10, Int: 7, Wis: 10, Cha: 10, Actions: [
            { name: 'Claw (Bite in Beast Form)', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft ., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' },
            { name: 'Scare (1/day)', description: 'One creature of the quasit\'s choice within 20 ft. of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.' },
            { name: 'Invisibility', description: 'The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it.' }]
    },
    {
        Name: 'Quipper', AC: 13, HP: 1, CR: 0, Speed: 'swim 40 ft.', Type: 'beast', Str: 2, Dex: 16, Con: 9, Int: 1, Wis: 7, Cha: 2, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage.' }]
    },
    {
        Name: 'Rakshasa', AC: 16, HP: 110, CR: 13, Speed: '40 ft.', Type: 'fiend', Str: 14, Dex: 17, Con: 18, Int: 13, Wis: 16, Cha: 20, Actions: [
            { name: 'Multiattack', description: 'The rakshasa makes two claw attacks' },
            { name: 'Claw', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target\'s thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic.' }]
    },
    {
        Name: 'Rat', AC: 10, HP: 1, CR: 0, Speed: '20 ft.', Type: 'beast', Str: 2, Dex: 11, Con: 9, Int: 2, Wis: 10, Cha: 4, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.' }]
    },
    {
        Name: 'Raven', AC: 12, HP: 1, CR: 0, Speed: '10 ft., fly 50 ft.', Type: 'beast', Str: 2, Dex: 14, Con: 8, Int: 2, Wis: 12, Cha: 6, Actions: [
            { name: 'Beak', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage.' }]
    },
    {
        Name: 'Red Dragon Wyrmling', AC: 17, HP: 75, CR: 4, Speed: '30 ft., climb 30 ft., fly 60 ft.', Type: 'dragon', Str: 19, Dex: 10, Con: 17, Int: 12, Wis: 11, Cha: 15, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage.' },
            { name: 'Fire Breath (Recharge 5-6)', description: 'The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC l3 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Reef Shark', AC: 12, HP: 22, CR: 0.5, Speed: 'swim 40 ft.', Type: 'beast', Str: 14, Dex: 13, Con: 13, Int: 1, Wis: 10, Cha: 4, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.' }]
    },
    {
        Name: 'Remorhaz', AC: 17, HP: 195, CR: 11, Speed: '30 ft., burrow 20 ft.', Type: 'monstrosity', Str: 24, Dex: 13, Con: 21, Int: 4, Wis: 10, Cha: 5, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can\'t bite another target.' },
            { name: 'Swallow', description: 'The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite\'s damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz\'s turns.\nIf the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.' }]
    },
    {
        Name: 'Rhinoceros', AC: 11, HP: 45, CR: 2, Speed: '40 ft.', Type: 'beast', Str: 21, Dex: 8, Con: 15, Int: 2, Wis: 12, Cha: 6, Actions: [
            { name: 'Gore', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.' }]
    },
    {
        Name: 'Riding Horse', AC: 10, HP: 13, CR: 0.25, Speed: '60 ft.', Type: 'beast', Str: 16, Dex: 10, Con: 12, Int: 2, Wis: 11, Cha: 7, Actions: [
            { name: 'Hooves', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.' }]
    },
    {
        Name: 'Roc', AC: 15, HP: 248, CR: 11, Speed: '20 ft., fly 120 ft.', Type: 'monstrosity', Str: 28, Dex: 10, Con: 20, Int: 3, Wis: 10, Cha: 9, Actions: [
            { name: 'Multiattack', description: 'The roc makes two attacks: one with its beak and one with its talons.' },
            { name: 'Beak', description: 'Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8 + 9) piercing damage.' },
            { name: 'Talons', description: 'Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can\'t use its talons on another target.' }]
    },
    {
        Name: 'Roper', AC: 20, HP: 93, CR: 5, Speed: '10 ft., climb 10 ft.', Type: 'monstrosity', Str: 18, Dex: 8, Con: 17, Int: 7, Wis: 16, Cha: 6, Actions: [
            { name: 'Multiattack', description: 'The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) piercing damage.' },
            { name: 'Tendril', description: 'Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can\'t use the same tendril on another target.' },
            { name: 'Reel', description: 'The roper pulls each creature grappled by it up to 25 ft. straight toward it.' }]
    },
    {
        Name: 'Rug of Smothering', AC: 12, HP: 33, CR: 2, Speed: '10 ft.', Type: 'construct', Str: 17, Dex: 14, Con: 10, Int: 1, Wis: 3, Cha: 1, Actions: [
            { name: 'Smother', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can\'t smother another target. In addition, at the start of each of the target\'s turns, the target takes 10 (2d6 + 3) bludgeoning damage.' }]
    },
    {
        Name: 'Rust Monster', AC: 14, HP: 27, CR: 0.5, Speed: '40 ft.', Type: 'monstrosity', Str: 13, Dex: 12, Con: 13, Int: 2, Wis: 13, Cha: 6, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage.' },
            { name: 'Antennae', description: 'The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn\'t being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster\'s touch.\nIf the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait.' }]
    },
    {
        Name: 'Saber-Toothed Tiger', AC: 12, HP: 52, CR: 2, Speed: '40 ft.', Type: 'beast', Str: 18, Dex: 14, Con: 15, Int: 3, Wis: 12, Cha: 8, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.' }]
    },
    {
        Name: 'Sahuagin', AC: 12, HP: 22, CR: 0.5, Speed: '30 ft., swim 40 ft.', Type: 'humanoid', Str: 13, Dex: 11, Con: 12, Int: 12, Wis: 13, Cha: 9, Actions: [
            { name: 'Multiattack', description: 'The sahuagin makes two melee attacks: one with its bite and one with its claws or spear.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage.' },
            { name: 'Spear', description: 'Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.' }]
    },
    {
        Name: 'Salamander', AC: 15, HP: 90, CR: 5, Speed: '30 ft.', Type: 'elemental', Str: 18, Dex: 14, Con: 15, Int: 11, Wis: 10, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The salamander makes two attacks: one with its spear and one with its tail.' },
            { name: 'Spear', description: 'Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20 ft./60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can\'t make tail attacks against other targets.' }]
    },
    {
        Name: 'Satyr', AC: 14, HP: 31, CR: 0.5, Speed: '40 ft.', Type: 'fey', Str: 12, Dex: 16, Con: 11, Int: 12, Wis: 10, Cha: 14, Actions: [
            { name: 'Ram', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) bludgeoning damage.' },
            { name: 'Shortsword', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1 d6 + 3) piercing damage.' },
            { name: 'Shortbow', description: 'Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage.' },
            { name: 'Variant: Panpipes', description: 'Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake.' }]
    },
    {
        Name: 'Scorpion', AC: 11, HP: 1, CR: 0, Speed: '10 ft.', Type: 'beast', Str: 2, Dex: 11, Con: 8, Int: 1, Wis: 8, Cha: 2, Actions: [
            { name: 'Sting', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Scout', AC: 13, HP: 16, CR: 0.5, Speed: '30 ft.', Type: 'humanoid', Str: 11, Dex: 14, Con: 12, Int: 11, Wis: 13, Cha: 11, Actions: [
            { name: 'Multiattack', description: 'The scout makes two melee attacks or two ranged attacks.' },
            { name: 'Shortsword', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Longbow', description: 'Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.' }]
    },
    {
        Name: 'Sea Hag', AC: 14, HP: 52, CR: 2, Speed: '30 ft., swim 40 ft.', Type: 'fey', Str: 16, Dex: 13, Con: 16, Int: 12, Wis: 12, Cha: 13, Actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.' },
            { name: 'Death Glare', description: 'The hag targets one frightened creature she can see within 30 ft. of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points.' },
            { name: 'Illusory Appearance', description: 'The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised.' }]
    },
    { Name: 'Sea Horse', AC: 11, HP: 1, CR: 0, Speed: 'swim 20 ft.', Type: 'beast', Str: 1, Dex: 12, Con: 8, Int: 1, Wis: 10, Cha: 2 },
    {
        Name: 'Shadow', AC: 12, HP: 16, CR: 0.5, Speed: '40 ft.', Type: 'undead', Str: 6, Dex: 14, Con: 13, Int: 6, Wis: 10, Cha: 8, Actions: [
            { name: 'Strength Drain', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) necrotic damage, and the target\'s Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.\nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later.' }]
    },
    {
        Name: 'Shambling Mound', AC: 15, HP: 136, CR: 5, Speed: '20 ft., swim 20 ft.', Type: 'plant', Str: 18, Dex: 8, Con: 16, Int: 5, Wis: 10, Cha: 5, Actions: [
            { name: 'Multiattack', description: 'The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.' },
            { name: 'Engulf', description: 'The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound\'s turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.' }]
    },
    {
        Name: 'Shield Guardian', AC: 17, HP: 142, CR: 7, Speed: '30 ft.', Type: 'construct', Str: 18, Dex: 8, Con: 18, Int: 7, Wis: 10, Cha: 3, Actions: [
            { name: 'Multiattack', description: 'The guardian makes two fist attacks.' },
            { name: 'Fist', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.' }]
    },
    {
        Name: 'Shrieker', AC: 5, HP: 13, CR: 0, Speed: '0 ft.', Type: 'plant', Str: 1, Dex: 1, Con: 10, Int: 1, Wis: 3, Cha: 1, Actions: [
            { name: 'Shriek', description: 'When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker\'s turns afterward' }]
    },
    {
        Name: 'Silver Dragon Wyrmling', AC: 17, HP: 45, CR: 2, Speed: '30 ft., fly 60 ft.', Type: 'dragon', Str: 19, Dex: 10, Con: 17, Int: 12, Wis: 11, Cha: 15, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }]
    },
    {
        Name: 'Skeleton', AC: 13, HP: 13, CR: 0.25, Speed: '30 ft.', Type: 'undead', Str: 10, Dex: 14, Con: 15, Int: 6, Wis: 8, Cha: 5, Actions: [
            { name: 'Shortsword', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Shortbow', description: 'Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' }]
    },
    {
        Name: 'Solar', AC: 21, HP: 243, CR: 21, Speed: '50 ft., fly 150 ft.', Type: 'celestial', Str: 26, Dex: 22, Con: 26, Int: 25, Wis: 25, Cha: 30, Actions: [
            { name: 'Multiattack', description: 'The solar makes two greatsword attacks.' },
            { name: 'Greatsword', description: 'Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.' },
            { name: 'Slaying Longbow', description: 'Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.' },
            { name: 'Flying Sword', description: 'The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar\'s hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.' },
            { name: 'Healing Touch (4/Day)', description: 'The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness.' }], LegendaryActions: [
                { name: 'Teleport', description: 'The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see.' },
                { name: 'Searing Burst (Costs 2 Actions)', description: 'The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one.' },
                { name: 'Blinding Gaze (Costs 3 Actions)', description: 'The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.' }]
    },
    {
        Name: 'Specter', AC: 12, HP: 22, CR: 1, Speed: '0 ft., fly 50 ft. (hover)', Type: 'undead', Str: 1, Dex: 14, Con: 11, Int: 10, Wis: 10, Cha: 11, Actions: [
            { name: 'Life Drain', description: 'Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.' }]
    },
    {
        Name: 'Spider', AC: 12, HP: 1, CR: 0, Speed: '20 ft., climb 20 ft.', Type: 'beast', Str: 2, Dex: 14, Con: 8, Int: 1, Wis: 10, Cha: 2, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.' }]
    },
    {
        Name: 'Spirit Naga', AC: 15, HP: 75, CR: 8, Speed: '40 ft.', Type: 'monstrosity', Str: 18, Dex: 17, Con: 14, Int: 16, Wis: 15, Cha: 16, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Sprite', AC: 15, HP: 2, CR: 0.25, Speed: '10 ft., fly 40 ft.', Type: 'fey', Str: 3, Dex: 18, Con: 10, Int: 14, Wis: 13, Cha: 11, Actions: [
            { name: 'Longsword', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage.' },
            { name: 'Shortbow', description: 'Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake.' },
            { name: 'Heart Sight', description: 'The sprite touches a creature and magically knows the creature\'s current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature\'s alignment. Celestials, fiends, and undead automatically fail the saving throw.' },
            { name: 'Invisibility', description: 'The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it.' }]
    },
    {
        Name: 'Spy', AC: 12, HP: 27, CR: 1, Speed: '30 ft.', Type: 'humanoid', Str: 10, Dex: 15, Con: 10, Int: 12, Wis: 14, Cha: 16, Actions: [
            { name: 'Multiattack', description: 'The spy makes two melee attacks.' },
            { name: 'Shortsword', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Hand Crossbow', description: 'Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' }]
    },
    {
        Name: 'Steam Mephit', AC: 10, HP: 21, CR: 0.25, Speed: '30 ft., fly 30 ft.', Type: 'elemental', Str: 5, Dex: 11, Con: 10, Int: 11, Wis: 10, Cha: 12, Actions: [
            { name: 'Claws', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) slashing damage plus 2 (1d4) fire damage.' },
            { name: 'Steam Breath (Recharge 6)', description: 'The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one.' },
            { name: 'Variant: Summon Mephits (1/Day)', description: 'The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Stirge', AC: 14, HP: 2, CR: 0.125, Speed: '10 ft., fly 40 ft.', Type: 'beast', Str: 4, Dex: 16, Con: 11, Int: 2, Wis: 8, Cha: 6, Actions: [
            { name: 'Blood Drain', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn\'t attack. Instead, at the start of each of the stirge\'s turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.' }]
    },
    {
        Name: 'Stone Giant', AC: 17, HP: 126, CR: 7, Speed: '40 ft.', Type: 'giant', Str: 23, Dex: 15, Con: 20, Int: 10, Wis: 12, Cha: 9, Actions: [
            { name: 'Multiattack', description: 'The giant makes two greatclub attacks.' },
            { name: 'Greatclub', description: 'Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.' }]
    },
    {
        Name: 'Stone Golem', AC: 17, HP: 178, CR: 10, Speed: '30 ft.', Type: 'construct', Str: 22, Dex: 9, Con: 20, Int: 3, Wis: 11, Cha: 1, Actions: [
            { name: 'Multiattack', description: 'The golem makes two slam attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.' },
            { name: 'Slow (Recharge 5-6)', description: 'The golem targets one or more creatures it can see within 10 ft. of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can\'t use reactions, its speed is halved, and it can\'t make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }]
    },
    {
        Name: 'Storm Giant', AC: 16, HP: 230, CR: 13, Speed: '50 ft., swim 50 ft.', Type: 'giant', Str: 29, Dex: 14, Con: 20, Int: 16, Wis: 18, Cha: 18, Actions: [
            { name: 'Multiattack', description: 'The giant makes two greatsword attacks.' },
            { name: 'Greatsword', description: 'Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6 + 9) slashing damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12 + 9) bludgeoning damage.' },
            { name: 'Lightning Strike (Recharge 5-6)', description: 'The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Succubus/Incubus', AC: 15, HP: 66, CR: 4, Speed: '30 ft., fly 60 ft.', Type: 'fiend', Str: 8, Dex: 17, Con: 13, Int: 15, Wis: 12, Cha: 20, Actions: [
            { name: 'Claw (Fiend Form Only)', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.' },
            { name: 'Charm', description: 'One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend\'s verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend\'s Charm for the next 24 hours.\nThe fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends.' },
            { name: 'Draining Kiss', description: 'The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target\'s hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.' },
            { name: 'Etherealness', description: 'The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa.' }]
    },
    {
        Name: 'Swarm of Bats', AC: 12, HP: 22, CR: 0.25, Speed: '0 ft., fly 30 ft.', Type: 'swarm of Tiny beasts', Str: 5, Dex: 15, Con: 10, Int: 2, Wis: 12, Cha: 4, Actions: [
            { name: 'Bites', description: 'Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm\'s space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer.' }]
    },
    {
        Name: 'Swarm of Beetles', AC: 12, HP: 22, CR: 0.5, Speed: '20 ft., burrow 5 ft., climb 20 ft.', Type: 'swarm of Tiny beasts', Str: 3, Dex: 13, Con: 10, Int: 1, Wis: 7, Cha: 1, Actions: [
            { name: 'Bites', description: 'Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.' }]
    },
    {
        Name: 'Swarm of Centipedes', AC: 12, HP: 22, CR: 0.5, Speed: '20 ft., climb 20 ft.', Type: 'swarm of Tiny beasts', Str: 3, Dex: 13, Con: 10, Int: 1, Wis: 7, Cha: 1, Actions: [
            { name: 'Bites', description: 'Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.\nA creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way.' }]
    },
    {
        Name: 'Swarm of Insects', AC: 12, HP: 22, CR: 0.5, Speed: '20 ft., climb 20 ft.', Type: 'swarm of Tiny beasts', Str: 3, Dex: 13, Con: 10, Int: 1, Wis: 7, Cha: 1, Actions: [
            { name: 'Bites', description: 'Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.' }]
    },
    {
        Name: 'Swarm of Poisonous Snakes', AC: 14, HP: 36, CR: 2, Speed: '30 ft., swim 30 ft.', Type: 'swarm of Tiny beasts', Str: 8, Dex: 18, Con: 11, Int: 1, Wis: 10, Cha: 3, Actions: [
            { name: 'Bites', description: 'Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm\'s space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Swarm of Quippers', AC: 13, HP: 28, CR: 1, Speed: '0 ft., swim 40 ft.', Type: 'swarm of Tiny beasts', Str: 13, Dex: 16, Con: 9, Int: 1, Wis: 7, Cha: 2, Actions: [
            { name: 'Bites', description: 'Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm\'s space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.' }]
    },
    {
        Name: 'Swarm of Rats', AC: 10, HP: 24, CR: 0.25, Speed: '30 ft.', Type: 'swarm of Tiny beasts', Str: 9, Dex: 11, Con: 9, Int: 2, Wis: 10, Cha: 3, Actions: [
            { name: 'Bites', description: 'Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.' }]
    },
    {
        Name: 'Swarm of Ravens', AC: 12, HP: 24, CR: 0.25, Speed: '10 ft., fly 50 ft.', Type: 'swarm of Tiny beasts', Str: 6, Dex: 14, Con: 8, Int: 3, Wis: 12, Cha: 6, Actions: [
            { name: 'Beaks', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm\'s space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.' }]
    },
    {
        Name: 'Swarm of Spiders', AC: 12, HP: 22, CR: 0.5, Speed: '20 ft., climb 20 ft.', Type: 'swarm of Tiny beasts', Str: 3, Dex: 13, Con: 10, Int: 1, Wis: 7, Cha: 1, Actions: [
            { name: 'Bites', description: 'Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.' }]
    },
    {
        Name: 'Swarm of Wasps', AC: 12, HP: 22, CR: 0.5, Speed: '5 ft., fly 30 ft.', Type: 'swarm of Tiny beasts', Str: 3, Dex: 13, Con: 10, Int: 1, Wis: 7, Cha: 1, Actions: [
            { name: 'Bites', description: 'Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm\'s space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.' }]
    },
    {
        Name: 'Tarrasque', AC: 25, HP: 676, CR: 30, Speed: '40 ft.', Type: 'monstrosity', Str: 30, Dex: 11, Con: 30, Int: 3, Wis: 11, Cha: 11, Actions: [
            { name: 'Multiattack', description: 'The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tai l. It can use its Swallow instead of its bite.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can\'t bite another target.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) slashing damage.' },
            { name: 'Horns', description: 'Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) piercing damage.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.' },
            { name: 'Frightful Presence', description: 'Each creature of the tarrasque\'s choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature\'s saving throw is successful or the effect ends for it, the creature is immune to the tarrasque\'s Frightful Presence for the next 24 hours.' },
            { name: 'Swallow', description: 'The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite\'s damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque\'s turns.\nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.' }], LegendaryActions: [
                { name: 'Attack', description: 'The tarrasque makes one claw attack or tail attack.' },
                { name: 'Move', description: 'The tarrasque moves up to half its speed.' },
                { name: 'Chomp (Costs 2 Actions)', description: 'The tarrasque makes one bite attack or uses its Swallow.' }]
    },
    {
        Name: 'Thug', AC: 11, HP: 32, CR: 0.5, Speed: '30 ft.', Type: 'humanoid', Str: 15, Dex: 11, Con: 14, Int: 10, Wis: 10, Cha: 11, Actions: [
            { name: 'Multiattack', description: 'The thug makes two melee attacks.' },
            { name: 'Mace', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage.' },
            { name: 'Heavy Crossbow', description: 'Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.' }]
    },
    {
        Name: 'Tiger', AC: 12, HP: 37, CR: 1, Speed: '40 ft.', Type: 'beast', Str: 17, Dex: 15, Con: 14, Int: 3, Wis: 12, Cha: 8, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.' }]
    },
    {
        Name: 'Treant', AC: 16, HP: 138, CR: 9, Speed: '30 ft.', Type: 'plant', Str: 23, Dex: 8, Con: 21, Int: 12, Wis: 16, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The treant makes two slam attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) bludgeoning damage.' },
            { name: 'Rock', description: 'Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.' },
            { name: 'Animate Trees (1/Day)', description: 'The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can\'t speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible.' }]
    },
    {
        Name: 'Tribal Warrior', AC: 12, HP: 11, CR: 0.125, Speed: '30 ft.', Type: 'humanoid', Str: 13, Dex: 11, Con: 12, Int: 8, Wis: 11, Cha: 8, Actions: [
            { name: 'Spear', description: 'Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.' }]
    },
    {
        Name: 'Triceratops', AC: 13, HP: 95, CR: 5, Speed: '50 ft.', Type: 'beast', Str: 22, Dex: 9, Con: 17, Int: 2, Wis: 11, Cha: 5, Actions: [
            { name: 'Gore', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage.' },
            { name: 'Stomp', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage' }]
    },
    {
        Name: 'Troll', AC: 15, HP: 84, CR: 5, Speed: '30 ft.', Type: 'giant', Str: 18, Dex: 13, Con: 20, Int: 7, Wis: 9, Cha: 7, Actions: [
            { name: 'Multiattack', description: 'The troll makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' }]
    },
    {
        Name: 'Tyrannosaurus Rex', AC: 13, HP: 136, CR: 8, Speed: '50 ft.', Type: 'beast', Str: 25, Dex: 10, Con: 19, Int: 2, Wis: 12, Cha: 9, Actions: [
            { name: 'Multiattack', description: 'The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can\'t make both attacks against the same target.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can\'t bite another target.' },
            { name: 'Tail', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.' }]
    },
    {
        Name: 'Unicorn', AC: 12, HP: 67, CR: 5, Speed: '50 ft.', Type: 'celestial', Str: 18, Dex: 14, Con: 15, Int: 11, Wis: 17, Cha: 16, Actions: [
            { name: 'Multiattack', description: 'The unicorn makes two attacks: one with its hooves and one with its horn.' },
            { name: 'Hooves', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft ., one target. Hit: 11 (2d6 + 4) bludgeoning damage.' },
            { name: 'Horn', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft ., one target. Hit: 8 (1d8 + 4) piercing damage.' },
            { name: 'Healing Touch (3/Day)', description: 'The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target.' },
            { name: 'Teleport (1/Day)', description: 'The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away.' }], LegendaryActions: [
                { name: 'Hooves', description: 'The unicorn makes one attack with its hooves.' },
                { name: 'Shimmering Shield (Costs 2 Actions)', description: 'The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 ft. of it. The target gains a +2 bonus to AC until the end of the unicorn\'s next turn.' },
                { name: 'Heal Self (Costs 3 Actions)', description: 'The unicorn magically regains 11 (2d8 + 2) hit points.' }]
    },
    {
        Name: 'Vampire', AC: 16, HP: 144, CR: 13, Speed: '30 ft.', Type: 'undead', Str: 18, Dex: 18, Con: 18, Int: 17, Wis: 15, Cha: 18, Actions: [
            { name: 'Multiattack (Vampire Form Only)', description: 'The vampire makes two attacks, only one of which can be a bite attack.' },
            { name: 'Unarmed Strike (Vampire Form Only)', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).' },
            { name: 'Bite (Bat or Vampire Form Only)', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target\'s hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire\'s control.' },
            { name: 'Charm', description: 'The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn\'t under the vampire\'s control, it takes the vampire\'s requests or actions in the most favorable way it can, and it is a willing target for the vampire\'s bit attack.\nEach time the vampire or the vampire\'s companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.' },
            { name: 'Children of the Night (1/Day)', description: 'The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn\'t up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action.' }], LegendaryActions: [
                { name: 'Move', description: 'The vampire moves up to its speed without provoking opportunity attacks.' },
                { name: 'Unarmed Strike', description: 'The vampire makes one unarmed strike.' },
                { name: 'Bite (Costs 2 Actions)', description: 'The vampire makes one bite attack.' }]
    },
    {
        Name: 'Vampire Spawn', AC: 15, HP: 82, CR: 5, Speed: '30 ft.', Type: 'undead', Str: 16, Dex: 16, Con: 16, Int: 11, Wis: 10, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The vampire makes two attacks, only one of which can be a bite attack.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target\'s hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13).' }]
    },
    {
        Name: 'Veteran', AC: 17, HP: 58, CR: 3, Speed: '30 ft.', Type: 'humanoid', Str: 16, Dex: 13, Con: 14, Int: 10, Wis: 11, Cha: 10, Actions: [
            { name: 'Multiattack', description: 'The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.' },
            { name: 'Longsword', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.' },
            { name: 'Shortsword', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.' },
            { name: 'Heavy Crossbow', description: 'Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage.' }]
    },
    {
        Name: 'Violet Fungus', AC: 5, HP: 18, CR: 0.25, Speed: '5 ft.', Type: 'plant', Str: 3, Dex: 1, Con: 10, Int: 1, Wis: 3, Cha: 1, Actions: [
            { name: 'Multiattack', description: 'The fungus makes 1d4 Rotting Touch attacks.' },
            { name: 'Rotting Touch', description: 'Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage.' }]
    },
    {
        Name: 'Vrock', AC: 15, HP: 104, CR: 6, Speed: '40 ft., fly 60 ft.', Type: 'fiend', Str: 17, Dex: 15, Con: 18, Int: 8, Wis: 13, Cha: 8, Actions: [
            { name: 'Multiattack', description: 'The vrock makes two attacks: one with its beak and one with its talons.' },
            { name: 'Beak', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.' },
            { name: 'Talons', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage.' },
            { name: 'Spores (Recharge 6)', description: 'A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.' },
            { name: 'Stunning Screech (1/Day)', description: 'The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn\'t a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock\'s next turn .' },
            { name: 'Variant: Summon Demon (1/Day)', description: 'The demon chooses what to summon and attempts a magical summoning.\nA vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can\'t summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.' }]
    },
    {
        Name: 'Vulture', AC: 10, HP: 5, CR: 0, Speed: '10 ft., fly 50 ft.', Type: 'beast', Str: 7, Dex: 10, Con: 13, Int: 2, Wis: 12, Cha: 4, Actions: [
            { name: 'Beak', description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.' }]
    },
    {
        Name: 'Warhorse', AC: 11, HP: 19, CR: 0.5, Speed: '60 ft.', Type: 'beast', Str: 18, Dex: 12, Con: 13, Int: 2, Wis: 12, Cha: 7, Actions: [
            { name: 'Hooves', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.' }]
    },
    {
        Name: 'Warhorse Skeleton', AC: 13, HP: 22, CR: 0.5, Speed: '60 ft.', Type: 'undead', Str: 18, Dex: 12, Con: 15, Int: 2, Wis: 8, Cha: 5, Actions: [
            { name: 'Hooves', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.' }]
    },
    {
        Name: 'Water Elemental', AC: 14, HP: 114, CR: 5, Speed: '30 ft., swim 90 ft.', Type: 'elemental', Str: 18, Dex: 14, Con: 18, Int: 5, Wis: 10, Cha: 8, Actions: [
            { name: 'Multiattack', description: 'The elemental makes two slam attacks.' },
            { name: 'Slam', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.' },
            { name: 'Whelm (Recharge 4-6)', description: 'Each creature in the elemental\'s space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental\'s space.\nThe elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental\'s turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding.' }]
    },
    {
        Name: 'Weasel', AC: 13, HP: 1, CR: 0, Speed: '30 ft.', Type: 'beast', Str: 3, Dex: 16, Con: 8, Int: 2, Wis: 12, Cha: 3, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.' }]
    },
    {
        Name: 'Werebear', AC: 10, HP: 135, CR: 5, Speed: '30 ft. (40 ft., climb 30 ft. in bear or hybrid form)', Type: 'humanoid', Str: 19, Dex: 10, Con: 17, Int: 11, Wis: 12, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid.' },
            { name: 'Bite (Bear or Hybrid Form Only)', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with were bear lycanthropy.' },
            { name: 'Claw (Bear or Hybrid Form Only)', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.' },
            { name: 'Greataxe (Humanoid or Hybrid Form Only)', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage.' }]
    },
    {
        Name: 'Wereboar', AC: 10, HP: 78, CR: 4, Speed: '30 ft. (40 ft. in boar form)', Type: 'humanoid', Str: 17, Dex: 10, Con: 15, Int: 10, Wis: 11, Cha: 8, Actions: [
            { name: 'Multiattack (Humanoid or Hybrid Form Only)', description: 'The wereboar makes two attacks, only one of which can be with its tusks.' },
            { name: 'Maul (Humanoid or Hybrid Form Only)', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.' },
            { name: 'Tusks (Boar or Hybrid Form Only)', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy.' }]
    },
    {
        Name: 'Wererat', AC: 12, HP: 33, CR: 2, Speed: '30 ft.', Type: 'humanoid', Str: 10, Dex: 15, Con: 12, Int: 11, Wis: 10, Cha: 8, Actions: [
            { name: 'Multiattack (Humanoid or Hybrid Form Only)', description: 'The wererat makes two attacks, only one of which can be a bite.' },
            { name: 'Bite (Rat or Hybrid Form Only).', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy.' },
            { name: 'Shortsword (Humanoid or Hybrid Form Only)', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' },
            { name: 'Hand Crossbow (Humanoid or Hybrid Form Only)', description: 'Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.' }]
    },
    {
        Name: 'Weretiger', AC: 12, HP: 120, CR: 4, Speed: '30 ft. (40 ft. in tiger form)', Type: 'humanoid', Str: 17, Dex: 15, Con: 16, Int: 10, Wis: 13, Cha: 11, Actions: [
            { name: 'Multiattack (Humanoid or Hybrid Form Only)', description: 'In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks.' },
            { name: 'Bite (Tiger or Hybrid Form Only)', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy.' },
            { name: 'Claw (Tiger or Hybrid Form Only)', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.' },
            { name: 'Scimitar (Humanoid or Hybrid Form Only)', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.' },
            { name: 'Longbow (Humanoid or Hybrid Form Only)', description: 'Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.' }]
    },
    {
        Name: 'Werewolf', AC: 11, HP: 58, CR: 3, Speed: '30 ft. (40 ft. in wolf form)', Type: 'humanoid', Str: 15, Dex: 13, Con: 14, Int: 10, Wis: 11, Cha: 10, Actions: [
            { name: 'Multiattack (Humanoid or Hybrid Form Only)', description: 'The werewolf makes two attacks: one with its bite and one with its claws or spear.' },
            { name: 'Bite (Wolf or Hybrid Form Only)', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy.' },
            { name: 'Claws (Hybrid Form Only)', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) slashing damage.' },
            { name: 'Spear (Humanoid Form Only)', description: 'Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.' }]
    },
    {
        Name: 'White Dragon Wyrmling', AC: 16, HP: 32, CR: 2, Speed: '30 ft., burrow 15 ft., fly 60 ft., swim 30 ft.', Type: 'dragon', Str: 14, Dex: 10, Con: 14, Int: 5, Wis: 10, Cha: 11, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage.' },
            { name: 'Cold Breath (Recharge 5-6)', description: 'The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Wight', AC: 14, HP: 45, CR: 3, Speed: '30 ft.', Type: 'undead', Str: 15, Dex: 14, Con: 16, Int: 10, Wis: 13, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.' },
            { name: 'Life Drain', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.\nA humanoid slain by this attack rises 24 hours later as a zombie under the wight\'s control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.' },
            { name: 'Longsword', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands.' },
            { name: 'Longbow', description: 'Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.' }]
    },
    {
        Name: 'Will-o\'-Wisp', AC: 19, HP: 22, CR: 2, Speed: '0 ft., fly 50 ft. (hover)', Type: 'undead', Str: 1, Dex: 28, Con: 10, Int: 13, Wis: 14, Cha: 11, Actions: [
            { name: 'Shock', description: 'Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning damage.' },
            { name: 'Invisibility', description: 'The will-o\'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell).' }]
    },
    {
        Name: 'Winter Wolf', AC: 13, HP: 75, CR: 3, Speed: '50 ft.', Type: 'monstrosity', Str: 18, Dex: 13, Con: 14, Int: 7, Wis: 12, Cha: 8, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.' },
            { name: 'Cold Breath (Recharge 5-6)', description: 'The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Wolf', AC: 13, HP: 11, CR: 0.25, Speed: '40 ft.', Type: 'beast', Str: 12, Dex: 15, Con: 12, Int: 3, Wis: 12, Cha: 6, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.' }]
    },
    {
        Name: 'Worg', AC: 13, HP: 26, CR: 0.5, Speed: '50 ft.', Type: 'monstrosity', Str: 16, Dex: 13, Con: 13, Int: 7, Wis: 11, Cha: 8, Actions: [
            { name: 'Bite', description: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.' }]
    },
    {
        Name: 'Wraith', AC: 13, HP: 67, CR: 5, Speed: '0 ft., fly 60 ft. (hover)', Type: 'undead', Str: 6, Dex: 16, Con: 16, Int: 12, Wis: 14, Cha: 15, Actions: [
            { name: 'Life Drain', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.' },
            { name: 'Create Specter', description: 'The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target\'s spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith\'s control. The wraith can have no more than seven specters under its control at one time.' }]
    },
    {
        Name: 'Wyvern', AC: 13, HP: 110, CR: 6, Speed: '20 ft., fly 80 ft.', Type: 'dragon', Str: 19, Dex: 10, Con: 16, Int: 5, Wis: 12, Cha: 6, Actions: [
            { name: 'Multiattack', description: 'The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.' },
            { name: 'Claws', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.' },
            { name: 'Stinger', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Xorn', AC: 19, HP: 73, CR: 5, Speed: '20 ft., burrow 20 ft.', Type: 'elemental', Str: 17, Dex: 10, Con: 22, Int: 11, Wis: 10, Cha: 11, Actions: [
            { name: 'Multiattack', description: 'The xorn makes three claw attacks and one bite attack.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.' }]
    },
    {
        Name: 'Young Black Dragon', AC: 18, HP: 127, CR: 7, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 19, Dex: 14, Con: 17, Int: 12, Wis: 11, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' },
            { name: 'Acid Breath (Recharge 5-6)', description: 'The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Young Blue Dragon', AC: 18, HP: 152, CR: 9, Speed: '40 ft., burrow 40 ft., fly 80 ft.', Type: 'dragon', Str: 21, Dex: 10, Con: 19, Int: 14, Wis: 13, Cha: 17, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.' },
            { name: 'Lightning Breath (Recharge 5-6)', description: 'The dragon exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Young Brass Dragon', AC: 17, HP: 110, CR: 6, Speed: '40 ft., burrow 20 ft., fly 80 ft.', Type: 'dragon', Str: 19, Dex: 10, Con: 17, Int: 12, Wis: 11, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.' }]
    },
    {
        Name: 'Young Bronze Dragon', AC: 18, HP: 142, CR: 8, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 21, Dex: 10, Con: 19, Int: 14, Wis: 13, Cha: 17, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon.' }]
    },
    {
        Name: 'Young Copper Dragon', AC: 17, HP: 119, CR: 7, Speed: '40 ft., climb 40 ft., fly 80 ft.', Type: 'dragon', Str: 19, Dex: 12, Con: 17, Int: 16, Wis: 13, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can\'t use reactions, its speed is halved, and it can\'t make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.' }]
    },
    {
        Name: 'Young Gold Dragon', AC: 18, HP: 178, CR: 10, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 23, Dex: 14, Con: 21, Int: 16, Wis: 13, Cha: 20, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }]
    },
    {
        Name: 'Young Green Dragon', AC: 18, HP: 136, CR: 8, Speed: '40 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 19, Dex: 12, Con: 17, Int: 16, Wis: 13, Cha: 15, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' },
            { name: 'Poison Breath (Recharge 5-6)', description: 'The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Young Red Dragon', AC: 18, HP: 178, CR: 10, Speed: '40 ft., climb 40 ft., fly 80 ft.', Type: 'dragon', Str: 23, Dex: 10, Con: 21, Int: 14, Wis: 11, Cha: 19, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.' },
            { name: 'Fire Breath (Recharge 5-6)', description: 'The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Young Silver Dragon', AC: 18, HP: 168, CR: 9, Speed: '40 ft., fly 80 ft.', Type: 'dragon', Str: 23, Dex: 10, Con: 21, Int: 14, Wis: 11, Cha: 19, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.' },
            { name: 'Breath Weapons (Recharge 5-6)', description: 'The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.' }]
    },
    {
        Name: 'Young White Dragon', AC: 17, HP: 133, CR: 6, Speed: '40 ft., burrow 20 ft., fly 80 ft., swim 40 ft.', Type: 'dragon', Str: 18, Dex: 10, Con: 18, Int: 6, Wis: 11, Cha: 12, Actions: [
            { name: 'Multiattack', description: 'The dragon makes three attacks: one with its bite and two with its claws.' },
            { name: 'Bite', description: 'Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage.' },
            { name: 'Claw', description: 'Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.' },
            { name: 'Cold Breath (Recharge 5-6)', description: 'The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.' }]
    },
    {
        Name: 'Zombie', AC: 8, HP: 22, CR: 0.25, Speed: '20 ft.', Type: 'undead', Str: 13, Dex: 6, Con: 16, Int: 3, Wis: 6, Cha: 5, Actions: [
            { name: 'Slam', description: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.' }]
    }];
