class Animal:
    
    def __init__(self, name: str, age: int, color: str):
        self.name = name
        self.age = age
        self.color = color
        self.energy = 100 
        
    def eat(self) -> str:
        self.energy = min(100, self.energy + 30)
        return f"{self.name} ate, now the energy is: {self.energy}%"
    
    def sleep(self) -> str:
        self.energy = min(100, self.energy + 50)
        return f"{self.name} slept, now the energy is: {self.energy}%"
    
    def make_sound(self) -> str:
        return "The animal says"
    
    def __str__(self) -> str:
        return (f"{self.__class__.__name__}: {self.name}, "
                f"{self.age} years old, color: {self.color}, "
                f"energy {self.energy}%")


class Dog(Animal):
    
    def __init__(self, name: str, age: int, color: str, breed: str):
        super().__init__(name, age, color)
        self.breed = breed  
        
    def make_sound(self) -> str:      
        return f"{self.name} says Whoof-whoof"
    
    def fetch_ball(self) -> str:          
        self.energy = max(0, self.energy - 25)
        return f"{self.name} brought a ball, the energy now is → {self.energy}%"


class Cat(Animal):
    def __init__(self, name: str, age: int, color: str, is_lazy: bool = True):
        super().__init__(name, age, color)
        self.is_lazy = is_lazy           
        
    def make_sound(self) -> str:         
        if self.is_lazy:
            return f"{self.name} says lazy meoww.."
        return f"{self.name} says actively MEOWW"
    
    def scratch_things(self) -> str:   
        self.energy = max(0, self.energy - 15)
        return f"{self.name} scratched the sofa, the energy now is → {self.energy}%"