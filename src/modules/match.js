module.exports = {
    find: (term) => {
        return term.match(/^rgb\(([0-9]{3}),\s?([0-9]{3}),\s?([0-9]{2})\)/i) ||
                term.match(/^hsl\(([0-9]{1,3}\%?),\s?([0-9]{1,3}\%?),\s?([0-9]{1,3}\%?)\)/i) ||
                term.match(/^hsv\(([0-9]{1,3}\%?),\s?([0-9]{1,3}\%?),\s?([0-9]{1,3}\%?)\)/i) ||
                term.match(/^cmyk\(([0-9]{1,3}),\s?([0-9]{1,3}),\s?([0-9]{1,3}),\s?([0-9]{1,3})\)/i) ||
                term.match(/^#([a-fA-F0-9]{6})/)
    },

    getType: (term) => {
        return term.substring(0,1) == '#' ? 'hex' : term.substring(0,3)
    }
}