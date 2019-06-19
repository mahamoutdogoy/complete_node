const fs = require("fs")
const chalk = require("chalk")
const getNotes = function()
{
       return "Your notes ..."
}

const addNote = function(title , body)
{
       const notes = loadNotes()
       const duplicateNotes = notes.filter(function(note){
        return note.title === title

       })
       if (duplicateNotes.length === 0)
       {
              notes.push({
                     title: title,
                     body: body
              })
              saveNotes(notes)
              console.log(chalk.green.inverse("New Note Added"))
       }
       else
       {
              console.log(chalk.yellow.inverse("Note Title Taken"))
       }
    
}

const removeNote = function(title)
{
   const notes = loadNotes()
   const notesTokeep = notes.filter(function(note)
   {
       return note.title !== title
   })

   if (notes.length > notesTokeep.length)
   {
    console.log(chalk.green.inverse("Note Remove!"))
        saveNotes(notesTokeep)
   }
   else
   {
          console.log(chalk.red.inverse("No Note Found!"))
   }
  
}


const saveNotes = function(notes)
{
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync("notes.json", dataJSON)
}
const loadNotes = function()
{
        try
        {

              const dataBufffer = fs.readFileSync("notes.json")
              const dataJSON = dataBufffer.toString()
              return JSON.parse(dataJSON)
        }
        catch (e)
        {
            return []
        }

}

module.exports = {
       getNotes: getNotes,
       addNote: addNote,
       removeNote: removeNote
}