import { Request, Response } from "express";
import { createObject } from '../helpers/createObectMenu';
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) =>{
    let page: string = 'animais';
    let banner: string = 'allanimals.jpg';

    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createObject('all'),
        page,
        banner,
        list,
    });
}
export const dogs = (req: Request, res: Response) =>{
    let list = Pet.getFromType('dog');
    let page: string = 'Cachorros';
    let banner: string = 'banner_dog.jpg';

    res.render('pages/page',{
        menu:createObject('dog'),
        page,
        banner,
        list,
    });
}
export const cats = (req: Request, res: Response) =>{
    let page: string = 'Gatos';
    let banner: string = 'banner_cat.jpg';

    let list = Pet.getFromType('cat');

    res.render('pages/page',{
        menu:createObject('cat'),
        page,
        banner,
        list,
    });
}
export const fishes = (req: Request, res: Response) =>{
    let page: string = 'Peixes';
    let banner: string = 'banner_fish.jpg';

    let list = Pet.getFromType('fish');

    res.render('pages/page',{
        menu:createObject('fish'),
        page,
        banner,
        list,
    });
}