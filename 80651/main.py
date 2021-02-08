a, b = [], []

for i in range(6):
    if (i%2 == 0):
        a.append( int( input() ) )
    else:
        b.append( int( input() ) )


result = 0
for j in range(3):
    result += min( a[j],b[j] )

print(result)
