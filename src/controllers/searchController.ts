import { Request,Response } from "express";
import { Pets } from "../models/pets";
import {createMenu} from '../helpers/createrObject';

export const search = (req: Request, res:Response) =>{

    let query: string =  req.query.q as string;

    let list = Pets.getFromName(query)

    if(!query){
        res.redirect('/');
        return;
    }

    res.render('pages/page',{
        menu: createMenu(''),
        list,
        query
    })
}