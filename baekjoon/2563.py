n = int(input())

d = [[0] * 100 for _ in range(100)]

for _ in range(n):
    x, y = map(int, input().split())
    for i in range(10):
        for j in range(10):
            d[i+x][j+y] = 1

print(sum(map(sum, d)))
