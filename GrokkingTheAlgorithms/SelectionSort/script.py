def selectionSort(array):
    # establish currentIdx variable
    currentIdx = 0
    # loop through our array
    while currentIdx < len(array) - 1:
        # establish first number as smallest number
        smallestIdx = currentIdx

        for i in range(currentIdx + 1, len(array)):
            if array[smallestIdx] > array[i]:
                smallestIdx = i
        swap(currentIdx, smallestIdx, array)
        currentIdx += 1
    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


print(selectionSort([5, 3, 6, 2, 10]))
