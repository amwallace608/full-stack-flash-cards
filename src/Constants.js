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
			"Declare a variable using square brackets in initialization\n" +
			" e.g var x = []; or var y = [1,2,3];",
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
		answer: "Set the expiration date for the cookie to a time in the past",
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
		question: "What are the ways that JS can be integrated into an HTML file?",
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
		question: "What is the difference between the ‘==’ and ‘===’ operators?",
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
		question: "What is the difference between undeclared and undefined?",
		answer:
			"-undeclared: the variable/object does not exist within the current context\n" +
			"-undefined: the variable/object has been declared, but not defined/assigned a value",
	},
	{
		question: "Name a few popular JS frameworks",
		answer: "Angular.js, Vue.js, Express.js",
	},
	{
		question: "What is the difference between window and document in JS?",
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
		question: "How can you convert a string of any base to an integer in JS?",
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
		question: "What is the ‘Strict’ mode in JS and how can it be enabled?",
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
		question: "What are the different methods for emptying an Array in JS?",
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
		question:
			"What would be the result of this code?\n" +
			"var foo = function Bar() {return 7};\n" +
			"typeof Bar();",
		answer:
			"The result would be a reference error. A function definition can only have one reference variable as its name",
	},
	{
		question:
			"What is the reason for wrapping the entire contents of a JS file's code in a function block? (i.e an IIFE)",
		answer:
			"Creates a closure around the content, which creates a private namespace, and helps avoid potential name clashes between different modules and libraries.\n" +
			"It also allows for defining easily referenceable aliases for global variables",
	},
	{
		question: "What are escape characters in JS?",
		answer:
			"Backslash \\ - used to include/display special characters in a string",
	},
];

export const REACT_QUESTIONS = [
	{
		question: "Differentiate between Real DOM and Virtual DOM",
		answer:
			"1.Virtual DOM updates faster than Real DOM\n" +
			"2.Virtual DOM can't directly update HTML, while Real DOM can\n" +
			"3.Virtual DOM only updates the JSX if an element updates, while Real DOM creates a whole new DOM\n" +
			"4.DOM manipulation is very easy with Virtual DOM, but very expensive with Real DOM\n" +
			"5.Real DOM has notable memory wastage, while Virtual DOM doesn't",
	},
	{
		question: "What is React?",
		answer:
			"-React is a front-end JavaScript library developed by Facebook\n" +
			"-React uses a component based approach for building reusable UI components\n" +
			"-React is used for developing complex and interactive web and mobile UI\n" +
			"-React is open-source, with a huge community supporting it",
	},
	{
		question: "What are the three major features of React?",
		answer:
			"1.Uses Virtual DOM\n" +
			"2.Uses server-side rendering\n" +
			"3.Follows uni-directional data flow, or one-way data binding",
	},
	{
		question: "List some major advantages of React",
		answer:
			"-Increases application performance\n" +
			"-Can be conveniently used on both client and server side\n" +
			"-Increased readability of code with JSX\n" +
			"-Easily integrated with other frameworks and libraries\n" +
			"-Makes writing UI test cases very easy",
	},
	{
		question: "What are the limitations of React?",
		answer:
			"-React is a library, not a full framework\n" +
			"-React library is very large, and takes time to understand\n" +
			"-With inline templating and JSX coding can get complex\n" +
			"-Can be difficult for novice programmers to understand",
	},
	{
		question: "What is JSX?",
		answer:
			"Shorthand for JavaScript XML - utilizes the full power of Javascript along with HTML-like template syntax, making the HTML file easy to understand",
	},
	{
		question: "Give a basic explanation of how the Virtual DOM works",
		answer:
			"1.Whenever underlying data chagnes, the entire UI is re-rendered in the Virtual DOM representation\n" +
			"2.The difference between the previous DOM (held by the Real DOM) and the new Virtual DOM is calculated\n" +
			"3.Only the calculated changes from the Virtual DOM are updated on the Real DOM",
	},
	{
		question: "Why can't browsers read JSX?",
		answer:
			"Browsers can only read JavaScript (JS) objects, and JSX is not a regular JS object." +
			" JSX files must be transformed into a JS object using JSX transformers like Babel before being passed to the browser",
	},
	{
		question: "How has React's syntax changed from ES5 to ES6?",
		answer:
			"1.ES5 had require, ES6 has import\n" +
			"2.ES5 had exports (module.exports = Component), ES6 has export (export default Component)\n" +
			"3.ES5 had createClass method for creating components (var MyComp = React.createClass({...})), ES6 has class keyword and Component class (class MyComp extends Component)\n" +
			"4.Had to define propTypes for props in ES5, but not in ES6\n" +
			"5.Had to define getInitialState method to set up state when creating class in ES5, can simply define this.state object in ES6",
	},
	{
		question: "What are the major differences between React and Angular?",
		answer:
			"1.Architecture: Angular is the complete MVC, React is just the View\n" +
			"2.Rendering: Angular has client-side rendering, React has server-side\n" +
			"3.DOM: Angular uses Real DOM, React uses Virtual DOM\n" +
			"4.Data Binding: Angular has two-way data binding, React has one-way\n" +
			"5.Debugging: Angular uses runtime debugging, React uses compile time debugging\n" +
			"6.Authors: Angular created by Google, React by Facebook",
	},
	{
		question:
			"Explain your understanding of 'In React, everything is a component'",
		answer:
			"Components are the building blocks of a React app's UI." +
			" Components split up the UI into small independant and reusable pieces. Components are rendered independently without affecting the rest of the UI",
	},
	{
		question: "Explain the purpose of render() in React",
		answer:
			"Each React component must have a render() method, which returns a single React element representation of the native DOM component." +
			" Multiple HTML elements can be rendered by grouping them together under a singular parent element, like a <div>.",
	},
	{
		question: "How can you embed two or more components into one?",
		answer:
			"A component can be embedded into the JSX of another components render method return statement.",
	},
	{
		question: "What are 'Props' in React?",
		answer:
			"Shorthand for properties - immutable/read-only data passed from parent to child components. Generally used to render dynamically generated data",
	},
	{
		question: "What is a 'state' in React, and how is it used?",
		answer:
			"States are the heart of React components - mutable objects which determine rendering and behavior of the component. " +
			"Used to create dynamic and interactive components, and accessed via this.state",
	},
	{
		question: "Differentiate between states and props",
		answer:
			"1.Parent components can change the value of props for a child component, but not state\n" +
			"2.Both state and props can receive initial values from a parent component\n" +
			"3.You can set default values for both state and props inside a component\n" +
			"4.You can make changes to state inside a component, but not props\n",
	},
	{
		question: "How can you update the state of component?",
		answer: "Using this.setState()",
	},
	{
		question: "What is an arrow function in React? How is it used?",
		answer:
			"Arrow functions () => {} are a brief syntax for writing function expressions." +
			" They allow you to properly bind the context of components, since in ES6 auto binding is not available by default." +
			" Arrow functions are mostly useful while working with higher order functions",
	},
	{
		question: "Differentiate between stateful and stateless components",
		answer:
			"1.Stateful components store info about state change in memory, while stateless components calculate the internal state of the component\n" +
			"2.Stateful components have the authority to change state, while stateless components do not\n" +
			"3.Stateful components contain the knowledge of past, current, and possible future changes in state, while stateless components do not\n" +
			"4.Stateful components are notified by stateless components about the requirement of the state change, " +
			"and stateless components receive props from the stateful components and treat them as callback functions",
	},
	{
		question:
			"What are the three basic phases of a React component's lifecycle?",
		answer:
			"1.Initial Rendering Phase: the component is about to start its life journey and make its way to the DOM\n" +
			"2.Updating Phase: Once added to the DOM, the component can potentially update and re-render when a prop or state change occurs.\n" +
			"3.Unmounting Phase: The final phase, where the component is destroyed and removed from the DOM",
	},
	{
		question: "Explain the lifecycle methods of React components",
		answer:
			"1.componentWillMount(): executed just before rendering on both the client and server-side\n" +
			"2.componentDidMount(): executed client side only after the first render\n" +
			"3.componentWillReceiveProps(): invoked as soon as props are received from the parent and before another render is called\n" +
			"4.shouldComponentUpdate(): returns boolean value based on specified conditions. Return true if you want the component to update, otherwise return false. Default value is false\n" +
			"5.componentWillUpdate(): called just before rendering takes place in the DOM\n" +
			"6.componentDidUpdate(): called immediately after rendering\n" +
			"7.componentWillUnmount(): called after the component is unmounted from the DOM - used to clear up memory spaces",
	},
	{
		question: "What is an event in React?",
		answer:
			"The triggered reactions to specific actions like mouse click, hover, key press, etc. " +
			"Events are passed as functions instead of strings. The event argument contains a set of properties specific to an event.",
	},
	{
		question: "How do you create an event in React?",
		answer:
			"class Display extends Component {\n" +
			"    show(evt) {\n" +
			"        //code \n" +
			"    },\n" +
			"    render() {\n" +
			"      return(\n" +
			"        <div onClick={this.show}>ClickMe</div>\n" +
			"      );\n" +
			"    }\n" +
			"}",
	},
	{
		question: "What are synthetic events in React?",
		answer:
			"The objects which act as a cross-browser wrapper around the browser's native event. " +
			"They combine the behavior of different browsers into one API, to make sure that the events show consistent properties across different browsers.",
	},
	{
		question: "Explain your understanding of 'refs' in React",
		answer:
			"Short hand for References. An attribute which helps to store a reference to a particular React element/component, " +
			"which will be returned by the component's render configuration function." +
			"Used to return references to an element/component returned by render()." +
			"Handy when DOM measurements are needed, or you need to add methods to the components",
	},
	{
		question: "List some of the cases where refs should be used",
		answer:
			"-When you need to manage focus, select text, or media playback\n" +
			"-To trigger imperative animations\n" +
			"-Integrating with third-party DOM libraries",
	},
	{
		question: "How do you modularize code in React?",
		answer:
			"You can modularize code by using the export and import properties and writing components seperately in different files.",
	},
	{
		question: "How are forms created in react?",
		answer:
			"Similarly to HTML forms, but the state is contained in the state property of the component and is only updated via setState(). " +
			"So the elements can't directly update their state, and their submission is handled by a JS function that has full access to the data entered into the form by the user.",
	},
	{
		question: "Differentiate between Controlled and Uncontrolled components",
		answer:
			"1.Uncontrolled components maintain their own state, while controlled components do not\n" +
			"2.In uncontrolled components data is controlled by the DOM, while data is controlled by the parent in controlled components\n" +
			"3.Controlled components take in the current values through props and then notify the changes via callbacks, while uncontrolled components use refs to get their current values",
	},
	{
		question: "What are Higher Order Components (HOCs)?",
		answer:
			"An advanced way of reusing component logic - basically a pattern derived from React's compositional nature. " +
			"Custom components which wrap another component. " +
			"HOCs can accept any dynamically provided child component, but they won't modify or copy any behavior from their input components." +
			"Can say that HOCs are 'pure' components",
	},
	{
		question: "What can you do with HOCs?",
		answer:
			"-Logic and bootstrap abstraction, code reuse\n" +
			"-Render highjacking\n" +
			"-State abstraction and manipulation\n" +
			"-Props manipulation",
	},
	{
		question: "What are pure components?",
		answer:
			"A component that only has a render function. The simplest and fastest components you can write. " +
			"Pure components enhance the simplicity of the code and performance of the application.",
	},
	{
		question: "What is the significance of keys in React?",
		answer:
			"Keys are used for identifying unique Virtual DOM elemnts with their corresponding data driving the UI. " +
			"They help React to optimize rendering by recycling all the existing elements in the DOM. " +
			"Keys must be a unique number or string, which React uses to reorder elements instead of re-rendering them, increasing the app's performance.",
	},
	{
		question: "What were the major problems with the MVC framework?",
		answer:
			"-DOM manipulation was very expensive\n" +
			"-Applications were slow and inefficient\n" +
			"-There was lots of memory wastage\n" +
			"-A complicated model was created around models and views because of circular dependencies",
	},
	{
		question: "Explain Flux",
		answer:
			"Flux is an architectural pattern which enforces uni-directional dat flow. " +
			"It controls derived data and enables communication between multiple components using a central Store. " +
			"Any update in application data must occur in the Store. Flux provides stability to the application and reduces run-time errors.",
	},
	{
		question: "What is Redux?",
		answer:
			"One of the most popular libraries for front-end development. A predictable state container for JS applications, used for the entire application's state management. " +
			"Apps developed with Redux are easy to test and can run in different environments with consistent behavior.",
	},
	{
		question: "What are the three principles that Redux follows?",
		answer:
			"1.Single source of truth: state of the entire application is stored in an object/state tree within the single central Store, " +
			"which makes it easier to keep track of changes over time and debug/inspect the application\n" +
			"2.State is read-only: only way to change state is by triggering an action. " +
			"Actions are the minimal representation of the change to data - plain JS objects describing the change\n" +
			"3.Changes are made within pure functions: need pure functions to specify how the state tree is transformed by actions. " +
			"A pure function's return value depends solely on the values of their arguments.",
	},
	{
		question:
			"Explain your understanding of 'Single source of truth' with respect to Redux",
		answer:
			"Redux uses a single 'Store' to hold an application's entire state in one place. " +
			"The 'Store' holds all the components' states, and they receive updates from the store itself.",
	},
	{
		question: "List the main components that Redux is composed of",
		answer:
			"-Action: an object that describes what happened\n" +
			"-Reducer: a place to determine how the state will change\n" +
			"-Store: state/object tree of the entire application\n" +
			"-View: displays the data provided by the Store",
	},
	{
		question: "How are Actions defined in Redux?",
		answer:
			"Actions must have a type property (a string constant) that indicates the type of action being performed. " +
			"Actions are created using functions called Action Creators.",
	},
	{
		question: "Explain the role of Reducers in Redux",
		answer:
			"Pure functions that specify how the application's state changes in response to an action. " +
			"Reducers take in the previous state and the action, and return a new state. " +
			"The changes are determined based on the type of the action, and the previous state will be returned if no work needs to be done.",
	},
	{
		question: "What is the significance of the 'Store' in Redux?",
		answer:
			"The 'Store' is the single source of truth, and makes Redux simple and predictable. " +
			"You can pass middleware to the store to handle the processing of data and to keep a log of various actions that change the state of stores.",
	},
	{
		question: "How are Flux and Redux different?",
		answer:
			"1.With Flux the store contains both state and change logic, while with Redux the store and change logic are seperate\n" +
			"2.With Flux there are multiple stores, but with Redux there is only one\n" +
			"3.With Flux all the stores are disconnected and flat, while Redux has a single store with hierarchical reducers\n" +
			"4.Flux has a singleton dispatcher, while Redux has no concept of a dispatcher\n" +
			"5.With Flux, React components subscribe to the store, while Redux utilizes container component connections\n" +
			"6.With Flux state is mutable, while state is immutable with Redux",
	},
	{
		question: "What are the Advantages of Redux?",
		answer:
			"-Predictability of outcome: No confusion about how to sync the current state with actions and other parts of the application due to the 'single source of truth'\n" +
			"-Maintainability: Code becomes easier to maintain with a predictable outcome and strict structure\n" +
			"-Server-side rendering: Just need to pass the store created on the server to the client side - useful for initial render and provides a better user experience through optimized performance.\n" +
			"-Developer tools: Devs can track everything, from actions to state changes, in real time.\n" +
			"-Community/ecosystem: Huge community of supporters and contributors working for the betterment of the library\n" +
			"-Ease of testing: Code is mostly small, pure, isolated functions, making the code testable and independent.\n" +
			"-Organization: Redux is precise about how code should be organized, making it more consistent and easier to work on with a team\n",
	},
	{
		question: "What is React Router?",
		answer:
			"A powerful routing library built on top of React - helps in adding new screens/flows to the application. Keeps the URL in sync with data being displayed on the page. " +
			"Maintains a standardized structure and behavior, and is used for developing single page web apps.",
	},
	{
		question: "What is the switch keyword used in React Router v4?",
		answer:
			"Used when you want to display only one route to be rendered amongst several defined routes. " +
			"Similar in principle to a JS switch statement but with Routes instead of Cases",
	},
	{
		question: "Why do we need a router in React?",
		answer:
			"React doesn't have it's own built-in router. " +
			"Need the ability to define routes for different pages, and match each route to specific URL paths for user navigation.",
	},
	{
		question: "List the advantages of React Router",
		answer:
			"1.In React Router v4, the API is 'All about components': a router can be visualized as a single root component (<BroswerRouter>) that encloses the specific child routes\n" +
			"2.No need to manually set History value: just wrap routes within a <BroswerRouter> component\n" +
			"3.Split packages: Three seperate packages for Web, Native, and Core. Supports compact application sizes and makes it easy to switch over based on a similar coding style",
	},
	{
		question: "How is React Router different from conventional routing?",
		answer:
			"1.Pages involved: With conventional routing, each page corresponds to a new file, but with React Router only a single HTML page is involved.\n" +
			"2.Url Changes: With conventional routing, an HTTP request is sent to a server and a corresponding HTML page is received. With React Router, only the History attribute is changed.\n" +
			"3.Feel: With conventional routing, users actually navigate across different pages for each view. " +
			"With React Router, users don't actually navigate across different pages, they just feel like they do.",
	},
];
