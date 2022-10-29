n = int(input())

for _ in range(n):
    l, s = input().split()
    l = int(l)
    res = ""
    for i in range(len(s)):
        res += s[i]*l
    print(res)
