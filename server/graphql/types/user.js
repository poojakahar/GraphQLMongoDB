var GraphQLObjectType=require('graphql').GraphQLObjectType;
var GraphQLNonNull=require('graphql').GraphQLNonNull;
var GraphQlID=require('graphql').GraphQLID;
var GraphQLString=require('graphql').GraphQLString;

// User Type

exports.userType=new GraphQLObjectType({
    name:'user',
    fields: ()=>{
        return{
            id:{
                type: new GraphQLNonNull(GraphQlID)
            },
            name:{
                type: GraphQLString
            }
        }
    }
});