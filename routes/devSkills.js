import { Router } from 'express'
import * as devolperSkillsDb from '../data/devolper-skills-db.js'
const router = Router()

/* GET users listing. */

router.get('/', function(req, res) {
  devolperSkillsDb.find({}, function(error, devolperSkills) {
    res.render('skills/index', {
      devolperSkills: devolperSkills,
      error: error,
      title : "Some of my skills"
    })
  })
})
export {
  router
}
