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
async function buy (formData) {
    console.log('request buy');
    try {
        let res = await fetch('http://www.blyl1888.com/index.php/Api/Order/user_buy', {
            method: 'POST',
            body: formData,
        })
        let resData = await res.json();
        return resData;
    } catch (error) {
        console.error(error);
    }
}
async function getSpreadLink(formData) {
    console.log('request buy');
    try {
        let res = await fetch('http://www.blyl1888.com/index.php/Api/Index/getUrl', {
            method: 'POST',
            body: formData,
        })
        let resData = await res.json();
        return resData;
    } catch (error) {
        console.error(error);
    }
}
async function getUserFamily(formData) {
    console.log('request buy');
    try {
        let res = await fetch('http://www.blyl1888.com/index.php/Api/User/user_family', {
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
    getUserFamily,
    buy,
}
