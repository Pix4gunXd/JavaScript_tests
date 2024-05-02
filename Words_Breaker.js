//Trying to separate words using the slice() method

var str = "Write some words here and test the code";

var done = false;

for (i = 0; i <= str.length; i++){

    if(str.charAt(i - 1) == ' '){ //Separates the words
        done = false;
    }

    if(done == false){
       for (j = i+1; j <= str.length; j++){
            if (str.charAt(j) == ' ' || j == str.length) {
                console.log(str.slice(i,j));
                done = true;
                break;
            }
       }
    }
}
