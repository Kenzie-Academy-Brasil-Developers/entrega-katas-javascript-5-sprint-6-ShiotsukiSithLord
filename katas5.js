
function reverseStr(x) {
    //tentei usar varios metodos juntos
    let reverse = x.split('').reverse().join('');

    return reverse
}

function testeReverseString1() {
    let result = reverseStr("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString1()

function testeReverseString2() {
    let result = reverseStr("Assista Jojo");
    let expected = "ojoJ atsissA";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString2()



function reverseSentence(x) {

    let word = x.split(' ').reverse('').join(' ');

    return word
}


function testeReverseSentence() {

    let result = reverseSentence("Kenzie Academy");
    let expected = "Academy Kenzie";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testeReverseSentence();

function testeReverseSentence2() {

    let result = reverseSentence("Atividade fisica faz bem");
    let expected = "bem faz fisica Atividade";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testeReverseSentence2();

function minValue(x) {

    let min = x[0];
    for (let i in x) {
        min = (min > x[i]) ? min = x[i] : min = min;

    }

    return min
}

function testMinValue() {

    let result = minValue([10,2,3,4,5,6,7,8,9,11,13]);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testMinValue()

function testMinValue2() {

    let result = minValue([71,10,9,1,13,17,31,33]);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testMinValue2()


function maxValue (x) {
   

        let max = x[0];
        for (let i in x) {
            max = (max < x[i]) ? max = x[i] : max = max;
        }
    
        return max

}

function testMaxValue() {

    let result = maxValue([10,2,3,4,5,6,7,8,9,11,13]);
    let expected = 13;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testMaxValue()

function testMaxValue2() {

    let result = maxValue([10,21,11,3,4,51,67,101,7,23,33,77,8,99,11,13]);
    let expected = 101;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testMaxValue2()


function calculateRemainder (x) {

   return x%2
}


function testRemainder() {

    let result = calculateRemainder(101);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testRemainder()

function testRemainder2() {

    let result = calculateRemainder(202202);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testRemainder2()


function distinctValues (x) {
  let arr = []

  for(let i in x){
    let arr2 = arr.toString();
   if(arr2.includes(`${x[i]}`) === false){
    arr.push(x[i])
   }
  }

  return arr
}

function testDistinctValues() {

    let result = distinctValues([1,2,3,4,5,5,5,5,6,7,7,7,8,9,9,10,11,11]);
    result = result.join(' ')
    let expected = [1,2,3,4,5,6,7,8,9,10,11];
    expected = expected.join(' ')
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testDistinctValues()

function testDistinctValues2() {

    let result = distinctValues([1,2,3,4,5,5,5,5,6,7,7,7,8,9,9,10,11,11,21,21,51,57,51,57,81,11,71,51]);
    result = result.join(' ')
    let expected = [1,2,3,4,5,6,7,8,9,10,11,21,51,57,81,71];
    expected = expected.join(' ')
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testDistinctValues2()


function countValues(x) {

    let arr = []
    let storage  = {}
    let result = ''
    for(let i in x){
      let arr2 = arr.toString();

     if(arr2.includes(`${x[i]}`) === false){
      arr.push(x[i])
     }
   
    }
 
    x.forEach(num =>{
        if(arr.toString().includes(num)){
            storage[num] = storage[num] 
            if(storage[num] === undefined){
                storage[num] = 0
            }
            storage[num] = storage[num] + 1
           
        }
        
    })
 // obj em str para funcionar no assert
  for(let [key, value] of Object.entries(storage)){
      result += key + '(' + value + ')' ;
  }
  return result

}


function testcountValue() {

    let result = countValues([1,2,3,3,4,5,5,5,6,7,7,7,8,8,8,8,8]);
    let expected = '1(1)2(1)3(2)4(1)5(3)6(1)7(3)8(5)'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testcountValue()

function testcountValue2() {

    let result = countValues([1,2,3,3,4,5,5,5,6,7,7,7,8,8,8,8,8,9,9,9,9,9,9,11,11,11,11,11,21,21,21,21]);
    let expected = '1(1)2(1)3(2)4(1)5(3)6(1)7(3)8(5)9(6)11(5)21(4)'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)

}
testcountValue2()




