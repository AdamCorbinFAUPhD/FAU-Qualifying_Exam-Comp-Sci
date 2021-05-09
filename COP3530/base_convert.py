def baseconvert(number, base):
    if number > 0:
        digit = number % base
        baseconvert(number//base, base)
        print(digit, end="")
    else:
        print()

if __name__ == '__main__':
    baseconvert(10, 2)