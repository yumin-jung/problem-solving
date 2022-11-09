import sys

n = int(sys.stdin.readline())
a = []

for _ in range(n):
    a.append(sys.stdin.readline().strip())

s = set(a)
a = list(s)
a.sort()
a.sort(key=len)

for w in a:
    print(w)
