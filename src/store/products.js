const initialState = {
    categories: [
        {
            normalizedName: 'FOOD',
            displayname: 'FOOD',
            description: 'This category shows the food section.',
        },
        {
            normalizedName:'GAMES' ,
            displayname: 'GAMES',
            description: 'This category shows the games section.',
        },
        {
            normalizedName:'BOOKS' ,
            displayname: 'BOOKS',
            description: 'This category shows the books section.',
        }
        
    ],

    products:[
        {
            category: 'FOOD',
            name: 'pizza',
            description:'Best pizza in town' ,
            price:'10$' ,
            inventoryCount:'15' ,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvumrFihliv7RYjAmbDciC35hPBVRxnF87o0kGAqEIDbmeAoEA8YFjtLxP5GwkUxLP2s&usqp=CAU'
        },
        {
            category: 'FOOD',
            name: 'LEMON CHICKEN PASTA',
            description:'Best LEMON CHICKEN PASTA in town' ,
            price:'28$' ,
            inventoryCount:'5' ,
            image: 'https://healthyfitnessmeals.com/wp-content/uploads/2022/01/Lemon-chicken-pasta-6.jpg'
        },
        {
            category: 'FOOD',
            name: 'shawerma',
            description:'Best shawerma in town' ,
            price:'5$' ,
            inventoryCount:'20' ,
            image: 'https://images.deliveryhero.io/image/talabat/MenuItems/Chicken_economy_meal.png'
        },
        {
            category: 'GAMES',
            name: 'call of duty',
            description:'The worlds best-selling video game.' ,
            price:'10$' ,
            inventoryCount:'30' ,
            image: 'https://cdn.exputer.com/wp-content/uploads/2022/02/call-of-duty-mobile.jpg'
        },
        {
            category: 'BOOKS',
            name: 'The Art of Creative Thinking',
            description:'Book by Rod Judkins' ,
            price:'20$' ,
            inventoryCount:'15' ,
            image: 'https://static-01.daraz.com.np/p/94b4293d8109087797167bad0b9190b8.jpg'
        }
    ],

    activeCategory: '',
}

// my reducer
 function productRed(state = initialState, action){

    const {type, payload } = action;
    switch(type){
        case 'ACTIVE':
            return{...state,activeCategory:payload }
            default:
                return state;
    }
}

// the actions
export const active = (category) => {
    return{
        type: 'ACTIVE',
        payload:category
    }
}

export default productRed;
