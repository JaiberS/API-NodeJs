const { validate: isUUid } = require('uuid');


class validatorUtils {
    
    async isValidUUID(id) {
        return isUUid(id);
    }
}

module.exports = new validatorUtils();