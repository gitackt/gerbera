# Gothic Crypto

Gothicrypto is a cute gothic character trading dApps!

## Get Start

```
mkdir testnet
cd testnet
vi genesis.json
```

genesis.json
```
{
  "config": {
    "chainId": 15
  },
  "nonce": "0x0000000000000042",
  "timestamp": "0x0",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "extraData": "",
  "gasLimit": "0x8000000",
  "difficulty": "0x4000",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x3333333333333333333333333333333333333333",
  "alloc": {}
}
```

## Geth

* help
```
geth --h
```

* initialize
```
geth --datadir ~/testnet init ~/testnet/genesis.json
```

* server
```
geth --networkid "15" --nodiscover --datadir "~/testnet" console 2>> ~/testnet/geth_err.log --mine --minerthreads 2 --rpc --rpcport 8545 --rpcapi "web3,eth,net,personal" --rpccorsdomain "*" --rpcaddr "0.0.0.0"
```

* console
```
geth console 2>> /dev/null
```

### In console

* Show all accounts
```
eth.accounts
```

* Create EOA accounts
```
personal.newAccount("some_password")
```

* Coinbase
```
miner.setEtherbase(eth.accounts[0])
eth.coinbase
```

* Mining
```
miner.start(1)
eth.mining
miner.getHashrate()
miner.stop()
```

* Get ETH balance
```
eth.getBalance(eth.accounts[0])
```

* unlock
```
personal.unlockAccount(eth.accounts[0])
```

* Send ETH
```
eth.sendTransaction({from: "<address1>", to: "<address2>", value: web3.toWei(<ammounts>, "ether")})
```

## Truffle

* compile
```
truffle compile
```

* migrate
```
truffle migrate
```

## React

* install
```
cd client && yarn
```

* server
```
cd client && yarn start
```

* build
```
cd client && yarn build
```

## Wiki

* Set up 
http://kojiryo.com/762/

* Connect geth to metamask
http://pao2.hatenablog.com/entry/2018/07/11/014138
