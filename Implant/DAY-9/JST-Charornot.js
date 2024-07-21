function Check(char)
{
    if((char>='a' || char<='z') || (char>='A' || char<='Z'))
        console.log("It is a character");
    else
        console.log("It is not a character");
}
Check('g');
Check(90);