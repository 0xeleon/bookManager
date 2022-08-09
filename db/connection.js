import mongoose from 'mongoose';

const user = 'eduardo';
const password = 'edu4rd0';
const db = 'mongoomanagebook';
const port = '27017';

mongoose.Promise = global.Promise;
mongoose
  .connect(`mongodb://${user}:${password}@${db}:${port}/miapp?authSource=admin`)
  .then(() => {
    console.log("Connection to MongoDB successfully :)")
  })
  .catch((e) => {
    console.log("error: ", e)
  });


export default mongoose;