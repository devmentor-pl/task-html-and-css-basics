<video controls><source src="./06.04.2025_22.08.14_REC.mp4" type="video/mp4">  
 Your browser does not support video.
</video>
Nova Template Clone
👉 Live Version 

A responsive one-page template inspired by a design from Webscope. Built using HTML and CSS only, this project replicates the structure, layout, and look of a premium template, focusing on clean code and layout practice.

✨ Main Features:
Layout with Flexbox

Sectioned structure: header, features, logos, main content, pricing, team, footer

Interactive hover effects and reusable components

💡 Technologies
![HTML5](image-1.png)
![CSS3](image-2.png) (including custom properties and Flexbox)


💿 Installation
You don’t need any advanced setup to run the project. Simply:

# Clone the repo
git clone [git@github.com:satoshi300/task-html-and-css-basics.git](https://github.com/satoshi300/task-html-and-css-basics/tree/master)

# Open index.html in your browser
To enable live preview in development, use the VS Code Live Server extension.

🤔 Solutions Provided in the Project
1. Flexbox-based Layout
Problem: Creating a clean, responsive layout
Solution: Use of .row, .container, .cell wrappers for control

.row {
  display: flex;
  justify-content: space-between;
}

2. Maintaining Design Consistency
Problem: Repeating layout logic without a framework
Solution: Utility-like classes with semantic naming


.row, .container, .cell {
  outline: 5px solid;
}

3. Gradient Header Background
Issue	                        Solution
Non-standard header design	    background: radial-gradient(...)
Typography consistency      	Google Fonts: Montserrat
Precise element placement   	PerfectPixel plugin

4. Example – Gradient and Button Styling
.header {
  background: radial-gradient(rgb(194, 74, 126), rgb(105, 86, 235));
}

🔁 Reusable Parts
.row – 100% width section

.container – max-width wrapper

.cell – flexible internal block

Feature and pricing cards reuse consistent structure

🔧 Tools / Extensions Used
PerfectPixel – overlay comparison with PNG mockup

Live Server (VS Code) – real-time preview

SVG Viewer – for previewing SVG icons

Prettier – for formatting

🌱 Inspirations
Template by Webscope

devmentor.pl project example

PerfectPixel UX pixel-precision approach

💭 Conclusions for Future Projects
I would like to improve:

Responsiveness for different resolutions (e.g. 1280px, 1440px)

Use semantic HTML tags more precisely

Refactor CSS into SCSS or better BEM-based naming

🙋‍♂️ Feel free to contact me
Feel free to reach out if you'd like to collaborate, give feedback, or just say hi!
📬 Your LinkedIn https://www.linkedin.com/in/michal-wasiak-457a5331/ | Your GitHub https://github.com/satoshi300

👏 Thanks / Special thanks / Credits
Special thanks to devmentor.pl for the course, tasks, and code review guidance 🙏
And to Webscope for the original design inspiration.