n = int(input())

for _ in range(n):
    ox = input()
    score = 0
    res = 0
    for i in range(len(ox)):
        if ox[i] == "O":
            score = score + 1
            res = res + score
        else:
            score = 0
    print(res)
