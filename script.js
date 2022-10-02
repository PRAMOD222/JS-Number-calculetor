function primenumber() {
  let isPrime = true;
  var number = document.getElementById("ip").value;

  if (number == 1) {
    document.getElementById("output").innerHTML="1 is neither Prime nor composite number.";
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
        document.getElementById("output").innerHTML=`${number} is a Prime number`;
    } else {
        document.getElementById("output").innerHTML=`${number} is not a Prime number`;
    }
  }
}

function Palindrome()
	{
		var rem, temp, final = 0;
		var number = Number(document.getElementById("ip").value);

		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
            document.getElementById("output").innerHTML=`${temp} is a Palindrome number`;
		}
		else
		{
			document.getElementById("output").innerHTML=`${temp} is not a Palindrome number`;
		}
	}

    function findPerfect() {
        var n = document.getElementById('ip').value;
        var sum = 0;
        for (var i = 0; i < n; i++) {
            if (n % i == 0) {
                sum = sum + i;
            }
        }
        if (sum == n)
        document.getElementById("output").innerHTML=`${n} is a Perfecr number`;
        else if (sum > n)
        document.getElementById("output").innerHTML=`${n} is not a Perfecr number`;
        else
        document.getElementById("output").innerHTML=`${n} is not a Perfecr number`;
    }