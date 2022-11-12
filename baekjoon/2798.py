n, m = map(int, input().split())
a = list(map(int, input().split()))

max = 0

for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            if max < a[i]+a[j]+a[k] <= m:
                max = a[i]+a[j]+a[k]

print(max)
