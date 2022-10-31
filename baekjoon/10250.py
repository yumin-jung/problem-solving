n = int(input())

for _ in range(n):
    H, W, N = map(int, input().split())
    Y = N % H
    X = N // H + 1
    if N % H == 0:
        Y = H
        X = N // H
    print(f'{100*Y+X}')
