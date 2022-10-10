const towerOfHanoi= (n) => {
    let a = (Math.pow(2,n))-1;
    console.log("Minimum Amount Of Steps Required For " + n + " Number Of Disc's is " + a);
    return a;
};

towerOfHanoi(1);
towerOfHanoi(2);
towerOfHanoi(3);
towerOfHanoi(4);
towerOfHanoi(5);
towerOfHanoi(0);
