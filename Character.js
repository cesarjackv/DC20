class Character {
    constructor(
        name, race, level, 
        actions, PD, MD ,CM, attributes, 
        language, skills, trade, feats
    ){
        this.name = name
        this.ancestry = race
        this.level = level

        this.ActionPoints = actions
        this.PhysicalDefense = PD
        this.MysticalDefense = MD
        this.attributes = attributes
        this.CombatMastery = CM
        CM = Math.floor(level/2)
        
        this.language = language
        this.skills = skills
        this.trade = trade
        this.feats = feats
    };
}

class Attributes extends Character {
    constructor(attributes, physical, mental, might, agility, intelligence, charisma, prime){
        super(attributes)
        attributes = [{might: might}, {agility: agility}, {intelligence: intelligence}, {charisma: charisma}]
        this.physical = physical
        this.mental = mental

        this.might = might
        this.agility = agility
        this.intelligence = intelligence
        this.charisma = charisma
        this.prime = prime

        physical = {might: might, agility: agility}
        mental = {intelligence: intelligence, charisma: charisma}
        let max = 0
        for(i = 0; i < attributes.length; i++){
            if(Object.values(attributes[i]) >= max){
                max = Object.values(attributes[i])
                prime = Object.keys(attributes[i])
            }
        }
    }
}

class Classes extends Character {
    constructor(classes, level, SP, MP){
        super(level)
        this.classes = classes
        this.StaminaPoints = SP
        this.ManaPoints = MP
    }
}

class Ancestry extends Character {
    constructor(race){
        super(race)

    }
}