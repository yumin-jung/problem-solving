num = input()
num = int(num)

for i in range(num):
    a, b = input().split()
    print(f'Case #{i+1}: {int(a)+int(b)}')
