import sys

n = int(input())
a = [0] * 10001

for _ in range(n):
    a[int(sys.stdin.readline())] += 1

for i in range(10001):
    if a[i] != 0:
        for _ in range(a[i]):
            print(i)
