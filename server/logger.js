const EventEmiter = require('events');
const uuid = require('uuid');


class Logger extends EventEmiter {
    log(msg){
        //call event
        this.emit('message', {id: uuid.v4(), msg });
    }
}

module.exports = Logger;