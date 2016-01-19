**User Stories**

1.
  * EPIC  
    * Access
  * Role-Goal-Benefit
    * As a new viewer or new contributor I want to be able to create an account so that I can use this web-application.
  * Notes 
    * In order to create an account, a new viewer or new contributor must provide their email and create a username and a password.
  * Definitions of Done (Test)
    * A new viewer or new contributor should be able to successfully create an account if they provide a valid email, a unique username and a password:    
    * Fill in information: email, username, password.    
    * Choose between "Viewier" or "Contributor".    
    * Upload an avatar.    
    * Click "Create Account".    
    * A user knows that they have successfully created an account if after clicking “Create Account”, they are led to their profile page which displays the personal information that they have provided.    
    * A new viewer or new contributor fails to create an account if they:    
      * provide an invalid email.      
      * fill in a username that is already in use.      
  * Tasks 
    * Verify the information with the database and log the user in.    
    * Create the form that allows the user to login.    
  * Estimate  
    * 6 hours
    
2.
  * EPIC
    * Access
  * Notes
    * Login means being able to access account privileges such as:
      * editing comics.
      * editing profile.
      * changing avatar.
      * submitting comments.
  * Definitions of Done (Test)
    * Viewer or collaborator will successfully log in if after typing in their username and password and clicking the "login" box, they see their profile page.
  * Tasks
    * Create a login-page with boxes for “username” and “password” and an “enter” button that the viewer or collaborator will fill in.
  * Estimate
    * 4 hours
    
3.
  * EPIC
    * Editing
  * Role-Goal-Benefit
    * As a current viewer or current collaborator, I want to be able to change change my password so that I can ensure that my account is private and secure.
  * Notes
    * Should be able to access following things (the account privileges):
      * change password.
  * Definitions of Done (Test)
    * Current viewer or current collaborator should be able to change their password in the “Edit Profile” page by putting in a new password in the "Change Password" box and clicking "Enter".
    * Successful change if viewer or collaborator is able to log in to their account with their updated password.
  * Tasks
    * Create a button that will lead to the "Edit Profile" page.
    * Create a form for showing the profile info.
    * Create box for "Change Password".
    * Update database with the changed password associated with the viewer or collaborator.
  * Estimate
    * 4 hours
    
4.
  * EPIC
    * Storage
  * Role-Goal-Benefit
    * As a viewer or contributor, I want to be able to change my avatar image when I am logged in, so it can be displayed on my profile and when I comment.
  * Notes
    * Size should be constrained (300px by 300px).
    * Supports JPEG, GIF, and PNG.
  * Definitions of Done (Test)
    * Users should be able to upload an avatar image by clicking the "Upload Avatar" box and selecting a picture from their files to their profile in their "Edit Profile" page, which will then be displayed in full size.
      * Successful if profile page displays an avatar picture after upload.
      * Upload will fail if image size is greater than limit or if it is not a supported image type.
    * When they comment on strips, a smaller version of their avatar is displayed next to their username.
  * Tasks
    * Enable a separate image upload for avatars (in edit profile options).
    * Display the image on the screen according to whether it’s on their profile, or in the comment section (smaller for comment section).
  * Estimate
    * 5 hours
    
5.
  * EPIC
    * Storage
  * Role-Goal-Benefit
    * As a viewer or contributor I want to be able to save my favorite comic strips so that I can view them later in my favorites tab.
  * Notes
    * Favorites tab would be on profile.
    * Other users can view it from the profile.
  * Definitions of Done (Test)
    * A current user account can add a comic strip (by clicking a “Save to Favourites”  button near the strip) to their favorites, and if they navigate to their profile they can then find their favorites tab with that saved strip link on it.
  * Tasks
    * Verify whether the user is logged in (if not, lead to log-in page).
    * If the selected comic strip is already in the favorites, show undo button instead of add to favorite.
    * If the selected comic strip is not in the favorites, show 'add to favorite button'.
  * Estimate
    * 3 hours
    
6.
  * EPIC
    * Access
  * Role-Goal-Benefit
    * As a viewer or contributor I want to be able to view other people’s public profiles by clicking on their username from the comments section in order to view their information.
  * Notes
    * Assume that viewer and contributor have logged in already.
  * Definitions of Done (Test)
    * Clicking on username will lead the viewer or contributor to the user’s public profile, which will contain their username, their avatar and the favourites list of that user.
  * Tasks
    * Set up clickable usernames in the comments section so that they lead to the public profile of the user when clicked.
    * Set up the public profile of a user that contains the username as a header, their avatar picture and the favourites list of that user; if user has no favourites just have the username header present.
  * Estimate
    * 3 hours
    
7.
  * EPIC
    * Editing    
  * Role-Goal-Benefit
    * As a viewer or contributor, I want to be able to leave comments on comic strips so that other viewers can see my comments.
  * Notes
    * Comments can be below the comic strip itself.
    * Next to the comment is the username of the person who posted, and a link to their profile.
  * Definitions of Done (Test)
    * A user account can type into a text box and submit a comment to the page.
    * The comment will be viewable to all other users on the page, for that comic page only submitted comments are successfully saved if they are present in the database and appear on the front-end comment section.
  * Tasks
    * Verify whether the user is logged in (if not, lead to log-in page).
    * Create the form for user to type a comment.
    * Save the comment submitted in the database.
  * Estimate
    * 3 hours
8.
  * EPIC
    * Viewing
  * Role-Goal-Benefit
    * As a viewer or contributor I want to be able to search for comic strips so that I can find comics with matching keywords.
  * Notes
    * Keywords include titles.
  * Definitions of Done (Test)
    * Typing into the search engine will give out relevant results on a separate page for the user to.
  * Tasks
    * Create a form where the user can type the keyword for searching.
    * Create functions to find comics with matching keywords.
  * Estimate
    * 4 hours
    
9.
  * EPIC
    * Editing
  * Role-Goal-Benefit
    * As a contributor, I want to be able to give my comic a title and author comments when I upload it, so that others can read my comments about the strip.
  * Notes
    * Title is shown above the strip, and in larger font than author comments.
    * Author comments are below the strip, but above the user comments.
    * Title and author comments are optional, they can be left empty.
  * Definitions of Done (Test)
    * When uploading a new comic, there is an option to add a title and author comments.
    * Once uploaded and the information entered, title will be displayed above the image, and the blurb will be displayed below.
  * Tasks
    * Enable text entry when uploading comics.
    * The entry will take in two different inputs, one for title and one for comments, which are entered in separate boxes display it properly on the page.
  * Estimate
    * 4 hours
    
10.
  * EPIC
    * Editing
  * Role-Goal-Benefit
    * As a contributor, I want to be able to edit my comic by rearranging the panels and deleting them, in case I made errors, or to make it flow properly.
  * Notes
    * Panels can be selected, and dragged and dropped to change their order.
    * Deletion button will be on the side, and can be clicked to delete selected panel.
  * Definitions of Done (Test)
    * An edit button should be on the side of the comic that a contributor created.
    * Only the contributor can edit their own comics.
    * Panels can be rearranged and deleted.
  * Tasks
    * Create an edit function, that is activated by clicking.
    * Create a drag and drop interface.
    * Allow deletion of comic images  from the webpage and server.
  * Estimate
    * 6 hours
    
11.
  * EPIC
    * Editing
  * Role-Goal-Benefit
    * As a contributor, I want to be able to edit the title of my comic and the author comments so that I can add thoughts or delete mistakes.
  * Notes
    * Can also completely delete the title and author comments so that the field is empty.
  * Definitions of Done (Test)
    * There should be an edit button next to the comic strip where the user can click, and edit and delete their author comments and title.
  * Tasks
    * Create an edit function, that is activated by clicking.
    * When clicked, the user can change what’s in their author comments box, or the title, as well as delete them.
  * Estimate
    * 4 hours
    
12.
  * EPIC
    * Viewing & Editing
  * Role-Goal-Benefit
    * As a logged-in contributor, I want to be able to create a new comic strip so that viewers can view my comic strip.
  * Notes
    * Creating new comic just means uploading the panels.
    * Supports JPG PNG GIFs.
  * Definitions of Done (Test)
    * Contributors can upload images for comics and they will be displayed on the comic page, where the contributor and the user can see.
    * Can upload multiple images to make up a strip, it does not have to be a single image.
  * Tasks
    * Allow uploading and storing of images when submitting a comic.
    * Display the image on the webpage.
  * Estimate
    * 5 hours
    
13.
  * EPIC
    * Access
  * Role-Goal-Benefit
    * As a viewer or contributor I want to be able request a reset password link so that I can reset my current password when I forget it.
  * Notes
    * A link will be emailed which brings to a reset password page.
  * Definitions of Done (Test)
    * In the login page, there will be a "forgot password" button that brings you to the reset password page where you enter your email, and if it matches what’s in the database they will email a link to reset the password.
    * The user can use the link to go to a page where it lets you type in a new password.
  * Tasks
    * Implement the forgot password button.
    * It will open a new page that lets you type in an email.
    * The email typed in will be matched with what’s in the database.
    * Send the email with a reset password link associated with the account.
    * Create a reset password page that lets you change the password of an account.
    * Implement functionality that lets user know if the email they entered is not associated with an account in the database.
    * Implement functionality that lets user know if the email they entered is associated with an account and that an email has been sent to their account.
  * Estimate
    * 7 hours
    
14.
  * EPIC
    * Access
  * Role-Goal-Benefit
    * As a logged-in viewer or contributor I want to be able to log out of my account so that I can ensure no one else has access to my account until I choose to log in next.
  * Notes
    * The logout button should be visible on all main pages when the user is logged in.
    * The logout button should redirect them back to the home page.
  * Definitions of Done (Test)
    * Logged-in viewers and contributors can click the logout button in the top bar and succesfully log out of their account.
  * Tasks
    * Add a logout link to the homepage that only appears when a viewer or contributor is logged in.
    * Make the logout link log the current user out of his/her account when clicked.
    * Ensure that the user is redirected to the homepage after being succesfully logged out.
  * Estimate
    * 5 hours
    
15.
  * EPIC
    * Viewing
  * Role-Goal-Benefit
    * As a logged-in viewer or contributor I want to be able to click on a browse button that will allow me to view a list of comics in alphabetical order so that I can easily browse new comics alphabetically and find comics by first letter that I already know about.
  * Notes
    * Each letter of the alphabet will be displayed as a link to be able to filter by comic title starting with that letter.
    * The list of comics to browse will have 10 comics per page, with pagination to navigate between pages.
  * Definitions of Done (Test)
    * Logged-in viewers and contributors can click on browse and see the list of most recent comics starting with the selected letter.
    * Logged-in viewers and contributors can click on an alphabetical letter to filter the list of comics being displayed by comics starting with the selected first letter.
  * Tasks
    * Add a browse button at the top of all main pages that takes the user to a page of most recent comics starting with the letter that has been selected for filtering (letter "a" by default).
    * 10 comics per page should be shown.
    * If more than 10 comics start with the selected alphabetical filtering letter then the user should have the option to click on the next (and/or previous if applicable) page link to go between pages.
  * Estimate
    * 5 hours