def my_pow(a, n):
    res = 1
    for i in range(n):
        res *= a
    return res
a, n = map(float, input().split())
n = int(n)
print(my_pow(a, n))