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

}

let ans=checkprime(12);
if(ans==true){
	console.log("Prime");
}
else{
	console.log("Not Prime")
}