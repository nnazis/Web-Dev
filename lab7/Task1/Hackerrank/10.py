def average(array):
    unique_values = set(arr)
    return sum(unique_values) / len(unique_values)

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)