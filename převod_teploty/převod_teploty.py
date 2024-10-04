def převod(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

celsius_jo = float(input("Zadejte stpně v celsiu:"))

fahrenheit_třeba = převod(celsius_jo)
print(f"Je to {fahrenheit_třeba}F")
