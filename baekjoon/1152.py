s = input()

res = len(s.split(" "))
if (s[0] == ' '):
    res -= 1
if (s[-1] == ' '):
    res -= 1
print(res)
