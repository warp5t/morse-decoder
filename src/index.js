const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};
/*
const morseTable = {
      a : '.-' ,
      b : '-...',
      c : '-.-.',
      d : '-..',
      e : '.' ,
      f : '..-.',
      g : '--.',
      h : '....',
      i : '..',
      j : '.---',
      k : '-.-',
      l : '.-..',
      m : '--',
      n : '-.',
      o : '---',
      p : '.--.',
      q : '--.-',
      r : '.-.',
      s : '...',
      t : '-',
      u : '..-',
      v : '...-',
      w : '.--',
      x : '-..-',
      y : '-.--',
      z : '--..',
     '1' : '.----',
     '2' : '..---',
     '3' : '...--',
     '4' : '....-',
     '5' : '.....',
     '6' : '-....',
     '7' : '--...',
     '8' : '---..',
     '9' : '----.',
     '0' : '-----',
     ' ' : '*',
};
*/
/*                               // ***************** this function decodes words into machine code  ***************
function decode(expr) {
 let strLow = String(expr.toLowerCase());
 let morseCode = '' ;
 let machineSymbolCode = '';
 let machineCode = '';
 //console.log(strLow);
  for(let i = 0; strLow.length > i; i++) {
    if(strLow[i] in morseTable) {
      morseCode = morseCode + morseTable[strLow[i]];
      console.log(`morseTable[strLow[${i}]]  symbol: ${strLow[i]}`,morseTable[strLow[i]]);
      for(let j = 0; morseTable[strLow[i]].length > j; j++) {
        console.log(`morseTable[strLow[${i}]][${j}]`,morseTable[strLow[i]][j]);
        if (morseTable[strLow[i]][j] == '-') {
          machineSymbolCode = machineSymbolCode + '11';
          console.log(`morseTable[strLow[${i}]][${j}] is "-"`,  morseTable[strLow[i]][j]);

        }
        else if (morseTable[strLow[i]][j] == '.') {
          machineSymbolCode = machineSymbolCode + '10';
          console.log(`morseTable[strLow[${i}]][${j}] is "."`,  morseTable[strLow[i]][j]);
        }
        else if (morseTable[strLow[i]][j] == '*') {
          machineSymbolCode = machineSymbolCode + '**********';
          console.log(`morseTable[strLow[${i}]][${j}] is "*" that means space`,  morseTable[strLow[i]][j]);
        }
          
      }
      while (machineSymbolCode.length < 10) {
            //console.log(fullStr);
            machineSymbolCode ='0' + machineSymbolCode  ;
          }
          machineCode = machineCode + machineSymbolCode;
          machineSymbolCode = '';
      console.log('machineCode: ',machineCode ,'machineCode.length: ', machineCode.length);
    }
  }
}
decode('hello world');
*/
function decode(expr) {   // *********** this function decodes machine code into words **************
  let tenSymb = '';
  let readText = '';
  let morseCodeSymb = '';
  for (let i = 0; expr.length / 10 > i; i++) {          // outer layer . a count of iteration
    tenSymb = (expr.slice( i * 10, i * 10 + 10));
   // console.log(`iteration number: ${i}`);
   // console.log('tenSymb: ', tenSymb);
    
    while (tenSymb[0] == '0') {                              // cutting zeros for decode
        tenSymb = tenSymb.slice(1, tenSymb.length);
        //console.log('tenSymb after cutting ', tenSymb);
    }
    if (tenSymb[0] == '*') {
        readText = readText + ' ';
        continue;
    }
    
    for (let i = 0; tenSymb.length > i; i++) {               // take each two items and decode into Morse symbols  
     //   console.log('i: ', i)                                 // NB!!!!  code symbol '----' there is not exist !!! you will get undefined
        let preMorseSymb;
        preMorseSymb = tenSymb.slice(i, i + 2);
       // console.log('preMorseSymb: ', preMorseSymb);
        if (preMorseSymb == '11') {
            morseCodeSymb = morseCodeSymb + '-'; 
        } 
        else if (preMorseSymb == '10') {
            morseCodeSymb = morseCodeSymb + '.';
        }
           i = i + 1;
    }  
   
    readText = readText + MORSE_TABLE[morseCodeSymb];
    //console.log(readText);
    morseCodeSymb = '';
  }

    
    return (readText);
}

module.exports = {
  decode
} 
