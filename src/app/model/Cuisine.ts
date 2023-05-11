export class Cuisine{
    cuisineId:any;
    cuisineName:any;
    image:any;  
    price:any;
    qty:any;
    cuisineDescription:any;
    total:any


    constructor(
        cuisineId:any,
        cuisineName:any,
        image:any,
        price:any,
        qty:any,
        cuisineDescription:any,
        total :any

    ){
        this.cuisineId=cuisineId;
        this.cuisineName=cuisineName;
        this.image=image;
        this.price=price;
        this.qty=qty;
        this.cuisineDescription=cuisineDescription;
        this.total=total
        // this.rating=rating
    }

}