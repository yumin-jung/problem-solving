n, m = map(int, input().split())

A = []
B = []

for i in range(n):
    A.append(list(map(int, input().split())))
for i in range(n):
    B.append(list(map(int, input().split())))

for i in range(n):
    C = [x+y for x, y in zip(A[i], B[i])]
    for j in range(m):
        print(C[j], end=" ")
    print()
