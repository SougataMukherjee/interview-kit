function minRemoveToMakeValid(s) {
  let stack = [];//hold indices of opening parentheses
  let arr = s.split('');// Convert the string to an array for efficient modification

  for (let i = 0; i < arr.length; i++) {
    // If an opening parenthesis is encountered, push its index onto the stack
    if (arr[i] === '(') stack.push(i);
    else if (arr[i] === ')') {
    // If there's a matching opening parenthesis in the stack, pop it
      if (stack.length) stack.pop();
    //If there's no matching opening parenthesis
      else arr[i] = '';
    }
  }

  for (let i of stack) arr[i] = '';
  return arr.join('');
}

