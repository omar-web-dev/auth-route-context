/**
 * context API : share auth state with other components (across the application )
 * Create an UserContext
 * ContextProvider whit passed children (create a user or log in)
 * set the UserContext in the index.jx
 * To consume the context : export the AuthContext from UserContext
 * Now at Header else :  use useContext hook
 */

/**
 * ---------------------
 * auth integration 
 * ---------------------
 * use getAuth by passing the app form firebase config
 * create a function named createUser to return createUserWithEmailAndPassword 
 */