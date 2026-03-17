const email = require('./email');
const whatsapp = require('./whatsapp');
const telegram = require('./telegram');

const integrations = [email, whatsapp, telegram];
module.exports = { integrations };
