export default {
    find: (term) => {
        const testRGB = /^rgb\(([0-9]{0,3}),\s?([0-9]{0,3}),\s?([0-9]{0,3})\)/i
        const testRGBA = /^rgba\(([0-9]{0,3}),\s?([0-9]{0,3}),\s?([0-9]{0,3}),\s?\.?([0-9]{1,3})\)/i
        const testHSL = /^hsl\(([0-9]{1,3}\%?),\s?([0-9]{1,3}\%?),\s?([0-9]{1,3}\%?)\)/i
        const testHSV = /^hsv\(([0-9]{1,3}\%?),\s?([0-9]{1,3}\%?),\s?([0-9]{1,3}\%?)\)/i
        const testCMYK = /^cmyk\(([0-9]{1,3}),\s?([0-9]{1,3}),\s?([0-9]{1,3}),\s?([0-9]{1,3})\)/i
        const testHEX = /^#([a-fA-F0-9]{3,6})/

        return testRGB.test(term)   ||
                testRGBA.test(term) ||
                testHSL.test(term)  ||
                testHSV.test(term)  ||
                testCMYK.test(term) ||
                testHEX.test(term)
    }
}