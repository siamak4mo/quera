nk = input()
[n, k]  = nk.split(' ')
[n, k]  = int(n), int(k)

def getWinner():
    one_indexes = []
    for i in range(len( players )):
        if( len(one_indexes) > 2 ):
            return('')
        else:
            if( players[i][0] == 1 or players[i][1] == 1):
                one_indexes.append(i)
    if( len(one_indexes) == 1 or ( one_indexes[0] == one_indexes[1] )):
        return( str(one_indexes[0]) )
    else: return('')


def pi_of_cursor( c ):
    return int( ( c%(2*n) )/2)


def li_of_cursor( c ):
    return ( c%(2*n) )%2

def isOne_cursor( c ):
    return ( players[pi_of_cursor(c)][li_of_cursor(c)] != 1 )


def ones(n):
    result = []
    for i in range(n):
        result.append([1,1])
    return result




players = ones(n)
winner  = ''

cursor  = 0
toprint = ''


while( winner == '' ):
    print_ln = ''
    for i in range(k):
        while( isOne_cursor( cursor ) ):
            cursor += 1
        print_ln += str( pi_of_cursor( cursor ) )
        cursor += 1
    players[ pi_of_cursor(cursor) ][li_of_cursor(cursor)] = 0
    winner = getWinner()
    toprint += print_ln + '\n'

print(toprint)


