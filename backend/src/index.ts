import express from 'express'
import cors from 'cors'
import * as RecipeAPI from './recipe-api';

const app=express();
app.use(express.json())
app.use(cors())
app.get("/api/recipes/search",async (req,res)=>{
    //GET http://localhost/api/recipes/search?searchTerm=burgers&page=1
     const searchTerm = req.query.searchTerm as string;
     const  page =parseInt(req.query.page as string);
    const results =await RecipeAPI.searchRecipes(searchTerm,page);

    return res.json(results);
})
app.listen(5000, ()=>{
    console.log("Server running on localhost:5000");
})
