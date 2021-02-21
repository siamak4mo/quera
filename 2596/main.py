n = int( input() )
ipt = input().split(' ')

poss0 = 1

for i in range(n):
    ipt[i] = int( ipt[i] )
    poss0 *= ipt[i]

poss = [poss0]

for i in range(1000):
    if( i > len(poss)-1 ):
        break
    for j in range(1000):
        k = poss[i]*(j+2)
        if( k <= 1000 ):
            poss.append( k )
        else:
            break
    else:
        continue

poss = list(dict.fromkeys(poss))

print( len(poss) )
