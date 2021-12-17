const ques = [
    {
        "id": "1",
        "ques": "What are the different data types present in C++?",
        "answ": "The 4 data types in C++ are given below:\n\nPrimitive Datatype(basic datatype). Example- char, short, int, float, long, double, bool, etc.\nDerived datatype. Example- array, pointer, etc.\nEnumeration. Example- enum\nUser-defined data types. Example- structure, class, etc.",
        "ctgr": ["cpp","c++"]
    },
    {
        "id": "2",
        "ques": "What is operator overloading?",
        "answ": "Operator Overloading is a very essential element to perform the operations on user-defined data types. By operator overloading we can modify the default meaning to the operators like +, -, *, /, <=, etc. ",
        "ctgr": ["cpp","c++"]
    },
    {
        "id": "3",
        "ques": "What is polymorphism in C++?",
        "answ": "Polymorphism in simple means having many forms. Its behavior is different in different situations. And this occurs when we have multiple classes that are related to each other by inheritance.\nFor example, think of a base class called a car that has a method called car brand(). Derived classes of cars could be Mercedes, BMW, Audi - And they also have their own implementation of a cars\nThe two types of polymorphism in c++ are:\nCompile Time Polymorphism\nRuntime Polymorphism",
        "ctgr": ["cpp","c++"]
    },
    {
        "id": "4",
        "ques": "Explain constructor in C++",
        "answ": "The constructor is a member function that is executed automatically whenever an object is created. Constructors have the same name as the class of which they are members so that compiler knows that the member function is a constructor. And no return type is used for constructors.",
        "ctgr": ["cpp","c++"]
    },
    {
        "id": "5",
        "ques": "Is deconstructor overloading possible? If yes then explain and if no then why?",
        "answ": "No destructor overloading is not possible. Destructors take no arguments, so there's only one way to destroy an object. That’s the reason destructor overloading is not possible.",
        "ctgr": ["cpp","c++"]
    },
    {
        "id": "6",
        "ques": "What are the data types supported by JavaScript?",
        "answ": "The data types supported by JavaScript are:\nUndefined\nNull\nBoolean\nString\nSymbol\nNumber\nObject",
        "ctgr": ["js","javascript"]
    },
    {
        "id": "7",
        "ques": "What are the scopes of a variable in JavaScript?",
        "answ": "The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes.\n\n \u2022 Global Variables : A global variable has global scope which means it is visible everywhere in your JavaScript code.\n \u2022 Local Variables : A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.",
        "ctgr": ["js","javascript"]
    },
    {
        "id": "8",
        "ques": "What is the purpose of 'This' operator in JavaScript?",
        "answ": "The JavaScript this keyword refers to the object it belongs to. This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this refers to the global object.",
        "ctgr": ["js","javascript"]
    },
    {
        "id": "9",
        "ques": "How does TypeOf Operator work?",
        "answ": "The typeof operator is used to get the data type of its operand. The operand can be either a literal or a data structure such as a variable, a function, or an object. It is a unary operator that is placed before its single operand, which can be of any type. Its value is a string indicating the data type of the operand.",
        "ctgr": ["js","javascript"]
    },
    {
        "id": "10",
        "ques": "What is NaN in JavaScript?",
        "answ": "In JavaScript, NaN stands for Not a Number. It represents a value which is not a valid number. It can be used to check whether a number entered is a valid number or not a number",
        "ctgr": ["js","javascript"]
    },
    {
        "id": "11",
        "ques": "What is pass in Python?",
        "answ": "The pass keyword represents a null operation in Python. It is generally used for the purpose of filling up empty blocks of code which may execute during runtime but has yet to be written. ",
        "ctgr": ["py","python"]
    },
    {
        "id": "12",
        "ques": "What is the use of self in Python?",
        "answ": "The pass keyword represents a null operation in Python. It is generally used for the purpose of filling up empty blocks of code which may execute during runtime but has yet to be written. ",
        "ctgr": ["py","python"]
    },
    {
        "id": "13",
        "ques": "What is the use of self in Python?",
        "answ": "self represents the instance of the class. By using the “self” keyword we can access the attributes and methods of the class in python. It binds the attributes with the given arguments.",
        "ctgr": ["py","python"]
    },
    {
        "id": "14",
        "ques": "What is the difference between Python Arrays and lists?",
        "answ": "\u2022 Arrays in python can only contain elements of same data types i.e., data type of array should be homogeneous. It is a thin wrapper around C language arrays and consumes far less memory than lists.\n \u2022 Lists in python can contain elements of different data types i.e., data type of lists can be heterogeneous. It has the disadvantage of consuming large memory.",
        "ctgr": ["py","python"]
    },
    {
        "id": "15",
        "ques": "What is lambda in Python? Why is it used?",
        "answ": "Lambda is an anonymous function in Python, that can accept any number of arguments, but can only have a single expression.\nIt is generally used in situations requiring an anonymous function for a short time period.",
        "ctgr": ["py","python"]
    },
]

export {ques};