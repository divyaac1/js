Description
This simple JavaScript-based project prompts the user to enter their age and checks if they are eligible to vote. If the user is 18 or older, it further asks if they have a voter ID and displays a message accordingly. It demonstrates basic JavaScript features like:

prompt()

confirm()

console.log()

document.writeln()

🚀 Features
Interactive prompts using prompt() and confirm()

Dynamic messages displayed based on user input

Console logs for debugging or result display

Simple HTML file to run the script in a browser

📁 Project Structure
graphql
Copy
Edit
project/
│
├── index.html      # HTML file to load and run the JavaScript
├── app.js          # JavaScript file with logic for voting eligibility
🛠 How to Run
Open index.html in a web browser.

A series of prompts will appear:

Enter your age.

If age ≥ 18, you will be asked if you have a voter ID.

Check the browser's console for the output message.

💡 Sample Flow
Input age: 20

Confirm voter ID: Yes

Output: "You can vote"

Input age: 16

Output: "You are not eligible for vote"

🔧 Technologies Used
HTML5

JavaScript (ES5)

📌 Note
Input is taken as strings by default using prompt().

For proper numeric comparison, use parseInt() or Number() if extending the functionality.
