const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const add = require("./utils.js")
const notes = require("./notes.js")
//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
         title:
         {
              describe: "Note title",
              demandOption: true,
              type: "string"
         },
         body:
         {
            describe: "Note body",
            demandOption:true,
            type: "string"

         }
  },
  handler: function(argv)
  {
        notes.addNote(argv.title, argv.body)
  }

})

//create remove command
yargs.command({
       command: "remove",
       describe: "Remove a note",
       handler: function(argv)
       {
             notes.removeNote(argv.title)
       }
})
//create list command 
yargs.command({
       command: "list",
       describe: "list the notes",
       builder:{
             title: {
                    describe: "Note title",
                    demandOption: true,
                    type: "string"
             }
       },
       handler: function()
       {
        conssole.log("listing notes")
       }
})

//create read command
yargs.command({
       command: "read",
       describe: "read the notes",
       handler: function()
       {
              console.log("reading a notes")
       }

})
yargs.parse()
//console.log(yargs.argv)
