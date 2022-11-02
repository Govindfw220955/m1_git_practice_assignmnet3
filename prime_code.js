
function checkprime(n){
	let count=0;
    	for(let i=1;i<=n;i++){
        	if(n%i==0){
            count++;
        	
    	}
 if (count ==2){
        	return true;
    	}
        	return false;
    	}

let answer=checkprime(11);
if(answer==true){
console.log("Prime Number")
}else{
console.log("Not A Prime Number")

