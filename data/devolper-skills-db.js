const devolperSkills = [
  {text: 'Making Coffee', done: true, _id: 125223},
  {text: 'Sleeping', done: true, _id: 127904},
  {text: 'Spelling', done: false, _id: 139608},
  {text: 'Javascript', done: false, _id: 139998},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the devolperSkills
    if (Object.keys(conditions).length === 0) return callback(null, devolperSkills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = devolperSkills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No todo was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  console.log(skill)
  skill._id = Date.now() % 1000000
  skill.done = false
  console.log(skill)
  devolperSkills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the todo object
    const idx = devolperSkills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = devolperSkills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skills were deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}



export { 
	find,
  findById,
  create,
  findByIdAndDelete,
}