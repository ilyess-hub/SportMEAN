const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const multer = require('multer');
const Match = require('./models/match');
const Team = require('./models/team');
const Player = require('./models/player');
const User = require('./models/user')
    // import body parser module
const bodyParser = require("body-parser");

const app = express(); //creation application BE
const mongoose = require('mongoose'); // import  mongoose
mongoose.connect('mongodb://localhost:27017/meanAoutDB'); //connect base donnes avec app.js
//mongoose.connect('mongodb+srv://ilyess:ilyess@cluster0.2dhie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));
// config multer
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;


        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


//bussiness logic to addMatch
// http://localhost:3000/  => equivalent a  /



app.post('/matches', (req, res) => {
    console.log('here into add match', req.body);
    // add object to db
    const matchObj = new Match({
        ScoreOne: req.body.ScoreOne,
        ScoreTwo: req.body.ScoreTwo,
        TeamOne: req.body.TeamOne,
        TeamTwo: req.body.TeamTwo
    });
    matchObj.save();
}); // add match 
app.get('/matches', (req, res) => {
    console.log('here into get all matches')
        //access to db and find objects
    Match.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                matches: docs
            });

        }

    });

}); // affichage dans tableau d' admin ng onit
app.get('/matches/:id', (req, res) => {
    console.log('here into get match by id', req.params.id)
    Match.findOne({ _id: req.params.id }).then((result) => {
            console.log('result of get by id', result)
            if (result) {
                res.status(200).json({
                    match: result
                })
            }

        }) //select from match objet ayant id 

})
app.put('/matches/:id', (req, res) => {
        console.log('here into edit match', req.params.id);
        console.log('here into edit match', req.body);
        // obj = new Match(req.body);

        const obj = new Match({
            _id: req.body._id,
            ScoreOne: req.body.ScoreOne,
            ScoreTwo: req.body.ScoreTwo,
            TeamOne: req.body.TeamOne,
            TeamTwo: req.body.TeamTwo


        })
        Match.updateOne({ _id: req.params.id }, obj).then((result) => {
            console.log('after update', result)
            if (result) {
                res.status(200).json({
                    message: obj //affichage de obj dans cpnsole server
                })
            }

        })


    }) // edit 
app.delete('/matches/:id', (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    Match.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})






app.post('/player', multer({ storage: storage }).single('img'), (req, res) => {
    console.log('here into add player', req.body);
    console.log('here into add player', req.file);
    url = req.protocol + '://' + req.get('host');
    const playerObj = new Player({
        name: req.body.name,
        poste: req.body.poste,
        age: req.body.age,
        nbr: req.body.nbr,
        img: url + '/images/' + req.file.filename
    });
    playerObj.save();
    console.log(playerObj);


}); //add player

app.get('/player', (req, res) => {
    console.log('here into get all players')
        //access to db and find objects
    Player.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                players: docs
            });

        }

    });

});

app.get('/player/:id', (req, res) => {
        console.log('here into get player by id', req.params.id)
        Player.findOne({ _id: req.params.id }).then((result) => {
                console.log('result of get by id', result)
                if (result) {
                    res.status(200).json({
                        player: result
                    })
                }

            }) //select from match objet ayant id 

    }) //pour affficher les donnees precedente dans formulaire

app.put('/player/:id', (req, res) => {
        console.log('here into edit', req.params.id);
        console.log('here into edit', req.body);
        // obj = new Match(req.body);

        const obj = new Player({
            _id: req.body._id,
            name: req.body.name,
            poste: req.body.poste,
            age: req.body.age,
            nbr: req.body.nbr

        })
        Player.updateOne({ _id: req.params.id }, obj).then((result) => {
            console.log('after update', result)
            if (result) {
                res.status(200).json({
                    message: obj //affichage de obj dans cpnsole server
                })
            }

        })


    }) // edit 
app.delete('/player/:id', (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    Player.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})









app.post('/teams', (req, res) => {
    console.log('here into add team', req.body);

    const teamObj = new Team({
        nom: req.body.nom,
        found: req.body.found,
        stad: req.body.stad,
        own: req.body.own
    });
    teamObj.save();


});
app.get('/teams', (req, res) => {
    console.log('here into get all teams')
        //access to db and find objects
    Team.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                teams: docs
            });

        }

    });

});
app.get('/teams/:id', (req, res) => {
        console.log('here into get team by id', req.params.id)
        Team.findOne({ _id: req.params.id }).then((result) => {
                console.log('result of get by id from team', result)
                if (result) {
                    res.status(200).json({
                        team: result
                    })
                }

            }) //select from match objet ayant id 

    }) //pour affficher les donnees precedente dans formulaire
app.put('/teams/:id', (req, res) => {
        console.log('here into edit team', req.params.id);
        console.log('here into edit team', req.body);
        // obj = new Match(req.body);

        const obj = new Team({
            _id: req.body._id,
            nom: req.body.nom,
            found: req.body.found,
            stad: req.body.stad,
            own: req.body.own

        })
        Team.updateOne({ _id: req.params.id }, obj).then((result) => {
            console.log('after update', result)
            if (result) {
                res.status(200).json({
                    message: obj //affichage de obj dans cpnsole server
                })
            }

        })


    }) // edit 
app.delete('/teams/:id', (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    Team.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})

















app.post('/users/signup', (req, res) => {
    bcrypt.hash(req.body.pwd, 10).then((result) => {
        console.log('here into add user', req.body);
        // add object to db
        const userObj = new User({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            pwd: result
        });
        userObj.save();

    })

});

app.post('/users/login', (req, res) => {
    console.log('Here login', req.body);
    User.findOne({ email: req.body.email }).then(
        (emailResult) => {
            if (!emailResult) {
                res.status(200).json({
                    message: '0'
                })
            }
            return bcrypt.compare(req.body.pwd, emailResult.pwd)
        }
    ).then(
        (pwdResult) => {
            if (!pwdResult) {
                res.status(200).json({
                    message: '1'
                })
            }

            User.findOne({ email: req.body.email }).then(
                (result) => {
                    let userToSend = {
                        nom: result.nom,
                        prenom: result.prenom
                    }
                    res.status(200).json({
                        users: userToSend,
                        message: '2'
                    })

                }
            )
        }
    )
});













module.exports = app;