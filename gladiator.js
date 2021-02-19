export class Gladiator{
    weapon
    name
    constructor(name, weapon) {
        this.name = name
        if (weapon === "Spear" || weapon === "Club" || weapon === "Trident") {
            this.weapon = weapon
        } else {
            console.error(`${weapon} "You entered a wrong weapon!(Spear/Club/Trident)`)
        }


    }

    get name(){
        return this.name
    }

    get weapon(){
        return this.weapon
    }
}