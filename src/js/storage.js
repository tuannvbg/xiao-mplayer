import utils from './utils';
// 对localstorage的存储
class Storage {
    constructor(player) {
        this.storageName = player.options.storageName;

        this.data = JSON.parse(utils.storage.get(this.storageName));
        if (!this.data) {
            this.data = {};
        }
        this.data.volume = this.data.volume || player.options.volume; // 设置默认音量
    }

    get(key) {
        return this.data[key];
    }

    set(key, value) {
        this.data[key] = value;
        utils.storage.set(this.storageName, JSON.stringify(this.data));
    }
    remove(key) {
        delete this.data[key];
        utils.storage.set(this.storageName, JSON.stringify(this.data));
    }
}

export default Storage;
