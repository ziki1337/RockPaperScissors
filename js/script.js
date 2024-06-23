document.addEventListener("DOMContentLoaded", function() {
var qq = "";
var win = 0;
var lose = 0;
var draw = 0;

function UserChoice(choiceId) {
    qq = document.getElementById(choiceId);
    var gg = qq.id;
    var choiceK;

    if (gg === 'rock') {
        choiceK = 1;
    } else if (gg === 'paper') {
        choiceK = 2;
    } else if (gg === 'scissors') {
        choiceK = 3;
    }

    console.log(choiceK);

    function getRandomNumber() {
        return Math.floor(Math.random() * 3) + 1;
    }
    var randNum = getRandomNumber();

    switch (choiceK) {
        case randNum:
            console.log("ПИЗДЕЦ НИЧЬЯ" + randNum);
            draw++;
            
            document.getElementById('MyImage3').src = getImageSource(randNum);
            
            showPopup(popup3);
            break;
        default:
            if (choiceK === 1 && randNum === 2) {
                console.log("LOSE " + randNum);
                if (dayOrNight){
                document.getElementById('MyImage2').src = 'paper.png';
                }
                else {
                    document.getElementById('MyImage2').src = 'paperN.png';
                }
            	showPopup(popup2);
                lose++;
            } else if (choiceK === 1 && randNum === 3) {
                console.log("WIN " + randNum);
                if (dayOrNight){
                document.getElementById('MyImage1').src = 'scissors.png';
                }
                else {
                    document.getElementById('MyImage1').src = 'scissorsN.png';
                }
            	showPopup(popup1);
                win++;
            } else if (choiceK === 2 && randNum === 1) {
                console.log("WIN " + randNum);
                if (dayOrNight){
                document.getElementById('MyImage1').src = 'rock.png';
                }
                else {
                    document.getElementById('MyImage1').src = 'rockN.png';
                }
            	showPopup(popup1);
                win++;
            } else if (choiceK === 2 && randNum === 3) {
                console.log("LOSE " + randNum);
                if (dayOrNight){
                document.getElementById('MyImage2').src = 'scissors.png';
                }
                else {
                    document.getElementById('MyImage2').src = 'scissorsN.png';
                }
            	showPopup(popup2);
                lose++;
            } else if (choiceK === 3 && randNum === 1) {
                console.log("LOSE " + randNum);
                if (dayOrNight){
                document.getElementById('MyImage2').src = 'rock.png';
                }
                else {
                    document.getElementById('MyImage2').src = 'rockN.png';
                }
            	showPopup(popup2);
                lose++;
            } else if (choiceK === 3 && randNum === 2) {
                console.log("WIN " + randNum);
                if (dayOrNight){
                document.getElementById('MyImage1').src = 'paper.png';
                }
                else {
                    document.getElementById('MyImage1').src = 'paperN.png';
                }
            	showPopup(popup1);
                win++;
            }
            break;
    }

    var wl = document.getElementById('TextWL');
    wl.innerHTML = "You " + win + " VS " + lose + " God";
    var drawText = document.getElementById('TextD');
    drawText.innerHTML = "Draws: " + draw;

}

const closeButtons = document.querySelectorAll('.popup_area, .popup_close');

    // а тут forEach перебирает все из зон закрытия
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); 

            const popup = button.closest('.popup');

            hidePopup(popup);
        });
    });


function getImageSource(choice) {
        if (choice === 1) {
            if (dayOrNight) {
            return 'rock.png';
            }
            else {
                return 'rockN.png';
            }
        } else if (choice === 2) {
            if (dayOrNight) {
            return 'paper.png';
            }
            else {
                return 'paperN.png';
            }
        } else if (choice === 3) {
            if (dayOrNight) {
            return 'scissors.png';
            }
            else {
                return 'scissorsN.png';
            }
        }
    }
function showPopup(popup) {
        if (popup) {
            popup.style.opacity = '1';
            popup.style.visibility = 'visible';
        }
    }
    function hidePopup(popup) {
        if (popup) {
            popup.style.opacity = '0';
            popup.style.visibility = 'hidden';
        }
    }

var el = document.getElementById('DN');
var themeStylesheet = document.getElementById('themeStylesheet');
var rD = document.getElementById('rockIMG');
var pD = document.getElementById('paperIMG');
var sD = document.getElementById('scissorsIMG');
var dayOrNight = true;

function DayNight() {
    if (el.src.includes('dark.png')) {
        el.src = 'day.png';
        themeStylesheet.href = 'css/dark.css';
        rD.src = 'rockN.png';
        pD.src = 'paperN.png';
        sD.src = 'scissorsN.png';
        return dayOrNight = false;

    } else {
        el.src = 'dark.png';
        themeStylesheet.href = 'css/styles.css';
        rD.src = 'rock.png';
        pD.src = 'paper.png';
        sD.src = 'scissors.png';
        return dayOrNight = true;
    }
}

window.UserChoice = UserChoice;
window.DayNight = DayNight;
});