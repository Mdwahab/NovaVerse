Project Title: NOVA VERSE

Name: Mohammad Abdul Wahab
Video Demo: https://youtu.be/cqPCuPl_wOU
Date: 27-11-2025


Description:

Introduction:

NovaVerse is a modern, dynamic, and fully responsive personal portfolio website designed to showcase projects, skills, 
and creativity. Built as my final project for CS50x, NovaVerse represents both my technical learnings throughout 
the course and my design vision for crafting intuitive web experiences. The name reflects a space of creativity — 
a universe of ideas that illuminate like a nova.

The goal of this project was to build something that not only serves as a personal digital portfolio but also functions
as a real-world application with interactivity, data handling, and modern UI/UX principles.



Technologies Used:

 NovaVerse uses the following technologies and concepts from CS50's curriculum and beyond:

 Frontend: HTML, CSS (custom + responsive), JavaScript
 Backend: Python (Flask Framework)
 Database: SQLite (SQL)
 Templating: Jinja2 (Flask Templates)
 CSS Features: Animations, dark mode, grid/flex layouts
.

"Project Structure"

Here's the directory structure of the project:

NovaVerse/
│
├── static/
│   ├── css/
│   │   └── styles.css
│   │
│   ├── images/projects
|   |           ├──img1
|   |           ├──img2    
│   │           ├──img3
|   |           └──img4
|   |
│   └── js/
│       └── script.js
│
├── templates/
│   ├── about.html
│   ├── add_project.html
│   ├── contact.html
│   ├── index.html
│   ├── layout.html
│   └── projects.html
│
├── app.py
├── novaverse.db
└── README.md



Features

General Features
 Fully responsive and mobile-friendly UI
 Light/Dark theme toggle with persistence using 'localStorage'
 Smooth layout and animations to create a modern visual experience
 Clean, modular code structure using Flask + templates

Pages
 Home: Hero section with visual effects, navigation, and intro
 About: Personal journey, tech stack, and CS50 lesson breakdown
 Projects: Dynamic project list displayed from the database
 Add Project: Admin page to add projects directly into the DB
 Contact: Contact form that stores messages in the database
 Resume: Resume where the visiter can visit the resume

Backend
 Flask handles routing, data logic, and template rendering
 SQLite database uses 'projects' and 'messages' tables
 Simple CRUD (Create and Read) support for projects


Design Decisions

I wanted NovaVerse to feel professional yet expressive. Most portfolios look similar, so I focused on:

 Custom Visual Design: No Bootstrap — everything was custom-styled with CSS, including layout grids, animated blobs, 
    and soft UI elements like frosted cards and theme toggles.
 Dark Mode Support: Improves user experience and accessibility, and shows modern UI design understanding.
 Minimal Admin Panel: add_project route works as a basic CMS to update projects without editing code.
 Database over JSON: Storing data in SQLite instead of flat files allows expansion (e.g., blog, CMS) and demonstrates 
    SQL usage (Week 7).
 Semantic HTML + Accessibility: Clear headings, labels, and click areas were used to enhance UX and structure.


How to Run the Project

To run NovaVerse locally in your CS50 codespace or any Python environment:

1. Clone or copy the project folder:
    
    git clone <your-repo-url>
    

2. Install Flask (if not already installed):
    
    pip install flask
    

3. Run the application:
    
    python app.py
    

4. Visit http://127.0.0.1:5000/ in your browser.


Database Details

The project uses an SQLite database automatically initialized with two tables:

projects table:
| Field       | Type      | Description                    |
|-------------|-----------|--------------------------------|
| id          | Integer   | Auto-increment primary key     |
| title       | Text      | Project title                  |
| description | Text      | Short project description      |
| link        | Text      | Optional link to live/demo     |
| tags        | Text      | Optional tags separated by "," |
| created_at  | Timestamp | Auto-generated creation time   |
| image       | Text      | Choose Flies multiple images   |

messages table:
| Field       | Type      | Description                    |
|-------------|-----------|--------------------------------|
| id          | Integer   | Auto-increment primary key     |
| name        | Text      | Sender name                    |
| email       | Text      | Sender email address           |
| subject     | Text      | Optional message subject       |
| message     | Text      | Full message content           |
| created_at  | Timestamp | Auto-generated creation time   |


Demo Video

The demo video (URL at top) shows:
 A walkthrough of the website
 Admin interaction (adding a project)
 Frontend design and responsiveness
 Explanation of choices and technology


What I Learned

Building NovaVerse helped cement everything I learned during CS50:
 Creating routes, templates, and forms in Flask
 Designing and styling custom responsive layouts
 Using SQL to store and manage real user data
 Writing cleaner, maintainable code
 Handling GET vs POST methods and flashing messages
 Modularizing HTML through layouts and inheritance


Future Improvements

 Implement login and authentication for the admin panel
 Add blog module connected to the database
 Include pagination or filtering for large project lists
 Add email notification support in contact form


Acknowledgments

This project was built exclusively as a CS50x final project under Harvard University guidelines. Certain textual explanations and some code comments were aided by AI software (ChatGPT), but **all logic, structure, styling, and functionality are implemented and reviewed by me**.

This is CS50!

