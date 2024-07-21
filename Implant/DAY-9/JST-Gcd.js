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