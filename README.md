#### So my Mom asked me to make an app for her church.. 

She wants her parisheners to track down good deeds called Acts that are based on three catagories: 
  #### Witness , Kindness, and Encouragement

The goal of this app is for each church going member to log in an record thier **"Act(s)"**. 

This is a React app will eventually use Redux for state management. 

The main page (app.js) will hold the cumalative acts by the entire church.
 + It will also show random descriptions of Acts by members of the church. Currently hard coded(and creating a memory leak). This will change when these quotes will be held in state after an AJAX request. This was only done for dev purposes. 
 + There is also a **D3.js** bar chart that will show a visual representation towards the total goal of the church. 
 Mom hasn't told me that number yet. :expressionless: The value is currently hardcoded. 

The user will have thier own dashboard (userdash.js) to view thier acts, and they will be able to edit them if need be. 

Each user will be required to register and login. 

---
:point_left: == Currently working on
## TODOS:
  ~~-Create UI and wire Components to collect state in all inputs~~

  -Write Unit Tests :point_left:

  ~~-Use CSS Grid to make app Mobile Friendly~~

  ~~Fix CSS :bug: on AddAct page.~~

  -Finalize color scheme :grimacing:

  ~~-Install Redux to collect global state~~

  ~~-Add code to reset password.~~

  ~~Discuss design and feel of app with Mom~~
  
  -Deploy