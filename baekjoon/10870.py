n = int(input())

a = 0
b = 1

if n == 0:
    print(a)
elif n == 1:
    print(b)
else:
    for _ in range(1, n):
        c = b
        b = a + b
        a = c
    print(b)
