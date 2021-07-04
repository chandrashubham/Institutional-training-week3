function game(){
    alert("!!!Guess The Number!!!")
    let a;
    while ( a != 0){
    let n = prompt("Enter The Number: "); if ( n < 0 ){
            alert("not matched");
        }
        else if (n > 0 && n <=9){
            alert("NOT MATCHED");
    }
    else if( n == 10){
                alert("Good work");
                break;
    }
    a++; }
    let b = prompt("Want to Play Again (Y/N)??"); if (b == "Y" || b == "y"){
    game(); }
    else if(b == "N" || b == "N"){
    alert("As Your Wish...Thanks For Playing...");
    } 
}