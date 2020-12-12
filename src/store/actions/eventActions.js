

export const createEvent = (event) => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        
        // async call to db
        const firestore = getFirestore()
        const firebaseStorage = getFirebase().storage().ref()

        console.log(firebaseStorage)

        firestore.collection('events').add({
            ...event,
            createdAt: new Date()
        
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