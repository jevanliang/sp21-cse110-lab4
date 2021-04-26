## Part 1a.
1. values added: 20
2. final result: 20
3. values added: 20
4. There is an error because result is declared using let in the if block and is being called outside of the block in line 13.
5. values added: 0
6. final result: 0

## Part 1b
1. 2 would be printed out. Prices is an array with a length of 3, so i would continue to increment and the loop would continues until the next iteration sees i equal to 3. 
2. 150 would be printed out. discountedPrice gets updated with ever single iteration so a call outside of the loop would log the most recent iteration's values: 300 * 0.5
3. 150 would be printed out. Same as with 2, finalPrice is getting updated with every single iteration so the final one is logged. Luckily we have nice numbers so the math is straightforward. 
4. The function will return the array discounted. discounted is initialized as an empty array at the beginnging of the function and the for loop fills it with the final prices. Nothing is printed because it is not logged.
5. There will be an error because i is being declared using let in the for loop and the log statement is outside that block, so it cannot be accessed from line 12.
6. Same with 5. There will be an error because discountedPrice is being declared using let in the for loop and the log statement is outside that block, so it cannot be accessed from line 13.
7. This would be the same as number 3. Since finalPrice was declared in the function, it can still be accessed in line 14. 150 would be printed. 
8. This would be function like in number 4. The array was initialized within the function and the log statement is within the function. discounted can be returned from line 15.
9. There would be an error because i was declared using let in the for loop and is being called outside of the for loop.
10. 3 would be printed. On line 4, length was set to the length of prices, which is 3. The const keyword does not allow this value to be changed. 
11. discounted would be returned. It is going to be an empty array since it was declared as an empty array using const.
12. A) student.name
    B) student["Grad Year"]
    C) student.greeting
    D) student["Favorite Teacher"].name
    E) student.courseload[0]
13. A) '32' Integers map to their string representation
    B) 1 The inverse of A
    C) 3 null is simply 0
    D) '3null' 3 is a string and null becomes a string that gets concatenated
    E) 4 true is simply 1
    F) 0 both false and null are 0
    G) '3undefined' same as D
    H) NaN undefined becomes NaN when it comes to arithmetic
14. A) true because 2 becomes a number 2
    B) false 2 gets compared with 1
    C) true the string 2 becomes a number
    D) false The objects are of different types
    E) false true is 1
    F) true Boolean(2) is just true so they are of the same type
15. == compares if two things are equals
    === compares two things are equal without type conversion
16. On js file
17. newArr will become [2,4,6] and get returned. modifyArray takes in the given array and uses callback on each element before pushing the modifed value onto newArr.
18. On js file
19. 1234