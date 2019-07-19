var lunar = {
    tg: '甲乙丙丁戊己庚辛壬癸',
    dz: '子丑寅卯辰巳午未申酉戌亥',
    number: '一二三四五六七八九十',
    year: '鼠牛虎兔龙蛇马羊猴鸡狗猪',
    month: '正二三四五六七八九十冬腊',
    monthadd: [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    calendar: [0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95],
    /*根据传入日期（不传时转当天日期），获取并返回农历日期对象*/
    date: function (d) {
        var year, month, day;
        if (!d) {
            d = new Date(), year = d.getFullYear(), month = d.getMonth(), day = d.getDate();
        } else {
            d = d.split('-'), year = parseInt(d[0]), month = d[1] - 1, day = parseInt(d[2]);
        }
        if (year < 1921 || year > 2020) {
            return {}
        }
        var total, m, n, k, bit, ly, lm, ld;
        var isEnd = false;
        var tmp = year;
        if (tmp < 1900) {
            tmp += 1900;
        }
        total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + lunar.monthadd[month] + day - 38;
        if (year % 4 == 0 && month > 1) {
            total++;
        }
        for (m = 0; ; m++) {
            k = (lunar.calendar[m] < 0xfff) ? 11 : 12;
            for (n = k; n >= 0; n--) {
                bit = (lunar.calendar[m] >> n) & 1;
                if (total <= 29 + bit) {
                    isEnd = true;
                    break;
                }
                total = total - 29 - bit;
            }
            if (isEnd) break;
        }
        ly = 1921 + m;
        lm = k - n + 1;
        ld = total;
        if (k == 12) {
            if (lm == Math.floor(lunar.calendar[m] / 0x10000) + 1) {
                lm = 1 - lm;
            }
            if (lm > Math.floor(lunar.calendar[m] / 0x10000) + 1) {
                lm--;
            }
        }
        return {
            y: ly,
            m: lm,
            d: ld,
        };
    },
    /*获取、并返回农历日期字符串*/
    dates: function (l) {
        if (!l.d) return;
        var d = {},
            ly = l.y,
            lm = l.m,
            ld = l.d;

        d.tg = lunar.tg.charAt((ly - 4) % 10);
        d.dz = lunar.dz.charAt((ly - 4) % 12);
        d.year = lunar.year.charAt((ly - 4) % 12);
        d.month = lm < 1 ? '(闰)' + lunar.month.charAt(-lm - 1) : lunar.month.charAt(lm - 1);

        d.day = (ld < 11) ? "初" : ((ld < 20) ? "十" : ((ld < 30) ? "廿" : "三十"));
        if (ld % 10 != 0 || ld == 10) {
            d.day += lunar.number.charAt((ld - 1) % 10);
        }
        return d;
    }
}