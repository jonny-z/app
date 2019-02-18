async function request(url, method, formData) {
    console.log('request: ' + url);
    try {
        let res = await fetch(url, {
            method,
            body: formData,
        })
        let resData = '';
        try {
            resData = await res.json();
        }
        catch(error){
            resData = await 'server error';
        }
        return resData;

    } catch (error) {
        console.error(error);
    }
}
async function getUserInfo (formData) {
    console.log('request user info');
    try {
        let res = await fetch('http://www.blyl1888.com/index.php/Api/User/getUserInfo', {
            method: 'POST',
            body: formData,
        })
        let resData = '';
        try {
            resData = await res.json();
        }
        catch(error){
            resData = await 'error';
        }
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
        console.log(resData);
        return resData;
    } catch (error) {
        console.error(error);
    }
}
async function getTotalDetail(formData) {
    try {
        let res = await fetch('http://www.blyl1888.com/index.php/Api/User/myDeal', {
            method: 'POST',
            body: formData,
        })
        let resData = await res.json();
        console.log(resData);
        return resData;
    } catch (error) {
        console.error(error);
    }
}
async function getMyOrder(formData) {
    try {
        let res = await fetch('http://www.blyl1888.com/index.php/Api/Order/user_deal', {
            method: 'POST',
            body: formData,
        })
        let resData = await res.json();
        console.log(resData);
        return resData;
    } catch (error) {
        console.error(error);
    }
}
async function getDynamicIncome(formData) {
    try {
        let res = await fetch('http://www.blyl1888.com/index.php/Api/User/myBonus', {
            method: 'POST',
            body: formData,
        })
        let resData = await res.json();
        console.log(resData);
        return resData;
    } catch (error) {
        console.error(error);
    }
}
export default {
    request,
    getUserInfo,
    requestLogin,
    getUserFamily,
    buy,
    getMyOrder,
    getTotalDetail,
    getDynamicIncome,
}
