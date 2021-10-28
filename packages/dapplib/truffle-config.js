require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name remember place honey inflict arctic army gaze'; 
let testAccounts = [
"0x323822603738c2e30a4889208f857d4279b955d775c4672cde0e20649059a88b",
"0xcb203ea3b9d437ffb752e74d77d7c5988b526334f543a6e53d53d970157a11ef",
"0xaae7c1084dffb5de20799589cd9d18dfaf4a3f8294e4a8950cb17cdb69a061f1",
"0xf4c6736bacbbdd183ebfe8f7f9ac7dfb3e8bb0e0429f747afc7c3162f1c143b0",
"0x2487a55a3ca84f8d6e325005237562a6df0e02f4ac3bb31db69b08968c3919e3",
"0x66ab6f4649bd992a56850808081f9f4a8812b53b42aa0b2cbab05643c2d418c2",
"0x344d4274add72918f4c1db96aec0a3dedf97a53b2dab5f0636b3da84906fa925",
"0xad6c4455c4f50e30657fc8ea6d848a38cf61cbd0fb17f10a5a7359f7c42d6f35",
"0xe3ce9b427dfae540f0da3b1c27c359b1f6680041ea2658186a57c5e58fafeb00",
"0xbe08ea21b22057bf10db59283487a1a16f8441a33ca8270d61140247a14e8b21"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

