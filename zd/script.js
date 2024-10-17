var zdjecia = Array(
    Array('zdj/1.jpg', 'zdj/1.jpg', 'zdj 1', 'opis1'),
    Array('zdj/2.jpeg', 'zdj/2.jpeg', 'zdj 2', 'opis2'),
    Array('zdj/3.jpg', 'zdj/3.jpg', 'zdj 3', 'opis3')
);

var max_width = 520;

function laduj() {
    for (var i = 0; i < zdjecia.length; i++) {
        document.getElementById('miniaturki').innerHTML += '<img src="' + zdjecia[i][1] + '" onclick="zmien(' + i + ')" />';
    }
    zmien(0);
}

function zmien(id) {
    document.getElementById('zdjecie').innerHTML = '<div id="ladowanie"></div>'; // Clear and add loading
    var custom = '';
    var preload = new Image();
    preload.onload = function() {
        console.log('Image loaded:', preload.width, preload.height); // Debugging
        if (preload.width > max_width) {
            custom = ' style="height: ' + (Math.floor(max_width / (preload.width / preload.height))) + 'px;width:' + max_width + 'px;"';
        }
        document.getElementById('informacje').innerHTML = '<b>' + zdjecia[id][2] + '</b><br /><i>' + zdjecia[id][3] + '</i>';
        document.getElementById('zdjecie').innerHTML = '<img src="' + zdjecia[id][0] + '"' + custom + ' />'; // Apply custom style
    };
    preload.src = zdjecia[id][0];
}

window.onload = laduj;
