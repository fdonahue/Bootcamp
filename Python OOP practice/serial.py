"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
  
    def __init__(self, start=0):
        """Makes generator starting at start"""
        #.next() retrieves the next item from iterator
        self.start = self.next = start

    def __repr__(self):
        """representation"""
        return f"<SerialGenerator start = {self.start}, next ={self.next}"

    def generate(self):
        """ returns next number"""

        self.next += 1
        return self.next - 1

    
    def reset(self):
        """resets number to start"""
        self.next = self.start