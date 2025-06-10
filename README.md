## Calculator

### Overview

The Calculator is a fully functional web-based calculator application that provides essential arithmetic operations with both mouse and keyboard input support. Built as part of The Odin Project curriculum, this calculator features a clean, modern interface with comprehensive functionality including decimal support, backspace operations, and robust error handling. The application delivers a seamless user experience with real-time calculations and intuitive controls.

### Features

- **Complete Arithmetic Operations**: Addition, substraction, multiplication, and division
- **Dual Input Methods**:
  - Mouse click interface with responsive buttons
  - Full keyboard support for all operations
- **Advanced Input Handling**:
  - Decimal point support with validation
  - Backspace functionality for error correction
  - Clear button for complete reset
- **Smart Calculator Logic**:
  - Chain calculations(operate on previous results)
  - Operator precedence handling
  - Division by zero error handling
- **User-Friendly Features**:
  - Real-time display updates
  - Visual feedback on button interactions
- **Error Prevention**: Input validation to prevent calculator crashes

### Technologies Used

- **HTML**: For structuring the calculator interface and button layout
- **CSS**: For styling, visual effects, and responsive design with modern aesthetics
- **JavaScript**: For calculation logic, event handling, DOM manipulation, and user input processing

### Live Demo

Check out the live application here: [Calculator](https://jkgyso.github.io/calculator/)

### How to Use

1. Visit the website using the link above
2. **Mouse Input**:
   - Click number buttons(0-9) to input numbers
   - Click operator buttons(+, -, \*, /) to select operators
   - Click equals(=) to calculate results
   - Use the clear(C) button to reset
   - Use the backspace(←) button to delete last entry
3. **Keyboard Input**:
   - Type numbers(0-9) directly
   - Use +, -, \*, / keys for operations
   - Press Enter or = for calculations
   - Press Escape to clear
   - Use Backspace to delete characters
4. **Advanced Operations**:
   - Use decimal point(.) for floating-point numbers
   - Chain multiple operations together
   - Results automatically become the first number for next calculation

### Calculator Functions

- **Basic Operations**: Supports all four fundamental arithmetic operations
- **Decimal Support**: Full floating-point number calculations with proper validation
- **Chain Calculations**: Perform multiple operations in sequence
- **Error Handling**: Displays `Error` for invalid operations(like division by zero)
- **Memory Management**: Automatically handles calculation history and state
- **Input Validation**: Prevents multiple decimal points and invalid input combinations

### Keyboard Shortcuts

- **Numbers**: 0-9 keys for digit input
- **Operations**: +, -, \*, / for arithmetic operations
- **Calculate**: Enter or = key to execute calculations
- **Clear**: Escape or Delete key to reset calculator
- **Backspace**: Backspace key to delete last character
- **Decimal**: Period(.) key for decimal input

### Installation(For Local Development)

If you'd like to run the project locally:

1. Clone the repository: `git clone https://github.com/jkgyso/calculator.git`
2. Open the project folder and launch `index.html` in a browser
3. Start calculating immediately - no additional setup required

### References

- **Project Inspiration**: The Odin Project Curriculum
- **Calculator Logic**: Standard arithmetic calculator functionality
- **User Interface**: Modern web calculator design principles
