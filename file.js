var Symbols = [
  ["I", "V", "X"],
  ["X", "L", "C"],
  ["C", "D", "M"],
  ["M","",""]
]
function getSymbols(num, one, five, ten){
  if(num == 0){
    return "";
  }
  if(num <= 3){
    return one.repeat(num);
  }
  if(num == 4){
    return one + five;
  }
  if(num == 5){
    return five;
  }
  if(num <= 8){
    return five + one.repeat(num - 5);
  }
  if(num == 9){
    return one + ten;
  }
  if(num == 10){
    return ten;
  }
  console.log("bigger 10");
}

function aux(num, units){
  return getSymbols(num, Symbols[units][0], Symbols[units][1], Symbols[units][2]);
}

function rec(num, units){
  if(num < 10){
    return aux(num, units);
  }
  else{
    let numUnits = num % 10;
    num = Math.floor(num / 10);
    return rec(num, units + 1) + aux(numUnits, units);
  }
}

function convertToRoman(num){
  return rec(num, 0)
}
