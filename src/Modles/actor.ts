export type Actor = {
    name:string,
    id:number,
    url:string,
    gender:string,
    birthday:Date,
    country:{
        name:string,
        code:string,
    },
    image:{
        medium:string,
        original:string
    },
    };