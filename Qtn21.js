let s=[100,20,31,150,39,72];
var b=s[0];
var c=s[0];
for(let i=1;i<s.length;i++)
{
    if(b<s[i])
    b=s[i];
    else if(c>s[i])
    c=s[i];
}
console.log(b);
console.log(c);
