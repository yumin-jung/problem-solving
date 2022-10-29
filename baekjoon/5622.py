s = list(input())

t = 0

for i in range(len(s)):
    if s[i] in "ABC":
        t += 3
    elif s[i] in "DEF":
        t += 4
    elif s[i] in "GHI":
        t += 5
    elif s[i] in "JKL":
        t += 6
    elif s[i] in "MNO":
        t += 7
    elif s[i] in "PQRS":
        t += 8
    elif s[i] in "TUV":
        t += 9
    elif s[i] in "WXYZ":
        t += 10
    else:
        t += 11

print(t)
