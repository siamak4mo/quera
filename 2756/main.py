n = int ( input() )
num2, num5 = 0, 0
for i in range(n):
    if( input() == '2' ):
         num2 += 1
    else:
         num5 += 1


# x = 5^n5 * 2^(-n2)  =>  2^n2 * x = 5^n5
a,b,c = 0,0,0
# => 5^n2 * 2^n2 * x = 5^(n2+n5)
a = 5
b = num2 + num5
c = -num2
    

print(a,b,c)
