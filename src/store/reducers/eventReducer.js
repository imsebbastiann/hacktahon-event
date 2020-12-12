const initState = {
    events: [
        {
            id: '23221414141424',
            nume: 'Craciun', 
            organizator: 'Organizator 1', 
            data: '25.12.2020',
            ora: '17:00',
            banner: '',
            descriere: 'lorem ipsum dolor sit amet',
            images: [],
            aprobat: true
        },

        {
            id: '23221414141423',
            nume: 'Craciun 2', 
            organizator: 'Organizator 2', 
            data: '25.12.2020',
            ora: '17:00',
            banner: '',
            descriere: 'lorem ipsum dolor sit amet',
            images: [],
            aprobat: true
        },

        {
            id: '23221414141426',
            nume: 'Craciun 3', 
            organizator: 'Organizator 2', 
            data: '25.12.2020',
            ora: '17:00',
            banner: '',
            descriere: 'lorem ipsum dolor sit amet',
            images: [],
            aprobat: false
        }
    ]
}

const eventReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'CREATE_EVENT':
            return state

        default:
            break;
    }

    return state
}

export default eventReducer