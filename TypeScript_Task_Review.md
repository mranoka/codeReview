# Feedback for Caesar Cipher TypeScript Task

## Correctness
There are a few of syntax errors in your code:
1. Naming and assigning your function on **line 5**: lowerCamelCase is the standard for naming functions/methods in TypeScript. Furthermore, while using generics makes code reusable among other benefits, it is not necessary here as the function works exclusively with strings. Take a look at this [style-guide](https://google.github.io/styleguide/tsguide.html) for TypeScript.

2. As for declaring your function (**line 5**), the shortest and best way is to use the function keyword followed by the name of your function, for example: `function printHelloWorld(): void {}`. Also, don't forget to add a return type for your function. This not only helps make you code more readable, it also follows typing convention.

3. On **line 13** you are comparing the paramter *`shift`* with a number. There's a compilation error here because *`shift`* is a string and *`26`* is a number and since TypeScript is a strongly typed language, the code will not compile.

4. On **line 51**, to print the result, rather use `console.log()` instead of the `print()` method which requires extra configuration. `console.log()` is not only widely used but has the benefit of requiring no extra configuration. 

Fix the minor mistakes I have pointed out above and your code should compile and run as desired and best of all, give the desired output! Overall, you have managed to solve the problem and the flow of your code demonstrates a profound understanding of the problem. 
For example, on **line 21** the anticipation that the encrypted string may contain special chatacters illustrates aforementioned the deep understanding. Keep it up!



## Style
1. To make you code easy to read for other developers, give your function parameters and variables contextual and meaningful names. That way, any developer can easily follow and understand what the code does and this includes future you! On **line 5** you can change the paramter called *string* to something more meaningful like *encryptedString*. The variable name *encodedText* on **line 10** is another example of a variable you can give a name that is more meaningful and contextual.

2. I would also advise that you install an extension to indent your code for you if you use Visual Studio Code. Most other IDEs have built-in code indentation tools. This will help make sure that your code is well indented and thus neat and easy to read.

3. When you have expressions in your code that are long, it is often good practice to separate the individual parts of the expression so as to make it easier to read your code: this can be done easily using parenthesis: on **line 33**  the expression could be `encodedText += alphabet[(alphabetIndex + shift )- 26]`.

Overall, your coding style makes it easy to follow the flow of your code and formatting isn't much of an issue. I had not trouble at all figuring out what the code does. 

## Documentation
Sometimes it is necessary to add comments to explain what a line/block of code does and sometimes it isn't. Sometimes it is quite obvious what the code does and it is the opinion of many seasoned developers that comments in code should be used sparingly and only when needed. 

You have extensively documented your code however, there are instances where documentation is not necessary like on **line 42 and 38** because the code is self-explanatory.

## Efficiency
On **line 2**, you do not need to use the type alias given the level of complexity of your function. Other than that, I do not see any major inefficiencies in your code in fact, you have a piece of very well-written and efficient code. Again, keep it up!

