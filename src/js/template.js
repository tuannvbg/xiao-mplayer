import Icons from './icons'
import tplPlayer from '../template/player.art'

class Template {
    constructor(options) {
        this.container = options.container
        this.options = options.options
        this.randomOrder = options.randomOrder
        this.init()
    }

    init() {
        let cover = ''
        if (this.options.audio.length) {
            if (this.options.order === 'random') {
                cover = this.options.audio[this.randomOrder[0]].cover
            } else {
                cover = this.options.audio[0].cover
            }
        }

        this.container.innerHTML = tplPlayer({
            options: this.options,
            icons: Icons,
            cover: cover,
            getObject: (obj) => obj,
        })

        this.lrc = this.container.querySelector('.xiao-mplayer-lrc-contents')
        this.lrcWrap = this.container.querySelector('.xiao-mplayer-lrc')
        this.ptime = this.container.querySelector('.xiao-mplayer-ptime')
        this.info = this.container.querySelector('.xiao-mplayer-info')
        this.time = this.container.querySelector('.xiao-mplayer-time')
        this.barWrap = this.container.querySelector('.xiao-mplayer-bar-wrap')
        this.button = this.container.querySelector('.xiao-mplayer-button')
        this.body = this.container.querySelector('.xiao-mplayer-body')
        this.list = this.container.querySelector('.xiao-mplayer-list')
        this.listCurs = this.container.querySelectorAll(
            '.xiao-mplayer-list-cur'
        )
        this.played = this.container.querySelector('.xiao-mplayer-played')
        this.loaded = this.container.querySelector('.xiao-mplayer-loaded')
        this.thumb = this.container.querySelector('.xiao-mplayer-thumb')
        this.volume = this.container.querySelector('.xiao-mplayer-volume')
        this.volumeBar = this.container.querySelector(
            '.xiao-mplayer-volume-bar'
        )
        this.volumeButton = this.container.querySelector(
            '.xiao-mplayer-time button'
        )
        this.volumeBarWrap = this.container.querySelector(
            '.xiao-mplayer-volume-bar-wrap'
        )
        this.loop = this.container.querySelector('.xiao-mplayer-icon-loop')
        this.order = this.container.querySelector('.xiao-mplayer-icon-order')
        this.menu = this.container.querySelector('.xiao-mplayer-icon-menu')
        this.pic = this.container.querySelector('.xiao-mplayer-pic')
        this.title = this.container.querySelector('.xiao-mplayer-title')
        this.author = this.container.querySelector('.xiao-mplayer-author')
        this.dtime = this.container.querySelector('.xiao-mplayer-dtime')
        this.notice = this.container.querySelector('.xiao-mplayer-notice')
        this.miniSwitcher = this.container.querySelector(
            '.xiao-mplayer-miniswitcher'
        )
        this.skipBackButton = this.container.querySelector(
            '.xiao-mplayer-icon-back'
        )
        this.skipForwardButton = this.container.querySelector(
            '.xiao-mplayer-icon-forward'
        )
        this.skipPlayButton = this.container.querySelector(
            '.xiao-mplayer-icon-play'
        )
        this.lrcButton = this.container.querySelector('.xiao-mplayer-icon-lrc')
    }
}

export default Template
