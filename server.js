const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const gioRoutes = express.Router();
const PORT = 4000;
let Articolo = require('./dataModel.js');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/Blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})
gioRoutes.route('/').get(function (req, res) {
    Articolo.find(function (err, articolo) {
        if (err) {
            console.log(err);
        } else {
            res.json(articolo);
        }
    });
});
gioRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Articolo.findById(id, function (err, articolo) {
        res.json(articolo);
    });
});
gioRoutes.route('/update/:id').post(function (req, res) {
    if (req.headers.authorization!==process.env.REACT_APP_API_KEY) {
        return res.status(403).json({ error: "wrong api key"});
      }else{
        Articolo.findById(req.params.id, function (err, art) {
            if (!art)
                res.status(404).send("data is not found");
            else
            art.Data = req.body.Data;
            art.Titolo = req.body.Titolo;
            art.Testo = req.body.Testo;
            art.Sottotitolo = req.body.Sottotitolo;
            art.Immagine = req.body.Immagine;
            art.save().then(articolo => {
                    res.json('articol updated!');
                })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        });
      }

});
gioRoutes.route('/add').post(function (req, res) {
    if (req.headers.authorization!==process.env.REACT_APP_API_KEY) {
        return res.status(403).json({ error: "wrong api key"});
      }else{
    let articolo = new Articolo(req.body);
    articolo.save()
        .then(q => {
            res.status(200).json({
                'article': 'article added successfully'
            });
        })
        .catch(err => {
            res.status(400).send('adding new artcile failed');
        });
    }
});
// songRoutes.route('/add/bulk').post(function (req, res) {
//     Song.insertMany(req.body, function (error, docs) {
//         if (error === null ) {
//             res.status(200).send('bulk methond worked correctly: ' + docs)
//         } else {
//             res.status(400).send('error on bulk method: ' + error)
//         }
//     });
// });

gioRoutes.route('/delete/:id').delete((req, res, next) => {
    if (req.headers.authorization!==process.env.REACT_APP_API_KEY) {
        return res.status(403).json({ error: "wrong api key"});
      }else{
    Articolo.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            res.status(400).json({
                "error": next(error)
            })
        } else {
            res.status(200).json({
                "msg": data
            })
        }
    });
}
});

app.use('/Blog', gioRoutes);
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});