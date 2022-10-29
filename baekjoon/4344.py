n = int(input())

for _ in range(n):
    a = list(map(int, input().split()))
    m = (sum(a) - a[0])/a[0]
    n_over_m = 0
    for i in range(a[0]):
        if a[i+1] > m:
            n_over_m = n_over_m + 1
    print(f'{n_over_m/a[0]*100:.3f}%')
