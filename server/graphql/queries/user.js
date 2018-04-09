var GraphQLObjectType=require('graphql').GraphQLObjectType;
var GraphQLList=require('graphql').GraphQLList;
var GraphQLString=require('graphql').GraphQLString;
var UserModel=require('../../model/user');
var userType=require('../types/user').userType;

exports.queryType=new GraphQLObjectType({
    name:'Query',
    fields:()=>{
        return{
            users:{
                type: (new GraphQLList(userType)),
                resolve:()=>{
                    const u=UserModel.find().exec()

                    if(!u)
                    {
                        console.log('Not found')
                    }
                    return u
                }
            }
        }
    }
})