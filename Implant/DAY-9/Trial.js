var course= "Web development";
var fee= 2200;
console.log("The fee of this ",course,"is",fee);

function arear()
{
    var l=10;
    var b=32;
    console.log(l*b);
}
arear();

function areac(pi,r)
{
    console.log(pi*r*r);
}
areac(3.14,4);

function find(num)
{
    if(num%2==0){
        console.log("EVEN");}
    else{
        console.log("ODD");}
}
find(34);
function gcd(a,b)
{
    if(b===0)
        {
            return a;
        }
    return gcd(b,a%b);
}
var GCD=gcd(12,18);
console.log(GCD);
function Check(char)
{
    if((char>='a' || char<='z') || (char>='A' || char<='Z'))
        console.log("It is a character");
    else
        console.log("It is not a character");
}
Check('g');
Check(90);
for(var i=1; i<=5 ; i++)
{
    console.log(i);
}
var s="KRITHICK";
console.log(s.charAt(0));
console.log(s[0]);
console.log(s.lastIndexOf("I"));
