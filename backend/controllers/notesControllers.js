import Note from "../models/Note.js"

export async function getAllNoted(req, res) {
     try {
          const notes = await Note.find()
          res.status(200).json(notes)
     }catch (error){
          console.error("Error in getAllnotes controller",error);
          res.status(500).json({message:"Internal server error"});
     }

     
}









export function getAllNotes(req,res) {
       res.status(200).send("You just fetched notes");
};

export function createNote(req,res) {
     res.status(201).json({message:"Note created successfully"})
};

export function updateNote(req,res) {
     res.status(200).json({message:"Note updated successfully"})
};

export function deleteNote(req,res) {
     res.status(200).json({message:"Note deleted successfully"})
};