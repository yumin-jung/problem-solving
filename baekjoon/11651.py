import sys

n = int(sys.stdin.readline())
a = []

for i in range(n):
    [x, y] = map(int, sys.stdin.readline().split())
    a.append([y, x])

a = sorted(a)

for i in range(n):
    print(f'{a[i][1]} {a[i][0]}')
