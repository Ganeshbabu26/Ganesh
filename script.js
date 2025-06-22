document.write("Prime numbers between 1 and 100 are: <br>");

let i, j;
n = 100
for(i = 2;i<=n;i++)
{
    for(j = 2;j<i;j++)
    {
        if(i%j==0)
        {
            break;
        }
    }
    if(i==j)
    {
        document.write(i,", ");
    }
}