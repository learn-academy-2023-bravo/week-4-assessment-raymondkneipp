# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:

Object-oriented programming, also known as OOP is a methodology around how a program is structured. Not every languages supports OOP. These languages include Haskell, Rust, C, among others. Languages like Ruby, JavaScript, and Python support OOP. In OOP you can define a class. The class can have properties (values) and methods (behaviors) associated with a class. A class is a blueprint for an object. Classes can also inherit properties and methods from other classes. OOP is a popular way to structure and organize code. Functional programming is utilizing functions to achieve the desired executions. Functions can pass values to one another to get a desired output. OOP differs from functional programming in how the code is structured.

Researched answer:

Object-oriented programming (OOP) is a programming paradigm that focuses on creating objects that encapsulate data and behavior. In OOP, objects are instances of classes, which are templates or blueprints for creating objects. Classes define the properties (data) and methods (functions) that an object can have. Objects interact with each other through their methods, and they can inherit properties and behavior from parent classes.

Functional programming, on the other hand, is a programming paradigm that emphasizes the use of functions to perform tasks. In functional programming, functions are treated as first-class citizens and can be used as arguments, returned as values, and stored in variables. Functional programming avoids mutable state and emphasizes immutability and the use of pure functions, which produce output based solely on their input and have no side effects.

The key difference between OOP and functional programming is their approach to managing state. In OOP, objects encapsulate state and behavior, and changes to an object's state are made by invoking methods on that object. In functional programming, state is managed through immutable data structures and pure functions. Functions take input and produce output, without modifying the state of the program.

2. What is the difference between a Float and an Integer in Ruby?

Your answer:

Integers are whole numbers while floats are floating point values. Integers: 1, 2, 3, 4, ... Floats: 3.14, 67.8747437, 0.01. In Ruby if you try to divide the integer 5 by the integer 2 you will get the value of 2. If you went to one day of elementary school you would know that 5 / 2 equals 2.5. When Ruby performs mathematical operations on integers you will get an integer in response. If you want Ruby to give you a decimal then one of the integers must be a float. 5.0 / 2 will return 2.5 just like 5 / 2.0 will return 2.5.

Researched answer:

In Ruby, an Integer is a whole number without any decimal points, while a Float is a number that has a decimal point.

For example, 5 is an Integer, while 5.0 or 5.5 is a Float.

Integers are represented in Ruby using the Fixnum and Bignum classes, depending on their size. They are useful for counting and performing arithmetic operations on whole numbers. Floats, on the other hand, are represented using the Float class in Ruby and are useful for performing calculations that require decimal precision.

It's important to note that there are some differences in how arithmetic operations are performed on Integers and Floats in Ruby. When performing division, for example, dividing two Integers will result in an Integer, while dividing an Integer and a Float or two Floats will result in a Float. For example:

```ruby
3 / 2   #=> 1 (Integer division)
3 / 2.0 #=> 1.5 (Float division)
```

It's also worth noting that the use of Floats can sometimes result in rounding errors due to the way they are represented in memory, so it's important to be aware of this when working with them.

3. Ruby has an implicit return. What does that mean?

Your answer:

In Ruby an implicit return is shorthand for returning a value from a method.

Here is an example of an implicit return

```ruby
def what_does_the_fox_say
  'Wa-pa-pa-pa-pa-pa-pow!'
end
```

The method below behaves just the same as the first method but had a return statement

```ruby
def what_does_the_fox_say
  return 'Wa-pa-pa-pa-pa-pa-pow!'
end
```

Researched answer:

In Ruby, methods have an implicit return, which means that they automatically return the value of the last executed statement within the method.

For example, consider the following method that adds two numbers and returns the sum:

```ruby
def add_numbers(a, b)
  a + b
end
```

In this method, the + operator is the last executed statement, and its result is returned as the value of the method. There is no need to explicitly use the return keyword.

So, when this method is called with add_numbers(2, 3), it will return 5 because that is the result of 2 + 3.

This feature makes Ruby code more concise and easier to read, as you don't have to clutter the code with unnecessary return statements. However, it's important to note that using return explicitly can sometimes make the code more readable, especially when dealing with complex logic or multiple return statements.

4. What is a block in Ruby?

Your answer: 

A block in ruby is a piece of code that is passed to a ruby method as an argument. You can think of Ruby blocks as anonymous arrow functions in JavaScript. The .map method takes an anonymous arrow function as a parameter. Inside the function is where you can mutate each item as map iterates over the array.

Researched answer:

A block is a way to group a piece of code together and pass it to a method. It's like putting a little bit of code into a box that can be handed to a method to use.

For example, imagine you have an array of numbers [1, 2, 3]. You can use the .each method to go through each element in the array and do something with it. You can pass a block of code to the .each method to tell it what to do with each element.

The block is enclosed in curly braces {} or between do and end keywords. Inside the block, you can write any code you want that should be executed for each element in the array.

You can also pass parameters to the block using the vertical bar (|) syntax. The parameters are like variables that hold the value of each element as the block is executed for each element in the array.

Blocks are a powerful feature in Ruby that can be used to write concise and readable code. They are used in many different ways in Ruby programs to do all sorts of things.

5. How do you extract a value in a Ruby hash?

Your answer:

Lets say you have the following hash:

```ruby
my_hash = { :name => 'Raymond', :age => 23, :cool => true }
```

If you wanted to print a sentence using the items in the hash you could do that like so:

```ruby
puts "#{my_hash[:name]} is #{my_hash[:age]} years old and is #{my_hash[:cool] ? '' : 'not'} cool."
```

To get an element in a hash you reference the hash name, then inside of square brackets you type a colon followed by the key associated with the value you want to access.

Researched answer:

In Ruby, you can extract a value from a hash using the hash key. There are several ways to do this:

Using square bracket notation:

```ruby
my_hash = {name: "John", age: 30}
my_hash[:name] # "John"
```

Here, the [:name] is the hash key, and it returns the corresponding value "John".

Using the fetch method:

```ruby
my_hash = {name: "John", age: 30}
my_hash.fetch(:age) # 30
```

Here, fetch is a method that takes a key as an argument and returns the corresponding value.

If the key is not found in the hash, fetch will raise a KeyError by default. However, you can provide a second argument to fetch to specify a default value to return instead:

```ruby
my_hash = {name: "John", age: 30}
my_hash.fetch(:gender, "unknown") # "unknown"
```

Here, fetch returns "unknown" because the key :gender is not found in the hash, and "unknown" is provided as the default value.

Using the values_at method:

```ruby
my_hash = {name: "John", age: 30}
my_hash.values_at(:name, :age) # ["John", 30]
```

Here, values_at is a method that takes one or more keys as arguments and returns an array of the corresponding values.

## Looking Ahead: Terms for Next Week

1. RSpec:

RSpec is a tool that helps Ruby developers write and run tests for their code. It has a special language that makes it easy to write tests in a way that's easy to understand. RSpec can check if the code behaves the way it's supposed to, and it can report if any problems are found. It's a popular tool that many Ruby developers use to make sure their code works correctly.

2. Test-driven development:

Test-driven development (TDD) is a way of writing software where developers write tests for their code before writing the actual code. This helps make sure the code works the way it's supposed to. Developers write tests that describe what they want the code to do, and then they write the code that makes those tests pass. This process is repeated until the code works correctly.

3. PostgreSQL:

PostgreSQL is a free and open-source relational database management system (RDBMS) that allows you to store and manage data. It's like a digital filing cabinet for storing information in a structured way. PostgreSQL can handle large amounts of data, and it has many advanced features to help you manage your data efficiently. It's a popular choice for many applications that require a reliable and scalable database.

4. CRUD:

CRUD is an acronym that stands for Create, Read, Update, and Delete. It's a set of basic operations that can be performed on a database.

- Create: This means adding new data to the database, like creating a new user account.

- Read: This means retrieving data from the database, like reading the user's profile information.

- Update: This means changing data in the database, like updating the user's password.

- Delete: This means removing data from the database, like deleting the user's account.

These four basic operations are commonly used in web applications and other software systems to manage data stored in a database.

5. HTTP:

HTTP, or Hypertext Transfer Protocol, is a set of rules that govern how computers communicate with each other over the internet. When you type a website address into your web browser, it sends an HTTP request to the website's server, asking for the website's content. The server then sends an HTTP response back to your browser, containing the website's content, which is how web pages are loaded in your browser.

HTTP is a foundation of the World Wide Web, and it's used by almost every website on the internet. It defines how information is transmitted and formatted between web servers and clients (like your browser), and it also defines how web servers should respond to different types of requests.
