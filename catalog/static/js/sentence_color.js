function hex (c) {
    var s = "0123456789abcdef";
    var i = parseInt (c);
    if (i == 0 || isNaN (c))
        return "00";
    i = Math.round (Math.min (Math.max (0, i), 255));
    return s.charAt ((i - i % 16) / 16) + s.charAt (i % 16);
}

/* Convert an RGB triplet to a hex string */
function convertToHex (rgb) {
    return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

/* Remove '#' in color hex string */
function trim (s) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }
//substring(1,7) : not contain 7(1~6)


/* Convert a hex string to an RGB triplet */
function convertToRGB (hex) {
    var color = [];
    color[0] = parseInt ((trim(hex)).substring (0, 2), 16);
    color[1] = parseInt ((trim(hex)).substring (2, 4), 16);
    color[2] = parseInt ((trim(hex)).substring (4, 6), 16);
    return color;
}
//R : 1~2
//G : 3~4
//B : 5~6
//parseInt(hexstring, 16) : convert hex into int

function generateColor(colorStart,colorEnd,colorCount){

    // The beginning of your gradient
    var start = convertToRGB (colorStart);    

    // The end of your gradient
    var end   = convertToRGB (colorEnd);    

    // The number of colors to compute
    var len = colorCount;

    //Alpha blending amount
    var alpha = 0.0;

    var saida = [];
    
    for (i = 0; i < len; i++) {
        var c = [];
        alpha += (1.0/len);
        
        c[0] = start[0] * alpha + (1 - alpha) * end[0];
        c[1] = start[1] * alpha + (1 - alpha) * end[1];
        c[2] = start[2] * alpha + (1 - alpha) * end[2];

        saida.push(convertToHex (c));
        
    }
    
    return saida;
}
//function to return color index according to score
function score2color(score){
    //generate color
    //console.log(typeof(score))
    s = score*100 
    //console.log("score:",s)
    var tmp = generateColor('#ed4264','#ffedbc',101);
    //console.log(tmp[57])
    var scorecolor = tmp[parseInt(s)]
    return(scorecolor)
}