s = input()

if( len(s) == 1 ):
    print(s)
else:
    ss = ''
    for i in range(len(s)-1,-1,-1):
        ss += s[i]
    print(ss)
