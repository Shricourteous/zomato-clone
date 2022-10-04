# ROUTES NEED TO BE TESTED IN POSTMAN (AFTER DB UPDATES)
## api/menu
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
--------------------------------------------------------------------------------
**Notes**
## Authentication
### Code : 
` Router.get('/', passport.authenticate("jwt", {session:true}),async (req, res)=>{
    try {
        const {user} = req
        const _id = user._id
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}) `
>"passport.authenticate" - decodes data
>additional params can be taken from req.user and its named when generate JWT token (refer \server\database\user\index.js :line 34) 

## sorting In mongoDB
### Code :
`const reviews = ReviewModel.find({restaurant:resId}).sort({createdAt : -1});`

