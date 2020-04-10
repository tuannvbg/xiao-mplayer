// 就是对一些配置的合并和处理
export default (options) => {
    // 默认配置
    const defaultOption = {
        container: options.element || document.getElementsByClassName('aplayer')[0], // 容器
        mini: options.narrow || options.fixed || false, // 迷你模式
        fixed: false, // 固定
        autoplay: false, // 自动播放
        mutex: true,
        lrcType: options.showlrc || options.lrc || 0, // 歌词显示类型
        preload: 'metadata',
        theme: 'red', // 主题色
        // theme: '#b7daff',
        loop: 'all',
        order: 'list',
        volume: 0.7,
        listFolded: options.fixed,
        listMaxHeight: options.listmaxheight || 250,
        audio: options.music || [],
        storageName: 'aplayer-setting',
    };
    // 合并默认配置和个人配置
    for (const defaultKey in defaultOption) {
        if (defaultOption.hasOwnProperty(defaultKey) && !options.hasOwnProperty(defaultKey)) {
            options[defaultKey] = defaultOption[defaultKey];
        }
    }
    // listMaxHeight 有可能是字符串，转化为浮点数
    options.listMaxHeight = parseFloat(options.listMaxHeight);
    // 如果audio只有一个的话且不是数组，将其转化为数组
    if (Object.prototype.toString.call(options.audio) !== '[object Array]') {
        options.audio = [options.audio];
    }

    options.audio.map((item) => {
        item.name = item.name || item.title || 'Audio name';
        item.artist = item.artist || item.author || 'Audio artist';
        item.cover = item.cover || item.pic;
        item.type = item.type || 'normal';
        return item;
    });

    if (options.audio.length <= 1 && options.loop === 'one') {
        options.loop = 'all';
    }

    return options;
};
