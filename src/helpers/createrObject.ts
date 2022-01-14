type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenu = (activeMenu :MenuOptions) =>{

    let returObjetct = {
        all:false,
        dog:false,
        cat: false,
        fish: false
    };

    if(activeMenu !== ''){
        returObjetct[activeMenu] = true;
    }

    return returObjetct;
}