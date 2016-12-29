const isStringLike = function(target: any): boolean{
    return ['string', 'number', 'boolean'].includes(typeof target) || target instanceof String;
};

const setAttributes = function(target: HTMLElement, attrs: {[key:string] : any}): void{
    if(!attrs){
        return;
    }
    if('object' === typeof attrs){
        for(let i in attrs){
            switch(true){
                case !attrs.hasOwnProperty(i):
                    continue;
                case isStringLike(attrs[i]):
                    target.setAttribute(i, attrs[i]);
                    break;
                default:
                    // do something strange here
            }
        }
    }
};

export const dom = {
    createElement: function (tagName: string, attrs: {[key:string] : any}, ...dom: any[]){

        const res = document.createElement(tagName);
        setAttributes(res, attrs);

        for(let i of dom){
            switch(true){
                case isStringLike(i):
                    res.appendChild(document.createTextNode(i));
                    break;
                case (i instanceof Element):
                    res.appendChild(i);
                    break;
                case Array.isArray(i):
                // TODO проверять тип элементов массива
                    i.forEach((cv: any) => { res.appendChild(cv);});
                    break;
                default:
                    // do something strange here
            }
        }
        return res;
    }

};


