import * as devolperSkillsDb from '../data/devolper-skills-db.js'





function index(req, res) {
  devolperSkillsDb.find({}, function(error, devolperSkills) {
    res.render('skills/index', {
      devolperSkills: devolperSkills,
      error: error,
      title : "Some of my skills"
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


export{
  index,
  show
}