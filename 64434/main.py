inpt = input().split(' ')

for i in range(2):
    inpt[i] = int( inpt[i] )

n, m  = inpt[0], inpt[1]

k = 0  # 0 for . and 1 for X
string = ''



def mk_n_lines( line ):
    ss = ''
    for i in range(n):
        ss += line + '\n'
    return ss


def mkChert( k ):
    ss = ''
    for i in range(m):
        ss += '.' if (k==0) else 'X'
    return ss


line = ''
for i in range(3):
    for j in range(3):
        k = 0 if (k==1) else 1
        line += mkChert( k )
    string += mk_n_lines( line )
    line = ''



print( string )
