import { Users } from "./Users";

export const POST =[
    {
        imageUrl: 'https://d2v9ipibika81v.cloudfront.net/uploads/sites/271/Africa-2.png',
        user: Users[0].user,
        likes: 123,
        caption: 'OLD SCHOOL GEMINI',
        profile_picture: Users[0].image,
        comments: [
            {
                user: 'dummyUser',
                comment: 'Wow! Thats AMAZING!!!!'
            },
            {
                user: 'dummyUser2',
                comment: 'This is lovely'
            },
            {
                user: 'dummyUser3',
                comment: 'Looking good there!'
            },

        ],
    },
    {
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/Tu-1M2LOaYCbnvR1PsEa_P3qfWY=/0x0:2982x1988/1200x675/filters:focal(1300x352:1776x828)/cdn.vox-cdn.com/uploads/chorus_image/image/66328440/GettyImages_515177654.0.jpg',
        user: Users[2].user,
        likes: 563,
        caption: 'Thinking long and hard',
        profile_picture: Users[2].image,
        comments: [
            {
                user: 'dummyUser',
                comment: 'Wow! Thats AMAZING!!!!'
            },
            {
                user: 'dummyUser2',
                comment: 'This is lovely'
            },


        ],
    },
]