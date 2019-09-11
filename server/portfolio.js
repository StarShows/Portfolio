// Module Wrapper function:
// (function (exports, require, module, __filename, __dirname){ 

// })
console.log(__dirname, __filename);
class PortfolioItem  {

    constructor(title, tech, date, url, image){
        this.title = title;
        this.tech = tech;
        this.date = date;
        this.url = url;
        this.image = image;
        
    }
   
    makeBlock() {
        console.log(`I have worked with ${this.title} and use ${this.tech} technologi${this.tech.typeof === String || this.tech.length === 1 ? 'e' : 'es' } `)
    }
}

module.exports = PortfolioItem;