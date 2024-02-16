"""Word Finder: finds random words from a dictionary."""

import random

   

class WordFinder:
    """finds random words from a dictionary"""


    def __init__(self, path):
        """upon initializing, totals the amount of words in path list"""

        dict_file = open(path)

        self.words = self.parse(dict_file)

        print(f"{len(self.words)} words read")

    def parse(self, dict_file):
        #.strip() removes all white space at beginning and end of string
        return [w.strip() for w in dict_file]
    
    def random(self):
        """ chooses random word from list of words"""
        #random.choice() returns random element from specified sequence
        return random.choice(self.words)



#  file = open("words.txt", "r")

 #   for line in file:
  #      print(f)

 #   file.close() 
class SpecialWordFinder(WordFinder):
    #creates new class that still uses WordFinder functions

    def parse(self, dict_file):
        # removes blank spaces and comments starting with #
        return [w.strip for w in dict_file
                if w.strip() and not w.startswith("#")] 