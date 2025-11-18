import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title: { type: String, require: true},
    description: { type: String, require: true},
    image: { type: String, require: true},
    footer: { type: String, require: true}
})

const Project = mongoose.model('project', projectSchema, 'projects')

export default Project