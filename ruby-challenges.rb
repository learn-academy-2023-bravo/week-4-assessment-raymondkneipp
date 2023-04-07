# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# create a method called is_odd_or_even
# method will accept an integer
# use conditional statement to see if num is even using .even? method
# if even return num is even
# if odd return num is odd

def is_odd_or_even num
  "#{num} is #{num.even? ? 'even' : 'odd'}"
end

puts is_odd_or_even reposts1
puts is_odd_or_even reposts2
puts is_odd_or_even reposts3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# create a method that accepts a string
# return string with delete method that holds a string of vowels both capital and lowercase as an argument

def remove_vowels str
  str.delete("aeiouAEIOU")
end

puts remove_vowels beatles_album1
puts remove_vowels beatles_album2
puts remove_vowels beatles_album3


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# create a method that accepts a string
# use reverse method to see if the string is the same and downcase to fix capitalization

def is_palindrome str
  "#{str} is #{str.downcase.reverse == str.downcase ? '' : 'not '}a palindrome"
end

puts is_palindrome palindrome_tester1
puts is_palindrome palindrome_tester2
puts is_palindrome palindrome_tester3
