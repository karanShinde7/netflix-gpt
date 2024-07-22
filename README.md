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
    - When enabling these methods, ensure that cross-origin plugins are disabled if present at the time of enabling.
    - Hit firebase login command in VS Code console, if it throws an error follow following steps
        - search for powershell.
        - right click and run as administration.
        - run this simple command "Set-ExecutionPolicy RemoteSigned"
        - Press A And Enter.
        - go to code and run npm i <YOUR_MODULE>.
        - press Enter.
    - Enter "firebase init" command for the configuration.
        - while running this cmd there will be few questions, choose options as per the requirement
    - After initialization and configuration we can hit the command for build
    - npm run build
    - To deploy we can use the command "firebase deploy"
        - click on Hosting URL 
    - Fireabse sign up (email - password)
        - https://firebase.google.com/docs/auth/web/password-auth
        - use "createUserWithEmailAndPassword" for register and signInWithEmailAndPassword login api
        - use modular api