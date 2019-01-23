'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const _0x_js_1 = require('0x.js');
// Network port to listen on
exports.HTTP_PORT = 3000;
// A time window after which the order is considered permanently expired
exports.ORDER_SHADOWING_MARGIN_MS = 100 * 1000; // tslint:disable-line custom-no-magic-numbers
// Frequency of checks for permanently expired orders
exports.PERMANENT_CLEANUP_INTERVAL_MS = 10 * 1000; // tslint:disable-line custom-no-magic-numbers
// Max number of entities per page
exports.MAX_PER_PAGE = 100;
// Default network id to use when not specified
exports.NETWORK_ID = 42;
// An array of fee recipients
exports.FEE_RECIPIENT = '0x4377e14dA11ec29d660F20A352e78325Ea5f6955'; //ACCOUNT 1 on mettamask
// A flat fee in ZRX that should be charged to the order maker
exports.MAKER_FEE_ZRX_UNIT_AMOUNT = new _0x_js_1.BigNumber(5);
// A flat fee in ZRX that should be charged to the order taker
exports.TAKER_FEE_ZRX_UNIT_AMOUNT = new _0x_js_1.BigNumber(5);
// Whitelisted token addresses. Set to a '*' instead of an array to allow all tokens.
exports.WHITELISTED_TOKENS = [
    '0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa', //ZRX
    '0xd0a1e359811322d97991e03f863a0c30c2cf029c', //WETH
    '0x8cb3971b8eb709c14616bd556ff6683019e90d9c', //REP
    '0x31fb614e223706f15d0d3c5f4b08bdf0d5c78623', //GNT
    '0x7b6b10caa9e8e9552ba72638ea5b47c25afea1f3', //MKR


];
// Ethereum RPC url
exports.RPC_URL = 'https://mainnet.infura.io';
// Default ERC20 token precision
exports.DEFAULT_ERC20_TOKEN_PRECISION = 18;
