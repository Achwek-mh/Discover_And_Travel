initSprites = function () {

    addItems();

    var screen = $('screen');
    for (var i = 0; i < mapSprites.length; i++) {
        var sprite = mapSprites[i];
        var itemType = itemTypes[sprite.type];
        var img = document.createElement('img');
        img.src = itemType.img;
        img.style.display = "none";
        img.style.position = "absolute";
        img.style.overflow = "hidden";
        img.style.marginTop = '90px'
        //img.style.width='200px';
        //img.style.height='200px';

        sprite.state = 0;
        sprite.numOfStates = itemType.numOfStates;

        sprite.prevStyle = {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            clip: '',
            display: 'none',
            zIndex: 0
        };
        /*  img.style.width='600px'
         img.style.height='600px' */
        sprite.visible = false;
        sprite.block = itemType.block;
        sprite.img = img;
        //spritePosition[sprite.y][sprite.x] = sprite;
        sprites.push(sprite);
        screen.appendChild(img);

    }
}

//----------------------------------------------------------

var sprites = [];
var mapSprites = [];


var itemTypes = [
    { img: 'src/assets/Humayun.png', block: false },
];

//----------------------------------------------------------

addItems = function () {


    var item = {
        type: 0,
        x: 21.5,
        y: 14.7
    }
    mapSprites.push(item);
}


//----------------------------------------------------------


//----------------------------------------------------------

renderSprites = function () {
    for (var i = 0; i < sprites.length; i++) {



        var sprite = sprites[i];
        var dx = sprite.x - player.x;
        var dy = sprite.y - player.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var angle = Math.atan2(dy, dx) - player.rotation;
        if (angle < -Math.PI) angle += Math.PI * 2;
        if (angle >= Math.PI) angle -= Math.PI * 2;
        if ((angle > -Math.PI) && (angle < Math.PI)) {

            var img = sprite.img;
            var size = viewDist / (Math.cos(angle) * distance);
            var x = Math.tan(angle) * viewDist;
            var prevStyle = sprite.prevStyle;

            if (size != prevStyle.height) {
                img.style.height = size + 'px';
                prevStyle.height = size;
            }
            // times the total number of states
            if ((size * sprites.numOfStates) != prevStyle.width) {
                img.style.width = (size * sprite.numOfStates) + 'px';
                prevStyle.width = (size * sprite.numOfStates);
            }
            if (((screenHeight - size) / 2) != prevStyle.top) {
                img.style.top = ((screenHeight - size) / 2) + 'px';
                prevStyle.top = ((screenHeight - size) / 2);
            }
            if ((screenWidth / 2 + x - size / 2 - size * sprite.state) != prevStyle.left) {
                img.style.left = (screenWidth / 2 + x - size / 2 - size * sprite.state) + 'px';
                prevStyle.left = (screenWidth / 2 + x - size / 2 - size * sprite.state);
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
            if (('rect(0, ' + (size * (sprite.state + 1)) + ', ' + size + ', ' + (size * (sprite.state)) + ')') != prevStyle.clip) {
                img.style.clip = ('rect(0, ' + (size * (sprite.state + 1)) + ', ' + size + ', ' + (size * (sprite.state)) + ')');
                prevStyle.clip = ('rect(0, ' + (size * (sprite.state + 1)) + ', ' + size + ', ' + (size * (sprite.state)) + ')');
            }
        }

    }
}

//----------------------------------------------------------
initSprites1 = function () {

    addItems1();
    var screen = $('screen');
    for (var i = 0; i < mapSprites1.length; i++) {
        var sprite1 = mapSprites1[i];
        var itemType1 = itemTypes1[sprite1.type];
        var img1 = document.createElement('img');
        img1.src = itemType1.img1;
        img1.style.display = "none";
        img1.style.position = "absolute";
        img1.style.overflow = "hidden";
        //img1.style.marginTop=28
        sprite1.state = 0;
        sprite1.numOfStates = itemType1.numOfStates;

        sprite1.prevStyle = {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            clip: '',
            display: 'none',
            zIndex: 0
        };

        sprite1.visible = false;
        sprite1.block = itemType1.block;
        sprite1.img1 = img1;
        //spritePosition[sprite1.y][sprite1.x] = sprite1;
        sprites1.push(sprite1);
        screen.appendChild(img1);

    }
}

//----------------------------------------------------------

var sprites1 = [];
var mapSprites1 = [];

var itemTypes1 = [
    { img1: 'src/assets/konark.png', block: false },
];

//----------------------------------------------------------

addItems1 = function () {


    var item = {
        type: 0,
        x: 28.2,
        y: 15.5

    }
    mapSprites1.push(item);
}



//----------------------------------------------------------


//----------------------------------------------------------

renderSprites1 = function () {
    for (var i = 0; i < sprites1.length; i++) {

        var sprite1 = sprites1[i];
        var dx = sprite1.x - player.x;
        var dy = sprite1.y - player.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var angle = Math.atan2(dy, dx) - player.rotation;
        if (angle < -Math.PI) angle += Math.PI * 2;
        if (angle >= Math.PI) angle -= Math.PI * 2;
        if ((angle > -Math.PI) && (angle < Math.PI)) {

            var img1 = sprite1.img1;
            var size = viewDist / (Math.cos(angle) * distance);
            var x = Math.tan(angle) * viewDist;
            var prevStyle = sprite1.prevStyle;

            if (size != prevStyle.height) {
                img1.style.height = size + 'px';
                prevStyle.height = size;
            }
            // times the total number of states
            if ((size * sprites1.numOfStates) != prevStyle.width) {
                img1.style.width = (size * sprite1.numOfStates) + 'px';
                prevStyle.width = (size * sprite1.numOfStates);
            }
            if (((screenHeight - size) / 2) != prevStyle.top) {
                img1.style.top = ((screenHeight - size) / 2) + 'px';
                prevStyle.top = ((screenHeight - size) / 2);
            }
            if ((screenWidth / 2 + x - size / 2 - size * sprite1.state) != prevStyle.left) {
                img1.style.left = (screenWidth / 2 + x - size / 2 - size * sprite1.state) + 'px';
                prevStyle.left = (screenWidth / 2 + x - size / 2 - size * sprite1.state);
            }
            if (("brightness(" + (100 - 15 * distance) + "%)") != prevStyle.filter) {
                img1.style.filter = ("brightness(" + (100 - 15 * distance) + "%)");
                prevStyle.filter = ("brightness(" + (100 - 15 * distance) + "%)");
            }
            if (size >> 0 != prevStyle.zIndex) {
                img1.style.zIndex = size >> 0;
                prevStyle.zIndex = size >> 0;
            }
            if ('block' != prevStyle.display) {
                img1.style.display = 'block';
                prevStyle.display = 'block';
            }
            if (('rect(0, ' + (size * (sprite1.state + 1)) + ', ' + size + ', ' + (size * (sprite1.state)) + ')') != prevStyle.clip) {
                img1.style.clip = ('rect(0, ' + (size * (sprite1.state + 1)) + ', ' + size + ', ' + (size * (sprite1.state)) + ')');
                prevStyle.clip = ('rect(0, ' + (size * (sprite1.state + 1)) + ', ' + size + ', ' + (size * (sprite1.state)) + ')');
            }
        }

    }
}
initSprites2 = function () {

    addItems2();
    var screen = $('screen');
    for (var i = 0; i < mapSprites2.length; i++) {
        var sprite2 = mapSprites2[i];
        var itemType2 = itemTypes2[sprite2.type];
        var img2 = document.createElement('img');
        img2.src = itemType2.img2;
        img2.style.display = "none";
        img2.style.position = "absolute";
        img2.style.overflow = "hidden";
        img2.style.marginTop = 28
        sprite2.state = 0;
        sprite2.numOfStates = itemType2.numOfStates;

        sprite2.prevStyle = {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            clip: '',
            display: 'none',
            zIndex: 0
        };

        sprite2.visible = false;
        sprite2.block = itemType2.block;
        sprite2.img2 = img2;
        //spritePosition[sprite2.y][sprite2.x] = sprite2;
        sprites2.push(sprite2);
        screen.appendChild(img2);

    }
}

//----------------------------------------------------------

var sprites2 = [];
var mapSprites2 = [];

var itemTypes2 = [
    { img2: 'src/assets/temple.png', block: false },
];

//----------------------------------------------------------

addItems2 = function () {


    var item = {
        type: 0,
        x: 18.5,
        y: 11.7
    }
    mapSprites2.push(item);
}



//----------------------------------------------------------


//----------------------------------------------------------

renderSprites2 = function () {
    for (var i = 0; i < sprites2.length; i++) {

        var sprite2 = sprites2[i];
        var dx = sprite2.x - player.x;
        var dy = sprite2.y - player.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var angle = Math.atan2(dy, dx) - player.rotation;
        if (angle < -Math.PI) angle += Math.PI * 2;
        if (angle >= Math.PI) angle -= Math.PI * 2;
        if ((angle > -Math.PI) && (angle < Math.PI)) {

            var img2 = sprite2.img2;
            var size = viewDist / (Math.cos(angle) * distance);
            var x = Math.tan(angle) * viewDist;
            var prevStyle = sprite2.prevStyle;

            if (size != prevStyle.height) {
                img2.style.height = size + 'px';
                prevStyle.height = size;
            }
            // times the total number of states
            if ((size * sprites2.numOfStates) != prevStyle.width) {
                img2.style.width = (size * sprite2.numOfStates) + 'px';
                prevStyle.width = (size * sprite2.numOfStates);
            }
            if (((screenHeight - size) / 2) != prevStyle.top) {
                img2.style.top = ((screenHeight - size) / 2) + 'px';
                prevStyle.top = ((screenHeight - size) / 2);
            }
            if ((screenWidth / 2 + x - size / 2 - size * sprite2.state) != prevStyle.left) {
                img2.style.left = (screenWidth / 2 + x - size / 2 - size * sprite2.state) + 'px';
                prevStyle.left = (screenWidth / 2 + x - size / 2 - size * sprite2.state);
            }
            if (("brightness(" + (100 - 15 * distance) + "%)") != prevStyle.filter) {
                img2.style.filter = ("brightness(" + (100 - 15 * distance) + "%)");
                prevStyle.filter = ("brightness(" + (100 - 15 * distance) + "%)");
            }
            if (size >> 0 != prevStyle.zIndex) {
                img2.style.zIndex = size >> 0;
                prevStyle.zIndex = size >> 0;
            }
            if ('block' != prevStyle.display) {
                img2.style.display = 'block';
                prevStyle.display = 'block';
            }
            if (('rect(0, ' + (size * (sprite2.state + 1)) + ', ' + size + ', ' + (size * (sprite2.state)) + ')') != prevStyle.clip) {
                img2.style.clip = ('rect(0, ' + (size * (sprite2.state + 1)) + ', ' + size + ', ' + (size * (sprite2.state)) + ')');
                prevStyle.clip = ('rect(0, ' + (size * (sprite2.state + 1)) + ', ' + size + ', ' + (size * (sprite2.state)) + ')');
            }
        }

    }
}
initSprites3 = function () {

    addItems3();
    var screen = $('screen');
    for (var i = 0; i < mapSprites3.length; i++) {
        var sprite3 = mapSprites3[i];
        var itemType3 = itemTypes3[sprite3.type];
        var img3 = document.createElement('img');
        img3.src = itemType3.img3;
        img3.style.display = "none";
        img3.style.position = "absolute";
        img3.style.overflow = "hidden";
        img3.style.marginTop = 28
        sprite3.state = 0;
        sprite3.numOfStates = itemType3.numOfStates;

        sprite3.prevStyle = {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            clip: '',
            display: 'none',
            zIndex: 0
        };

        sprite3.visible = false;
        sprite3.block = itemType3.block;
        sprite3.img3 = img3;
        //spritePosition[sprite3.y][sprite3.x] = sprite3;
        sprites3.push(sprite3);
        screen.appendChild(img3);

    }
}

//----------------------------------------------------------

var sprites3 = [];
var mapSprites3 = [];

var itemTypes3 = [
    { img3: 'src/assets/taj.png', block: false },
];

//----------------------------------------------------------

addItems3 = function () {


    var item = {
        type: 0,
        x: 27.5,
        y: 21.5

    }
    mapSprites3.push(item);
}



//----------------------------------------------------------


//----------------------------------------------------------

renderSprites3 = function () {
    for (var i = 0; i < sprites3.length; i++) {

        var sprite3 = sprites3[i];
        var dx = sprite3.x - player.x;
        var dy = sprite3.y - player.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var angle = Math.atan2(dy, dx) - player.rotation;
        if (angle < -Math.PI) angle += Math.PI * 2;
        if (angle >= Math.PI) angle -= Math.PI * 2;
        if ((angle > -Math.PI) && (angle < Math.PI)) {

            var img3 = sprite3.img3;
            var size = viewDist / (Math.cos(angle) * distance);
            var x = Math.tan(angle) * viewDist;
            var prevStyle = sprite3.prevStyle;

            if (size != prevStyle.height) {
                img3.style.height = size + 'px';
                prevStyle.height = size;
            }
            // times the total number of states
            if ((size * sprites3.numOfStates) != prevStyle.width) {
                img3.style.width = (size * sprite3.numOfStates) + 'px';
                prevStyle.width = (size * sprite3.numOfStates);
            }
            if (((screenHeight - size) / 2) != prevStyle.top) {
                img3.style.top = ((screenHeight - size) / 2) + 'px';
                prevStyle.top = ((screenHeight - size) / 2);
            }
            if ((screenWidth / 2 + x - size / 2 - size * sprite3.state) != prevStyle.left) {
                img3.style.left = (screenWidth / 2 + x - size / 2 - size * sprite3.state) + 'px';
                prevStyle.left = (screenWidth / 2 + x - size / 2 - size * sprite3.state);
            }
            if (("brightness(" + (100 - 15 * distance) + "%)") != prevStyle.filter) {
                img3.style.filter = ("brightness(" + (100 - 15 * distance) + "%)");
                prevStyle.filter = ("brightness(" + (100 - 15 * distance) + "%)");
            }
            if (size >> 0 != prevStyle.zIndex) {
                img3.style.zIndex = size >> 0;
                prevStyle.zIndex = size >> 0;
            }
            if ('block' != prevStyle.display) {
                img3.style.display = 'block';
                prevStyle.display = 'block';
            }
            if (('rect(0, ' + (size * (sprite3.state + 1)) + ', ' + size + ', ' + (size * (sprite3.state)) + ')') != prevStyle.clip) {
                img3.style.clip = ('rect(0, ' + (size * (sprite3.state + 1)) + ', ' + size + ', ' + (size * (sprite3.state)) + ')');
                prevStyle.clip = ('rect(0, ' + (size * (sprite3.state + 1)) + ', ' + size + ', ' + (size * (sprite3.state)) + ')');
            }
        }

    }
}
initSprites4 = function () {

    addItems4();
    var screen = $('screen');
    for (var i = 0; i < mapSprites4.length; i++) {
        var sprite4 = mapSprites4[i];
        var itemType4 = itemTypes4[sprite4.type];
        var img4 = document.createElement('img');
        img4.src = itemType4.img4;
        img4.style.display = "none";
        img4.style.position = "absolute";
        img4.style.overflow = "hidden";
        img4.style.marginTop = 28
        sprite4.state = 0;
        sprite4.numOfStates = itemType4.numOfStates;

        sprite4.prevStyle = {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            clip: '',
            display: 'none',
            zIndex: 0
        };

        sprite4.visible = false;
        sprite4.block = itemType4.block;
        sprite4.img4 = img4;
        //spritePosition[sprite4.y][sprite4.x] = sprite4;
        sprites4.push(sprite4);
        screen.appendChild(img4);

    }
}

//----------------------------------------------------------

var sprites4 = [];
var mapSprites4 = [];

var itemTypes4 = [
    { img4: 'src/assets/gate.png', block: false },
];

//----------------------------------------------------------

addItems4 = function () {


    var item = {
        type: 0,
        x: 30.5,
        y: 10.5
    }
    mapSprites4.push(item);
}



//----------------------------------------------------------


//----------------------------------------------------------

renderSprites4 = function () {
    for (var i = 0; i < sprites4.length; i++) {

        var sprite4 = sprites4[i];
        var dx = sprite4.x - player.x;
        var dy = sprite4.y - player.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var angle = Math.atan2(dy, dx) - player.rotation;
        if (angle < -Math.PI) angle += Math.PI * 2;
        if (angle >= Math.PI) angle -= Math.PI * 2;
        if ((angle > -Math.PI) && (angle < Math.PI)) {

            var img4 = sprite4.img4;
            var size = viewDist / (Math.cos(angle) * distance);
            var x = Math.tan(angle) * viewDist;
            var prevStyle = sprite4.prevStyle;

            if (size != prevStyle.height) {
                img4.style.height = size + 'px';
                prevStyle.height = size;
            }
            // times the total number of states
            if ((size * sprites4.numOfStates) != prevStyle.width) {
                img4.style.width = (size * sprite4.numOfStates) + 'px';
                prevStyle.width = (size * sprite4.numOfStates);
            }
            if (((screenHeight - size) / 2) != prevStyle.top) {
                img4.style.top = ((screenHeight - size) / 2) + 'px';
                prevStyle.top = ((screenHeight - size) / 2);
            }
            if ((screenWidth / 2 + x - size / 2 - size * sprite4.state) != prevStyle.left) {
                img4.style.left = (screenWidth / 2 + x - size / 2 - size * sprite4.state) + 'px';
                prevStyle.left = (screenWidth / 2 + x - size / 2 - size * sprite4.state);
            }
            if (("brightness(" + (100 - 15 * distance) + "%)") != prevStyle.filter) {
                img4.style.filter = ("brightness(" + (100 - 15 * distance) + "%)");
                prevStyle.filter = ("brightness(" + (100 - 15 * distance) + "%)");
            }
            if (size >> 0 != prevStyle.zIndex) {
                img4.style.zIndex = size >> 0;
                prevStyle.zIndex = size >> 0;
            }
            if ('block' != prevStyle.display) {
                img4.style.display = 'block';
                prevStyle.display = 'block';
            }
            if (('rect(0, ' + (size * (sprite4.state + 1)) + ', ' + size + ', ' + (size * (sprite4.state)) + ')') != prevStyle.clip) {
                img4.style.clip = ('rect(0, ' + (size * (sprite4.state + 1)) + ', ' + size + ', ' + (size * (sprite4.state)) + ')');
                prevStyle.clip = ('rect(0, ' + (size * (sprite4.state + 1)) + ', ' + size + ', ' + (size * (sprite4.state)) + ')');
            }
        }

    }
}