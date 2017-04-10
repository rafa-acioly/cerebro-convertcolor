module.exports = {
    convert: (theColor, codeType) => {
        let url = `http://www.thecolorapi.com/id?${codeType}=${theColor}`;
        console.log(url)
        return fetch(url)
        .then(response => response.json())
        .then(resp => {
            return {
                hex: resp.hex.value,
                rgb: resp.rgb.value,
                hsl: resp.hsl.value,
                hsv: resp.hsv.value,
                cmyk: resp.cmyk.value
            }
        })
    }
}