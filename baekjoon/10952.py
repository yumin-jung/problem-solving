a, b = input().split()
a = int(a)
b = int(b)

while not (a == 0 and b == 0):
    print(a+b)
    a, b = input().split()
    a = int(a)
    b = int(b)
