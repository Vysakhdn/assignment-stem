let s="This is something boring";
for(let i=0;i<s.length;i++){
    if((s[i]!="a")&&(s[i]!="A")&&(s[i]!="e")&&(s[i]!="E")&&(s[i]!="i")&&(s[i]!="I")&&(s[i]!="o")&&(s[i]!="O")&&(s[i]!="u")&&(s[i]!="U")){
        console.log(s[i]);
    }
}