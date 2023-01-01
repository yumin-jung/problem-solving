n, m = map(int,input().split())

while n != 0 or m !=0:
    if m % n == 0:
        print("factor")
    elif n % m == 0:
        print("multiple")
    else:
        print("neither")
    n, m = map(int,input().split())