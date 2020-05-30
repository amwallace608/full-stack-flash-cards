//const array of JavaScript Interview Questions
export const JSQUESTIONS = [
					{
						question: "What is Javascript?",
						answer:
							"Javascript is a lightweight, interpreted object-oriented programming language that allows us to build interactivity into otherwise static HTML pages",
					},
					{
						question: "What is the difference between Java and JavaScript?",
						answer:
							"Java is a complete object oriented programming (OOPS) or structured programming language (like c/c++)," +
							" whereas JS is a client-side scripting language that can be introduced into HTML pages",
					},
					{
						question: "What are the Data Types supported by JS? (primitives)",
						answer: "Undefined, Null, Boolean, String, Symbol, Number, Object",
					},
					{
						question: "What are the features of JS?",
						answer:
							"-Object based scripting language \n" +
							"-Lightweight, interpreted programming language \n" +
							"-Designed for creating network-centric applications: handles dates/times, detects browser/OS\n" +
							"-Complementary to and integrated with both HTML and Java\n" +
							"-Open and cross-platform",
					},
					{
						question: "Is JS a case-sensitive language?",
						answer:
							"Yes, the language keywords, variables, function names, and any other identifiers must be have consistent capitalization.",
					},
					{
						question: "What are the advantages of JS?",
						answer:
							"-Less server interaction\n" +
							"-Gives immediate feedback to users\n" +
							"-Increased interactivity\n" +
							"-Richer interfaces",
					},
					{
						question: "How can you create an object in Javascript?",
						answer:
							"Can use constructors to create objects: use constructor function syntax to define the object by defining the object’s constructor function",
					},
					{
						question: "How can you create an array in Javascript?",
						answer:
							"Declare a variable using square brackets in initialization (e.g var x = []; or var y = [1,2,3];",
					},
					{
						question: "What is a named function in JS and how to define it?",
						answer:
							"A function (declared with the function keyword) defined with a name so it can be called anywhere in its defined scope",
					},
					{
						question:
							"Can you assign an anonymous function to a variable and pass it as an argument to another function?",
						answer:
							"Yes, an anonymous function can be assigned to a variable and also passed as an argument to another function",
					},
					{
						question:
							"What is the arguments object in JS and how can you get the type of arguments passed to a function?",
						answer:
							"An array-like object accessible inside a function that contains the values of the arguments passed to it.\n" +
							"Use the typof operator on the elements of the arguments array to get their type",
					},
					{
						question: "What are the scopes of a variable in JavaScript?",
						answer:
							"-Global Scope: visible/accessible everywhere\n" +
							"-Local/Block Scope: visible/accesible only within a function/block where it is defined",
					},
					{
						question: "What is the purpose of the ‘this’ operator in JS?",
						answer:
							"This always refers to the owner of the function being executed, or rather to the object that the function is a method of. Refers to the object it belongs to.",
					},
					{
						question: "What is Callback?",
						answer:
							"A callback is a plain JS function passed to some method as an argument or option.\n" +
							"Some callbacks are events that are called to give the user a chance to react when a certain state is triggered.",
					},
					{
						question: "What is Closure? Give an example",
						answer:
							"Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope.\n" +
							"Basically provides access to an outer function’s scope from an inner function.",
					},
					{
						question: "What are the variable naming conventions in JS?",
						answer:
							"-Do not use any of the reserved keywords as variable names\n" +
							"-Variable names should not start with a numeral\n" +
							"-Variable names are case sensitive",
					},
					{
						question: "How does the TypeOf Operator work?",
						answer:
							"Typeof is a unary operator that is placed before its single operand, which can be of any type. Its value is a string indicating the data type of the operand.",
					},
					{
						question: "How do you create a cookie using JS?",
						answer:
							"Simplest way - assign a string value to the Document.cookie object.\n" +
							"e.g Document.cookie = 'key1 = value1; key2 = value2; expires = date'",
					},
					{
						question: "How do you read a cookie using JS?",
						answer:
							"Document.cookie string will keep a list of name = value pairs separated by semicolons.\n" +
							"You can use strings’ split() function to break the string into keys and values",
					},
					{
						question: "How do you delete a cookie using JS?",
						answer:
							"Set the expiration date for the cookie to a time in the past",
					},
					{
						question: "What is the difference between attributes and property?",
						answer:
							"-Attributes are defined by HTML, all the definitions inside an HTML tage are attributes, and attributes are always strings\n" +
							"-Properties belong to the DOM, which is of an object nature. You can get and set properties like a normal object, and they can be any type",
					},
					{
						question:
							"List out the different ways an HTML element can be accessed in JS code",
						answer:
							"getElementById(), getElementsByClass(), getElementsByTagName(), querySelector()",
					},
					{
						question:
							"What are the ways that JS can be integrated into an HTML file?",
						answer:
							"-Inline/Internal: an inline script tag in the HTML file containing a JS function which is assigned to a variable created at runtime\n" +
							"-External: a separate JS file is linked with the HTML file via a script tag",
					},
					{
						question:
							"What are the three ways to define a variable in JS? (Including ES6)",
						answer: "var, const, and let",
					},
					{
						question: "What is a Typed language?",
						answer:
							"-Strongly/Statically typed (Java/C): variables are defined as a specific type, and can only hold values of strictly that type\n" +
							"-Weakly/Dynamically typed (JS): variables aren't defined as a specific type, and can hold values of multiple types",
					},
					{
						question:
							"What is the difference between Local Storage and Session Storage?",
						answer:
							"-Local: stored data will persist after the browser session ends, until it is manually cleared" +
							"-Session: stored data will not persist after the browser session ends",
					},
					{
						question:
							"What is the difference between the ‘==’ and ‘===’ operators?",
						answer:
							"The double equals operator compares only value, while the triple equals operator compares both value and type",
					},
					{
						question: "What is the difference between null and undefined?",
						answer:
							"-undefined: an object/variable was declared, but not defined, or a referenced property doesn't exist in an object.\n" +
							"-null: represents an empty or non-existent value. null must be assigned manually in code",
					},
					{
						question:
							"What is the difference between undeclared and undefined?",
						answer:
							"-undeclared: the variable/object does not exist within the current context\n" +
							"-undefined: the variable/object has been declared, but not defined/assigned a value",
					},
					{
						question: "Name a few popular JS frameworks",
						answer: "Angular.js, Vue.js, Express.js",
					},
					{
						question:
							"What is the difference between window and document in JS?",
						answer:
							"-Window: global object representing the browser window, holding variables, functions, history, and location\n" +
							"-Document: subset of the window, can be considered a property of the window",
					},
					{
						question: "What is the difference between innerHTML and innerText?",
						answer:
							"innerHTML will process an HTML tag if found in a string, while innerText will not",
					},
					{
						question: "What is event bubbling in JS?",
						answer:
							"When nested elements have handlers for the same event: the event is handled by the innermost element first, and then propagated to the outer elements",
					},
					{
						question: "What is NaN in JS?",
						answer:
							"Not a Number - can be produced when you try to convert a string to a number and it is impossible",
					},
					{
						question:
							"How are JS primitives passed in functions? How are JS objects passed in functions?",
						answer:
							"Primitives are passed by value, and objects are passed by reference",
					},
					{
						question:
							"How can you convert a string of any base to an integer in JS?",
						answer:
							"parseInt(string, base) - where string is the string to convert, and base is the numeric base",
					},
					{
						question: "What would be the result of 2+5+”3”?",
						answer:
							"73 - the result of 2+5 is concatenated with the 3 surrounded by double quotes because it is a string",
					},
					{
						question: "What are Imports and Exports?",
						answer:
							"Imports and exports allow us to split up JS code into multiple files so we can use external JS libraries/frameworks, and make our code more modular",
					},
					{
						question:
							"What is the ‘Strict’ mode in JS and how can it be enabled?",
						answer:
							"Strict mode is a way to introduce better error checking into your code. Add 'use strict' at the begging of a file or function to enable it.",
					},
					{
						question: "What is a prompt box in JS?",
						answer:
							"The product of using the prompt() method - a dialogue box with a label and a text box which allows a user to provide text input according to the prompt.",
					},
					{
						question:
							"What would be the output of this code?\n" +
							"var y = 1;\n" +
							"If (function F(){}) {\n" +
							"  y += typeof F;\n" +
							"}\n" +
							"console.log(y);",
						answer: "1undefined",
					},
					{
						question: "What is the difference between Call and Apply?",
						answer:
							"Apply allows you to invoke a function with arguments as an array, while Call requires the arguments to be listed individually",
					},
					{
						question:
							"What are the different methods for emptying an Array in JS?",
						answer:
							"1. myArray = []; //set the array to a new empty array\n" +
							"2. myArray.length = 0; //reset the length to 0\n" +
							"3. myArray.splice(0, myArray.length); //use the splice method to remove all array elements" +
							"4. while(myArray.length > 0){myArray.pop();} //loop through the array and pop each element",
					},
					{
						question:
							"What would be the output of this code?\n" +
							"var output = (function(x) {\n" +
							"  delete x;\n" +
							"  return x;\n" +
							"})(0);\n" +
							"console.log(output);",
						answer:
							"0 - delete is used to delete properties from an object. Since x is not an object, and was passed by value, the original reference is not affected",
					},
					{
						question:
							"What would be the output of this code?\n" +
							"var x = {foo: 1};\n" +
							"var output = (function() {\n" +
							"  delete x.foo;\n" +
							"  return x.foo;\n" +
							"}) ();\n" +
							"console.log(output);",
						answer:
							"undefined - x.foo was deleted, x is an object, and passed by reference",
					},
					{
						question:
							"What would be the output of this code?\n" +
							"var employee = {company: 'xyz'};\n" +
							"var emp1 = Object.create(employee);\n" +
							"delete emp1.company;\n" +
							"console.log(emp1.company);",
						answer:
							"xyz - emp1 inherits company prototype property from the employee object, which JS would use after emp1 had its company property deleted",
					},
					{
            question: "What would be the result of this code?\n" + 
            "var foo = function Bar() {return 7};\n" + 
            "typeof Bar();",
						answer: "The result would be a reference error. A function definition can only have one reference variable as its name",
					},
					{
						question: "What is the reason for wrapping the entire contents of a JS file's code in a function block? (i.e an IIFE)",
            answer: "Creates a closure around the content, which creates a private namespace, and helps avoid potential name clashes between different modules and libraries.\n" + 
            "It also allows for defining easily referenceable aliases for global variables",
					},
					{
						question: "What are escape characters in JS?",
						answer: "Backslash \\ - used to include/display special characters in a string",
					},
				];
