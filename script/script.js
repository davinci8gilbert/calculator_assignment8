// get the operands value


function addValue(){
    var firstOperand= document.getElementById("input_a").value;
    var secondOperand=document.getElementById("input_b").value;


    // parse to integer. You can use: parseInt(input, 10);
    var parsedFirstOperand = parseInt(firstOperand, 10);
    var parsedSecondOperand = parseInt(secondOperand, 10);

    
    // get the operands value


    // perform operation
    var sum = parsedFirstOperand + parsedSecondOperand;
    
    

    // creating the text output

    


    // (if you want to check) print out in console

    // change the text area

    if(isNaN(firstOperand) || isNaN(secondOperand))
    { 
      var text = "Invalid Format";
    document.mycalculator.output.value = text;}

    else if (firstOperand === "" || secondOperand ==="") 
    {
      var text = "Invalid Format";
    document.mycalculator.output.value = text;
    }
    
    else
    {
    text = parsedFirstOperand + " + " + parsedSecondOperand + " = " + sum;
    document.mycalculator.output.value = text;
}
}

function mulValue(){
    var firstOperand= document.getElementById("input_a").value;
    var secondOperand=document.getElementById("input_b").value;


    var parsedFirstOperand = parseInt(firstOperand, 10);
    var parsedSecondOperand = parseInt(secondOperand, 10);


    var product = parsedFirstOperand * parsedSecondOperand;
    if(isNaN(firstOperand) || isNaN(secondOperand))
    { 
      var text = "Invalid Format";
    document.mycalculator.output.value = text;}

    else if (firstOperand === "" || secondOperand ==="") 
    {
      var text = "Invalid Format";
    document.mycalculator.output.value = text;
    }
    
    else
    
    var text = parsedFirstOperand + " x " + parsedSecondOperand + " = " + product;
    document.mycalculator.output.value = text;
    
}

function divValue(){
    var firstOperand= document.getElementById("input_a").value;
    var secondOperand=document.getElementById("input_b").value;


    // parse to integer. You can use: parseInt(input, 10);
    var parsedFirstOperand = parseInt(firstOperand, 10);
    var parsedSecondOperand = parseInt(secondOperand, 10);

    if(isNaN(firstOperand) || isNaN(secondOperand))
    { 
      var text = "Invalid Format";
    document.mycalculator.output.value = text;}

    else if (firstOperand === "" || secondOperand ==="") 
    {
      var text = "Invalid Format";
    document.mycalculator.output.value = text;
    }
    
    else
    {
    var div = parsedFirstOperand / parsedSecondOperand;
    text = parsedFirstOperand + " : " + parsedSecondOperand + " = " + div;
    document.mycalculator.output.value = text;}
}
