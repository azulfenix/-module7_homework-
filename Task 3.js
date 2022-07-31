//Написать функцию, которая принимает число как аргумент и возвращает функцию,
//которая также принимает число как аргумент и возвращает сумму этих двух чисел.
//Выведите в консоль результат.

function FirstFunction(firstNum){
    function SecondFunction (secondNum){
      return firstNum + secondNum;
    }
   return SecondFunction(4)
  }
   let result = FirstFunction(6);
  console.log(result);