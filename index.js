// Resources
var stampit = require('stampit');

// Maje Component
var component = stampit({
    extend: function extend(specification) {
        return stampit(this).create(specification);
    }
});

module.exports = component