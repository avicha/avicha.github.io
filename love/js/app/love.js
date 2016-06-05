$(function() {
    var w = 667,
        h = 375,
        texts = ['亲爱的面面同学', '过去的阿狸一直是一个人生活，享受着孤独，也憧憬着爱情', '一个人上下班', '一个人去远行', '一个人搭地铁', '一个人入睡', '但他依然相信，会有那么一天，她会出现', '生活虽有些磕磕碰碰', '阿狸仍然微笑面对', '可是阿狸的爱情又在哪里呢', '直到那一天，2.6，阿狸遇见了面面', '阿狸的生活从此有了方向和目标', '阿狸每晚都和面面一起等公交车', '把面面安全送到家门口，阿狸才一个人回家', '然后高兴地进入梦乡，希望梦见面面', '他们一起玩耍', '他们一起煮菜', '面面还是要吃两个面', '他们一起买买买', '面面还说要带上阿狸一起去海滩', '阿狸也很努力，想给面面一个未来', '然而，他们突然吵架了', '是我做得不对，但我会因为面面变得更好的', '没有了面面在身边，风景变得没有色彩', '没有了面面在背后，阿狸又怎会飞得更高更远', '阿狸不能失去面面，于是儿童节准备了糖果，想哄回面面', '然而面面还是不理阿狸', '细水方可长流，为什么不给阿狸一个机会呢', '面面同学，我们一起重新修筑爱的城堡，好吗'];
    var next = function(t) {
        window.setTimeout(function() {
            pages.turn('next');
        }, t || 5000);
    };
    $.fn.print = function(str, delta, l, callback) {
        var self = this;
        l = l || 0;
        if (l < str.length) {
            self.text(str.substring(0, l + 1));
            window.setTimeout(function() {
                self.print(str, delta, l + 1, callback);
            }, delta);
        } else {
            if (callback) {
                callback();
            }
        }
    };
    var pages = $('#pages').turn({
        width: w,
        height: h,
        display: 'single',
        duration: 2000,
        when: {
            turned: function(e, page, view) {
                switch (page) {
                    case 1:
                        window.setTimeout(function() {
                            $('#p1-p1').print(texts[page - 1], 250, 0, function() {
                                window.setTimeout(function() {
                                    $('#p1-p2 span').eq(0).print('我', 250, 0, function() {
                                        $('#p1-p2 span').eq(1).print('你', 250, 0, function() {
                                            next(Math.max(5000, texts[page - 1].length * 1000));
                                        });
                                    });
                                }, 1000);
                            });
                        }, 2000);
                        break;
                    case 29:
                        window.setTimeout(function() {
                            $('#p' + page + '-p1').print(texts[page - 1], 250, 0, function() {
                                window.setTimeout(function() {
                                    $('#ok').print('Yes,I Do!', 100);
                                }, 2000);
                            });
                        }, 500);
                        break;
                    default:
                        window.setTimeout(function() {
                            $('#p' + page + '-p1').print(texts[page - 1], 250, 0, function() {
                                next(Math.max(5000, texts[page - 1].length * 450));
                            });
                        }, 500);
                        break;
                }
            }
        }
    });
});