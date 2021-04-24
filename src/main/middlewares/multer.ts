import multer from "multer"
import md5 from "md5"
import path from "path"

export function diskStorage(diretory: string) {
  const storage = multer.diskStorage({
    destination: function (request, file, cb) {
      cb(null, `uploads/${diretory}`)
    },
    filename: function (request, file, cb) {
      cb(null, `${md5(Date.now().toString())}${path.extname(file.originalname)}`)
    }
  })

  return multer({ storage })
}
