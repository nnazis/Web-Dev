from models import Animal, Dog, Cat

def main():
    animals = [
        Dog(name="Rex", age=4, color="black", breed="german shepherd"),
        Cat(name="Murka", age=3, color="white", is_lazy=True),
        Cat(name="Barsik", age=7, color="gray", is_lazy=False),
        Dog(name="Jack", age=1, color="white", breed="Labrador")
    ]

    print("Animals: \n")

    for animal in animals:
        print(animal)
        print(animal.make_sound())
        print(animal.eat())

        if isinstance(animal, Dog):
            print(animal.fetch_ball())
        elif isinstance(animal, Cat):
            print(animal.scratch_things())

        print("-" * 50)
    
    print("\nAll animals are tired and went to sleep")

    for animal in animals:
        print(animal.sleep())
if __name__ == "__main__":
    main()
