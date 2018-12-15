export class Config {

    addTransient(key, cls) {
        this[key] = cls;
        return this;
    }

    getUserService() {
        return this.getService('UserService');
    }

    getService(key) {
        if(!this[key]) {
            return null;
        }
        return new this[key]();
    }

    setPort(port) {
        this.port = port;
        return this;
    } 

    getPort() {
        return this.port;
    }

}