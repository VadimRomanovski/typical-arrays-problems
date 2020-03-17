
exports.min = function min (array) {
    if(!array || array.length == 0){
      return 0;
    }else{
        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
            };
        array.sort(compareNumeric);
        return array[0];
    }
}

exports.max = function max (array) {
    if(!array || array.length == 0){
      return 0;
    }else{
        function compareNumeric(a, b) {
            if (a > b) return -1;
            if (a == b) return 0;
            if (a < b) return 1;
            };
        array.sort(compareNumeric);
        return array[0];
    }
}

exports.avg = function avg (array) {
    if(!array || array.length == 0){
      return 0;
    }else{
      let sum = array.reduce((value, currentItem) => value + currentItem)
      return sum/array.length
    }
}
