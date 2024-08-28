import math
import numpy as np

def basic_operations():
    operation = input("Masukkan operasi (+, -, *, /): ")
    num1 = float(input("Masukkan angka pertama: "))
    num2 = float(input("Masukkan angka kedua: "))

    if operation == "+":
        print(f"Hasil: {num1 + num2}")
    elif operation == "-":
        print(f"Hasil: {num1 - num2}")
    elif operation == "*":
        print(f"Hasil: {num1 * num2}")
    elif operation == "/":
        if num2 != 0:
            print(f"Hasil: {num1 / num2}")
        else:
            print("Error: Pembagian dengan nol tidak diizinkan.")
    else:
        print("Operasi tidak valid.")

def factorial_operation():
    num = int(input("Masukkan angka untuk faktorial: "))
    print(f"Hasil: {math.factorial(num)}")

def sqrt_operation():
    num = float(input("Masukkan angka untuk akar pangkat: "))
    print(f"Hasil: {math.sqrt(num)}")

def exponentiation_operation():
    base = float(input("Masukkan basis: "))
    exp = float(input("Masukkan eksponen: "))
    print(f"Hasil: {math.pow(base, exp)}")

def matrix_operations():
    print("Masukkan dimensi matriks (contoh: 2 2 untuk matriks 2x2):")
    rows, cols = map(int, input().split())

    print("Masukkan elemen-elemen matriks A:")
    A = []
    for _ in range(rows):
        A.append(list(map(int, input().split())))

    print("Masukkan elemen-elemen matriks B:")
    B = []
    for _ in range(rows):
        B.append(list(map(int, input().split())))

    A = np.array(A)
    B = np.array(B)

    operation = input("Pilih operasi matriks (+, -, *): ")

    if operation == "+":
        print(f"Hasil:\n{A + B}")
    elif operation == "-":
        print(f"Hasil:\n{A - B}")
    elif operation == "*":
        print(f"Hasil:\n{np.dot(A, B)}")
    else:
        print("Operasi tidak valid.")

def arithmetic_sequence():
    first_term = float(input("Masukkan suku pertama: "))
    difference = float(input("Masukkan beda (difference): "))
    n = int(input("Masukkan jumlah suku yang diinginkan: "))

    sequence = [first_term + i * difference for i in range(n)]
    print(f"Deret aritmatika: {sequence}")

def calculator():
    print("Pilih operasi:")
    print("1. Operasi Dasar (+, -, *, /)")
    print("2. Faktorial")
    print("3. Akar Pangkat")
    print("4. Eksponen")
    print("5. Operasi Matriks")
    print("6. Deret Aritmatika")
    
    choice = input("Masukkan pilihan (1/2/3/4/5/6): ")

    if choice == "1":
        basic_operations()
    elif choice == "2":
        factorial_operation()
    elif choice == "3":
        sqrt_operation()
    elif choice == "4":
        exponentiation_operation()
    elif choice == "5":
        matrix_operations()
    elif choice == "6":
        arithmetic_sequence()
    else:
        print("Pilihan tidak valid.")

if __name__ == "__main__":
    calculator()
