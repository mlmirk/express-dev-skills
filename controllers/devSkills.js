import * as devolperSkillsDb from '../data/devolper-skills-db.js'





function index(req, res) {
  devolperSkillsDb.find({}, function(error, devolperSkills) {
    res.render('skills/index', {
      devolperSkills: devolperSkills,
      error: error,
      title : "Some of my skills",
      time: req.time
    })
  })
}

function show(req,res){
devolperSkillsDb.findById(req.params.id, function(error, skill){
  res.render('skills/show',{
    skill:skill,
    error:error
  })
})
}
function newSkills(req,res){
  res.render('skills/new')
}

function create(req,res){
  devolperSkillsDb.create(req.body, function(erros,skill){
    res.redirect('/devSkills')
  })
}

export{
  index,
  show,
  newSkills as new,
  create
}