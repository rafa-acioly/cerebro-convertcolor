import toHex from './toHex'
import toHSL from './toHSL'
import toHSV from './toHSV'
import toCMYK from './toCMYK'
import toRGB from 'hex-reg'

module.exports = {

    convert: (theColor) => {
        return {
            hex: toHex(theColor),
            rgb: toRGB(theColor),
            hsl: toHSL(theColor),
            hsv: toHSV(theColor),
            cmyk: toCMYK(theColor)
        }
    }

}