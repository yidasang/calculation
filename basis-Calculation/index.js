function calculation(type, n, m) {
    var result = "";
    if (type == "+") { //加
        result =  n + m;
    } else if (type == "-") { //减
        result =  n - m;
    } else if (type == "*") { //乘
        result =  n * m;
    } else if (type == "/") { //除
        result =  n / m;
    } else if (type == "%") { //取余
        result =  n % m;
    }
    return Math.round(result); //四舍五入取整
}

module.exports = {
    calculation
};
