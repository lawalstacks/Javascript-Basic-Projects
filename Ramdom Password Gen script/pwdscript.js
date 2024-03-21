//This is a random password generator script with settings to select which character set to be included and password length

// function for generated passwords
function generatepwd(length,includeUppercase,includeLowercase,includeNumber,includeSpecial){

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars ="0123456789";
    const specialChars = "!@$%^&*()_+}{|?<>?:.";

    //characters and password are empty unless set to true and password length included
    let allowedchars = "";
    let genpassword = "";

    allowedchars += includeUppercase ? upperChars : "";
    allowedchars += includeLowercase? lowerChars : "";
    allowedchars += includeNumber ? numberChars : "";
    allowedchars += includeSpecial ? specialChars : "";

   if(length <= 0)
   {
    console.log("password length must be greater than 0");
   }

   if(allowedchars === 0)
   {
    console.log("at least one character set should be activated or true");
   }

   for(let i = 0; i < length;i++)
   {
    const random = Math.floor(Math.random() * allowedchars.length);
    genpassword += allowedchars[random];
   }
   return genpassword;
}

//varables for user password settings

const pwdlength = 12;
const uppercase = true;
const lowercase = true;
const number = true;
const special = true;

const password = generatepwd(pwdlength,uppercase,lowercase,number,special);
console.log(password);