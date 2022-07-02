import mongoose from 'mongoose'
import app from './src/app.js'

const mongoUri = process.env.MONGODB_URI

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`App running on port ${process.env.PORT}`)
    )
  })
  .catch((error) => {
    console.log(
      'Mongodb connection error. Please make sure your mongodb is running.' + error
    )
  })
