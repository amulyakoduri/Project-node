const Project = require("../models/projectModel")
// to get all Projects
exports.getAllProjects= async(req,res) => {
    let projects = await Project.find(req.body)
    res.status(200).json({
        sucess: true,
        projects
    })
}


// project by id
exports.getProjectDetails = async(req,res,next) => {
    let project = await Project.findById(req.params.id)
    if(!project){
        return next("Project not found" , 404)
    }

    res.status(200).json({
        sucess: true,
        project
    })

}

exports.getProjectsActive = async(req,res,next) => {
    let projects = await Project.find(req.body)

    
    let activeProjects = projects.map((project) => {
        return project.isActive === true
    })

    if(!activeProjects){
        return next("active Projects not found" , 404)
    }

    res.status(200).json({
        sucess: true,
        activeProjects
    })

}