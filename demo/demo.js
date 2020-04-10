var ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        theme: '#ebd0c2'
    }]
});
ap1.on('play', function () {
    console.log('play');
});
ap1.on('play', function () {
    console.log('play play');
});
ap1.on('pause', function () {
    console.log('pause');
});
ap1.on('canplay', function () {
    console.log('canplay');
});
ap1.on('playing', function () {
    console.log('playing');
});
ap1.on('ended', function () {
    console.log('ended');
});
ap1.on('error', function () {
    console.log('error');
});

var ap2 = new APlayer({
    element: document.getElementById('player2'),
    mini: true,
    autoplay: false,
    lrcType: false,
    mutex: true,
    audio: [{
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
        theme: '#ebd0c2'
    }]
});

var ap3 = new APlayer({
    element: document.getElementById('player3'),
    mini: false,
    autoplay: false,
    lrcType: 2,
    mutex: true,
    audio: [{
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
        theme: '#ebd0c2'
    }]
});

var ap4 = new APlayer({
    element: document.getElementById('player4'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    theme: '#ad7a86',
    order: 'random',
    audio: [
        {
            name: "好好恋爱",
            artist: "邓丽欣 / 方力申",
            url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=5261521&auth=e5a7a6ca6055c3795ea435980cf4a921718b7badfb845b3bfd7bb9f3f4531c1c",
            cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=854320534803436&auth=b3d3875efa0dea7432ad813d538bde57ffa9126631d8005d0841c7e3b523c0f0",
            lrc: "https://service-opb3o3ky-1251733603.gz.apigw.tencentcs.com/Meting?server=netease&type=lrc&id=5261521",
            type: "normal"
        },
        {
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
            lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
            lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
            theme: '#46718b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
            lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
            theme: '#505d6b'
        }, {
            name: '光るなら(HLS)',
            artist: 'Goose house',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hls/hikarunara.m3u8',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
            theme: '#ebd0c2',
            type: 'hls'
        }]
});

var ap5 = new APlayer({
    element: document.getElementById('player5'),
    mini: false,
    autoplay: false,
    lrcType: 3,
    mutex: true,
    theme: '#e9e9e9',
    listFolded: false,
    listMaxHeight: 80,
    audio: [
        {
            name: "好好恋爱",
            artist: "邓丽欣 / 方力申",
            url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=5261521&auth=e5a7a6ca6055c3795ea435980cf4a921718b7badfb845b3bfd7bb9f3f4531c1c",
            cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=854320534803436&auth=b3d3875efa0dea7432ad813d538bde57ffa9126631d8005d0841c7e3b523c0f0",
            lrc: "https://service-opb3o3ky-1251733603.gz.apigw.tencentcs.com/Meting?server=netease&type=lrc&id=5261521",
            type: "normal"
        },
        {
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
    }, {
        name: 'トリカゴ',
        artist: 'XX:me',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
    }, {
        name: '前前前世',
        artist: 'RADWIMPS',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
    }]
});
var colorThief = new ColorThief();
var setTheme = function(index) {
    if (!ap5.list.audios[index].theme) {
        colorThief.getColorAsync(ap5.list.audios[index].cover, function (color) {
            ap5.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap5.list.index);
ap5.on('listswitch', function(data) {
    setTheme(data.index);
});

var ap6 = new APlayer({
    element: document.getElementById('player6'),
    mutex: true,
    audio: [
        {
            name: "好好恋爱",
            artist: "邓丽欣 / 方力申",
            url: "https://api.i-meto.com/meting/api?server=netease&type=url&id=5261521&auth=e5a7a6ca6055c3795ea435980cf4a921718b7badfb845b3bfd7bb9f3f4531c1c",
            cover: "https://api.i-meto.com/meting/api?server=netease&type=pic&id=854320534803436&auth=b3d3875efa0dea7432ad813d538bde57ffa9126631d8005d0841c7e3b523c0f0",
            lrc: "https://service-opb3o3ky-1251733603.gz.apigw.tencentcs.com/Meting?server=netease&type=lrc&id=5261521",
            type: "normal"
        },
        {
        name: '光るなら(HLS)',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hls/hikarunara.m3u8',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        theme: '#ebd0c2',
        type: 'hls'
    }]
});
var ap7 = new APlayer({
    element: document.getElementById('player7'),
    mutex: true,
    audio: [{
        name: '光るなら(HLS)',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hls/hikarunara.m3u8',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        theme: '#ebd0c2',
        type: 'customHls',
    }],
    customAudioType: {
        'customHls': function (audioElement, audio, player) {
            if (Hls.isSupported()) {
                var hls = new Hls();
                hls.loadSource(audio.url);
                hls.attachMedia(audioElement);
            }
            else if (audioElement.canPlayType('application/x-mpegURL') || audioElement.canPlayType('application/vnd.apple.mpegURL')) {
                audioElement.src = audio.url;
            }
            else {
                player.notice('Error: HLS is not supported.');
            }
        }
    }
});

var ap8 = new APlayer({
    element: document.getElementById('player8'),
    mutex: true,
    theme: '#ad7a86',
    order: 'random',
    lrcType: 3,
    fixed: true,
});
$.ajax({
    url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529',
    success: function (list) {
        ap8.list.add(JSON.parse(list));
    }
});