const match = (term) => {
    return term.match() ||      /* is RGB? */
            term.match() ||     /* is HEX? */
            term.match() ||     /* is HSL? */
            term.match() ||     /* is HSV? */
            term.match()        /* is CMYK? */
}

module.exports = match