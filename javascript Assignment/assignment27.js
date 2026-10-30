function cleanText(text) {

    return text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}


let input = "   HELLO     WORLD   JAVASCRIPT   ";

let cleaned = cleanText(input);

console.log(cleaned);