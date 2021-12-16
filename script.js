'use strict';
// отправка формы обратной связи на почту
function send(event, php) {
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    let req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            let json = JSON.parse(this.response);

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
            // Если не удалось связаться с php файлом
        } else { alert("Ошибка сервера. Номер: " + req.status); }
    };

    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function () { alert("Ошибка отправки запроса"); };
    req.send(new FormData(event.target));
}
