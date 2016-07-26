//require("!style!css!./style.css");

require("./style.css");

document.write("It works.</br>"); //webpack ./entry.js bundle.js --module-bind 'css=style!css'

document.write(require("./content.js"));



