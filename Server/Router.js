const config = require("config");
const Router = require("express");
const contentful =  require('contentful');
const contentful_management = require("contentful-management");

const client = contentful.createClient({
    space : config.get('API_SPACE'),
    accessToken : config.get('API_KEY')
});

const client_management = contentful_management.createClient({
    accessToken: config.get('ACCESS_TOKEN')
})

const router = new Router();
router.post("/getData", async(req, res) => {
    try{
        await client.getEntries().then((Data)=>{
            res.send(Data);
        })
    } catch(e) {
        console.log(e)
        res.send({massage : "Server error"})
    }
});

router.post("/addNewComment", async(req, res) => {
    try{
        const {name} = req
        console.log(req.body)
        res.send("done")
        // await client_management.getSpace( config.get('API_SPACE') )
        //   .then(space => space.getEnvironment('master'))
        //   .then((environment) => {
        //     environment.getEntries().then((e)=>console.log(e))
        //     environment.createEntry('question',
        //       {
        //         fields: {
        //           person : {
        //             'ru': "Bob"
        //           },
        //           question : {
        //             'ru': {
        //               "content" : [{
        //                   "content": [{
        //                     "data": {},
        //                     "marks": [],
        //                     "value": "link to entry",
        //                     "nodeType": "text"
        //                   }],
        //                 "data": {},
        //                 "nodeType": "paragraph",
        //               }],
        //               "data": {},
        //               "nodeType": "document",
        //             }
        //           },
        //           date : {
        //             'ru': "Bob"
        //           },
        //         }
        //       }
        //     )
        //     .then((entry) => console.log(entry))
        //   });
    } catch(e) {
        console.log(e)
        res.send({massage : "Server error"})
    }
});

module.exports = router;