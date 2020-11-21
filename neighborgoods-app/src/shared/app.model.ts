export interface AnnouncementDTO {
    userId: number,
    name: string,
    description: string,
    price: number,
    announcementType: AnnouncementType,
    publishingType: PublishingType,
    tags: [],
}

export interface UserDTO {
    userName: string, 
    email: string,
    password: string,
    phoneNumber: string,
    type: string
}

export enum PublishingType {
    offer, need
}

export enum UserType {
    company, user
}

export interface AnnouncementType {
    id: number,
    name: string,
    description: string // polska nazwa 
}
