const basketballGame = {
    score: 0,
    fouls: 0,

    freeThrow() {
        this.score++;
        return this;
    },

    basket() {
        this.score += 2;
        return this;
    },

    threePointer() {
        this.score += 3;
        return this;
    },

    foulsCount() {
        this.fouls++;
        return this;
    },

    halfTime() {
        console.log(`Halftime score is ${this.score}` , `Fouls count is ${this.fouls}`);
        return this;
    },

    fullTime() {
        console.log(`Full time score is ${this.score}`, `Fouls count is ${this.fouls}`);
        return this;
    }
};


//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foulsCount().halfTime().fullTime();