s = input().upper()
a = list(set(s))

cnt = []

for w in a:
    n = s.count(w)
    cnt.append(n)

if cnt.count(max(cnt)) > 1:
    print("?")
else:
    print(a[cnt.index(max(cnt))])
