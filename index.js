var photo = document.getElementById('photo');
// 画像読み込み後の処理
photo.onload = function() {
    // rainyday.jsの設定
    var engine = new RainyDay({
        image: photo // 雨を降らせる画像の指定
    });
    // 雨粒の設定
    engine.rain([
        [6, 6, 1] // サイズが3～6の雨粒を1滴追加する
    ], 10); // 0.1秒ごとに雨粒追加を実行
};
// 画像のsrcを指定
photo.src = 'wakutama.jpg';
