def last_element(lst):
    """Return last item in list (None if list is empty.
    
        >>> last_element([1, 2, 3])
        3
        
        >>> last_element([]) is None
        True
    """
# -1 is end of list, returns none by default if empty
    if lst:
        return lst [-1]