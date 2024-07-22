# Netflix GPT

- create react app
- configured tailwind CSS
- Router
- Header
- Login form
- Sign up form
- Form validation
- useRef()
- Error handling
- Firebase installation

# Feature
    - Login/Signup
        - Sing In/ Sign Up form
        - Redirect to browse
    - Browse 
        - Header
        - Main movive view
            - Trailer in background
            - Title & Description
            - Suggestions
                - Movie list
                
    - Netflix GPT
        - search bar
        - movie suggestions

# Firebase integration steps
    - Visit firebase.google.com
    - Select "Web" and create a new project. Follow the installation steps provided.
    - Copy authetication config and paste it in firebaseConfig file in the project.
    - Once the project is created, select it from your Firebase console.
    - Navigate to the "Authentication" section.
    - Choose the methods for authentication you want to enable:
        - Email and password
        - Google sign-in
        - GitHub sign-in
    -When enabling these methods, ensure that cross-origin plugins are disabled if present at the time of enabling.