const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors"); // Install: npm install cors

// Simple usage (allows all origins - USE WITH CAUTION IN PRODUCTION):
app.use(cors());

// More restrictive configuration (recommended for production):
const allowedOrigins = ["http://localhost:5173"]; // Add your frontend origins

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        // Allow requests without origin (like Postman)
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

const books = [
  {
    name: "Operating System Concepts",
    url: "https://www.wiley.com/en-us/Operating+System+Concepts,+10th+Edition-p-9781119794125",
  },
  {
    name: "Introduction to Algorithms",
    url: "https://mitpress.mit.edu/books/introduction-algorithms-third-edition",
  },
  {
    name: "Clean Code: A Handbook of Agile Software Craftsmanship",
    url: "https://www.oreilly.com/library/view/clean-code/9780132350881/",
  },
  {
    name: "Design Patterns: Elements of Reusable Object-Oriented Software",
    url: "https://www.oreilly.com/library/view/design-patterns/9780201633610/",
  },
  {
    name: "The Pragmatic Programmer: Your Journey to Mastery",
    url: "https://pragprog.com/titles/tpp20/",
  },
  {
    name: "Code Complete",
    url: "https://www.oreilly.com/library/view/code-complete-2/9780735614858/",
  },
  {
    name: "Effective Java",
    url: "https://www.oreilly.com/library/view/effective-java-3rd/9780134685991/",
  },
  {
    name: "Head First Design Patterns",
    url: "https://www.oreilly.com/library/view/head-first-design/9780596007126/",
  },
  {
    name: "Computer Networking: A Top-Down Approach",
    url: "https://www.pearson.com/us/higher-education/program/Computer-Networking-A-Top-Down-Approach-7th-Edition/PGM2480351.html",
  },
  {
    name: "Database Systems: A Practical Approach to Design, Implementation, and Management",
    url: "https://www.pearson.com/us/higher-education/program/Database-Systems-A-Practical-Approach-to-Design-Implementation-and-Management-7th-Edition/PGM1792613.html",
  },
  {
    name: "Artificial Intelligence: A Modern Approach",
    url: "https://aima.cs.berkeley.edu/",
  },
  {
    name: "Introduction to Machine Learning",
    url: "https://www.cmpe.boun.edu.tr/courses/cmpe462/f2019/files/The-Elements-of-Statistical-Learning.pdf",
  },
  {
    name: "Deep Learning",
    url: "http://www.deeplearningbook.org/",
  },
  {
    name: "Cracking the Coding Interview",
    url: "https://www.careercup.com/book",
  },
  {
    name: "The Mythical Man-Month: Essays on Software Engineering",
    url: "https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959",
  },
  {
    name: "Refactoring: Improving the Design of Existing Code",
    url: "https://martinfowler.com/books/refactoring.html",
  },
  {
    name: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
    url: "https://www.oreilly.com/library/view/domain-driven-design/9780321345773/",
  },
  {
    name: "Test Driven Development: By Example",
    url: "https://www.amazon.com/Test-Driven-Development-Example-Addison-Wesley-Signature/dp/0321502139",
  },
  {
    name: "Continuous Delivery: Reliable Releases through Build, Test, and Deployment Automation",
    url: "https://www.amazon.com/Continuous-Delivery-Reliable-Automation/dp/0321601244",
  },
  {
    name: "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
    url: "https://www.itrevolution.com/the-phoenix-project/",
  },
];

const startAndRunServer = () => {
  app.get("/", (req, res) => {
    res.send(books);
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startAndRunServer();
