
import math
class Circle:
    def __init__(self, r):
        self.r = r
    def area(self):
        area = 2 * math.pi * self.r * self.r
        return f"Area: {area}"
    def perimeter(self):
        perimeter = self.r * self.r
        return f"Perimeter: {perimeter}"
    
circle = Circle(3)

print(circle.area())
print(circle.perimeter())