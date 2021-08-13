# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API helps solve the problems associated with Prop drilling

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A reducer returns a new object without directly mutating or changing the initial

The action is an object and contains properties rleated to when some 'action' happens

The store is a single JS object that represents everything that changes in the application

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux-thunk is a function returned by another function. It allows us to dispatch a new action dependent on the result of a function

4. What is your favorite state management system you've learned and this sprint? Please explain why! Context API because I truly don't love prop drilling
