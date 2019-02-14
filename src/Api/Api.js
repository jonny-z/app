async function getUserInfo (formData) {
    console.log('request user info');
    try {
        let res = await fetch('http://www.blyl1888.com/index.php/Api/User/getUserInfo', {
            method: 'POST',
            body: formData,
        })
        let resData = await res.json();
        return resData;
    } catch (error) {
        console.error(error);
    }
}
async function requestLogin (formData) {
    console.log('request login');
    try {
        let res = await fetch('http://www.blyl1888.com/index.php/Api/User/login', {
            method: 'POST',
            body: formData,
        })
        let resData = await res.json();
        return resData;
    } catch (error) {
        console.error(error);
    }
}

export default {
    getUserInfo,
    requestLogin,
}
