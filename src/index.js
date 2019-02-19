module.exports = {
    defaultAvatar: require('../assets/hengtai/avatar.png'),
    appBg: require('../assets/hengtai/bg.png'),
    theme: {
        appTopHeight: 50,
        shitYellow: '#cc9933',
        sixGray: '#666666',
        deepGray: '#412f06',
        lightGray: "#b7b7b7",
        lightYellow: '#f7d61e',
        forgivingGreen: '#48db8d',
        bloodRed: '#f71e1e',
        opacityWhite: 'rgba(255, 255, 255, .2)',
        textInput: {
            width: '80%',
            fontSize: 16,
            color: '#fff',
            marginBottom: 20,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 20,
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, .2)',
        },
        textInputDisable: {
            color: '#ccc',
            opacity: .9,
        }
    },

    apiUri: {
        getUserInfo: 'http://www.blyl1888.com/index.php/Api/User/getUserInfo',
        login: 'http://www.blyl1888.com/index.php/Api/User/login',
        userBuy: 'http://www.blyl1888.com/index.php/Api/Order/user_buy',
        getSpreadUri: 'http://www.blyl1888.com/index.php/Api/Index/getUrl',
        getUserFamily: 'http://www.blyl1888.com/index.php/Api/User/user_family',
        getTotalDetail: 'http://www.blyl1888.com/index.php/Api/User/myDeal',
        getMyOrder: 'http://www.blyl1888.com/index.php/Api/Order/user_deal',
        getDynamicIncome: 'http://www.blyl1888.com/index.php/Api/User/myBonus',
        getBuyHistory: 'http://www.blyl1888.com/index.php/Api/User/myDeal',
        getUserSale: 'http://www.blyl1888.com/index.php/Api/Order/user_sale',
        getTransfer: 'http://www.blyl1888.com/index.php/Api/User/transfer',
        getSaleList: 'http://www.blyl1888.com/index.php/Api/Order/saleList',
        getOutGame: 'http://www.blyl1888.com/index.php/Api/User/out_game',
    },
    code: {
        ERROR_SERVER: Symbol(),
        ERROR_NETWORK: Symbol(),
    }
}
