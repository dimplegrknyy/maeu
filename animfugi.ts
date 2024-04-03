// Define a generic array type that can hold any type of values
class GenericArray<T> {
  private elements: T[] = [];

  // Add an element to the array
  public add(element: T): void {
    this.elements.push(element);
  }

  // Retrieve the array elements
  public getAll(): T[] {
    return this.elements;
  }
}

// Create an instance of GenericArray for strings
const anyTypeString = new GenericArray<string>();
