A, B, V = map(int, input().split())

d = (V-B)/(A-B)
res = int(d)

if res == d:
    print(res)
else:
    print(res+1)
