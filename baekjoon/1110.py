num = int(input())
new_num = num
c = 0

while True:
    c = c + 1
    new_num = (new_num // 10 + new_num % 10) % 10 + (new_num % 10) * 10
    if new_num == num:
        break
print(c)
