What is React Testing Library (RTL)?
RTL is a testing library that focuses on testing components the way users interact with them—using DOM queries instead of testing implementation details.

What is screen in RTL?
An object that provides recommended queries (screen.getByText, screen.getByRole).


Why do we use act() in tests?
To ensure React state updates are flushed before assertions.

How to test button click in RTL?
fireEvent.click(screen.getByText("Submit"));


What is Jest snapshot testing?
Captures UI structure. If changes occur, Jest alerts you.
Captures UI structure. If changes occur, Jest alerts you.

What is jest.fn()?
A mock function used to track calls and arguments

