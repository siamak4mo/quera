n = int( input() )

def MtoN(m,n):
    r = []
    for i in range(n-m+1):
        r.append( i+m )
    
    return(r)


nn = MtoN(1,n)

subSets = [nn]

def solve(mini, p):
    if( len(p) > 1 ):
        for i in range( n, mini-1, -1 ):
            pp = p.copy()
            pp.remove( i )
            subSets.append( pp )
            if( i < pp[ len(pp)-1 ] ):
                solve( i+1, pp )

solve(1, nn)


for sub in subSets:
    line = "{ "
    for num in sub:
        line += str( num ) + " "
    line += "}"
    print(line)

print("{ }")
