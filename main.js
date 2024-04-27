function playSound(note) {
    var audio = new Audio("sounds/" + note + ".wav");
    audio.play();
}

var Keys = document.querySelectorAll(".white , .black");

        Keys.forEach(function (key) {
            key.addEventListener("click", function () {
                var buttonClick = this.classList[1];
                switch (buttonClick) {
                    case "b":
                        playSound("040");
                        break;
                    case "a":
                        playSound("041");
                        break;
                    case "g":
                        playSound("042");
                        break;
                    case "f":
                        playSound("043");
                        break;
                    case "e":
                        playSound("044");
                        break;
                    case "d":
                        playSound("045");
                        break;
                    case "c":
                        playSound("046");
                        break;
                        case "as":
                        playSound("051");
                        break;
                    case "gs":
                        playSound("052");
                        break;
                    case "fs":
                        playSound("053");
                        break;
                    case "es":
                        playSound("054");
                        break;
                    case "ds":
                        playSound("055");
                        break;
                    case "cs":
                        playSound("056");
                        break;
                    default:
                        break;
                }
            });
        });

        