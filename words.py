def print_upper_words(words):

    for word in words:
        print(word.upper())


def print_upper_words_e(words):

    for word in words:
        if word.startswith('e') or word.startswith('E'):
            print(word.upper())        



def print_upper_words_starts(words, starts_with):

    for word in words:
        for first_letter in starts_with:
            if word.startswith(first_letter):
                print(word.upper())
                break