class Text {
    constructor(text) {
        this.text = text;
    }

    countSimb() {
        return this.text.length;
    }

    countLett() {
        return this.text.match(/[A-Za-z]/g).length;
    }

    countGap() {
        return this.text.match(/[ ]/g).length;
    }

    countDiffSimbGap() {
        return this.countSimb() - this.countGap();
    }

    arrWord() {
        let result = [];
        let words = this.text.split(' ');
        
        for (let word of words) {
            if ( word.match(/[A-Za-z]/g) ) {
                result.push(word);
            }
        }

        return result;
    }

    arrSentence() {
        let result;

        if ( this.text.match(/[.]/g) ) {
            result = this.text.split('.');
        }
        
        for (let res of result) {
            if (res === '') {
                result.pop();
            }
        }

        return result;
    }
}

let text = new Text('Hello Jaisy . It is me .');

console.log(text.countSimb());
console.log(text.countLett());
console.log(text.countGap());
console.log(text.countDiffSimbGap());
console.log(text.arrWord());
console.log(text.arrSentence());