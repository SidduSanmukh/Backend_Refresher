# Backend_refresher

A Node.js backend practice project demonstrating file operations, routing, and static file serving.

## Features

- Basic file read/write operations
- Serving static files (images, CSS, JS)
- EJS templating for dynamic views
- Organized folder structure for public assets and views

## Folder Structure

```
Backend_practice_Project1/
├── index.js            # Main server file
├── package.json        # Project dependencies
├── files/              # Sample text files
│
├── public/
│   ├── images/         # Image assets
│   ├── javascripts/    # JS files
│   └── style/
│       └── style.css   # Stylesheet
├── views/
│   ├── edit.ejs        # Edit view
│   ├── index.ejs       # Home view
│   └── show.ejs        # Show view
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SidduSanmukh/Backend_practice_Project1.git
   cd Backend_practice_Project1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```
4. Open your browser and go to `http://localhost:3000`

## Usage

- Practice backend concepts such as file handling, routing, and serving static assets.
- Modify and extend views and files for further learning.

## Technologies Used

- Node.js
- Express.js
- EJS
- CSS

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
