# ROUTES NEED TO BE TESTED IN POSTMAN (AFTER DB UPDATES)
## api/menu  **DONE**
1. [GET MENU BASED ON ID] ({{baseUrl}}/menu/list/[MENU_ID]) 

/**
 * Absolute Route : /list
 * DEsc : get List of menu by restaurant ID
 * params : _id 
 * method Get
 * access public
 * 
 */

2. [GET MENU IMAGES]({{baseUrl}}/menu/image/[MENU_IMAGE_ID])
/**
 * Absolute Route : /image
 * DEsc : get all List of menu by  ID
 * params : _id 
 * method Get
 * access public 
 */
3. **Tokens should pass in authentication bearer**
[GET USER ORDER DETAILS0]({{baseUrl}}/order/)
/**
 * Absolute Route : /:_id (JWT Handles with additional params)
 * DEsc : get all Orders by  ID
 * params : _id 
 * method Get
 * access private
 * 
 */

1. VALIDATE UPDATE ORDER
2. VALIDATE USER DATA


--------------------------------------------------------------------------------
# **Notes**
## JOI (MIDDLEWARE VALIDATION)
>used to check or validate in order avoid attackers

## Authentication
### Code : 

` Router.get('/', passport.authenticate("jwt", {session:true}),async (req, res)=>{`
`    try {`
`        const {user} = req`
`        const _id = user._id`
`    } catch (error) {`
`        return res.status(500).json({error: error.message})`
`    }`
`}) `
>"passport.authenticate" - decodes data
>additional params can be taken from req.user and its named when generate JWT token (refer \server\database\user\index.js :line 34) 

----------
## sorting In mongoDB
### Code :
`const reviews = ReviewModel.find({restaurant:resId}).sort({createdAt : -1});`

# COMMON ERRORS 

`{`
`    "error": "Converting circular structure to JSON\n    --> starting at object with` `constructor 'MongoClient'\n    |     property 's' -> object with constructor` `'Object'\n    |     property 'sessionPool' -> object with constructor` `'ServerSessionPool'\n    --- property 'client' closes the circle"`
`}`

>REASON IS CODE RANS before the data recieves by the
>particular var... Tip: add "await" before the specific function

[ ] ctrl L
ctrl *i*
~
[ref](https://github.com/aditya12gusain/zomato-clone-10567/blob/day-20/client/src/components/Restaurant/OrderOnline.jsx)

----------
**Reallocating the server into one dir**
>the "package.json" has to update follwing things
1. UPDATE THE SCRIPT

in build `command:
    "babel index.js -d dist" --> "babel ./mainFolderName -d dist"
    "dev":"nodemon --exec babel-node index.js"-->"dev": "nodemon --exec babel-node ./src/index.js"

2. second
3. FrmerMotion GSAP

**REDUX**
createstore - creates store
thunk - console logs (track)

**MAJOR THINGS IN REDUX TO FOLLOW**
1. Type => initializes as variable
2. Action => Brain Of App which sends to BackEnd from frontend and updates the reducer
3. Reducer => Combines the chunks {usually}



<!-- BUGS -->

<!-- VIM COMMANDS -->
i - insert
esc - back to command
:wq - quit & save
dd - delete line
ddd -  delete lines x3


stackblitz
githubcoidespaces
fleet


/Shricourteous:Shricourteous@cluster0.f8onjwc.mongodb.net/?retryWrites=true&w=majority
/devtown:devtown10567@cluster0.gg0gdie.mongodb.net/?retryWrites=true&w=majority



**ERRORS AT**
line 34 : Restaurant Layout (sol : Arrange DB)





