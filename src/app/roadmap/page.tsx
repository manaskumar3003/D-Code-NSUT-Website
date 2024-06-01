import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Roadmap from "@/components/ui/private/Roadmap";
import { type RoadmapProps } from "@/components/ui/private/Roadmap";

export default function page() {
  return (
    <section className="container mx-auto px-4 py-2">
      <h1 className="text-3xl font-bold text-center">Roadmap</h1>
      <p className="text-center text-gray-600 mt-2">
        Learn the path to become a successful developer
      </p>
      <div className="w-full mt-4 container">
        <Tabs defaultValue="DSA">
          <div className="flex justify-center items-center">
            <TabsList>
              <TabsTrigger value="DSA" className="min-w-24">
                DSA{" "}
                <span className="sr-only">
                  (Data Structures and Algorithms)
                </span>
              </TabsTrigger>
              <TabsTrigger value="WebDev" className="min-w-24">
                Web Dev<span className="sr-only">(Web Development)</span>
              </TabsTrigger>
              <TabsTrigger value="ML" className="min-w-24">
                ML <span className="sr-only">(Machine Learning)</span>
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="">
            <TabsContent value="DSA">
              <Roadmap data={DSARoadmap} />
            </TabsContent>
            <TabsContent value="WebDev">
              <Roadmap data={WebDevRoadmap} />
            </TabsContent>
            <TabsContent value="ML">
              <Roadmap data={MLRoadmap} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <div className="mt-4"></div>
    </section>
  );
}

const DSARoadmap: RoadmapProps[] = [
  {
    title: "Basic Programming",
    content:
      "Learn the basics of programming with C++, Java, or Python. This will help you understand the fundamentals of programming and problem-solving.",
    childern: [
      {
        title: "Data Structures",
        content:
          "Learn about the different types of data structures such as arrays, linked lists, stacks, queues, trees, and graphs.",
        link: "https://www.geeksforgeeks.org/data-structures/",
      },
      {
        title: "Algorithms",
        content:
          "Learn about the different types of algorithms such as searching, sorting, and graph algorithms.",
        link: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
      },
      {
        title: "Time Complexity",
        content:
          "Understand the time complexity of different algorithms and how to analyze them.",
        link: "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/",
      },
    ],
  },
  {
    title: "Strings",
    content: "Learn about string manipulation and different string algorithms.",
    childern: [
      {
        title: "String Manipulation",
        content:
          "Learn about different string manipulation techniques such as reversing a string, finding the length of a string, and concatenating strings.",
        link: "https://www.geeksforgeeks.org/string-data-structure/",
      },
      {
        title: "String Algorithms",
        content:
          "Learn about different string algorithms such as pattern matching, string searching, and string compression.",
        link: "https://www.geeksforgeeks.org/string-algorithms/",
      },
    ],
  },
  {
    title: "Arrays",
    content: "Learn about arrays and different array algorithms.",
    childern: [
      {
        title: "Array Manipulation",
        content:
          "Learn about different array manipulation techniques such as reversing an array, finding the length of an array, and concatenating arrays.",
        link: "https://www.geeksforgeeks.org/array-data-structure/",
      },
      {
        title: "Array Algorithms",
        content:
          "Learn about different array algorithms such as searching, sorting, and array rotation.",
        link: "https://www.geeksforgeeks.org/array-data-structure/",
      },
    ],
  },
  {
    title: "Linked Lists",
    content: "Learn about linked lists and different linked list algorithms.",
    childern: [
      {
        title: "Linked List Manipulation",
        content:
          "Learn about different linked list manipulation techniques such as reversing a linked list, finding the length of a linked list, and concatenating linked lists.",
        link: "https://www.geeksforgeeks.org/data-structures/linked-list/",
      },
      {
        title: "Linked List Algorithms",
        content:
          "Learn about different linked list algorithms such as searching, sorting, and linked list rotation.",
        link: "https://www.geeksforgeeks.org/data-structures/linked-list/",
      },
    ],
  },
  {
    title: "Stacks",
    content: "Learn about stacks and different stack algorithms.",
    childern: [
      {
        title: "Stack Manipulation",
        content:
          "Learn about different stack manipulation techniques such as pushing and popping elements from a stack.",
        link: "https://www.geeksforgeeks.org/stack-data-structure/",
      },
      {
        title: "Stack Algorithms",
        content:
          "Learn about different stack algorithms such as evaluating postfix expressions and implementing stack using arrays and linked lists.",
        link: "https://www.geeksforgeeks.org/stack-data-structure/",
      },
    ],
  },
  {
    title: "Queues",
    content: "Learn about queues and different queue algorithms.",
    childern: [
      {
        title: "Queue Manipulation",
        content:
          "Learn about different queue manipulation techniques such as enqueue and dequeue operations.",
        link: "https://www.geeksforgeeks.org/queue-data-structure/",
      },
      {
        title: "Queue Algorithms",
        content:
          "Learn about different queue algorithms such as implementing queue using stacks and linked lists.",
        link: "https://www.geeksforgeeks.org/queue-data-structure/",
      },
    ],
  },
  {
    title: "Trees",
    content: "Learn about trees and different tree algorithms.",
    childern: [
      {
        title: "Tree Manipulation",
        content:
          "Learn about different tree manipulation techniques such as tree traversal, tree insertion, and tree deletion.",
        link: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
      },
      {
        title: "Tree Algorithms",
        content:
          "Learn about different tree algorithms such as tree traversal, tree balancing, and tree rotation.",
        link: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
      },
    ],
  },
  {
    title: "Graphs",
    content: "Learn about graphs and different graph algorithms.",
    childern: [
      {
        title: "Graph Manipulation",
        content:
          "Learn about different graph manipulation techniques such as graph traversal, graph representation, and graph coloring.",
        link: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
      },
      {
        title: "Graph Algorithms",
        content:
          "Learn about different graph algorithms such as shortest path algorithms, minimum spanning tree algorithms, and topological sorting.",
        link: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
      },
    ],
  },
  {
    title: "Dynamic Programming",
    content:
      "Learn about dynamic programming and different dynamic programming algorithms.",
    childern: [
      {
        title: "Dynamic Programming Techniques",
        content:
          "Learn about different dynamic programming techniques such as memoization and tabulation.",
        link: "https://www.geeksforgeeks.org/dynamic-programming/",
      },
      {
        title: "Dynamic Programming Algorithms",
        content:
          "Learn about different dynamic programming algorithms such as Fibonacci series, longest common subsequence, and knapsack problem.",
        link: "https://www.geeksforgeeks.org/dynamic-programming/",
      },
    ],
  },
  {
    title: "Bit Manipulation",
    content:
      "Learn about bit manipulation and different bit manipulation algorithms.",
    childern: [
      {
        title: "Bit Manipulation Techniques",
        content:
          "Learn about different bit manipulation techniques such as bitwise AND, OR, XOR, and NOT operations.",
        link: "https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/",
      },
      {
        title: "Bit Manipulation Algorithms",
        content:
          "Learn about different bit manipulation algorithms such as finding the single non-repeating element in an array and counting the number of set bits in an integer.",
        link: "https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/",
      },
    ],
  },
  {
    title: "Recursion",
    content: "Learn about recursion and different recursive algorithms.",
    childern: [
      {
        title: "Recursion Techniques",
        content:
          "Learn about different recursion techniques such as tail recursion, tree recursion, and indirect recursion.",
        link: "https://www.geeksforgeeks.org/recursion/",
      },
      {
        title: "Recursion Algorithms",
        content:
          "Learn about different recursive algorithms such as factorial, Fibonacci series, and tower of Hanoi.",
        link: "https://www.geeksforgeeks.org/recursion/",
      },
    ],
  },
  {
    title: "Greedy Algorithms",
    content: "Learn about greedy algorithms and different greedy algorithms.",
    childern: [
      {
        title: "Greedy Algorithm Techniques",
        content:
          "Learn about different greedy algorithm techniques such as fractional knapsack, job sequencing, and Huffman coding.",
        link: "https://www.geeksforgeeks.org/greedy-algorithms/",
      },
      {
        title: "Greedy Algorithms",
        content:
          "Learn about different greedy algorithms such as Dijkstra's shortest path algorithm, Prim's minimum spanning tree algorithm, and Kruskal's minimum spanning tree algorithm.",
        link: "https://www.geeksforgeeks.org/greedy-algorithms/",
      },
    ],
  },
  {
    title: "Backtracking",
    content: "Learn about backtracking and different backtracking algorithms.",
    childern: [
      {
        title: "Backtracking Techniques",
        content:
          "Learn about different backtracking techniques such as the N-Queens problem, Sudoku solver, and Hamiltonian cycle.",
        link: "https://www.geeksforgeeks.org/backtracking-algorithms/",
      },
      {
        title: "Backtracking Algorithms",
        content:
          "Learn about different backtracking algorithms such as the Knight's tour problem, Rat in a maze, and Subset sum problem.",
        link: "https://www.geeksforgeeks.org/backtracking-algorithms/",
      },
    ],
  },
  {
    title: "Divide and Conquer",
    content:
      "Learn about divide and conquer and different divide and conquer algorithms.",
    childern: [
      {
        title: "Divide and Conquer Techniques",
        content:
          "Learn about different divide and conquer techniques such as binary search, merge sort, and quick sort.",
        link: "https://www.geeksforgeeks.org/divide-and-conquer/",
      },
      {
        title: "Divide and Conquer Algorithms",
        content:
          "Learn about different divide and conquer algorithms such as Karatsuba multiplication, Strassen's matrix multiplication, and closest pair of points.",
        link: "https://www.geeksforgeeks.org/divide-and-conquer/",
      },
    ],
  },
  {
    title: "Mathematics",
    content:
      "Learn about mathematical concepts and different mathematical algorithms.",
    childern: [
      {
        title: "Mathematical Concepts",
        content:
          "Learn about different mathematical concepts such as number theory, combinatorics, and probability.",
        link: "https://www.geeksforgeeks.org/mathematical-algorithms/",
      },
      {
        title: "Mathematical Algorithms",
        content:
          "Learn about different mathematical algorithms such as finding the GCD of two numbers, finding prime numbers, and calculating the factorial of a number.",
        link: "https://www.geeksforgeeks.org/mathematical-algorithms/",
      },
    ],
  },
  {
    title: "Advanced Topics",
    content: "Learn about advanced topics in data structures and algorithms.",
    childern: [
      {
        title: "Advanced Data Structures",
        content:
          "Learn about advanced data structures such as AVL trees, B-trees, and segment trees.",
        link: "https://www.geeksforgeeks.org/advanced-data-structures/",
      },
      {
        title: "Advanced Algorithms",
        content:
          "Learn about advanced algorithms such as dynamic programming on trees, matrix exponentiation, and fast Fourier transform.",
        link: "https://www.geeksforgeeks.org/advanced-algorithms/",
      },
    ],
  },
];

const WebDevRoadmap: RoadmapProps[] = [
  {
    title: "Basic Programming",
    content:
      "Learn the basics of programming with HTML, CSS, and JavaScript. This will help you understand the fundamentals of web development.",
    childern: [
      {
        title: "HTML",
        content:
          "Learn about the basics of HTML such as tags, attributes, and elements.",
        link: "https://www.w3schools.com/html/",
      },
      {
        title: "CSS",
        content:
          "Learn about the basics of CSS such as selectors, properties, and values.",
        link: "https://www.w3schools.com/css/",
      },
      {
        title: "JavaScript",
        content:
          "Learn about the basics of JavaScript such as variables, functions, and objects.",
        link: "https://www.w3schools.com/js/",
      },
    ],
  },
  {
    title: "Frontend Development",
    content:
      "Learn about frontend development and different frontend frameworks.",
    childern: [
      {
        title: "React",
        content:
          "Learn about the basics of React such as components, props, and state.",
        link: "https://reactjs.org/",
      },
      {
        title: "Vue",
        content:
          "Learn about the basics of Vue such as components, props, and state.",
        link: "https://vuejs.org/",
      },
      {
        title: "Angular",
        content:
          "Learn about the basics of Angular such as components, modules, and services.",
        link: "https://angular.io/",
      },
    ],
  },
  {
    title: "Backend Development",
    content:
      "Learn about backend development and different backend frameworks.",
    childern: [
      {
        title: "Node.js",
        content:
          "Learn about the basics of Node.js such as modules, events, and streams.",
        link: "https://nodejs.org/",
      },
      {
        title: "Express",
        content:
          "Learn about the basics of Express such as routes, middleware, and templates.",
        link: "https://expressjs.com/",
      },
      {
        title: "Django",
        content:
          "Learn about the basics of Django such as models, views, and templates.",
        link: "https://www.djangoproject.com/",
      },
    ],
  },
  {
    title: "Database Management",
    content: "Learn about database management and different database systems.",
    childern: [
      {
        title: "SQL",
        content:
          "Learn about the basics of SQL such as queries, tables, and relationships.",
        link: "https://www.w3schools.com/sql/",
      },
      {
        title: "NoSQL",
        content:
          "Learn about the basics of NoSQL such as documents, collections, and queries.",
        link: "https://www.mongodb.com/nosql-explained",
      },
      {
        title: "Firebase",
        content:
          "Learn about the basics of Firebase such as authentication, storage, and hosting.",
        link: "https://firebase.google.com/",
      },
    ],
  },
  {
    title: "Version Control",
    content:
      "Learn about version control and different version control systems.",
    childern: [
      {
        title: "Git",
        content:
          "Learn about the basics of Git such as repositories, branches, and commits.",
        link: "https://git-scm.com/",
      },
      {
        title: "GitHub",
        content:
          "Learn about the basics of GitHub such as pull requests, issues, and actions.",
        link: "https://github.com",
      },
      {
        title: "GitLab",
        content:
          "Learn about the basics of GitLab such as merge requests, pipelines, and environments.",
        link: "https://gitlab.com",
      },
    ],
  },
  {
    title: "Web Hosting",
    content: "Learn about web hosting and different web hosting services.",
    childern: [
      {
        title: "Netlify",
        content:
          "Learn about the basics of Netlify such as deployment, domains, and forms.",
        link: "https://www.netlify.com/",
      },
      {
        title: "Vercel",
        content:
          "Learn about the basics of Vercel such as deployment, domains, and serverless functions.",
        link: "https://vercel.com/",
      },
      {
        title: "Heroku",
        content:
          "Learn about the basics of Heroku such as deployment, domains, and add-ons.",
        link: "https://www.heroku.com/",
      },
    ],
  },
  {
    title: "Web Security",
    content: "Learn about web security and different web security techniques.",
    childern: [
      {
        title: "HTTPS",
        content:
          "Learn about the basics of HTTPS such as encryption, certificates, and protocols.",
        link: "https://www.cloudflare.com/learning/ssl/what-is-https/",
      },
      {
        title: "CORS",
        content:
          "Learn about the basics of CORS such as origins, methods, and headers.",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
      },
      {
        title: "CSRF",
        content:
          "Learn about the basics of CSRF such as tokens, headers, and cookies.",
        link: "https://owasp.org/www-community/attacks/csrf",
      },
    ],
  },
  {
    title: "Web Performance",
    content:
      "Learn about web performance and different web performance techniques.",
    childern: [
      {
        title: "Lighthouse",
        content:
          "Learn about the basics of Lighthouse such as audits, scores, and reports.",
        link: "https://developers.google.com/web/tools/lighthouse",
      },
      {
        title: "Web Vitals",
        content:
          "Learn about the basics of Web Vitals such as metrics, thresholds, and insights.",
        link: "https://web.dev/vitals/",
      },
      {
        title: "PageSpeed",
        content:
          "Learn about the basics of PageSpeed such as optimization, caching, and compression.",
        link: "https://developers.google.com",
      },
    ],
  },
  {
    title: "Web Accessibility",
    content:
      "Learn about web accessibility and different web accessibility techniques.",
    childern: [
      {
        title: "ARIA",
        content:
          "Learn about the basics of ARIA such as roles, states, and properties.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",
      },
      {
        title: "WCAG",
        content:
          "Learn about the basics of WCAG such as guidelines, principles, and success criteria.",
        link: "https://www.w3.org/WAI/WCAG21/quickref/",
      },
      {
        title: "Keyboard Navigation",
        content:
          "Learn about the basics of keyboard navigation such as focus, tab order, and shortcuts.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigatio",
      },
    ],
  },
  {
    title: "Web Design",
    content: "Learn about web design and different web design principles.",
    childern: [
      {
        title: "UI Design",
        content:
          "Learn about the basics of UI design such as layout, typography, and color.",
        link: "https://www.w3schools.com/ui/",
      },
      {
        title: "UX Design",
        content:
          "Learn about the basics of UX design such as usability, accessibility, and desirability.",
        link: "https://www.w3schools.com/ux/",
      },
      {
        title: "Responsive Design",
        content:
          "Learn about the basics of responsive design such as media queries, breakpoints, and fluid grids.",
        link: "https://www.w3schools.com/css/css_rwd_intro.asp",
      },
    ],
  },
  {
    title: "Web Analytics",
    content: "Learn about web analytics and different web analytics tools.",
    childern: [
      {
        title: "Google Analytics",
        content:
          "Learn about the basics of Google Analytics such as tracking, reports, and goals.",
        link: "https://analytics.google.com/",
      },
      {
        title: "Hotjar",
        content:
          "Learn about the basics of Hotjar such as heatmaps, recordings, and surveys.",
        link: "https://www.hotjar.com/",
      },
      {
        title: "Matomo",
        content:
          "Learn about the basics of Matomo such as analytics, privacy, and security.",
        link: "https://matomo.org/",
      },
    ],
  },
  {
    title: "Web Optimization",
    content:
      "Learn about web optimization and different web optimization techniques.",
    childern: [
      {
        title: "Image Optimization",
        content:
          "Learn about the basics of image optimization such as compression, formats, and lazy loading.",
        link: "https://www.w3schools.com/tags/att_img_loading.asp",
      },
      {
        title: "Code Splitting",
        content:
          "Learn about the basics of code splitting such as bundles, chunks, and imports.",
        link: "https://webpack.js.org/guides/code-splitting/",
      },
      {
        title: "Lazy Loading",
        content:
          "Learn about the basics of lazy loading such as components, images, and scripts.",
        link: "https://web.dev/browser-level-image-lazy-loading/",
      },
    ],
  },
  {
    title: "Web Testing",
    content: "Learn about web testing and different web testing tools.",
    childern: [
      {
        title: "Jest",
        content:
          "Learn about the basics of Jest such as testing, assertions, and mocks.",
        link: "https://jestjs.io/",
      },
      {
        title: "Cypress",
        content:
          "Learn about the basics of Cypress such as testing, assertions, and commands.",
        link: "https://www.cypress.io/",
      },
      {
        title: "Puppeteer",
        content:
          "Learn about the basics of Puppeteer such as testing, automation, and headless browsing.",
        link: "https://pptr.dev/",
      },
    ],
  },
];

const MLRoadmap: RoadmapProps[] = [
  {
    title: "Basic Programming",
    content:
      "Learn the basics of programming with Python. This will help you understand the fundamentals of machine learning.",
    childern: [
      {
        title: "Python",
        content:
          "Learn about the basics of Python such as variables, functions, and classes.",
        link: "https://www.w3schools.com/python/",
      },
      {
        title: "NumPy",
        content:
          "Learn about the basics of NumPy such as arrays, matrices, and linear algebra.",
        link: "https://numpy.org/",
      },
      {
        title: "Pandas",
        content:
          "Learn about the basics of Pandas such as dataframes, series, and indexing.",
        link: "https://pandas.pydata.org/",
      },
    ],
  },
  {
    title: "Data Preprocessing",
    content:
      "Learn about data preprocessing and different data preprocessing techniques.",
    childern: [
      {
        title: "Data Cleaning",
        content:
          "Learn about the basics of data cleaning such as missing values, duplicates, and outliers.",
        link: "https://www.w3schools.com/python/python_ml_data_cleaning.asp",
      },
      {
        title: "Feature Scaling",
        content:
          "Learn about the basics of feature scaling such as normalization, standardization, and scaling.",
        link: "https://www.w3schools.com/python/python_ml_feature_scaling.asp",
      },
      {
        title: "Encoding",
        content:
          "Learn about the basics of encoding such as one-hot encoding, label encoding, and target encoding.",
        link: "https://www.w3schools.com/python/python_ml_encoding.asp",
      },
    ],
  },
  {
    title: "Exploratory Data Analysis",
    content:
      "Learn about exploratory data analysis and different exploratory data analysis techniques.",
    childern: [
      {
        title: "Data Visualization",
        content:
          "Learn about the basics of data visualization such as plots, charts, and graphs.",
        link: "https://www.w3schools.com/python/python_ml_data_visualization.asp",
      },
      {
        title: "Descriptive Statistics",
        content:
          "Learn about the basics of descriptive statistics such as mean, median, and mode.",
        link: "https://www.w3schools.com/python/python_ml_descriptive_statistics.asp",
      },
      {
        title: "Correlation Analysis",
        content:
          "Learn about the basics of correlation analysis such as Pearson correlation, Spearman correlation, and Kendall correlation.",
        link: "https://www.w3schools.com/python/python_ml_correlation_analysis.asp",
      },
    ],
  },
  {
    title: "Feature Engineering",
    content:
      "Learn about feature engineering and different feature engineering techniques.",
    childern: [
      {
        title: "Feature Selection",
        content:
          "Learn about the basics of feature selection such as filter methods, wrapper methods, and embedded methods.",
        link: "https://www.w3schools.com/python/python_ml_feature_selection.asp",
      },
      {
        title: "Feature Extraction",
        content:
          "Learn about the basics of feature extraction such as PCA, LDA, and t-SNE.",
        link: "https://www.w3schools.com/python/python_ml_feature_extraction.asp",
      },
      {
        title: "Feature Transformation",
        content:
          "Learn about the basics of feature transformation such as scaling, normalization, and encoding.",
        link: "https://www.w3schools.com/python",
      },
    ],
  },
  {
    title: "Model Selection",
    content:
      "Learn about model selection and different model selection techniques.",
    childern: [
      {
        title: "Train-Test Split",
        content:
          "Learn about the basics of train-test split such as training set, testing set, and validation set.",
        link: "https://www.w3schools.com/python/python_ml_train_test_split.asp",
      },
      {
        title: "Cross-Validation",
        content:
          "Learn about the basics of cross-validation such as k-fold cross-validation, stratified cross-validation, and leave-one-out cross-validation.",
        link: "https://www.w3schools.com/python/python_ml_cross_validation.asp",
      },
      {
        title: "Grid Search",
        content:
          "Learn about the basics of grid search such as hyperparameters, grid, and search.",
        link: "https://www.w3schools.com/python/python_ml_grid_search.asp",
      },
    ],
  },
  {
    title: "Model Training",
    content:
      "Learn about model training and different model training techniques.",
    childern: [
      {
        title: "Supervised Learning",
        content:
          "Learn about the basics of supervised learning such as regression, classification, and ensemble methods.",
        link: "https://www.w3schools.com/python/python_ml_supervised_learning.asp",
      },
      {
        title: "Unsupervised Learning",
        content:
          "Learn about the basics of unsupervised learning such as clustering, dimensionality reduction, and anomaly detection.",
        link: "https://www.w3schools.com/python/python_ml_unsupervised_learning.asp",
      },
      {
        title: "Reinforcement Learning",
        content:
          "Learn about the basics of reinforcement learning such as rewards, policies, and environments.",
        link: "https://www.w3schools.com/python/python_ml_reinforcement_learning.asp",
      },
    ],
  },
  {
    title: "Model Evaluation",
    content:
      "Learn about model evaluation and different model evaluation techniques.",
    childern: [
      {
        title: "Accuracy",
        content:
          "Learn about the basics of accuracy such as true positives, true negatives, and false positives.",
        link: "https://www.w3schools.com/python/python_ml_accuracy.asp",
      },
      {
        title: "Precision",
        content:
          "Learn about the basics of precision such as true positives, false positives, and false negatives.",
        link: "https://www.w3schools.com/python/python_ml_precision.asp",
      },
      {
        title: "Recall",
        content:
          "Learn about the basics of recall such as true positives, false negatives, and true negatives.",
        link: "https://www.w3schools.com/python/python_ml_recall.asp",
      },
    ],
  },
  {
    title: "Model Deployment",
    content:
      "Learn about model deployment and different model deployment techniques.",
    childern: [
      {
        title: "Flask",
        content:
          "Learn about the basics of Flask such as routes, templates, and forms.",
        link: "https://flask.palletsprojects.com/",
      },
      {
        title: "Django",
        content:
          "Learn about the basics of Django such as models, views, and templates.",
        link: "https://www.djangoproject.com/",
      },
      {
        title: "FastAPI",
        content:
          "Learn about the basics of FastAPI such as routes, dependencies, and responses.",
        link: "https://fastapi.tiangolo.com/",
      },
    ],
  },
  {
    title: "Model Monitoring",
    content:
      "Learn about model monitoring and different model monitoring techniques.",
    childern: [
      {
        title: "MLflow",
        content:
          "Learn about the basics of MLflow such as tracking, projects, and models.",
        link: "https://mlflow.org/",
      },
      {
        title: "TensorBoard",
        content:
          "Learn about the basics of TensorBoard such as graphs, histograms, and scalars.",
        link: "https://www.tensorflow.org/tensorboard",
      },
      {
        title: "Prometheus",
        content:
          "Learn about the basics of Prometheus such as metrics, alerts, and exporters.",
        link: "https://prometheus.io/",
      },
    ],
  },
  {
    title: "Model Optimization",
    content:
      "Learn about model optimization and different model optimization techniques.",
    childern: [
      {
        title: "Hyperparameter Tuning",
        content:
          "Learn about the basics of hyperparameter tuning such as grid search, random search, and Bayesian optimization.",
        link: "https://www.w3schools.com/python/python_ml_hyperparameter_tuning.asp",
      },
      {
        title: "Model Compression",
        content:
          "Learn about the basics of model compression such as pruning, quantization, and distillation.",
        link: "https://www.w3schools.com/python/python_ml_model_compression.asp",
      },
      {
        title: "Model Interpretation",
        content:
          "Learn about the basics of model interpretation such as SHAP, Lime, and Eli5.",
        link: "https://www.w3schools.com/python/python_ml_model_interpretation.asp",
      },
    ],
  },
  {
    title: "Model Serving",
    content:
      "Learn about model serving and different model serving techniques.",
    childern: [
      {
        title: "Docker",
        content:
          "Learn about the basics of Docker such as containers, images, and volumes.",
        link: "https://www.docker.com/",
      },
      {
        title: "Kubernetes",
        content:
          "Learn about the basics of Kubernetes such as pods, deployments, and services.",
        link: "https://kubernetes.io/",
      },
      {
        title: "Seldon",
        content:
          "Learn about the basics of Seldon such as models, deployments, and predictions.",
        link: "https://www.seldon.io/",
      },
    ],
  },
 
 
];
