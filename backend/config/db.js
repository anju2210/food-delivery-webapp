import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://anjubhagat124:Sam2210AB@cluster0.nc3i1st.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
