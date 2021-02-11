k = int( input() )

n=0
while( 1 ):
    n += 1
    num = int ( n*(n+1)/2 )
    
    mag = 0
    for j in range( 1, num+1 , 1 ):
        if( num % j == 0 ):
            mag += 1

    if( mag >= k ):
        print( num )
        break
