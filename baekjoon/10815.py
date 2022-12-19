import sys

input = sys.stdin.readline

n = int(input())
card = list(map(int, input().split()))
m = int(input())
check = list(map(int, input().split()))

card_dict = {}
for i in range(n):
    card_dict[card[i]] = 1

for i in range(m):
    if check[i] not in card_dict:
        print(0, end=' ')
    else:
        print(1, end=' ')
