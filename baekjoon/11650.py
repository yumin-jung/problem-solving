import sys

n = int(sys.stdin.readline())
a = []

for i in range(n):
    [x, y] = map(int, sys.stdin.readline().split())
    a.append([x, y])

a = sorted(a)

for i in range(n):
    print(f'{a[i][0]} {a[i][1]}')
