import MPlayer from './js/player'
import './index.scss'
new MPlayer({
    container: document.getElementById('xiaoMPlayer'),
    lrcType: 2,
    audio: [
        {
            name: '光るなら',
            artist: 'Goose house',
            url:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
            cover:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
            lrc:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
            theme: '#ebd0c2',
        },
        {
            name: 'トリカゴ',
            artist: 'XX:me',
            url:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3',
            cover:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
            lrc:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
            theme: '#46718b',
        },
        {
            name: '前前前世',
            artist: 'RADWIMPS',
            url:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
            cover:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
            lrc:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
            theme: '#505d6b',
        },
        {
            name: '光るなら(HLS)',
            artist: 'Goose house',
            url:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hls/hikarunara.m3u8',
            cover:
                'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
            theme: '#ebd0c2',
            type: 'hls',
        },
    ],
})

console.log(
    '\n %c xiao-mplayer v1.0.0 %c https://github.com/xiao-team/xiao-mplayer \n',
    'color: #fadfa3; background: #030307; padding:5px 0;',
    'background: #fadfa3; padding:5px 0;'
)
