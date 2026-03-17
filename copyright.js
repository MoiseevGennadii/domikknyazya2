 (function() {
            "use strict";

            function time() {
                let data = new Date();
                // Я немного изменил строку, чтобы год выглядел аккуратно: © 2022-2026
                let startYear = 2022;
                let currentYear = data.getFullYear();
                if (currentYear > startYear) {
                    return '© ' + startYear + '-' + currentYear;
                } else {
                    return '© ' + startYear;
                }
            }

            let timeElement = document.querySelector(".time");
            if (timeElement) { // Проверяем, есть ли такой элемент на странице
                timeElement.innerHTML = time();
            }
        })();