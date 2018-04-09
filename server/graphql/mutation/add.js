var GraphQLNonNull=require('graphql').GraphQLNonNull;
var GraphQLString =require('graphql').GraphQLString;
var UserType=require('../types/user');
var UserModel=require('../../model/user');

exports.add={
    type: UserType.userType,
    args:{
        name:{
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve:(root,params)=>{
        //console.log(root)
        const uModel=new UserModel(params);
        const newUser=uModel.save();

        if(!newUser)
        {
            console.log('Error');
        }
        return newUser
    }
}