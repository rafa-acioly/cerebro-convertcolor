module.exports = {
    convert: (theColor, codeType) => {
        let url = `http://www.thecolorapi.com/id?${codeType}=${theColor}`;
        return fetch(url)
        .then(response => response.json())
        .then(json => {
            return {
                hex: json.hex.value,
                rgb: json.rgb.value,
                hsl: json.hsl.value,
                hsv: json.hsv.value,
                cmyk: json.cmyk.value
            }
        });
    }
}