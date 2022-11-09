import sys

n = int(sys.stdin.readline())
a = []

for _ in range(n):
    x, y = sys.stdin.readline().split()
    a.append([int(x), y])

a.sort(key=lambda x: x[0])

for i in range(n):
    print(f'{a[i][0]} {a[i][1]}')
