#Big Fantastic/Fun/Friendly/Featureful Website 9000


btw, for fixing sharp permission thing on ubuntu

    sudo npm install --unsafe-perm=true

if you have any trouble with sharp not beeing compatible with current node version, you can try deleting node_modules and package-lock.json and rewriting sharp version in package.json (put latest vertsion from npm)