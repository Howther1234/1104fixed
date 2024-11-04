function fiveN(n){                                         //function构建方法
    let result=1;                                          //let定义result
        if(n<0||(typeof n)!=="number"||n!==Math.floor(n)){
        throw"错误，需要大于等于零的无符号整数";
        }
        if(n==0){
        return1;
        }
        for(let i=1;i<=n;i++){
        result*=5;
        }
    return result;
}
Console.log("16位无符号整数值",fiveN(16)-1);                //Console.log()输出结果
Console.log("64位无符号整数值",fiveN(64)-1);
