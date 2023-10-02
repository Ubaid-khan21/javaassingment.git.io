price = 650;
weight = parseInt(prompt("enter weight in grams"));
wkg = weight/1000;
netAmount = wkg * price;
document.write ("your chicken weight(in kilogram)","",wkg,"<br>"),
document.write ("The Total you to pay is Rs","",netAmount);