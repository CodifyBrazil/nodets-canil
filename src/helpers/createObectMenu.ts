type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createObject = (activeObject: MenuOptions) => {
    const returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if (activeObject !== ''){
        returnObject[activeObject] = true;
    }

    return returnObject;
}