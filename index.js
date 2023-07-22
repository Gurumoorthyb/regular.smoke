var abc1;
let abc2;

console.log(abc1);
console.log(abc2);

const createFunc = () => {
     abc1 = 'ABC1';
     abc2 = 'ABC2';

    console.log(abc1, abc2);
}

console.log(abc1);
console.log(abc2);



createFunc();
