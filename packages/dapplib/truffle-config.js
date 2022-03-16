require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember history hidden entire front sense'; 
let testAccounts = [
"0x4861e2bbea41f7facb0baf8adf939982617a7c4356bc55aece3f0a86473582b6",
"0x7dcf37fb39ea910900f1b5648b24281ccb4f52c498796e7ad513a36f2a299f61",
"0x02ff0457aca0aafce06254dbd97a86dc05d09f0ff483ffe0a3873d7623c414e9",
"0xe7005aa3f1b69d7249bcf0c6d0aa8aab575545aac2674b794c253f6a036080ee",
"0xfb3f6de871a6e97d7463d1301724c17d65f1d93b57268b97299bbaad5fa0ba3e",
"0x4ac7b6072e3e6d895f0764e388eaabaa8c3654e74fdab8adec82ed8ddc49eee9",
"0x42da5ddf4f0588f773a20a3a64b05fda61bf826d641d1b214cd1afa3a31efbeb",
"0x086e4a27cde76ee71db99124df44f98fa28693a1cfd3240dde9e650ec40738ca",
"0x51e5066eb3746d0c9b018cab9302533f2e004f56135d30ded520aff138a25ce7",
"0xa235f2c8dae8cb65d5f28ddc7b99a163f7fcdcceed95b9bc3623ed9ec1d46e20"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

