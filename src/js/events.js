// 事件调度中心，发布订阅者模式
class Events {
    constructor() {
        this.events = {};

        this.audioEvents = [
            'abort',
            'canplay',
            'canplaythrough',
            'durationchange',
            'emptied',
            'ended',
            'error',
            'loadeddata',
            'loadedmetadata',
            'loadstart',
            'mozaudioavailable',
            'pause',
            'play',
            'playing',
            'progress',
            'ratechange',
            'seeked',
            'seeking',
            'stalled',
            'suspend',
            'timeupdate',
            'volumechange',
            'waiting',
        ];
        this.playerEvents = ['destroy', 'listshow', 'listhide', 'listadd', 'listremove', 'listswitch', 'listclear', 'noticeshow', 'noticehide', 'lrcshow', 'lrchide'];
    }

    on(name, callback) {
        if (this.type(name) && typeof callback === 'function') {
            if (!this.events[name]) {
                this.events[name] = [];
            }
            this.events[name].push(callback);
        }
    }

    trigger(name, data) {
        if (this.events[name] && this.events[name].length) {
            for (let i = 0; i < this.events[name].length; i++) {
                this.events[name][i](data);
            }
        }
    }
    // 保证是此项目内部事件
    type(name) {
        if (this.playerEvents.indexOf(name) !== -1) {
            return 'player';
        } else if (this.audioEvents.indexOf(name) !== -1) {
            return 'audio';
        }

        console.error(`Unknown event name: ${name}`);
        return null;
    }
}

export default Events;
