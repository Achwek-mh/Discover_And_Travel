

//----------------------------------------------------------

var enemies = [];
var mapEnemies = [];

//----------------------------------------------------------



//----------------------------------------------------------

renderEnemies = function () {
    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        var dx = enemy.x - player.x;
        var dy = enemy.y - player.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 10) {

            var angle = Math.atan2(dy, dx) - player.rotation;
            if (angle < -Math.PI) angle += Math.PI * 2;
            if (angle >= Math.PI) angle -= Math.PI * 2;
            if ((angle > -Math.PI) && (angle < Math.PI)) {

                var img = enemy.img;
                var size = viewDist / (Math.cos(angle) * distance);
                var x = Math.tan(angle) * viewDist;
                var prevStyle = enemy.prevStyle;

                if (size != prevStyle.height) {
                    img.style.height = size + 'px';
                    prevStyle.height = size;
                }
                // times the total number of states
                if ((size * enemy.numOfStates) != prevStyle.width) {
                    img.style.width = (size * enemy.numOfStates) + 'px';
                    prevStyle.width = (size * enemy.numOfStates);
                }
                if (((screenHeight - size) / 2) != prevStyle.top) {
                    img.style.top = ((screenHeight - size) / 2) + 'px';
                    prevStyle.top = ((screenHeight - size) / 2);
                }
                if ((screenWidth / 2 + x - size / 2 - size * enemy.state) != prevStyle.left) {
                    img.style.left = (screenWidth / 2 + x - size / 2 - size * enemy.state) + 'px';
                    prevStyle.left = (screenWidth / 2 + x - size / 2 - size * enemy.state);
                }
                if (("brightness(" + (100 - 15 * distance) + "%)") != prevStyle.filter) {
                    img.style.filter = ("brightness(" + (100 - 15 * distance) + "%)");
                    prevStyle.filter = ("brightness(" + (100 - 15 * distance) + "%)");
                }
                if (size >> 0 != prevStyle.zIndex) {
                    img.style.zIndex = size >> 0;
                    prevStyle.zIndex = size >> 0;
                }
                if ('block' != prevStyle.display) {
                    img.style.display = 'block';
                    prevStyle.display = 'block';
                }
                if (('rect(0, ' + (size * (enemy.state + 1)) + ', ' + size + ', ' + (size * (enemy.state)) + ')') != prevStyle.clip) {
                    img.style.clip = ('rect(0, ' + (size * (enemy.state + 1)) + ', ' + size + ', ' + (size * (enemy.state)) + ')');
                    prevStyle.clip = ('rect(0, ' + (size * (enemy.state + 1)) + ', ' + size + ', ' + (size * (enemy.state)) + ')');
                }
            }
            enemyAI(enemy);
        }
    }
}

//----------------------------------------------------------

