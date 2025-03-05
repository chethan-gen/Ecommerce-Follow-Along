const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,__dirname ,'../userImages')  //if the folder already exist then the immage will be stored in the file if it does not exit then it will creat a new file and store the image in the newly created file//
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })


  
  const uploadUserImage = multer({ storage: storage })

  module.exports = uploadUserImage;