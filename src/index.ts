import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { ObjectId } from "mongodb"

AppDataSource.initialize()
  .then(async () => {
    const u1 = new User()
    u1.fullName = 'x';
    u1.email = 'test@gmail.com';

    const u2 = new User()
    u2.fullName = 'x';
    u2.email = 'test1@gmail.com';

    await AppDataSource.manager.save(u1)
    await AppDataSource.manager.save(u2)

    console.log("User has been saved", u1)
    console.log("User has been saved", u2)

    // https://github.com/typeorm/typeorm/issues/3964
    const userRepository = AppDataSource.manager.getMongoRepository(User);
    const uid = "6516f3da6cbb3a18eb6d7d1d"

    // works with userRepository
    const user = await userRepository.findOne({where:{
      _id: new ObjectId(uid) 
     }});

    //  works with User
     const user2 = await User.findOne({ where: {
      _id: new ObjectId(uid) as any
     }})
     console.log("user2=")
     console.log(user2)



    const updated = await User.update({_id: "6516fb7cef8db4021ab83c02", email:"test1@gmail.com"}, { fullName: "New Full Name" });
    console.log("updated=")
    console.log(updated)



  })
  .catch((error) => console.log("Error: ", error))
