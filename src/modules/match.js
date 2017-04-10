const match = (term) => {
    return term.match(/^rgb\([0-9]{3},\s?[0-9]{3},\s?[0-9]{2}\)/) ||                    /* is RGB? */
            term.match(/^#[a-fA-F0-9]{6}/) ||                                           /* is HEX? */
            term.match(/^hsl\([0-9]{1,3}\%?,\s?[0-9]{1,3}\%?,\s?[0-9]{1,3}\%?\)/) ||     /* is HSL? */
            term.match(/^hsv\([0-9]{1,3}\%?,\s?[0-9]{1,3}\%?,\s?[0-9]{1,3}\%?\)/) ||     /* is HSV? */
            term.match(/^cmyk\([0-9]{1,3},\s?[0-9]{1,3},\s?[0-9]{1,3},\s?[0-9]{1,3}\)/)   /* is CMYK? */
}

module.exports = match