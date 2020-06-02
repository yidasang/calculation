function calendar() { //获取时间：今天, 本周, 本月, 上月
    var now = new Date();

    //今天
    var sToday = formatDate(now);
    var eToday = formatDate(now);

    //本周
    var millisecond = 1000 * 60 * 60 * 24;
    var minusDay = now.getDay() != 0 ? now.getDay() - 1 : 6;
    var monday = new Date(now.getTime() - (minusDay * millisecond));
    var sunday = new Date(monday.getTime() + (6 * millisecond));
    var sWeek = formatDate(monday);
    var eWeek = formatDate(sunday);
    
    //本月
    var currentMonth = now.getMonth();
    var currentYear = now.getFullYear();
    var firstDay = new Date(currentYear, currentMonth, 1);
    if (currentMonth == 11) {
        currentYear++;
        currentMonth = 0;
    } else {
        currentMonth++;
    }
    var milliseconds = 1000 * 60 * 60 * 24;
    var nextMonthDayOne = new Date(currentYear, currentMonth, 1);
    var lastDay = new Date(nextMonthDayOne.getTime() - milliseconds);
    var sMonth = formatDate(firstDay);
    var eMonth = formatDate(lastDay);

    //上月
    var currentMonths = now.getMonth();
    var currentYears = now.getFullYear();
    var priorMonthFirstDay = "";
    if (currentMonths == 0) {
        currentMonths = 11; //月份为上年的最后月份
        currentYears--; //年份减1
        priorMonthFirstDay = new Date(currentYears, currentMonths, 1);
    } else {
        currentMonths--;
        priorMonthFirstDay = new Date(currentYears, currentMonths, 1);
    }
    var priorMonthLastDay = new Date(priorMonthFirstDay.getFullYear(), priorMonthFirstDay.getMonth(), getMonthDays(priorMonthFirstDay.getFullYear(), priorMonthFirstDay.getMonth()));
    //添加至数组
    var sLastMonth = formatDate(priorMonthFirstDay);
    var eLastMonth = formatDate(priorMonthLastDay);

    return {
        today: [sToday, eToday],
        week: [sWeek, eWeek],
        month: [sMonth, eMonth],
        lastMonth: [sLastMonth, eLastMonth]
    };
}

function formatDate(date) { //获取时间：年-月-日
    var d = new Date(date),
        year = d.getFullYear(),
        month = d.getMonth() + 1,
        day = d.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    return year + '-' + month + '-' + day;
}

function getMonthDays(year, month) { //获取该月的天数
    var relativeDate = new Date(year, month, 1);
    var relativeMonth = relativeDate.getMonth();
    var relativeYear = relativeDate.getFullYear();
    if (relativeMonth == 11) {
        relativeYear++;
        relativeMonth = 0;
    } else {
        relativeMonth++;
    }
    var millisecond = 1000 * 60 * 60 * 24;
    var nextMonthDayOne = new Date(relativeYear, relativeMonth, 1);
    return new Date(nextMonthDayOne.getTime() - millisecond).getDate();
}

module.exports = {
    calendar
};
