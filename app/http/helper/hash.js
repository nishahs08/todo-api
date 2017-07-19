"use strict";

const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET || 'ghO/I-uYjYTM[>n7hQ;a|nJlasex1&`/*-ut[uQ-wR33G#Dk$X}Me&g3tg~0_*.7WIK~M';

const self = module.exports = {

    generateRandomString: data => {
        if (Array.isArray(data))
            return self.generateHashSyncFor(data.join('-') + SECRET);

        if (data && typeof data === 'object')
            return self.generateHashSyncFor(JSON.stringify(data) + SECRET);
    },

    generateHashSyncFor: value => bcrypt.hashSync(value, 10),

    verifyHashSync: (value, hash) => bcrypt.compareSync(value, hash),
};