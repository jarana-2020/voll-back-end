import * as multer from "multer"

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'public/')
  },
  filename: (req, file, callback) => {
    callback(null,file.originalname)
  }
})

export const upload = multer({ storage })