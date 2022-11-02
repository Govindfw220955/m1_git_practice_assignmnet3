function checkprime(number){
	let fact=0;
    	for(let i=1;i<=number;i++){
        	if(number%i==0){
            	fact++;
        	}
    	}
    	if(fact==2){

        	return true;
    	}
    	else{
        	return false;
    	}

let answer=checkprime(11);
if(answer==true){
console.log("Prime Number")
}else{
console.log("Not A Prime Number")