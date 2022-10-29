a = []
for i in range(9):
    a.append(list(map(int, input().split())))

max_val = max(map(max, a))
print(max_val)

for i in range(9):
    for j in range(9):
        if a[i][j] == max_val:
            print(f'{i+1} {j+1}')
