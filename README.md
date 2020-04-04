#Big Fantastic/Fun/Friendly/Featureful Website 9000


btw, for fixing sharp installation thing
    // node --version 
    // if your version is >=10, than 
    // in package.json change sharp version to latest
    // you can find it here https://www.npmjs.com/package/sharp
    // ( if you use old node version, than you can change sharp version to an older one, 0.21.3 should do it) 
    sudo rm -rf node_modules package-lock.json
    sudo npm cache clean --force
    // maybe reset your pc, just to be sure
    sudo npm install --unsafe-perm=true