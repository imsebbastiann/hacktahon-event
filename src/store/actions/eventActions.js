

export const createEvent = (event) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        
        // async call to db
        const firestore = getFirestore()
        const slug = event.nume.toLowerCase().replace(/\s/g, '-')


        firestore.collection('events').add({
            ...event,
            slug: slug
        
        }).then(() => {        
            dispatch({
                type: 'CREATE_EVENT',
                event
            })
        }).catch((err) => {
            console.log(err)
        })
        
    }
}