require('dotenv').config()

const express = require('express');
const helmet = require('helmet');

const {conectarDB} = require('./base.js');
const modeloTabla = require('./posteoModel.js')

const app = express();
const puerto = process.env.puerto;

app.set('view engine', 'ejs');

//----- Middlewares
app.use(helmet({contentSecurityPolicy:false}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))


//---ruta pagina principal
app.get('/', async function (req, res) {
    const publicacion = await modeloTabla.findAll();
  res.render('principal', {publicacion});
})


//---- ruta pagina agregar
app.get('/agregar', function (req, res) {
  res.render('agregar');
})

app.post('/agregar', async function (req, res) {
  const { agregartitulo, agregarposteo, agregarurl } = req.body

  try {
      const nuevaPublicacion = await modeloTabla.create({
          titulo_posteo: agregartitulo,
          posteo: agregarposteo,
          url_posteo: agregarurl,
      });

      if (nuevaPublicacion) {
          res.redirect('/');
      } else {
          res.send('No se pudo agregar la publicacion')
      }
  } catch (err) {
      res.send('Se produjo un errror al cargar la publicacion: ' + err)
  }
})

//---ruta pagina editar
app.get('/editar/:id', async function (req, res) {
    const {id} =  req.params;

    try {
      const editarPublicacion = await modeloTabla.findOne({
        where: {
            id_posteo : id
        }
      })

      if (editarPublicacion) {
        res.render('editar', {editarPublicacion})
      } else {
        res.send('No se encontro la publicacion')
      }
    } catch (err) {
        res.send('Se produjo un error al buscar la publicación')
    }
})

app.post('/editar/:id', async function (req, res) {
  const {agregartitulo, agregarposteo, agregarurl } = req.body
  const {id} =  req.params;
  try {
      const editarPublicacion = await modeloTabla.update({
          titulo_posteo: agregartitulo,
          posteo: agregarposteo,
          url_posteo: agregarurl,
      }, {
              where: {
                  id_posteo: id
              }
          }
      )
      
      if (editarPublicacion) {
          res.redirect('/');
      } else {
          res.send('No se pudo editat la publicacion :(')
      }
  } catch (err) {
      res.send('Se produjo un errror al editar la publicacion: ' + err)
  }
})


//---- ruta pagina presentacion
app.get('/presentacion/:id', async function (req, res) {
  const {id}=req.params
  const publicacion = await modeloTabla.findOne({
    where: {
      id_posteo : id
  }
  });

  res.render('presentacion', { publicacion});
})

//---eliminar
app.get('/elimina/:id', async function (req, res) {
  const {id} =  req.params;

  try {
    const borrar = await modeloTabla.destroy({
      where: {
          id_posteo : id
      }
    })

    if (borrar) {
      res.redirect('/')
    } else {
      res.send('No se encontro la publicacion')
    }
  } catch (err) {
      res.send('Se produjo un error borrar la publicación')
  }
})

//---conexion base de datos
conectarDB()


//---- conexion puerto
app.listen(puerto, () => {
  console.log(`Conectado en puerto ${puerto}`)
})
