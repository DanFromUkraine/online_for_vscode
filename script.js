var fade = function(node) {
    var level = 1;
    var step = function() {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    step(); // Викликаємо функцію step, щоб розпочати анімацію при виклику fade
};

setTimeout(function() {
    fade(document.body);
}, 1000); // Запускаємо анімацію через 1 секунду після виклику setTimeout
