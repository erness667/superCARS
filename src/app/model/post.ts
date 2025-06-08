export interface Post {
    title: string,
    imageFile: File | string,
    price: number,
    previousOwners: number,
    kilometrina: number,
    letnica: number | string,
    rating: number,
    username: string | null,
}
