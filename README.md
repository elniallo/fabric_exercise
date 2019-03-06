# Hyperledger Fabric Chaincode Written in Typescript
This is a simple exercise to deploy basic chaincode written in typescript to a hyperledger fabric blockchain environment

## Future Work
Use neon bindings to evaluate writing chaincode in rust

## Usage
Uses [fabric-samples](https://github.com/hyperledger/fabric-samples.git) basic network

- Step 1:
Clone fabric samples repo and configure as per the [docs](https://hyperledger-fabric.readthedocs.io/en/release-1.4/getting_started.html)
- Step 2: Clone this repo into a folder called "addDonation" in the chaincode directory of the fabric-samples folder
```
cd fabric-samples/chaincode
git clone https://github.com/elniallo/fabric_exercise addDonation
```
- Step 3: Build the chaincode
``` 
cd addDonation
npm i
npm run build
```

- Step 4: Move to the basic-basic network directory and start the basic network
```
cd ../../basic-network
./start.sh
docker-compose -f ./docker-compose.yml up -d cli
```
- Step 4: Install and Initialise the Chaincode on a Peer <br> Run the following commands:
```
docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" -e "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp" cli peer chaincode install -n addDonation -v 1.6 -p /opt/gopath/src/github.com/addDonation -l node

docker exec -e "CORE_PEER_LOCALMSPID=Org1MSP" -e "CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp" cli peer chaincode instantiate -o orderer.example.com:7050 -C mychannel -n addDonation -l node -v 1.6 -c '{"Args":[]}' -P "OR ('Org1MSP.member','Org2MSP.member')"
```

The chaincode is now installed and running on a peer

You can use this [rest service](https://github.com/elniallo/fabric_rest) to interact with it, or via the command line

