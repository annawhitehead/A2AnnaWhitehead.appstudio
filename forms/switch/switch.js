//sets prompt info for variables
let name= prompt(`Enter your first name`)
let userState= prompt(`Enter your abbreviated state`)
let weather= prompt(`Enter the temerature in Fahrenheit`)
let messages= ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

//uses switch for prompt answers    
switch (true) {
case(weather < 32):
   console.log(`${name}, ${messages[0]}`)
break
  case (weather >= 32 && weather <= 52 && userState == 'NE'):
    console.log(`${name}, ${messages[1]}`)
break
  case(weather >= 32 && weather <= 52 && userState == 'FL') :
    console.log(`${name}, ${messages[2]}`)
break
  case(weather >= 50 && weather <= 70 && userState == 'FL'):
      console.log(`${name}, ${messages[3]}`)
break
}