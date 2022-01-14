import { Request,Response } from "express";
import {createMenu} from '../helpers/createrObject'
import {Pets} from '../models/pets';


export const home = (req: Request, res:Response) =>{

    let list = Pets.getAll()
    res.render('pages/page',{

        // menu:{
        //     all:true,
        //     dog:false,
        //     cat:false,
        //     fish: false
        // }

        menu : createMenu('all'),
        banner : {
            title: 'Todos os Animais',
            background : 'allanimals.jpg'
        },
        list
    })
}
export const dogs = (req: Request, res:Response) =>{

    let list = Pets.getFromtype('dog');

    res.render('pages/page',{

        menu : createMenu('dog'),
        banner : {
            title: 'Cachorro',
            background : 'banner_dog.jpg'
        },
        list
    })
}
export const cats = (req: Request, res:Response) =>{

    let list = Pets.getFromtype('cat');
    res.render('pages/page',{

        

        menu : createMenu('cat'),
        banner : {
            title: 'Gatos',
            background : 'banner_cat.jpg'
        },
        list
    })
}
export const fishers = (req: Request, res:Response) =>{
    let list = Pets.getFromtype('fish');
    res.render('pages/page',{

        menu : createMenu('fish'),
        banner : {
            title: 'Peixes',
            background : 'banner_fish.jpg'
        },list
    })
}