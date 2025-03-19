export enum ItemCategory {
    CAKE = "cake",
    CLOTHING = "clothing",
    FURNITURE = "furniture",
    PET= "pet",
    TOY = "toy",
    BOOK = "book",
}


export interface IItem {
    getCategory(): ItemCategory;
}


