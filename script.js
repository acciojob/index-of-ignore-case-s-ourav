function indexOfIgnoreCase(s1, s2) {
  // write your code here
	len2=s2.length
	res=-1
	for(i=0;i<=s1.length-len2;i++){
		if(s1.substring(i,i+len2).toLowerCase()==s2.toLowerCase()){
			res=i 
			break
		}
	}
	return res
}

Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

