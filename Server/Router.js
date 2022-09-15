const config = require("config");
const Router = require("express");
const contentful =  require('contentful');
const {body, validationResult} = require("express-validator")
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
            for( let index in Data.items) if(Data.items[index].fields.mail !== "undefined") Data.items[index].fields.mail = "none your business"
            res.send(Data);
        })
    } catch(e) {
        res.send({massage : "Server error"})
    }
});

router.post("/addNewComment", 
  body('mail').isEmail(),
  async(req, res) => {
    try{
      const errors = validationResult(req);
        if(!errors.isEmpty()){
          res.send({massage : "Oops, incorrect mail"})
        }
        else{
          const {firstName, lastName, mail, date, question} = req.body;
          await client_management.getSpace( config.get('API_SPACE') )
            .then(space => space.getEnvironment('master'))
            .then((environment) => {
              environment.createEntry('question',
                {
                 fields: {
                    person : {
                     'ru': `${firstName} ${lastName}`,
                   },
                    mail : {
                      'ru': mail,
                    },
                    date : {
                      'ru': date,
                    },
                    question : {
                      'ru': {
                        "content" : [{
                            "content": [{
                              "data": {},
                              "marks": [],
                              "value": question,
                              "nodeType": "text",
                            }],
                          "data": {},
                          "nodeType": "paragraph",
                        }],
                        "data": {},
                        "nodeType": "document",
                      }
                    },
                    answer : {
                      'ru': {
                        "content" : [{
                            "content": [{
                              "data": {},
                              "marks": [],
                              "value": "",
                              "nodeType": "text",
                            }],
                          "data": {},
                          "nodeType": "paragraph",
                        }],
                        "data": {},
                        "nodeType": "document",
                      }
                    },
                    answer_date : {
                      'ru': "",
                    },
                  }
                }
              )
            });
          res.send({massage : "Question has been sent!"});
        }
    } catch(e) {
        res.send({massage : "Server error"})
    }
});

module.exports = router;