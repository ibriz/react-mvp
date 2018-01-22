# react-mvp

Steps to run the application
1) clone the repo
2) run 'npm install'
3) Copy the 'AcmeToken.json' from 'AcmeToken/build/contracts/AcmeToken.json' and paste it in folder 'react-mvp/src/config/' (overwrite). Note: this needs to be done everytime you deploy the contract. Also, you can just copy the content from the 'AcmeToken.json' and overwrite the content. Which ever is convenient.
4) Make sure meta mash is pointing to the test rpc. Code fallback: "http://localhost:8545" (can be changed in 'react-mvp/src/config/config', default_test_rpc)
4) run 'npm start'
5) Browser 'http://localhost:8080/'
