export const getLocalStorageData = () => {
    const storage = localStorage.getItem('jshero_paid_data');

    if (storage) {
        return JSON.parse(storage);
    }
    return [];
}

/* 
    [
        {
            uid: "asdf1f1sd65f4sd654fsd654f",
            courses : { df65s4df61, sd654fsd654f, sd65f4sd65, sd65f4sd654 }
        },
        {
            uid: "asgergegdffgsdgfsffsd654f",
            courses : { df65s4df61, sd65f4sd654 }
        }
    ]
*/

export const setLocalStorageData = (userId, courseID) => {
    // console.log(userId, courseID);
    let data = getLocalStorageData();

    const foundUser = data.find(element => element.uid === userId);
    if (foundUser) {
        const foundCourse = foundUser.courses.find(element => element === courseID);
        if (!foundCourse) {
            foundUser.courses.push(courseID);
        }
    }
    else {
        data.push({ uid: userId, courses: [courseID] });
    }

    localStorage.setItem('jshero_paid_data', JSON.stringify(data));
}


export const searchInLocalStorage = (userId, courseID) => {
    let data = getLocalStorageData();

    const foundUser = data.find(element => element.uid === userId);
    if (foundUser) {
        const foundCourse = foundUser.courses.find(element => element === courseID);
        if (foundCourse) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

