export class Arena {
    name
    gladiators = []
    gladiator = {}
    MAX_LENGTH = 2

    constructor(name) {
        this.name = name
    }

    get name() {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    addGladiator(gladiatorName) {
        if (this.isLessThanTwoGladiators()) {
            this.gladiator = {
                name: gladiatorName.name,
                weapon: gladiatorName.weapon
            }
            this.gladiators.push(this.gladiator)
        } else {
            console.error(`you already have 2 gladiators! ${this.gladiators}`)
        }
    }

    isLessThanTwoGladiators() {
        return this.gladiators.length < this.MAX_LENGTH;
    }

    isTwoGladiators() {
        return this.gladiators.length === this.MAX_LENGTH
    }


    fight() {
        if (this.isTwoGladiators()) {
            alert(`${this.gladiators[0].name} fights with ${this.gladiators[0].weapon} 
            against ${this.gladiators[1].name} who fights with ${this.gladiators[1].weapon}`)
            if (this.gladiators[0].weapon === this.gladiators[1].weapon) {
                alert("same weapon, they are both eliminated.")
                this.gladiators = []
            }
            switch (this.gladiators[0].weapon) {
                case "Trident":
                    if (this.gladiators[1].weapon === "Spear") {
                        alert(`${this.gladiators[0].name} with ${this.gladiators[0].weapon} won`)
                        this.strongerVsWeaker(this.isThumbsUp())
                    } else if (this.gladiators[1].weapon === "Club") {
                        alert(`${this.gladiators[1].name} with ${this.gladiators[1].weapon} won`)
                        this.weakerVsStronger(this.isThumbsUp())
                    }
                    break;
                case "Spear":
                    if (this.gladiators[1].weapon === "Club") {
                        alert(`${this.gladiators[0].name} with ${this.gladiators[0].weapon} won`)
                        this.strongerVsWeaker(this.isThumbsUp())
                    } else if (this.gladiators[1].weapon === "Trident") {
                        alert(`${this.gladiators[1].name} with ${this.gladiators[1].weapon} won`)
                        this.weakerVsStronger(this.isThumbsUp())
                    }
                    break;
                case "Club":
                    if (this.gladiators[1].weapon === "Spear") {
                        alert(`${this.gladiators[1].name} with ${this.gladiators[1].weapon} won`)
                        this.weakerVsStronger(this.isThumbsUp())
                    } else if (this.gladiators[1].weapon === "Trident") {
                        alert(`${this.gladiators[0].name} with ${this.gladiators[0].weapon} won`)
                        this.strongerVsWeaker(this.isThumbsUp())
                    }
                    break;
            }
        } else {
            console.error(`you have to add a gladiator! ${this.gladiators}`)
        }
        alert(`${this.gladiators[0].name} with ${this.gladiators[0].weapon} survived`)
    }


    remove(name) {
        this.gladiators = this.gladiators.filter((gladiator) => {
            return gladiator.name !== name.name
        })
    }

    entertained() {
        this.gladiators.forEach((gladiator) => {
            if (gladiator.name === "Maximus") {
                alert(`${gladiator.name} is in the Arena. The crowd is entertained.`)
                return true
            } else {
                return false
            }
        })
    }

    isThumbsUp() {
        let crowdAnswer = window.prompt("what about the losing gladiator? Thumbs up/down?")
        if (crowdAnswer === "up") {
            return true
        } else if (crowdAnswer === "down")
            return false
    }


    strongerVsWeaker(answer) {
        switch (answer) {
            case true:
                this.gladiators.splice(0, 1)
                break
            case false:
                this.gladiators.splice(1, 1)
        }
    }

    weakerVsStronger(answer) {
        switch (answer) {
            case true:
                this.gladiators.splice(1, 1)
                break
            case false:
                this.gladiators.splice(0, 1)
        }
    }
}


