a, b = input().split()
c = input()

a = int(a)
b = int(b)
c = int(c)

a = a + c // 60
b = b + c % 60

if (b >= 60):
    b = b - 60
    a = a + 1

while (a >= 24):
    a = a - 24

print(f'{a} {b}')
